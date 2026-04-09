// Базовый URL нашего бэкенда для локальной разработки
const API_BASE_URL = 'http://localhost:3000/api/vk_post_app';

/**
 * Обертка над fetch для VK Mini Apps
 * Автоматически берет параметры запуска (строку window.location.search)
 * и добавляет её в заголовок Authorization для проверки подписи на бэкенде.
 */
export async function vkFetch(endpoint: string, options: RequestInit = {}) {
  // Получаем строку параметров запуска, которую передал нам ВКонтакте
  let launchParams = window.location.search.slice(1); // убираем '?' в начале

  // Если запускаем в браузере локально и в параметрах нет подписи (или параметров вообще нет)
  if (import.meta.env.MODE === 'development' && !launchParams.includes('sign=')) {
    const mockParams = 'vk_user_id=123456&vk_group_id=777&vk_app_id=111111&sign=test';
    launchParams = launchParams ? `${launchParams}&sign=test` : mockParams;
  }

  const headers = new Headers(options.headers || {});
  
  // Добавляем токен (строка запуска)
  headers.set('Authorization', `Bearer ${launchParams}`);
  
  if (!headers.has('Content-Type') && options.body && typeof options.body === 'string') {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.error || `API Request failed with status ${response.status}`);
  }

  return response.json();
}
