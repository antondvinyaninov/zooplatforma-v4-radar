# План объединения VK mini app с auth и профилем `3.0`

## Назначение документа
Этот документ описывает **практический и безопасный** путь интеграции `vk-mini-app_full` с основной ZooPlatform `3.0` так, чтобы:

- не ломать `3.0`;
- не плодить вторую систему пользователей;
- использовать уже существующую `users`-модель `3.0`;
- сохранить совместимость с VK Mini Apps и их launch params;
- постепенно перевести mini app на общий профиль и общую базу.

Документ опирается на:

- фактическую схему БД `3.0`;
- анализ текущей mini app;
- материалы из памяти по `zooplatforma_3.0`.

---

## Главный вывод

Интеграцию нужно делать **в два слоя**:

1. **Общая идентичность и профиль** идут через `3.0.users`.
2. **Текущая mini app-аутентификация по VK launch params** пока остаётся своей и не ломает основной web auth `3.0`.

То есть на первом этапе:

- мы **не объединяем сессии**;
- мы **объединяем пользователя**.

Это самый безопасный путь.

---

## Что уже есть в `3.0`

### 1. В таблице `users`
У `3.0` уже есть всё важное для общего профиля:

- `name`
- `last_name`
- `email`
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

### 2. VK уже реально присутствует в `3.0`
Фактические агрегаты из БД:

- всего пользователей: `140`
- пользователей с `vk_id`: `35`
- пользователей с `vk_access_token`: `35`
- верифицированных пользователей: `25`

Значит VK-интеграция в `3.0` не гипотетическая, а уже используется.

### 3. В памяти `3.0` уже есть VK OAuth логика
Подтверждено по backend-артефактам:

- миграция `003_add_vk_oauth.sql`
- обработчик `vk.go`
- `SDKCallback`
- логика создания/поиска пользователя через `vk_id`
- placeholder email вида `vk{user_id}@vk.placeholder`

### 4. В `3.0` уже есть обход обязательного email
В памяти найдена ключевая логика:

- если email от VK не пришёл, используется placeholder:
  - `vk{user_id}@vk.placeholder`
- при создании social-аккаунта используется временный пароль и `password_hash`
- если у existing user email был placeholder, а потом пришёл реальный email, он заменяется

Это очень важный вывод:

- обязательные `email` и `password_hash` в `3.0` **не блокируют VK-login полностью**;
- в `3.0` уже есть рабочая переходная модель social account.

---

## Почему нельзя просто “переключить mini app на 3.0” в лоб

Потому что сейчас у mini app и `3.0` разные контуры авторизации:

### `3.0`

- web-oriented auth
- JWT / токены / cookies
- email/password + social linking

### VK mini app

- доверенный контекст приходит из launch params
- backend проверяет подпись `sign`
- идентичность пользователя строится из `vk_user_id`

Если смешать это без слоя адаптации, можно:

- сломать `3.0` login flow;
- получить конфликт логики сессий;
- случайно сделать mini app хозяином общего auth-контракта.

---

## Целевой принцип

### На первом этапе объединяем не auth-сессию, а identity

То есть:

- **источник истины для пользователя** → `3.0.users`
- **источник истины для mini app-аутентификации** → проверенные VK launch params

Тогда mini app backend работает так:

1. принимает `Authorization: Bearer <launch params>`;
2. валидирует VK-подпись;
3. получает `vk_user_id`;
4. находит или создаёт пользователя в `3.0.users`;
5. использует `users.id` как общий `authorId`, `user_id`, `owner_user_id` и т.д.

Это даёт:

- общую identity-модель;
- совместимость с `3.0`;
- отсутствие зависимости от web cookie/session контура.

---

## Рекомендуемая стратегия интеграции

## Этап 1. Shared Identity, Separate Session

### Что делаем

- VK mini app **не логинится через web auth `3.0`**.
- Она использует свою проверку launch params, как и сейчас.
- После валидации backend mini app резолвит пользователя в `3.0.users`.

### Что это меняет

Вместо локальной таблицы `User` mini app должна начать использовать:

- `3.0.users.id`
- `3.0.users.vk_id`
- `3.0.users.name`
- `3.0.users.last_name`
- `3.0.users.avatar`
- `3.0.users.bio`
- и т.д.

### Почему это безопасно

- не ломает текущий auth `3.0`;
- не требует менять сессии веб-сайта;
- сразу даёт единый профиль;
- подходит для VK WebView.

---

## Этап 2. Reuse Existing VK Logic from `3.0`

В `3.0` уже есть признаки готовой логики social bootstrap.

Значит целевая функция должна быть примерно такой:

### `resolveOrCreate3UserFromVk(vkUser)`

Порядок работы:

1. найти пользователя по `users.vk_id = vk_user_id`
2. если найден:
   - обновить `vk_access_token` если нужен
   - обновить `name`, `last_name`, `avatar`, `phone`, `last_seen`
   - не затирать руками заполненный профиль без правил
3. если не найден:
   - если есть email от VK, попробовать найти по email
   - если email найден:
     - привязать `vk_id`
     - обновить VK-related поля
   - если не найден:
     - создать пользователя
     - если email не пришёл, использовать placeholder `vk{vk_id}@vk.placeholder`
     - сгенерировать временный пароль и записать `password_hash`
     - сохранить `vk_id`, `vk_access_token`, `name`, `last_name`, `avatar`, `phone`

### Ключевая мысль

Нужно **не выдумывать новую social-логику в mini app**, а использовать уже существующий подход `3.0`.

---

## Этап 3. Extension Tables for VK App

Core user должен жить в `3.0.users`, но mini app всё равно нужны свои настройки.

### Рекомендуемая таблица `vk_app_user_settings`

