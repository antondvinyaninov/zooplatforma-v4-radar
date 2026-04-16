# Документация VK: https://dev.vk.com/ru/method/users.get

[users](/ru/method/users)

# users.get

Метод позволяет получить информацию о пользователях.

Для вызова метода можно использовать:

• [ключ доступа пользователя](/ru/api/access-token/getting-started#Ключ%20доступа%20пользователя)

• [ключ доступа сообщества](/ru/api/access-token/getting-started#Ключ%20доступа%20сообщества)

• [сервисный ключ доступа](/ru/api/access-token/getting-started#Сервисный%20ключ%20доступа)

## [](#Параметры)Параметры

user\_ids

string

Перечисленные через запятую идентификаторы пользователей или их короткие имена (`screen_name`). По умолчанию — идентификатор текущего пользователя.

fields

string

Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](/ru/reference/objects/user).

Доступные значения:

*   •
    
    `activities`,
    
*   •
    
    `about`,
    
*   •
    
    `blacklisted`,
    
*   •
    
    `blacklisted_by_me`,
    
*   •
    
    `books`,
    
*   •
    
    `bdate`,
    
*   •
    
    `can_be_invited_group`,
    
*   •
    
    `can_post`,
    
*   •
    
    `can_see_all_posts`,
    
*   •
    
    `can_see_audio`,
    
*   •
    
    `can_send_friend_request`,
    
*   •
    
    `can_write_private_message`,
    
*   •
    
    `career`,
    
*   •
    
    `common_count`,
    
*   •
    
    `connections`,
    
*   •
    
    `contacts`,
    
*   •
    
    `city`,
    
*   •
    
    `crop_photo`,
    
*   •
    
    `domain`,
    
*   •
    
    `education`,
    
*   •
    
    `exports`,
    
*   •
    
    `followers_count`,
    
*   •
    
    `friend_status`,
    
*   •
    
    `has_photo`,
    
*   •
    
    `has_mobile`,
    
*   •
    
    `home_town`,
    
*   •
    
    `photo_100`,
    
*   •
    
    `photo_200`,
    
*   •
    
    `photo_200_orig`,
    
*   •
    
    `photo_400_orig`,
    
*   •
    
    `photo_50`,
    
*   •
    
    `sex`,
    
*   •
    
    `site`,
    
*   •
    
    `schools`,
    
*   •
    
    `screen_name`,
    
*   •
    
    `status`,
    
*   •
    
    `verified`,
    
*   •
    
    `games`,
    
*   •
    
    `interests`,
    
*   •
    
    `is_favorite`,
    
*   •
    
    `is_friend`,
    
*   •
    
    `is_hidden_from_feed`,
    
*   •
    
    `last_seen`,
    
*   •
    
    `maiden_name`,
    
*   •
    
    `military`,
    
*   •
    
    `movies`,
    
*   •
    
    `music`,
    
*   •
    
    `nickname`,
    
*   •
    
    `occupation`,
    
*   •
    
    `online`,
    
*   •
    
    `personal`,
    
*   •
    
    `photo_id`,
    
*   •
    
    `photo_max`,
    
*   •
    
    `photo_max_orig`,
    
*   •
    
    `quotes`,
    
*   •
    
    `relation`,
    
*   •
    
    `relatives`,
    
*   •
    
    `timezone`,
    
*   •
    
    `tv`,
    
*   •
    
    `universities`,
    
*   •
    
    `is_verified`.
    

name\_case

string

Падеж для склонения имени и фамилии пользователя. Возможные значения:

*   •
    
    именительный – `nom`,
    
*   •
    
    родительный – `gen`,
    
*   •
    
    дательный – `dat`,
    
*   •
    
    винительный – `acc`,
    
*   •
    
    творительный – `ins`,
    
*   •
    
    предложный – `abl`.
    

По умолчанию `nom`.

from\_group\_id

integer

Параметр устарел и больше не используется.

Поля `counters`, `military` будут возвращены только в случае, если передан ровно один `user_id`.

## [](#Результат)Результат

После успешного выполнения возвращает массив объектов [пользователей](/ru/reference/objects/user).

## [](<#Коды ошибок>)Коды ошибок

В ходе выполнения могут произойти [общие ошибки](/ru/reference/errors)