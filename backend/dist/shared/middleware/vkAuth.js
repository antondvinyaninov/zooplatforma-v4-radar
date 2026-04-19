"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateVkSignature = void 0;
const crypto_1 = __importDefault(require("crypto"));
const validateVkSignature = (req, res, next) => {
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
            if (!req.body)
                req.body = {};
            req.body.vk_user_id = params.get('vk_user_id');
            req.body.vk_group_id = params.get('vk_group_id');
            req.body.vk_viewer_role = params.get('vk_viewer_role') || 'admin'; // В деве считаем админом
            // Дублируем в req properties для безопасности
            req.vk_user_id = req.body.vk_user_id;
            req.vk_group_id = req.body.vk_group_id;
            req.vk_viewer_role = req.body.vk_viewer_role;
            return next();
        }
        // Алгоритм проверки подписи ВКонтакте
        const urlParams = new URLSearchParams(launchUrl);
        const sign = urlParams.get('sign');
        if (!sign) {
            return res.status(401).json({ error: 'Unauthorized: signature not found.' });
        }
        const queryParams = {};
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
        const hash = crypto_1.default
            .createHmac('sha256', VK_APP_SECRET)
            .update(signString)
            .digest('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=$/g, '');
        // Сравниваем вычисленную подпись с переданной
        // (Разрешаем 'test' для локальной разработки, чтобы фронтенд мог мокать запросы)
        // Сравниваем вычисленную подпись с переданной
        // (Разрешаем 'test' для локальной разработки, чтобы фронтенд мог мокать запросы)
        if (hash === sign || sign === 'test') {
            const userId = urlParams.get('vk_user_id');
            const groupId = urlParams.get('vk_group_id');
            const role = urlParams.get('vk_viewer_role');
            // Безопасно сохраняем данные в объект запроса
            req.vk_user_id = userId;
            req.vk_group_id = groupId;
            req.vk_viewer_role = role;
            // Дублируем в body для совместимости с существующей логикой контроллеров
            if (!req.body)
                req.body = {};
            if (req.body && typeof req.body === 'object') {
                req.body.vk_user_id = userId;
                req.body.vk_group_id = groupId;
                req.body.vk_viewer_role = role;
            }
            return next();
        }
        else {
            return res.status(403).json({ error: 'Forbidden: Invalid signature.' });
        }
    }
    catch (error) {
        console.error('Ошибка при валидации токена:', error);
        return res.status(500).json({
            error: 'Internal Server Error (Auth Middleware)',
            details: error instanceof Error ? error.message : String(error)
        });
    }
};
exports.validateVkSignature = validateVkSignature;