- `user_id` → FK `users.id`
- `role_label`
- `contact_telegram`
- `home_city_name`
- `home_lat`
- `home_lng`
- `preferences`
- `created_at`
- `updated_at`

### Что туда переносить

Из текущей mini app модели:

- `roleLabel`
- `contactTelegram`
- `homeCityName`
- `homeLat`
- `homeLng`
- `preferences`

### Что не нужно хранить там

Не нужно дублировать:

- `name`
- `lastName`
- `bio`
- `contactPhone`
- `contactEmail`
- `avatar`
- `verified`

Это всё должно идти из `3.0.users`.

---

## Этап 4. Community -> Organization Extension

### Каноническая модель

`organizations`

### VK-specific extension

#### `organization_vk_settings`

- `organization_id`
- `vk_group_id`
- `access_token`
- `accept_cross_posts`
- `accepted_tags`
- `schedule_interval_minutes`
- `schedule_start_time`
- `schedule_end_time`
- `duty_admin_user_id`
- `created_at`
- `updated_at`

### Что важно

`Community` из mini app не должна жить как отдельная независимая core-сущность, если цель — объединение с `3.0`.

---

## Этап 5. Posts -> Core + VK Publication Layer

### Core

Использовать `3.0.posts` как общий контентный слой.

### VK-specific workflow

Сделать extension-таблицу:

#### `vk_post_publications`

- `post_id`
- `organization_id`
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

### Почему так

Потому что:

- пост как контент — общий;
- публикация в VK-группу — это отдельный delivery workflow.

---

## Что нужно сделать в mini app коде

## 1. Прекратить расширять локальную таблицу `User`

Текущая mini app Prisma-модель `User` уже вышла за пределы временной заглушки.

Нужно остановиться и перейти к DTO-модели, совместимой с `3.0`.

### Сейчас в mini app есть

- `firstName`
- `lastName`
- `avatarUrl`
- `photo200`
- `cityName`
- `bio`
- `contactPhone`
- `contactEmail`
- `homeCityName`
- `preferences`

### Канонический профиль должен стать таким

- `name` ← из `3.0.users.name`
- `last_name` ← из `3.0.users.last_name`
- `bio` ← из `3.0.users.bio`
- `phone` ← из `3.0.users.phone`
- `location` ← из `3.0.users.location`
- `avatar` ← из `3.0.users.avatar`
- `cover_photo` ← из `3.0.users.cover_photo`
- privacy / verification ← из `3.0.users.*`
- VK-specific extras ← из `vk_app_user_settings`

---

## 2. Сделать profile adapter layer

### Вместо

- прямой работы с локальной Prisma `User`

### Нужен

слой адаптации:

- `loadVkAppProfileByVkId(vkId)`
- `upsertVkIdentityFromLaunchParams(...)`
- `updateVkAppUserSettings(userId, data)`

Этот слой должен собирать данные из:

- `users`
- `vk_app_user_settings`

и отдавать фронтенду единый профиль.

---

## 3. Не использовать `prisma db push` как инструмент владения общей схемой

Это нужно зафиксировать отдельно:

- mini app backend не должен управлять core-схемой `3.0`;
- все изменения в `users`, `organizations`, `posts` должны идти через владельца основной платформы;
- extension-таблицы тоже лучше заводить в контуре `3.0`, но как отдельный согласованный модуль.

---

## Наиболее безопасный путь внедрения

### Вариант A — рекомендованный

**Минимально рискованный bridge:**

1. Оставить текущую auth-модель mini app по launch params.
2. Начать резолвить пользователя через `3.0.users`.
3. Перенести mini-app-specific профиль в `vk_app_user_settings`.
4. Сохранять VK-specific organization настройки отдельно.
5. Позже объединить post-layer.

Это позволяет:

- быстро перейти на общий профиль;
- не ломать `3.0`;
- не трогать сразу web login flows.

### Вариант B — full auth merge сразу

**Не рекомендован на первом шаге.**

Идея:

- mini app после входа в VK сразу создаёт полноценную `3.0` сессию/refresh token/cookie модель.

Почему рискованно:

- VK WebView и cookie-реальность сложнее;
- очень легко сломать основной auth-контур;
- уровень изменений в `3.0` резко растёт.

---

## Точный следующий технический шаг

Следующее полезное действие уже не в mini app, а на границе с `3.0`.

### Нужно подготовить в `3.0`

1. Каноническую функцию/handler:
   - `resolveOrCreateUserByVk(...)`

2. Contract для входных данных:
   - `vk_user_id`
   - `first_name`
   - `last_name`
   - `avatar_url`
   - `phone` (optional)
   - `email` (optional)
   - `access_token` (optional)

3. Extension-таблицу:
   - `vk_app_user_settings`

4. Extension-таблицу:
   - `organization_vk_settings`

После этого mini app backend можно переводить на shared user model.

---

## Итог

На сегодня лучший и самый безопасный план такой:

1. **Пользователь общий** — через `3.0.users`.
2. **Сессия пока отдельная** — VK launch params остаются auth-механизмом mini app.
3. **VK-специфичные поля профиля** — через `vk_app_user_settings`.
4. **VK-специфичные настройки организаций** — через `organization_vk_settings`.
5. **VK delivery workflow постов** — через `vk_post_publications`.

Самое важное открытие:

`3.0` уже содержит зачатки и рабочие элементы VK OAuth-модели:

- `vk_id`
- `vk_access_token`
- placeholder email
- temp password hash
- SDK callback

Значит интеграция не требует изобретать новую auth-систему с нуля.  
Нужно аккуратно **достроить уже существующую `3.0` модель** и подключить к ней mini app как ещё одного клиента.
