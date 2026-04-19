# Убитый и проверенный Dockerfile для Easypanel (Монорепозиторий: Vite + Node.js)

# Сборка фронтенда (React/Vite)
FROM node:20-alpine AS build-frontend
WORKDIR /app
COPY vk_radar_app/package*.json ./
RUN npm ci --legacy-peer-deps
COPY vk_radar_app/ ./
RUN npm run build

# Сборка бэкенда (Express)
FROM node:20-alpine AS build-backend
WORKDIR /app
# Устанавливаем openssl для Prisma
RUN apk add --update --no-cache openssl
COPY backend/package*.json ./
RUN npm ci
COPY backend/prisma ./prisma
# Генерируем клиент Prisma
RUN npx prisma generate
COPY backend/ ./
# Билдим бэкенд (TypeScript)
RUN npm run build

# Итоговый легковесный образ с бэкендом и статикой фронтенда
FROM node:20-alpine
WORKDIR /app

RUN apk add --update --no-cache openssl

# Копируем результаты сборки бэкенда
COPY --from=build-backend /app/package*.json ./
COPY --from=build-backend /app/node_modules ./node_modules
COPY --from=build-backend /app/dist ./dist
COPY --from=build-backend /app/prisma ./prisma

# Важно: копируем Prisma клиент, чтобы избежать ошибки "Client not found"
COPY --from=build-backend /app/src/generated ./src/generated

# Копируем собранный фронтенд в директорию public_frontend, 
# откуда его будет раздавать наш Express сервер (настроено в src/index.ts)
COPY --from=build-frontend /app/dist ./public_frontend

# Устанавливаем переменные окружения
ENV NODE_ENV=production
ENV PORT=3000

# Создаем папку для загрузок, чтобы multer не падал с ошибкой
RUN mkdir -p uploads && chown node:node uploads
RUN chown -R node:node /app

USER node
EXPOSE 3000

# Для старта в Easypanel мы обычно прогоняем миграции (или db push) и запускаем сервер.
# Если база управляется отдельно, db push синхронизирует схему.
CMD ["sh", "-c", "npx prisma db push --accept-data-loss && node dist/index.js"]
