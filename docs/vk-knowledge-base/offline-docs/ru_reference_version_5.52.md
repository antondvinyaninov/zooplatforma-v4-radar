# Документация VK: https://dev.vk.com/ru/reference/version/5.52

[Версии API](/ru/reference/versions)

# 5.52

Методы, возвращающие информацию о медиавложениях [сообщений](/ru/reference/objects/attachments-message) и [записей](/ru/reference/objects/attachments-wall), теперь также возвращают медиавложения типов [`market`](/ru/reference/objects/attachments-message#%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%20\(type%20=%20market\)) и [`market_album`](/ru/reference/objects/attachments-message#%D0%9F%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0%20%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2%20\(type%20=%20market_album\)).

### Связанные методы

[wall.get](/method/wall.get)

Возвращает список записей со стены пользователя или сообщества.

[wall.search](/method/wall.search)

[wall.getById](/method/wall.getById)

Возвращает список записей со стен пользователей или сообществ по их идентификаторам.

[wall.getComments](/method/wall.getComments)

Возвращает список комментариев к записи на стене.

[messages.getHistory](/method/messages.getHistory)

Возвращает историю сообщений для указанного диалога.

[messages.getById](/method/messages.getById)

Возвращает сообщения по их идентификаторам.

[messages.search](/method/messages.search)

Возвращает список найденных личных сообщений текущего пользователя по введенной строке поиска.