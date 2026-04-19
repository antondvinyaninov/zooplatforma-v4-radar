"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Загружаем переменные окружения из .env в САМОМ начале, до импорта routes/db
dotenv_1.default.config();
const routes_1 = __importDefault(require("./apps/vk_post_app/routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Настраиваем CORS, чтобы фронтенд с localhost:5173 мог обращаться к API
app.use((0, cors_1.default)({ origin: '*' }));
const path_1 = __importDefault(require("path"));
// Для парсинга JSON
app.use(express_1.default.json());
// Раздаем статические файлы из папки uploads
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../uploads')));
// Подключаем наши маршруты для каждого мини-приложения
app.use('/api/vk_post_app', routes_1.default);
app.listen(PORT, () => {
    console.log(`🚀 Сервер успешно запущен на порту ${PORT}`);
    console.log(`📡 Ожидаем запросы на http://localhost:${PORT}/api/`);
});
