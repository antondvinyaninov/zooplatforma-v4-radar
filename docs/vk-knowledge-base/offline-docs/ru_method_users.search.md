# Документация VK: https://dev.vk.com/ru/method/users.search

[users](/ru/method/users)

# users.search

Возвращает список пользователей в соответствии с заданным критерием поиска.

Для вызова метода можно использовать:

• [ключ доступа пользователя](/ru/api/access-token/getting-started#Ключ%20доступа%20пользователя)

## [](#Параметры)Параметры

q

string

Строка поискового запроса. Например, `Вася Бабич`.

sort

integer

Сортировка результатов. Возможные значения:

*   •
    
    `1` — по дате регистрации,
    
*   •
    
    `0` — по популярности.
    

offset

positive

Смещение относительно первого найденного пользователя для выборки определенного подмножества.

count

positive

Количество возвращаемых пользователей.

> Обратите внимание, даже при использовании параметра `offset` для получения информации доступны только первые 1000 результатов.

fields

string

Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](/ru/reference/objects/user). Доступные значения:

*   •
    
    `about`,
    
*   •
    
    `activities`,
    
*   •
    
    `bdate`,
    
*   •
    
    `blacklisted`,
    
*   •
    
    `blacklisted_by_me`
    
*   •
    
    `books`,
    
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
    
    `city`,
    
*   •
    
    `common_count`,
    
*   •
    
    `connections`,
    
*   •
    
    `contacts`,
    
*   •
    
    `country`,
    
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
    
    `games`,
    
*   •
    
    `has_mobile`,
    
*   •
    
    `has_photo`,
    
*   •
    
    `home_town`,
    
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
    
    `lists`,
    
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
    
    `schools`,
    
*   •
    
    `screen_name`,
    
*   •
    
    `sex`,
    
*   •
    
    `site`,
    
*   •
    
    `status`,
    
*   •
    
    `timezone`,
    
*   •
    
    `tv`,
    
*   •
    
    `universities`,
    
*   •
    
    `verified`,
    
*   •
    
    `wall_comments`.
    

city

positive

Идентификатор города.

city\_id

positive

Идентификатор города для обратной совместимости. Используйте city

country

positive

Идентификатор страны.

country\_id

positive

Идентификатор страны для обратной совместимости. Используйте country

hometown

string

Название города строкой.

university\_country

positive

Идентификатор страны, в которой пользователи закончили ВУЗ.

university

positive

Идентификатор ВУЗа.

university\_year

positive

Год окончания ВУЗа.

university\_faculty

positive

Идентификатор факультета.

university\_chair

positive

Идентификатор кафедры.

sex

positive

Пол. Возможные значения:

*   •
    
    `1` — женщина,
    
*   •
    
    `2` — мужчина,
    
*   •
    
    `0` — любой (по умолчанию).
    

status

positive

Семейное положение. Возможные значения:

*   •
    
    `1` — не женат (не замужем),
    
*   •
    
    `2` — встречается,
    
*   •
    
    `3` — помолвлен(-а),
    
*   •
    
    `4` — женат (замужем),
    
*   •
    
    `5` — всё сложно,
    
*   •
    
    `6` — в активном поиске,
    
*   •
    
    `7` — влюблен(-а),
    
*   •
    
    `8` — в гражданском браке.
    

age\_from

positive

Возраст, от.

age\_to

positive

Возраст, до.

birth\_day

positive

День рождения.

birth\_month

positive

Месяц рождения.

birth\_year

positive

Год рождения.

online

checkbox

Учитывать ли статус «онлайн». Возможные значения:

*   •
    
    `1` — искать только пользователей онлайн,
    
*   •
    
    `0` — искать по всем пользователям.
    

has\_photo

checkbox

Учитывать ли наличие фото. Возможные значения:

*   •
    
    `1` — искать только пользователей с фотографией,
    
*   •
    
    `0` — искать по всем пользователям.
    

school\_country

positive

Идентификатор страны, в которой пользователи закончили школу.

school\_city

positive

Идентификатор города, в котором пользователи закончили школу.

school\_class

positive

Буква класса.

school

positive

Идентификатор школы, которую закончили пользователи.

school\_year

positive

Год окончания школы.

religion

string

Религиозные взгляды.

company

string

Название компании, в которой работают пользователи.

position

string

Название должности.

group\_id

integer

Идентификатор группы, среди пользователей которой необходимо проводить поиск.

from\_list

string

Разделы среди которых нужно осуществить поиск, перечисленные через запятую. Возможные значения:

*   •
    
    `friends` — искать среди друзей,
    
*   •
    
    `subscriptions` — искать среди друзей и подписок пользователя.
    

screen\_ref

string

Реферер, откуда был вызван метод

from\_group\_id

integer

## [](#Результат)Результат

После успешного выполнения возвращает объект, содержащий число результатов в поле `count` и массив [объектов, описывающих пользователей](/ru/reference/objects/user) в поле `items`.

## [](<#Коды ошибок>)Коды ошибок

В ходе выполнения могут произойти [общие ошибки](/ru/reference/errors)