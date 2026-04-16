import { Router } from 'express';
import { validateVkSignature } from '../../shared/middleware/vkAuth';
import { prisma } from '../../shared/db';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { publishVkPost, searchVkCities, callVkApi } from '../../utils/vkApi';

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // __dirname is backend/src/apps/vk_post_app
    const uploadPath = path.join(__dirname, '../../../uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'media-' + uniqueSuffix + ext);
  }
});
const upload = multer({ storage });

// Пример открытого endpoint (не требует подписи)
router.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Middleware для всех последующих роутов
router.use(validateVkSignature);

// Protected endpoint
router.get('/hello', (req, res) => {
  res.json({ 
    message: 'Приветствую, валидный пользователь ВКонтакте!',
    userId: req.body.vk_user_id || req.query.vk_user_id
  });
});

// Получить ленту всех одобренных постов
router.get('/posts', async (req, res) => {
  try {
    const groupId = req.query.vk_group_id || req.body.vk_group_id;
    if (!groupId) return res.status(400).json({ error: 'Missing vk_group_id' });

    const posts = await prisma.post.findMany({
      where: { status: 'approved', groupId: String(groupId) },
      orderBy: { createdAt: 'desc' },
      take: 50,
      include: { author: true }
    });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Получить только свои объявления
router.get('/posts/my', async (req, res) => {
  try {
    const vkIdString = req.body.vk_user_id || req.query.vk_user_id;
    const groupId = req.query.vk_group_id || req.body.vk_group_id;
    if (!vkIdString || !groupId) return res.status(401).json({ error: 'No user ID or group ID' });
    
    const user = await prisma.user.findUnique({ where: { vkId: String(vkIdString) } });
    if (!user) return res.json([]);

    const posts = await prisma.post.findMany({
      where: { authorId: user.id, groupId: String(groupId) },
      orderBy: { createdAt: 'desc' },
      include: { author: true }
    });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch my posts' });
  }
});

// Получить очередь модерации (для админов)
router.get('/posts/moderation', async (req, res) => {
  try {
    const groupId = req.query.vk_group_id || req.body.vk_group_id;
    if (!groupId) return res.status(400).json({ error: 'Missing vk_group_id' });

    const statusFilter = req.query.status as string || 'pending';

    // В реальном приложении здесь должна быть проверка роли администратора
    const posts = await prisma.post.findMany({
      where: { status: statusFilter, groupId: String(groupId) },
      orderBy: { createdAt: 'asc' },
      include: { author: true }
    });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch moderation queue' });
  }
});

// Обновить текст и тег поста
router.patch('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { content, tag } = req.body;
    
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: { content, tag },
      include: { author: true }
    });
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update post' });
  }
});

// Свапнуть время публикации двух постов (для Drag and Drop)
router.patch('/posts/swap-time', async (req, res) => {
  try {
    const { activeId, overId } = req.body;
    if (!activeId || !overId) {
      return res.status(400).json({ error: 'Missing activeId or overId' });
    }

    const post1 = await prisma.post.findUnique({ where: { id: parseInt(activeId) } });
    const post2 = await prisma.post.findUnique({ where: { id: parseInt(overId) } });

    if (!post1 || !post2) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Меняем publishDate (и createdAt как фоллбэк порядок) местами
    await prisma.$transaction([
      prisma.post.update({
        where: { id: post1.id },
        data: { 
          publishDate: post2.publishDate,
          createdAt: post2.createdAt // Свапаем и createdAt, так как сортировка по нему
        }
      }),
      prisma.post.update({
        where: { id: post2.id },
        data: { 
          publishDate: post1.publishDate,
          createdAt: post1.createdAt
        }
      })
    ]);

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to swap dates' });
  }
});

