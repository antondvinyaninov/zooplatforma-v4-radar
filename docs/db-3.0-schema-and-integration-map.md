# Схема БД `3.0` и карта интеграции `vk-mini-app`

## Назначение документа
Этот документ фиксирует:

1. фактическую схему ключевых таблиц основной ZooPlatform `3.0`;
2. текущую схему VK mini app;
3. точную карту интеграции между ними;
4. ограничения, которые нельзя нарушать, чтобы не сломать `3.0`.

Документ составлен на основе:

- реальной схемы БД `3.0`, считанной из live database в режиме чтения;
- текущей Prisma-схемы `vk-mini-app_full`;
- анализа профиля и продуктовой логики из памяти по `zooplatforma_3.0`.

Важно:

- в документе **нет секретов**;
- `3.0` рассматривается как **source of truth**;
- VK mini app не должна владеть схемой core-таблиц `3.0`.

---

## Базовый принцип интеграции

`3.0` — это основной сайт ZooPlatform.  
`vk-mini-app_full` — это VK-клиент и отдельный продуктовый модуль внутри той же экосистемы.

Следовательно:

- **общий профиль пользователя должен жить в `3.0`**;
- **VK mini app должна подключаться к общей БД `3.0`**;
- **VK-специфичные сущности должны храниться в extension-таблицах**, а не дублировать core-модель платформы.

Иными словами:

- не две разные системы пользователей;
- не две разные модели профиля;
- не два независимых набора правок схемы;
- а один общий профиль + VK-расширение.

---

## Фактическая схема `3.0`

Ниже перечислены ключевые таблицы, реально присутствующие в `3.0`.

### Ключевые таблицы

В схеме `public` были обнаружены, среди прочих:

- `users`
- `posts`
- `user_media`
- `organizations`
- `organization_members`
- `comments`
- `likes`
- `notifications`
- `messages`
- `chats`
- `pets`
- `pet_cards`
- `platform_reviews`
- `user_roles`
- `user_stats`

Для интеграции с VK mini app критически важны именно:

- `users`
- `organizations`
- `organization_members`
- `posts`
- `user_media`

---

## Таблица `users` в `3.0`

### Поля

#### Идентификация и auth

- `id` — `integer`, PK
- `email` — `text`, **NOT NULL**, UNIQUE
- `password_hash` — `varchar`, **NOT NULL**
- `vk_id` — `integer`, UNIQUE
- `ok_id` — `varchar`, UNIQUE
- `mailru_id` — `varchar`, UNIQUE
- `vk_access_token` — `text`
- `ok_access_token` — `text`
- `mailru_access_token` — `text`

#### Публичный профиль

- `name` — `text`, **NOT NULL**
- `last_name` — `text`
- `bio` — `text`
- `phone` — `text`
- `location` — `text`
- `avatar` — `text`
- `cover_photo` — `text`

#### Приватность и доверие

- `profile_visibility` — `text`, default `'public'`
- `show_phone` — `text`, default `'friends'`
- `show_email` — `text`, default `'friends'`
- `allow_messages` — `text`, default `'everyone'`
- `show_online` — `text`, default `'yes'`
- `verified` — `boolean`, default `false`
- `verified_at` — `timestamp`

#### Метаданные

- `created_at` — `timestamp`, default `CURRENT_TIMESTAMP`
- `last_seen` — `timestamp`

### Constraint'ы

- PK: `users(id)`
- UNIQUE: `users(email)`
- UNIQUE: `users(vk_id)`
- UNIQUE: `users(ok_id)`
- UNIQUE: `users(mailru_id)`

### Ключевой вывод

Таблица `users` уже является полноценной основной моделью профиля `3.0`.

Именно она должна быть источником истины для:

- имени;
- фамилии;
- bio;
- телефона;
- локации;
- аватара и обложки;
- приватности;
- верификации;
- привязки `vk_id`.

### Главный blocker для VK mini app

Сейчас `3.0.users` **не позволяет** безопасно автосоздавать пользователя только по `vk_id`, потому что:

