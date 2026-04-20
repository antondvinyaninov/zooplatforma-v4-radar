import { callVkApi } from '../../utils/vkApi';

// Кэш для хранения списков менеджеров сообществ
// Ключ: groupId, Значение: { managers: string[], expiresAt: number }
const managersCache = new Map<string, { managers: string[], expiresAt: number }>();

const CACHE_TTL = 5 * 60 * 1000; // 5 минут

export async function fetchCommunityManagers(groupId: string): Promise<string[]> {
  const now = Date.now();
  const cached = managersCache.get(groupId);

  if (cached && cached.expiresAt > now) {
    return cached.managers;
  }

  const serviceToken = process.env.VK_SERVICE_KEY || process.env.VK_GROUP_TOKEN;
  if (!serviceToken) {
    console.error('❌ No VK_SERVICE_KEY or VK_GROUP_TOKEN found in env');
    return [];
  }

  try {
    console.log(`🔍 Fetching managers for group ${groupId} from VK API...`);
    // API: groups.getMembers с фильтром managers возвращает список руководителей
    const result = await callVkApi('groups.getMembers', {
      group_id: groupId,
      filter: 'managers'
    }, serviceToken);

    // Извлекаем ID из массива объектов (или просто массив ID, зависит от версии API)
    // В 5.199+ filter=managers обычно возвращает список объектов с полем 'id' и 'role'
    const managers = (result.items || []).map((m: any) => String(m.id || m));
    
    managersCache.set(groupId, {
      managers,
      expiresAt: now + CACHE_TTL
    });

    console.log(`✅ Successfully fetched ${managers.length} managers for group ${groupId}`);
    return managers;
  } catch (error) {
    console.error(`❌ Failed to fetch managers for group ${groupId}:`, error);
    // В случае ошибки возвращаем пустой список или старый кэш, если он есть
    return cached?.managers || [];
  }
}

export async function verifyUserRole(userId: string | null, groupId: string | null): Promise<string> {
  if (!userId || !groupId) return 'none';

  try {
    const managers = await fetchCommunityManagers(groupId);
    if (managers.includes(userId)) {
      return 'admin';
    }
  } catch (err) {
    console.error('Error during role verification:', err);
  }

  return 'none';
}
