# Черновик migration/spec для интеграции VK mini app с `3.0`

## Назначение документа
Этот документ описывает целевую схему и migration-подход для безопасного объединения:

- основного сайта ZooPlatform `3.0`;
- VK mini app из `vk-mini-app_full`.

Документ не является миграцией, которую нужно запускать как есть.  
Это **черновик спецификации**, на основе которой потом можно:

1. подготовить реальные миграции в репозитории `3.0`;
2. адаптировать backend mini app;
3. перевести VK mini app на общую модель пользователя и организации.

---

## Цель

Сделать так, чтобы:

- `3.0` оставалась хозяином core-данных;
- VK mini app использовала общую таблицу `users`;
- VK-специфичные данные не ломали и не засоряли core-модель;
- переход происходил поэтапно и без поломки работающего сайта.

---

## Базовые принципы

### 1. `3.0` — source of truth

Канонические таблицы:

- `users`
- `organizations`
- `organization_members`
- `posts`
- `user_media`

VK mini app не должна владеть схемой этих таблиц.

### 2. VK-specific логика хранится в extension-таблицах

То, что относится только к mini app, должно жить рядом, но отдельно:

- настройки пользователя для радара;
- VK-конфиг организации;
- VK-публикации постов;
- радар-пины.

### 3. На первом этапе объединяем identity, а не web session

То есть:

- mini app продолжает аутентифицировать пользователя по VK launch params;
- после валидации подписи резолвит пользователя в `3.0.users`;
- не пытается сразу стать хозяином cookie/JWT-контуров основного сайта.

---

## Что уже есть в `3.0`, и что используем как core

### Таблица `users`

Используется как канонический профиль.

Важные уже существующие поля:

- `id`
- `name`
- `last_name`
- `email`
- `password_hash`
- `bio`
- `phone`
- `location`
- `avatar`
- `cover_photo`
- `profile_visibility`
- `show_phone`
- `show_email`
- `allow_messages`
- `show_online`
- `verified`
- `verified_at`
- `last_seen`
- `vk_id`
- `vk_access_token`

### Таблица `organizations`

Используется как каноническая модель организации.

Важные уже существующие поля:

- `id`
- `name`
- `type`
- `bio`
- `logo`
- `cover_photo`
- `phone`
- `email`
- `city`
- `region`
- `geo_lat`
- `geo_lon`
- `is_verified`
- `owner_user_id`
- `profile_visibility`
- `show_phone`
- `show_email`
- `allow_messages`
- `vk_link`

### Таблица `organization_members`

Используется как канонический membership / role-layer.

Важные поля:

- `organization_id`
- `user_id`
- `role`
- `position`
- `can_post`
- `permissions`
- `is_public`

### Таблица `posts`

Используется как общий content-layer.

Важные поля:

- `id`
- `author_id`
- `author_type`
- `content`
- `media_urls`
- `attachments`
- `tags`
- `status`
- `scheduled_at`
- `location_lat`
- `location_lon`
- `location_name`

### Таблица `user_media`

Используется как канонический media-layer.

Важные поля:

- `user_id`
- `file_name`
- `original_name`
- `file_path`
- `media_type`
- `mime_type`
- `width`
- `height`
- `duration`

---

## Что НЕ нужно дублировать в VK mini app

Не нужно создавать свою отдельную каноническую user-модель для:

- имени;
- фамилии;
- bio;
- телефона;
- основной локации;
- аватара;
- обложки;
- приватности;
- верификации;
- привязки `vk_id`.

Всё это уже должно читаться из `3.0.users`.

---

## Что должно стать extension-слоем

Ниже — конкретные таблицы, которые стоит добавлять в `3.0` как расширение для VK mini app.

---

## 1. `vk_app_user_settings`

### Зачем нужна

Текущая mini app уже хранит несколько полей, которые не являются общим профилем ZooPlatform:

- домашняя точка радара;
- Telegram-контакт;
- предпочтения;
- локальная роль/ярлык внутри mini app.

Такие данные не стоит смешивать с `users`.

### Предлагаемая структура

```sql
CREATE TABLE IF NOT EXISTS vk_app_user_settings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    role_label TEXT,
    contact_telegram TEXT,
    home_city_name TEXT,
    home_lat NUMERIC(10, 8),
    home_lng NUMERIC(11, 8),
    preferences JSONB NOT NULL DEFAULT '[]'::jsonb,
    onboarding_progress INTEGER NOT NULL DEFAULT 0,
    onboarding_completed BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Что туда маппится из текущей mini app

- `roleLabel` -> `role_label`
- `contactTelegram` -> `contact_telegram`
- `homeCityName` -> `home_city_name`
- `homeLat` -> `home_lat`
- `homeLng` -> `home_lng`
- `preferences` -> `preferences`

### Что туда НЕ надо класть

- `bio`
- `contactPhone`
- `contactEmail`
- `avatar`
- `verified`
- `name`

Это всё должно идти из `users`.

---

## 2. `organization_vk_settings`

### Зачем нужна

`organizations` уже покрывает профиль организации, но не покрывает чисто VK-специфичные поля:

- ID группы;
- access token группы;
- расписание публикаций;
- флаг cross-posting;
- duty admin;
- accepted tags.

### Предлагаемая структура

```sql
CREATE TABLE IF NOT EXISTS organization_vk_settings (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL UNIQUE REFERENCES organizations(id) ON DELETE CASCADE,
    vk_group_id BIGINT NOT NULL UNIQUE,
    access_token TEXT NOT NULL,
    accept_cross_posts BOOLEAN NOT NULL DEFAULT FALSE,
    accepted_tags JSONB NOT NULL DEFAULT '[]'::jsonb,
    schedule_interval_minutes INTEGER NOT NULL DEFAULT 60,
    schedule_start_time TEXT NOT NULL DEFAULT '09:00',
    schedule_end_time TEXT NOT NULL DEFAULT '21:00',
    duty_admin_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Примечание по `access_token`

`access_token` лучше хранить:

- как минимум вне API-ответов;
- желательно с отдельной стратегией шифрования/секрет-хранилища;
- не раздавать фронтенду ни при каких условиях.

---

## 3. `organization_vk_notification_admins`

### Зачем нужна

В текущей mini app есть `notifyAdminIds`, но для `3.0` лучше нормализовать это в relation-таблицу, а не хранить массив.

### Предлагаемая структура

```sql
CREATE TABLE IF NOT EXISTS organization_vk_notification_admins (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (organization_id, user_id)
);
```

### Почему так лучше

- совместимо со стилем `organization_members`;
- проще фильтровать, audit-ить и валидировать;
- не нужно хранить массив ID внутри одной строки.

---

## 4. `vk_post_publications`

### Зачем нужна

В `3.0.posts` уже есть контент. Но текущая VK mini app добавляет поверх него отдельный workflow:

- модерация;
- планирование слота;
- публикация в VK-группу;
- связь с `vk_post_id`;
- chat link;
- геопривязка для VK-контура.

Это не стоит смешивать с core `posts`.

### Предлагаемая структура

```sql
CREATE TABLE IF NOT EXISTS vk_post_publications (
    id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    organization_id INTEGER NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    vk_group_id BIGINT NOT NULL,
    moderation_status TEXT NOT NULL DEFAULT 'pending',
    publish_date TIMESTAMP,
    vk_post_id BIGINT,
    chat_link TEXT,
    city_id INTEGER,
    city_name TEXT,
    region_name TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (post_id, vk_group_id)
);
```

### Что туда маппится из текущей mini app

- `status` -> `moderation_status`
- `publishDate` -> `publish_date`
- `vkPostId` -> `vk_post_id`
- `chatLink` -> `chat_link`
- `groupId` -> `vk_group_id`
- `cityId`, `cityName`, `regionName`

### Что остаётся в `posts`

- `content`
- `attachments`
- `tags`
- `author_id`
- `author_type`
- общая локация

---

## 5. `vk_radar_pins`

### Зачем нужна

В `3.0` явного аналога для радара нет, значит это естественный кандидат на extension-таблицу.

### Предлагаемая структура

```sql
CREATE TABLE IF NOT EXISTS vk_radar_pins (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    post_id INTEGER REFERENCES posts(id) ON DELETE SET NULL,
    organization_id INTEGER REFERENCES organizations(id) ON DELETE SET NULL,
    type TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    lat NUMERIC(10, 8) NOT NULL,
    lng NUMERIC(11, 8) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Что важно

`vk_radar_pins` должна ссылаться на:

- `users.id`
- `posts.id`
- `organizations.id`

а не на локальную mini-app user-модель.

---

## Контракт `resolveOrCreateUserByVk(...)`

Это ключевая функция, которая должна жить на стороне `3.0` или как минимум работать против `3.0.users`.

## Цель

Принять подтверждённого VK-пользователя и вернуть канонического пользователя `3.0`.

### Входной контракт

```ts
type ResolveOrCreateUserByVkInput = {
  vkUserId: number;
  firstName?: string | null;
  lastName?: string | null;
  avatarUrl?: string | null;
  email?: string | null;
  phone?: string | null;
  accessToken?: string | null;
  source: 'launch_params' | 'vk_sdk' | 'oauth_callback';
};
```

### Выходной контракт

```ts
type ResolveOrCreateUserByVkResult = {
  userId: number;
  created: boolean;
  linkedExistingUser: boolean;
  email: string;
  vkId: number;
};
```

## Правила работы

### Шаг 1. Найти по `vk_id`

Если пользователь с таким `vk_id` уже существует:

- вернуть его;
- обновить `last_seen`;
- обновить `vk_access_token`, если он пришёл;
- мягко обновить имя/фамилию/аватар только по согласованным правилам.

### Шаг 2. Если не найден, а email есть — попробовать найти по email

Если email пришёл и пользователь с таким email уже существует:

- привязать `vk_id`;
- обновить `vk_access_token`;
- обновить VK-related поля;
- вернуть пользователя с `linkedExistingUser = true`.

### Шаг 3. Если не найден — создать нового social user

Если email не пришёл:

- использовать placeholder:
  - `vk{vkUserId}@vk.placeholder`

Если `password_hash` обязателен:

- сгенерировать временный пароль;
- захешировать его;
- записать в `password_hash`.

### Шаг 4. Обновление полей

При создании:

- `name`
- `last_name`
- `email`
- `password_hash`
- `vk_id`
- `vk_access_token`
- `avatar`
- `phone`
- `created_at`
- `last_seen`

### Шаг 5. Чего не делать автоматически

Нельзя бездумно перетирать:

- `bio`
- `cover_photo`
- privacy-настройки
- вручную заполненный `phone`

### Рекомендуемая политика обновления

- `name`, `last_name` — можно обновлять, если пустые или явно placeholder
- `avatar` — обновлять только если пустой или если согласована стратегия источника аватара
- `email` — обновлять только если текущий email placeholder и пришёл реальный email
- `phone` — обновлять только если текущий пустой

---

## Рекомендуемая логика для VK mini app backend

После перехода mini app backend должен:

1. проверить launch params VK;
2. вызвать `resolveOrCreateUserByVk(...)`;
3. получить `userId` из `3.0.users`;
4. работать с ним во всех дальнейших сущностях.

Это заменяет локальную логику вида:

- создать local `User` по `vkId`;
- хранить отдельный профиль mini app как основную правду.

---

## Что надо поменять в текущем backend mini app

## 1. Перестать использовать локальную таблицу `User` как каноническую

Сейчас mini app Prisma-схема содержит собственный `User`.

Это нужно считать временным состоянием.

Целевой шаг:

- local `User` убрать из роли source of truth;
- заменить на adapter к `3.0.users`.

## 2. Переписать `/profile/bootstrap`

Сейчас он работает как локальный upsert mini-app `User`.

Целевое поведение:

- валидируем VK launch params;
- вызываем `resolveOrCreateUserByVk`;
- затем читаем профиль:
  - из `users`
  - и из `vk_app_user_settings`
- возвращаем объединённый DTO.

## 3. Переписать `GET /profile/me`

Вместо local Prisma `User`:

- `SELECT` из `3.0.users`
- `LEFT JOIN` на `vk_app_user_settings`

## 4. Переписать `PATCH /profile/me`

Разделить запись:

### В `users`

- `bio`
- `phone`
- `location`
- `avatar`
- `cover_photo`
- privacy-настройки

### В `vk_app_user_settings`

- `role_label`
- `contact_telegram`
- `home_city_name`
- `home_lat`
- `home_lng`
- `preferences`
- `onboarding_progress`

## 5. Переписать `Community`

Вместо local `Community`:

- читать `organizations`
- читать/писать `organization_vk_settings`
- читать `organization_vk_notification_admins`

## 6. Переписать `Post`

На следующем этапе:

- `posts` использовать как core;
- VK workflow хранить в `vk_post_publications`.

## 7. Переписать `RadarPin`

Вместо local `RadarPin`:

- использовать `vk_radar_pins`

или, если пока рано:

- оставить локально временно, но уже хранить `3.0.users.id` как `authorId`.

---

## Самый безопасный порядок rollout

### Этап 1. Подготовка в `3.0`

Сделать в репозитории `3.0`:

- миграцию для `vk_app_user_settings`
- миграцию для `organization_vk_settings`
- миграцию для `organization_vk_notification_admins`
- миграцию для `vk_post_publications`
- миграцию для `vk_radar_pins`
- helper/service `resolveOrCreateUserByVk(...)`

### Этап 2. Адаптер в mini app

В `vk-mini-app_full`:

- временно не удалять старые модели;
- добавить adapter-слой, читающий `3.0.users`;
- переключить профиль на shared model.

### Этап 3. Перевод авторов и связей

- `authorId` в постах/пинах -> использовать `3.0.users.id`
- `groupId` / `community` -> начать маппить к `organizations`

### Этап 4. Перевод organization settings

- settings UI пишет в `organization_vk_settings`
- members и права читаются из `organization_members`

### Этап 5. Перевод постов

- core-контент в `posts`
- VK workflow в `vk_post_publications`

### Этап 6. Деприкация локальных core-моделей

Убирать локальные `User` и `Community` только после того, как чтение/запись полностью переведены на shared DB.

---

## Что нельзя делать

- нельзя запускать mini-app `prisma db push` по общей БД `3.0` как по собственной схеме;
- нельзя добавлять mini-app поля прямо в `users` без крайней необходимости;
- нельзя слить `Community` в `organizations` механически;
- нельзя считать, что `contactEmail` mini app автоматически равен `users.email`;
- нельзя сразу объединять web sessions и VK launch auth, пока не готов bridge-слой.

---

## Краткий итог

Самая разумная и безопасная целевая схема выглядит так:

### Core `3.0`

- `users`
- `organizations`
- `organization_members`
- `posts`
- `user_media`

### VK extensions

- `vk_app_user_settings`
- `organization_vk_settings`
- `organization_vk_notification_admins`
- `vk_post_publications`
- `vk_radar_pins`

### Ключевая функция

- `resolveOrCreateUserByVk(...)`

Именно она позволит:

- использовать VK mini app как ещё одного клиента `3.0`;
- не плодить вторую user-систему;
- не ломать email/password контур основного сайта;
- плавно перевести текущую mini app на shared identity model.