- `email` — `NOT NULL`
- `password_hash` — `NOT NULL`
- у этих полей **нет default value**

Это главный технический блокер для прямой подмены текущего mini-app `User` на `3.0.users`.

---

## Таблица `organizations` в `3.0`

### Назначение

Это не просто организация как карточка, а фактически основа для публичного и управляемого профиля организации.

### Важные поля

#### Основные

- `id`
- `name`
- `type`
- `description`
- `bio`
- `logo`
- `cover_photo`

#### Контакты и адреса

- `website`
- `phone`
- `email`
- `address`
- `city`
- `region`
- `address_full`
- `address_city`
- `address_region`
- `geo_lat`
- `geo_lon`

#### Управление и статус

- `owner_user_id`
- `status`
- `is_active`
- `is_verified`

#### Приватность

- `profile_visibility`
- `show_phone`
- `show_email`
- `allow_messages`

#### Соцсети и внешние ссылки

- `vk_link`
- `telegram_link`
- `whatsapp_link`
- `youtube_link`
- `ok_link`
- `rutube_link`
- `telegram_channel_link`
- `max_channel_link`

### Constraint'ы

- PK: `organizations(id)`
- FK: `owner_user_id -> users(id)` with `ON DELETE SET NULL`
- FK: `parent_organization_id -> organizations(id)` with `ON DELETE SET NULL`

### Ключевой вывод

Текущая mini-app сущность `Community` не должна заменять `organizations`.

Правильный подход:

- использовать `organizations` как основную организационную модель;
- поверх неё строить VK-specific extension с параметрами публикации и интеграции.

---

## Таблица `organization_members` в `3.0`

### Поля

- `id`
- `organization_id`
- `user_id`
- `role`
- `position`
- `can_post`
- `joined_at`
- `org_avatar`
- `permissions` (`jsonb`)
- `is_public`

### Constraint'ы

- PK: `organization_members(id)`
- FK: `organization_id -> organizations(id)` with `ON DELETE CASCADE`
- FK: `user_id -> users(id)` with `ON DELETE CASCADE`
- UNIQUE: `(organization_id, user_id)`

### Ключевой вывод

Если в VK mini app нужны:

- дежурные админы;
- редакторы;
- участники сообщества;
- право публиковать;

то логично опираться на `organization_members`, а не изобретать отдельную систему ролей для community.

---

## Таблица `posts` в `3.0`

### Поля

- `id`
- `user_id`
- `author_id`
- `author_type`
- `content`
- `media_urls`
- `attachments`
- `tags`
- `status`
- `scheduled_at`
- `created_at`
- `updated_at`
- `is_deleted`
- `likes_count`
- `comments_count`
- `location_lat`
- `location_lon`
- `location_name`
- `reply_setting`
- `verify_replies`

### Constraint'ы

- PK: `posts(id)`

### Наблюдение

В считанной схеме **не видно явных FK-constraint'ов** для `author_id` или `user_id`.

Это не значит, что таблица плохая, но значит, что VK mini app не должна автоматически предполагать строгую ORM-модель поверх этих полей без согласования с `3.0`.

### Ключевой вывод

В `3.0` уже существует общий контентный контур.

Значит VK mini app не должна окончательно фиксировать свою собственную каноническую модель поста как отдельную core-таблицу. Правильнее:

- либо использовать `3.0.posts` как core-контент;
- либо хранить VK-specific workflow в extension-таблице поверх `posts`.

---

## Таблица `user_media` в `3.0`

### Поля

- `id`
- `user_id`
- `file_name`
- `original_name`
- `file_path`
- `file_size`
- `mime_type`
- `media_type`
- `width`
- `height`
- `duration`
- `uploaded_at`

### Constraint'ы

- PK: `user_media(id)`

### Ключевой вывод

У `3.0` уже есть отдельный слой пользовательского медиа.  
Поэтому mini app не должна надолго оставаться на модели "медиа как произвольный JSON-массив в посте" без синхронизации с общим хранилищем.

---

