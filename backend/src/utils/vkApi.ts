import fs from 'fs';
import path from 'path';

const VK_API_VERSION = '5.199';

export async function callVkApi(method: string, params: Record<string, string | number>, token: string) {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  }
  searchParams.append('v', VK_API_VERSION);
  searchParams.append('lang', 'ru');
  searchParams.append('access_token', token);
  
  const url = `https://api.vk.com/method/${method}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: searchParams.toString()
  });

  const data = await response.json();
  if (data.error) {
    throw new Error(`VK API Error [${method}]: ${data.error.error_msg}`);
  }
  return data.response;
}

export async function publishVkPost(
  groupId: string, 
  token: string, 
  message: string, 
  localMediaPaths: string[], 
  publishDate?: Date
) {
  const attachments: string[] = [];

  for (const mediaPath of localMediaPaths) {
    try {
      // 1. Получаем сервер для загрузки
      const uploadServer = await callVkApi('photos.getWallUploadServer', { group_id: groupId }, token);
      
      // 2. Формируем Blob для загрузки
      const fullPath = path.resolve(mediaPath);
      if (!fs.existsSync(fullPath)) {
        console.error(`File not found: ${fullPath}`);
        continue;
      }
      
      const buffer = fs.readFileSync(fullPath);
      const ext = path.extname(fullPath).toLowerCase();
      let mimeType = 'image/jpeg';
      if (ext === '.png') mimeType = 'image/png';
      else if (ext === '.gif') mimeType = 'image/gif';
      else if (['.mp4', '.mov'].includes(ext)) {
        console.warn('Video uploading requires a different VK method (video.save). Skipping for now.');
        continue;
      }

      const blob = new Blob([buffer], { type: mimeType });
      const formData = new FormData();
      formData.append('file1', blob, `upload${ext}`);

      // 3. Загружаем на сервер
      const uploadResponse = await fetch(uploadServer.upload_url, {
        method: 'POST',
        body: formData
      });
      const uploadData = await uploadResponse.json() as any;

      if (!uploadData.server || !uploadData.photo || !uploadData.hash) {
        throw new Error('Failed to upload photo to VK server');
      }

      // 4. Сохраняем фотографию на сервере ВКонтакте
      const savedPhoto = await callVkApi('photos.saveWallPhoto', {
        group_id: groupId,
        server: uploadData.server,
        photo: uploadData.photo,
        hash: uploadData.hash
      }, token);

      if (savedPhoto && savedPhoto.length > 0) {
        attachments.push(`photo${savedPhoto[0].owner_id}_${savedPhoto[0].id}`);
      }
    } catch (e) {
      console.error(`Error processing media ${mediaPath}:`, e);
    }
  }

  // 5. Публикуем запись
  const postParams: Record<string, string | number> = {
    owner_id: `-${groupId}`,
    from_group: 1,
    message: message,
    attachments: attachments.join(',')
  };

  if (publishDate) {
    postParams.publish_date = Math.floor(publishDate.getTime() / 1000);
  }

  const postResult = await callVkApi('wall.post', postParams, token);
  return postResult.post_id;
}

export async function searchVkCities(query: string, serviceToken: string) {
  const result = await callVkApi('database.getCities', {
    country_id: 1, // Russia id by default for VK
    q: query,
    need_all: 1, // 1 to return all cities, including villages and settlements
    count: 20
  }, serviceToken);
  return result;
}