// Расчет следующего свободного слота
async function getNextAvailableSlot(communityId: string) {
  const community = await prisma.community.findUnique({ where: { id: communityId } });
  if (!community) return new Date();

  const intervalMinutes = community.scheduleIntervalMinutes || 60;
  const startParts = community.scheduleStartTime.split(':').map(Number);
  const endParts = community.scheduleEndTime.split(':').map(Number);

  const startMinutes = startParts[0] * 60 + startParts[1];
  const endMinutes = endParts[0] * 60 + endParts[1];

  const now = new Date();
  
  // Создаем будущие слоты на 14 дней вперед
  const availableSlots: number[] = [];
  for (let i = 0; i < 14; i++) {
    const slotDate = new Date();
    slotDate.setDate(now.getDate() + i);
    slotDate.setHours(0, 0, 0, 0);
    
    for (let currentMinutes = startMinutes; currentMinutes <= endMinutes; currentMinutes += intervalMinutes) {
      const slotTime = new Date(slotDate.getTime() + currentMinutes * 60000);
      if (slotTime > now) {
        availableSlots.push(slotTime.getTime());
      }
    }
  }

  // Получаем занятые слоты
  const occupiedPosts = await prisma.post.findMany({
    where: { groupId: communityId, status: { in: ['approved', 'published'] }, publishDate: { not: null } },
    select: { publishDate: true }
  });
  
  // Допуск ±5 минут для учета погрешностей
  const isOccupied = (slotTime: number) => {
    return occupiedPosts.some(p => Math.abs(p.publishDate!.getTime() - slotTime) < + 300000);
  };

  for (const slot of availableSlots) {
    if (!isOccupied(slot)) return new Date(slot);
  }

  return new Date(); // fallback
}

// Изменить статус поста (модерация)
router.patch('/posts/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status, publishDate } = req.body;
    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    let targetPublishDate = publishDate ? new Date(publishDate) : null;
    
    // Auto-slotting 
    const currentPost = await prisma.post.findUnique({ where: { id: Number(id) } });
    if (status === 'approved' && !targetPublishDate && currentPost?.groupId) {
       targetPublishDate = await getNextAvailableSlot(currentPost.groupId);
    }

    let post = await prisma.post.update({
      where: { id: Number(id) },
      data: { 
        status, 
        ...(status !== 'rejected' && targetPublishDate ? { publishDate: targetPublishDate } : {})
      },
      include: { author: true }
    });

    const community = post.groupId ? await prisma.community.findUnique({ where: { id: post.groupId } }) : null;

    if (status === 'approved' && community?.accessToken) {
      try {
        let mediaArr: any[] = [];
        if (typeof post.media === 'string') {
          mediaArr = JSON.parse(post.media);
        } else if (Array.isArray(post.media)) {
          mediaArr = post.media;
        }

        const localPaths = mediaArr.map((m: any) => {
          const filename = m.url.split('/').pop();
          return path.join(__dirname, '../../../uploads', filename);
        });

        // Формируем текст поста
        let finalContent = `${post.content}`;

        if (post.tag) {
          finalContent = `#${post.tag} | ${finalContent}`;
        }

        finalContent += `\n\nПредложил: @id${post.author.vkId}`;

        if (post.chatLink) {
          finalContent += `\n💬 Чат: ${post.chatLink}`;
        }
        if (community?.dutyAdminId) {
          finalContent += `\nПо вопросам: @id${community.dutyAdminId}`;
        }
        if (post.cityName) {
          finalContent += `\n#${post.cityName.replace(/\s+/g, '')}`;
          if (post.regionName) finalContent += ` (${post.regionName})`;
        } else if (community?.cityName) {
          finalContent += `\n#${community.cityName.replace(/\s+/g, '')}`;
          if (community?.regionName) finalContent += ` (${community.regionName})`;
        }

        finalContent += `\n#объявление${post.id}`;

        const vkPostId = await publishVkPost(
          community.id,
          community.accessToken,
          finalContent,
          localPaths,
          post.publishDate || undefined
        );

        if (vkPostId) {
          post = await prisma.post.update({
            where: { id: post.id },
            data: { vkPostId: String(vkPostId) },
            include: { author: true }
          });
        }
      } catch (vkError) {
        console.error(`VK Post failed for group ${community?.id}:`, vkError);
      }
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update post status' });
  }
});