## Текущая схема VK mini app

Текущая Prisma-схема `vk-mini-app_full` содержит:

- `User`
- `Post`
- `RadarPin`
- `Community`

### `User` сейчас

Поля текущего mini app `User`:

- `vkId`
- `firstName`
- `lastName`
- `screenName`
- `avatarUrl`
- `photo200`
- `cityName`
- `sex`
- `bdate`
- `bio`
- `roleLabel`
- `contactPhone`
- `contactTelegram`
- `contactEmail`
- `homeCityName`
- `homeLat`
- `homeLng`
- `preferences`
- `lastSeenAt`

### `Post` сейчас

- `content`
- `tag`
- `media`
- `status`
- `publishDate`
- `vkPostId`
- `chatLink`
- `cityId`
- `cityName`
- `regionName`
- `groupId`
- `authorId`

### `Community` сейчас

- `id` (`vk group id`)
- `accessToken`
- `name`
- `avatarUrl`
- `acceptCrossPosts`
- `lat`
- `lng`
- `cityId`
- `cityName`
- `regionName`
- `dutyAdminId`
- `notifyAdminIds`
- `acceptedTags`
- `scheduleIntervalMinutes`
- `scheduleStartTime`
- `scheduleEndTime`

### `RadarPin` сейчас

- `type`
- `lat`
- `lng`
- `title`
- `description`
- `authorId`
- `postId`
- `expiresAt`

---

## Основные расхождения между mini app и `3.0`

### 1. Профиль пользователя

#### Сейчас в mini app

- `firstName`
- `lastName`
- `avatarUrl`
- `photo200`
- `cityName`
- mini-app-специфичные поля рядом с core-профилем

#### В `3.0`

- `name`
- `last_name`
- `avatar`
- `cover_photo`
- `location`
- privacy-настройки
- verification

### 2. Auth и user provisioning

#### Сейчас в mini app

- пользователь может появляться автоматически по `vk_id`

#### В `3.0`

- `email` обязателен
- `password_hash` обязателен

Итог:

- прямое автосоздание пользователя в `3.0.users` сейчас невозможно без изменения auth-модели `3.0`.

### 3. Community vs Organization

#### Сейчас в mini app

- есть отдельная `Community`

#### В `3.0`

- есть полноценная `organizations`
- есть `organization_members`
- уже есть контакты, локация, публичность и social links

Итог:

- `Community` должна стать extension-слоем поверх `organizations`, а не отдельной параллельной core-моделью.

### 4. Посты

#### Сейчас в mini app

- пост уже включает и контент, и VK workflow

#### В `3.0`

- есть общая таблица `posts`

Итог:

- VK-специфичные стадии публикации стоит отделить от core-контента.

### 5. Медиа

#### Сейчас в mini app

- `media` хранится в JSON в посте

#### В `3.0`

- есть `user_media`

Итог:

- со временем надо сводить медиа-контур к общей модели `3.0`.

---

## Точная карта интеграции

Ниже — рекомендуемое маппирование сущностей.

### 1. Профиль пользователя

| VK mini app | `3.0` | Решение |
|---|---|---|
| `vkId` | `users.vk_id` | Прямое сопоставление |
| `firstName` | `users.name` | Переименовать при интеграции |
| `lastName` | `users.last_name` | Прямое сопоставление |
| `bio` | `users.bio` | Прямое сопоставление |
| `contactPhone` | `users.phone` | Прямое сопоставление |
| `cityName` / `homeCityName` | `users.location` | `cityName` может быть fallback, `homeCityName` лучше не смешивать автоматически |
| `avatarUrl` / `photo200` | `users.avatar` | `users.avatar` сделать каноническим полем профиля |
| `coverPhoto` | `users.cover_photo` | Нужно добавить в mini app контракт |
| privacy fields | `users.profile_visibility`, `show_phone`, `show_email`, `allow_messages`, `show_online` | Брать из `3.0` как source of truth |
| `verified`, `verifiedAt` | `users.verified`, `users.verified_at` | Брать из `3.0` как source of truth |

