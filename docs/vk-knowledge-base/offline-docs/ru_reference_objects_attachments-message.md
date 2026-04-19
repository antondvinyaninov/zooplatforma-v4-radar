# Документация VK: https://dev.vk.com/ru/reference/objects/attachments-message

# Медиавложения в личных сообщениях

Информация о медиавложениях в личных сообщениях возвращается в виде массива `attachments`. Каждый элемент массива представляет собой объект с двумя полями. Первое поле — `type` (`string`) содержит тип вложения (`photo`,`video`,`audio` и т.д.). Название второго поля совпадает со значением, переданным в `type`. Второе поле содержит объект, представляющий медиавложение. Структура объекта в этом поле зависит от его типа.

Пример объекта `attachments` для двух вложений (фото и аудио):

JSON

`[ { "type": "photo", "photo": <объект photo> }, { "type": "audio", "audio": <объект audio> } ]`

> Каждый объект может содержать дополнительное поле `access_key` — ключ доступа к контенту. [Подробнее об `access_key`](/ru/reference/objects)

## [](<#Возможные значения поля type>)Возможные значения поля `type`

`type`

Объект

Ссылка на описание   

`photo`

Фотография

[/objects/photo](/ru/reference/objects/photo)

`video`

Видеозапись

[/objects/video](/ru/reference/objects/video)

`audio`

Аудиозапись

[/objects/audio](/ru/reference/objects/audio)

`audio_message`

Голосовое сообщение

[/objects/audio-message](/ru/reference/objects/audio-message)

`doc`

Документ

[/objects/doc](/ru/reference/objects/doc)

`link`

Ссылка

[/objects/link](/ru/reference/objects/link)

`market`

Товар

[/objects/market](/ru/reference/objects/market)

`market_album`

Подборка товаров

[/objects/photo](/ru/reference/objects/market_album)

`wall`

Запись на стене. Во вложении возвращается объект [записи на стене](/ru/reference/objects/post). Обратите внимание, вместо поля `owner_id` возвращается `to_id`.

[/objects/wall](/ru/reference/objects/wall)

`wall_reply`

Комментарий на стене. Во вложении возвращается объект [комментария на стене](/ru/reference/objects/comment) с дополнительными полями:    • `post_id`(`integer`) — идентификатор записи, к которой оставлен комментарий;    • `owner_id`(`integer`) — идентификатор владельца стены, на которой оставлен комментарий.

[/objects/wall\_reply](/ru/reference/objects/wall_reply)

`sticker`

Стикер

[/objects/photo](/ru/reference/objects/photo)

`gift-item`

Подарок

[/objects/gift-item](/ru/reference/objects/gift-item)

`call`

Звонок. Возвращается для версии 5.80 и выше.

[/objects/call](/ru/reference/objects/call)