// Добавить токен сообщества
router.post('/community/token', async (req, res) => {
  const { groupId, accessToken } = req.body;
  if (!groupId || !accessToken) {
    return res.status(400).json({ error: 'Missing groupId or accessToken' });
  }

  try {
    const community = await prisma.community.upsert({
      where: { id: String(groupId) },
      update: { accessToken },
      create: { id: String(groupId), accessToken }
    });
    res.json({ success: true, communityId: community.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update community token' });
  }
});

// Обновить данные сообщества (город, админ, уведомления, кросс-постинг, теги)
router.patch('/community/:id', async (req, res) => {
  const { id } = req.params;
  const { cityId, cityName, regionName, dutyAdminId, notifyAdminIds, acceptCrossPosts, acceptedTags, scheduleIntervalMinutes, scheduleStartTime, scheduleEndTime } = req.body;

  try {
    let name = req.body.name;
    let avatarUrl = req.body.avatarUrl;

    // Автоматически подтягиваем название и аватар группы из ВКонтакте
    // Используем сервисный ключ (не требует прав группы) или глобальный токен
    const token = process.env.VK_SERVICE_KEY || process.env.VK_MAIN_GROUP_TOKEN || process.env.VK_GROUP_TOKEN;
    if (token) {
      try {
        const info = await callVkApi('groups.getById', { group_id: id }, token);
        if (info && info[0]) {
          name = info[0].name;
          avatarUrl = info[0].photo_50;
        }
      } catch (e) { console.error('Failed to fetch group info:', e); }
    }

    const data: any = { cityId, cityName, regionName, dutyAdminId, notifyAdminIds, acceptCrossPosts, name, avatarUrl, acceptedTags, scheduleIntervalMinutes, scheduleStartTime, scheduleEndTime };
    const community = await prisma.community.upsert({
      where: { id: String(id) },
      update: data,
      create: {
        id: String(id),
        accessToken: "", // Will be filled later or might cause issues if required for posting, but allows settings save
        ...data
      }
    });
    res.json(community);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update community details' });
  }
});

// Прокси к database.getCities
router.get('/utils/cities', async (req, res) => {
  const q = req.query.q as string;
  if (!q) return res.json({ items: [] });
  
  if (!process.env.VK_SERVICE_KEY) {
    return res.status(500).json({ error: 'VK_SERVICE_KEY not configured' });
  }

  try {
    const vkResult = await searchVkCities(q, process.env.VK_SERVICE_KEY);
    res.json(vkResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch cities' });
  }
});

// Сокращение ссылок через vk.cc
router.post('/utils/shorten', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'No URL provided' });

  const serviceToken = process.env.VK_SERVICE_KEY || process.env.VK_GROUP_TOKEN;
  if (!serviceToken) return res.status(500).json({ error: 'No service token' });

  try {
    const vkResult = await callVkApi('utils.getShortLink', { url, private: 1 }, serviceToken);
    res.json({ short_url: vkResult.short_url });
  } catch (error) {
    console.error('Failed to shorten url:', error);
    res.status(500).json({ error: 'Failed to shorten url' });
  }
});

// Найти все партнерские группы в конкретном городе
router.get('/community/city/:cityId', async (req, res) => {
  const { cityId } = req.params;
  try {
    const communities = await prisma.community.findMany({
      where: { 
        cityId: Number(cityId),
        acceptCrossPosts: true
      },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        acceptedTags: true
      }
    });
    res.json(communities);
  } catch (error) {
    console.error('Failed to fetch city communities:', error);
    res.status(500).json({ error: 'Failed to fetch city communities' });
  }
});

// Получить список менеджеров (админов) сообщества и текущие настройки
router.get('/community/:id/managers', async (req, res) => {
  const { id } = req.params;
  const vkUserId = req.query.vk_user_id || req.body.vk_user_id;

  try {
    const community = await prisma.community.findUnique({ where: { id: String(id) } });
    
    // Собираем ID текущего админа + тех, кто уже есть в базе уведомлений
    const knownAdminIds = new Set<string>();
    if (vkUserId) knownAdminIds.add(String(vkUserId));
    if (community && community.notifyAdminIds) {
      community.notifyAdminIds.forEach(adminId => knownAdminIds.add(String(adminId)));
    }
    
    let items: any[] = [];
    
    // Если есть хотя бы один ID, получаем их красивые имена и аватарки через users.get
    if (knownAdminIds.size > 0) {
      const serviceToken = process.env.VK_SERVICE_KEY || process.env.VK_GROUP_TOKEN;
      if (serviceToken) {
        try {
          const vkResult = await callVkApi('users.get', {
            user_ids: Array.from(knownAdminIds).join(','),
            fields: 'photo_50'
          }, serviceToken);
          items = vkResult || [];
        } catch (e) {
          console.error('Failed to fetch user profiles for managers list', e);
        }
      }
    }

    res.json({ items, community });
  } catch (error) {
    console.error('Failed to fetch managers:', error);
    res.status(500).json({ error: 'Failed to fetch managers' });
  }
});