### 2. Что **не** нужно писать напрямую в `3.0.users`

Следующие текущие поля mini app не стоит бездумно записывать в `users`, пока не согласована общая продуктовая модель:

- `roleLabel`
- `contactTelegram`
- `homeCityName`
- `homeLat`
- `homeLng`
- `preferences`

Для них лучше сделать extension-таблицу.

### 3. Рекомендуемая extension-таблица пользователя

#### `vk_app_user_settings`

Рекомендуемые поля:

- `user_id` -> FK `users.id`
- `role_label`
- `contact_telegram`
- `home_city_name`
- `home_lat`
- `home_lng`
- `preferences` (`jsonb` or array)
- `created_at`
- `updated_at`

Назначение:

- хранить только то, что специфично для mini app;
- не загрязнять core-profile `3.0`.

---

## Интеграция community / organization

### Каноническая сущность

Основная сущность: `organizations`

### Текущая `Community`

Нужно разложить на два слоя:

#### В `organizations`

- `name`
- `avatar` / `logo`
- `city` / `region`
- `geo_lat` / `geo_lon`
- контакты и публичный профиль
- `vk_link`

#### В extension

Создать таблицу, например `organization_vk_settings`:

- `organization_id` -> FK `organizations.id`
- `vk_group_id` UNIQUE
- `access_token`
- `accept_cross_posts`
- `accepted_tags`
- `schedule_interval_minutes`
- `schedule_start_time`
- `schedule_end_time`
- `duty_admin_user_id`
- `notify_admin_ids` or better relation table
- `created_at`
- `updated_at`

### Почему так

Это позволяет:

- не ломать core-модель организации `3.0`;
- не превращать VK-группу в отдельную организационную сущность;
- хранить VK-specific конфиг рядом, но отдельно.

---

## Интеграция membership / роли

Текущая mini app сейчас проверяет роль через launch params и локальную логику.

Для интеграции с `3.0` правильнее постепенно переходить на:

- `organization_members.role`
- `organization_members.permissions`

То есть права админа/редактора community лучше выражать через членство пользователя в организации, а не через отдельный параллельный слой ролей.

---

## Интеграция постов

### Что должно стать core

В `3.0.posts` логично переносить:

- `content`
- `tags`
- `attachments` / `media_urls`
- `author_id`
- `author_type`
- `location_lat`
- `location_lon`
- `location_name`

### Что должно стать VK-extension

Создать таблицу, например `vk_post_publications`:

- `post_id` -> FK `posts.id`
- `organization_id` -> FK `organizations.id`
- `vk_group_id`
- `moderation_status`
- `publish_date`
- `vk_post_id`
- `chat_link`
- `city_id`
- `city_name`
- `region_name`
- `created_at`
- `updated_at`

### Почему не хранить всё в `posts`

Потому что:

- `posts` — общий контентный слой;
- VK mini app использует специфический workflow модерации и публикации в группу;
- `vk_post_id`, расписание и community targeting не являются обязательной частью общего поста ZooPlatform.

---

## Интеграция медиа

### Каноническая таблица

`user_media`

### Стратегия

На переходном этапе mini app может ещё временно хранить `media` в JSON, но целевая модель должна быть такой:

1. пользователь загружает файл;
2. файл создаётся в `user_media`;
3. пост/пин хранит ссылки или ID на медиа;
4. профиль пользователя автоматически получает общий media-layer.

### Практический вывод

В долгую нельзя строить отдельное mini-app хранилище пользовательского медиа как отдельный канон.

---

## Интеграция радара

В `3.0` явного аналога `RadarPin` не обнаружено.  
Значит это хороший кандидат на отдельную extension-таблицу.

### Рекомендуемая таблица

#### `vk_radar_pins`

- `id`
- `user_id` -> FK `users.id`
- `post_id` -> FK `posts.id`, optional
- `organization_id` -> FK `organizations.id`, optional
- `type`
- `title`
- `description`
- `lat`
- `lng`
- `expires_at`
- `created_at`
- `updated_at`

