# Документация VK: https://dev.vk.com/ru/reference/objects

# Список объектов

Некоторые объекты используются сразу в целых группах методов. Ниже представлены ссылки на страницы с подробным описанием структуры таких объектов.

## [](<#Ключ доступа к данным \(access_key\)>)Ключ доступа к данным (`access_key`)

При получении объектов, прямого доступа к которым может не быть, например, фотографий или видео в новостях, вместе с объектами приходит поле `access_key`, которое необходимо передавать при получении этих объектов напрямую или при совершении с ними действий.

Например, поле `access_key` принимают методы: [`video.get`](/ru/method/video.get), [`photos.getById`](/ru/method/photos.getById).

`access_key` нужно добавить к строковому идентификатору объекта через символ подчёркивания:

`123456_654312_6d103522bc13b790c5  `

## [](<#Основные объекты>)Основные объекты

Объект

Пример использования

[Пользователь](/ru/reference/objects/user)

[`users.get`](/ru/method/users.get)

[Сообщество](/ru/reference/objects/group)

[`groups.get`](/ru/method/groups.get)

[Запись на стене](/ru/reference/objects/post)

[`wall.get`](/ru/method/wall.get)

[Комментарий на стене](/ru/reference/objects/comment)

[`wall.getComments`](/ru/method/wall.getComments)

[Личное сообщение](/ru/reference/objects/message)

[`messages.getById`](/ru/method/messages.getById)

[Беседа](/ru/reference/objects/conversation)

[`messages.getConversationsById`](/ru/method/messages.getConversationsById)

[Чат](/ru/reference/objects/chat)

[`messages.getChat`](/ru/method/messages.getChat)

[Вики-страница](/ru/reference/objects/wiki-page)

[`pages.get`](/ru/method/pages.get)

[Товар](/ru/reference/objects/market-item)

[`market.get`](/ru/method/market.get)

[Подборка товаров](/ru/reference/objects/market-album)

[`market.getAlbums`](/ru/method/market.getAlbums)

[Заказ](/ru/reference/objects/market-order)

[`market.getOrders`](/ru/method/market.getOrders)

[Обсуждение](/ru/reference/objects/topic)

[`board.getTopics`](/ru/method/board.getTopics)

[Комментарий в обсуждении](/ru/reference/objects/comment-topic)

[`board.getComments`](/ru/method/board.getComments)

[Приложение](/ru/reference/objects/app)

[`apps.get`](/ru/method/apps.get)

[Опрос](/ru/reference/objects/poll)

[`polls.getById`](/ru/method/polls.getById)

[Данные статистики](/ru/reference/objects/stats-format)

[`stats.get`](/ru/method/stats.get)

[Адрес](/ru/reference/objects/address)

[`groups.getAddresses`](/ru/method/groups.getAddresses)

## [](<#Медиаконтент и вложения>)Медиаконтент и вложения

Объект

Пример использования

[Фотография](/ru/reference/objects/photo)

[`photos.get`](/ru/method/photos.get)

[Аудиозапись](/ru/reference/objects/audio)

—

[Видеозапись](/ru/reference/objects/video)

[`video.get`](/ru/method/video.get)

[Файл](/ru/reference/objects/doc)

[`docs.get`](/ru/method/docs.get)

[Медиавложения в записях на стене](/ru/reference/objects/attachments-wall)

[`wall.get`](/ru/method/wall.get)

[Медиавложения в личных сообщениях](/ru/reference/objects/attachments-message)

[`messages.getById`](/ru/method/messages.getById)

[Прикрепленная ссылка](/ru/reference/objects/link)

[`wall.get`](/ru/method/wall.get)

[Стикер](/ru/reference/objects/sticker)

[`messages.getById`](/ru/method/messages.getById)

[Подарок](/ru/reference/objects/gift-item)

[`gifts.get`](/ru/method/gifts.get)

[Геометка](/ru/reference/objects/geo)

[`messages.getById`](/ru/method/messages.getById)

[Виджеты приложений сообществ](/ru/reference/objects/app-widget)

[`appWidgets.update`](/ru/method/appWidgets.update)

[История](/ru/reference/objects/story)

[`stories.get`](/ru/method/stories.get)

[Блок ленты историй](/ru/reference/objects/story-feed-item)

[`stories.get`](/ru/method/stories.get)

[Кликабельный стикер в истории](/ru/reference/objects/clickable-sticker)

[`stories.getPhotoUploadServer`](/ru/method/stories.getPhotoUploadServer)

[Граффити](/ru/reference/objects/graffiti)

—

[Звонок](/ru/reference/objects/call)

—

## [](<#Вспомогательные объекты и наборы значений>)Вспомогательные объекты и наборы значений

Объект

Пример использования

[Жанры аудиозаписей](/ru/reference/objects/audio-genres)

—

[Источник записи](/ru/reference/objects/post-source)

[`wall.getById`](/ru/method/wall.getById)

[Кнопка](/ru/reference/objects/button)

—

[Место](/ru/reference/objects/place)

—

[Настройки приватности](/ru/reference/objects/privacy)

[`photos.getAlbums`](/ru/method/photos.getAlbums)

[Приложение из магазина](/ru/reference/objects/application)

—

[Продукт](/ru/reference/objects/product)

—

[Рейтинг продукта](/ru/reference/objects/rating)

—

[Формат описания размеров фотографии](/ru/reference/objects/photo-sizes)

[`photos.get`](/ru/method/photos.get)

[Цена](/ru/reference/objects/price)

—

[Эпизод подкаста](/ru/reference/objects/podcast-episode)

—