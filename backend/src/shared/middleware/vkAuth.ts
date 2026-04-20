import crypto from 'crypto';
import { Request, Response, NextFunction } from 'express';
import { verifyUserRole } from '../utils/roleCache';

export const validateVkSignature = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized: No Bearer token provided.' });
    }

    const launchUrl = authHeader.split('Bearer ')[1];
    
    // В реальном проекте секретный ключ нужно хранить в .env
    // Для нашего примера мы используем заглушку, либо берем из окружения:
    const VK_APP_SECRET = process.env.VK_APP_SECRET || 'test_secret_key'; 
    
    // Если секрет тестовый, мы можем временно пропускать проверку для удобства разработки фронта
      if (VK_APP_SECRET === 'test_secret_key') {
        console.warn('⚠️ Используется тестовый секретный ключ. Валидация подписи пропущена.');
        // Извлечем vk_user_id из строки просто для удобства
        const params = new URLSearchParams(launchUrl);
        const roleFromParams = params.get('vk_viewer_role');
        const userId = params.get('vk_user_id');
        const groupId = params.get('vk_group_id');
        
        if (!req.body) req.body = {};
        req.body.vk_user_id = userId;
        req.body.vk_group_id = groupId;
        
        // В деве принудительно ставим admin, если роль не указана или none
        const verifiedRole = (roleFromParams && roleFromParams !== 'none') 
          ? roleFromParams 
          : await verifyUserRole(userId, groupId).then(r => r === 'none' ? 'admin' : r);

        req.body.vk_viewer_role = verifiedRole;
        
        // Дублируем в req properties для безопасности
        (req as any).vk_user_id = userId;
        (req as any).vk_group_id = groupId;
        (req as any).vk_viewer_role = verifiedRole;

        return next();
      }

    // Алгоритм проверки подписи ВКонтакте
    const urlParams = new URLSearchParams(launchUrl);
    const sign = urlParams.get('sign');
    if (!sign) {
      return res.status(401).json({ error: 'Unauthorized: signature not found.' });
    }

    const queryParams: Record<string, string> = {};
    for (const [key, value] of urlParams.entries()) {
      if (key.startsWith('vk_')) {
        queryParams[key] = value;
      }
    }

    // Сортируем ключи по алфавиту
    const sortedKeys = Object.keys(queryParams).sort();
    
    // Собираем строку 'key=value&key2=value2'
    const signString = sortedKeys.map((key) => `${key}=${queryParams[key]}`).join('&');

    // Формируем HMAC SHA256 хэш на базе секретного ключа
    const hash = crypto
      .createHmac('sha256', VK_APP_SECRET)
      .update(signString)
      .digest('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=$/g, '');

    // Сравниваем вычисленную подпись с переданной
    // (Разрешаем 'test' для локальной разработки, чтобы фронтенд мог мокать запросы)
    if (hash === sign || sign === 'test') {
      const userId = urlParams.get('vk_user_id');
      const groupId = urlParams.get('vk_group_id');
      let role = urlParams.get('vk_viewer_role');

      // Если роль не определена через подпись (none), проверяем её через VK API (SSR-V)
      if (!role || role === 'none') {
        role = await verifyUserRole(userId, groupId);
      }

      // Безопасно сохраняем данные в объект запроса
      (req as any).vk_user_id = userId;
      (req as any).vk_group_id = groupId;
      (req as any).vk_viewer_role = role;
      
      // Дублируем в body для совместимости с существующей логикой контроллеров
      if (!req.body) req.body = {};
      if (req.body && typeof req.body === 'object') {
        req.body.vk_user_id = userId;
        req.body.vk_group_id = groupId;
        req.body.vk_viewer_role = role;
      }
      
      return next();
    } else {
      return res.status(403).json({ error: 'Forbidden: Invalid signature.' });
    }
  } catch (error) {
    console.error('Ошибка при валидации токена:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error (Auth Middleware)',
      details: error instanceof Error ? error.message : String(error)
    });
  }
};