// Создать новый пост
router.post('/posts', async (req, res) => {
  // Вытаскиваем ID пользователя, который middleware положил в body/query
  const vkIdString = req.body.vk_user_id || req.query.vk_user_id;
  const originalGroupId = req.body.vk_group_id || req.query.vk_group_id;
  const { content, tag, media, cityId, cityName, regionName, groupIds, chatLink } = req.body;

  if (!vkIdString || !content || !originalGroupId) {
    return res.status(400).json({ error: 'Missing req fields' });
  }

  const vkId = String(vkIdString);

  try {
    // 1. Убеждаемся, что юзер существует в БД (создаем, если нет)
    let user = await prisma.user.findUnique({ where: { vkId } });
    if (!user) user = await prisma.user.create({ data: { vkId } });

    // Определяем список групп для публикации (Кросс-постинг)
    const targetGroups = (Array.isArray(groupIds) && groupIds.length > 0) ? groupIds : [originalGroupId];
    const createdPosts = [];

    // Создаем копию поста для каждой группы
    for (const gId of targetGroups) {
      // 1.5 Гарантируем, что сообщество существует в БД
      await prisma.community.upsert({
        where: { id: String(gId) },
        update: {},
        create: { id: String(gId), accessToken: '' }
      });

      // 2. Создаем пост и привязываем к юзеру и группе (с гео-меткой)
      const newPost = await prisma.post.create({
        data: {
          content,
          tag: tag || null,
          media: media || [],
          cityId: cityId || null,
          cityName: cityName || null,
          regionName: regionName || null,
          chatLink: chatLink || null,
          groupId: String(gId),
          authorId: user.id
        },
        include: { author: true }
      });
      createdPosts.push(newPost);

      // 3. Отправляем уведомления админам *текущей* группы в цикле
      try {
        const community = await prisma.community.findUnique({
          where: { id: String(gId) }
        });
        const notifyIds = community?.notifyAdminIds;
        if (notifyIds && notifyIds.length > 0) {
          // Используем токен конкретной группы — только она имеет право отправлять сообщения от своего имени
          const token = community?.accessToken || process.env.VK_MAIN_GROUP_TOKEN || process.env.VK_GROUP_TOKEN;
          if (token) {
            const serviceToken = process.env.VK_SERVICE_KEY || process.env.VK_MAIN_GROUP_TOKEN || process.env.VK_GROUP_TOKEN;
            const groupInfo = serviceToken ? await callVkApi('groups.getById', { group_id: gId }, serviceToken).catch(() => null) : null;
            const groupName = groupInfo?.[0]?.name || `сообщество #${gId}`;

            await callVkApi('messages.send', {
              user_ids: notifyIds.join(','),
              message: `🐾 В сообществе "${groupName}" предложена новая запись!\n` +
                       `Текст: ${content.substring(0, 100)}${content.length > 100 ? '...' : ''}\n\n` +
                       `Автор: @id${vkId}\n` +
                       `👉 Ссылка на модерацию: https://vk.com/app54490430_-${gId}#moderation`,
              random_id: Math.floor(Math.random() * 1e9)
            }, token);
          }
        }
      } catch (notifyErr) {
        console.error(`Не удалось отправить уведомления для группы ${gId}:`, notifyErr);
      }
    }

    // Возвращаем фронтенду тот экземпляр поста, который относится к текущей группе пользователя
    const primaryPost = createdPosts.find(p => p.groupId === String(originalGroupId)) || createdPosts[0];
    res.json(primaryPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// Загрузить медиафайлы
router.post('/upload', upload.array('media', 10), (req, res) => {
  const files = req.files as Express.Multer.File[];
  if (!files || files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded' });
  }
  
  const results = files.map(file => ({
    url: `http://localhost:3000/uploads/${file.filename}`,
    type: file.mimetype.startsWith('image') ? 'image' : 'video'
  }));
  
  res.json(results);
});

export default router;
