import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// Загружаем переменные окружения из .env в САМОМ начале, до импорта routes/db
dotenv.config();

import vkPostAppRoutes from './apps/vk_post_app/routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Настраиваем CORS, чтобы фронтенд с localhost:5173 мог обращаться к API
app.use(cors({ origin: '*' }));

import path from 'path';

// Для парсинга JSON
app.use(express.json());

// Раздаем статические файлы из папки uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Подключаем наши маршруты для каждого мини-приложения
app.use('/api/vk_post_app', vkPostAppRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Сервер успешно запущен на порту ${PORT}`);
  console.log(`📡 Ожидаем запросы на http://localhost:${PORT}/api/`);
});