### Почему это безопасно

- не ломает `3.0`;
- сохраняет продуктовый модуль радара отдельно;
- даёт полноценную связность с общими пользователями, постами и организациями.

---

## Самые важные риски

### 1. Нельзя запускать `prisma db push` из mini app по общей БД `3.0`

Причина:

- mini app не владеет core-схемой платформы;
- случайные изменения могут сломать основной сайт.

### 2. `email` и `password_hash` в `3.0.users` обязательны

Это ломает текущий mini-app сценарий "пользователь заходит по VK и автоматически создаётся профиль".

Нужна отдельная доработка auth-модели `3.0`.

### 3. `users.email` не равен автоматически `contactEmail`

Нельзя без обсуждения считать, что:

- `contactEmail` из mini app
- и `users.email` из `3.0`

это одно и то же поле.

С высокой вероятностью:

- `users.email` — логин/канал auth;
- `contactEmail` — публичный или рабочий контакт профиля.

### 4. Community и Organization нельзя слить напрямую

`Community` содержит VK-специфичные параметры, которых нет в `organizations`.

Нужно расширение, а не подмена.

### 5. Посты нельзя объединять механически

У VK mini app есть собственный moderation/publishing lifecycle.  
Он не должен автоматически стать обязательной частью всех постов платформы.

---

## Рекомендуемая целевая архитектура

### Core `3.0`

- `users`
- `organizations`
- `organization_members`
- `posts`
- `user_media`

### Extension для VK mini app

- `vk_app_user_settings`
- `organization_vk_settings`
- `vk_radar_pins`
- `vk_post_publications`

---

## Пошаговый безопасный план интеграции

### Этап 0. Заморозка опасных действий

- не делать `db push` по общей БД из mini app;
- не менять `users` и `organizations` из mini app-репозитория без синхронизации с `3.0`.

### Этап 1. Нормализация auth в `3.0`

Нужно решить, как в `3.0` будет жить VK-user без обязательного email/password сценария.

Возможные направления:

- разрешить federated/social users;
- ввести отдельную таблицу identity/linkage;
- пересмотреть обязательность `email`/`password_hash`.

Без этого прямой переход невозможен.

### Этап 2. Добавление extension-таблиц в `3.0`

Добавлять именно в репозитории `3.0`, а не в mini app:

- `vk_app_user_settings`
- `organization_vk_settings`
- `vk_radar_pins`
- `vk_post_publications`

### Этап 3. Перевод чтения на `3.0`

Mini app backend сначала начинает:

- читать пользователей из `3.0.users`;
- читать организации из `3.0.organizations`;
- читать membership из `organization_members`.

### Этап 4. Перевод записи профиля

После auth-доработки:

- profile bootstrap в mini app должен обновлять `users.vk_id` и профиль `3.0`;
- mini-app-specific настройки — писать в `vk_app_user_settings`.

### Этап 5. Перевод community и posts

- community settings -> `organizations` + `organization_vk_settings`
- VK publication workflow -> `posts` + `vk_post_publications`

### Этап 6. Деприкация локальной mini-app user-модели

После стабилизации:

- локальная mini-app таблица `User` больше не нужна как отдельный source of truth;
- она должна исчезнуть или стать просто ORM-view над общей таблицей.

---

## Главный практический вывод

Схема `3.0` уже содержит зрелую основу для:

- профиля пользователя,
- приватности,
- верификации,
- организационного профиля,
- membership,
- контентного слоя,
- пользовательского медиа.

Поэтому правильная стратегия интеграции:

- **не развивать mini app как отдельную платформу**;
- **не дублировать `users` и `organizations`**;
- **использовать `3.0` как core**;
- **вынести VK-специфичную логику в extension-таблицы**.

Самый важный технический blocker перед реальной интеграцией:

- `3.0.users.email` и `password_hash` обязательны,
- значит текущий VK-only auto-bootstrap нельзя просто напрямую переключить на `3.0.users` без изменения auth-модели основной платформы.
