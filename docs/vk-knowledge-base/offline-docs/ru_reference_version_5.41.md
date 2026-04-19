# Документация VK: https://dev.vk.com/ru/reference/version/5.41

[Версии API](/ru/reference/versions)

# 5.41

*   •
    
    Метод `notifications.get` возвращает уведомления о новых ответах к комментариям в товарах.
    
*   •
    
    Метод `newsfeed.getComments` возвращает комментарии к товарам.
    
*   •
    
    Методы `wall.get`, `wall.search` и `wall.getById` теперь возвращают объекты [`market_album`](/ru/reference/objects/market-album) в [медиавложениях](/ru/reference/objects/attachments-message).
    

### Связанные методы

[notifications.get](/method/notifications.get)

Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.

[newsfeed.getComments](/method/newsfeed.getComments)

:::note \*\*С 27 августа 2025 года метод не работает\*\* Удалите его из кода, чтобы избежать ошибок. \[Подробнее\](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed) ::: Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.

[wall.get](/method/wall.get)

Возвращает список записей со стены пользователя или сообщества.

[wall.search](/method/wall.search)

[wall.getById](/method/wall.getById)

Возвращает список записей со стен пользователей или сообществ по их идентификаторам.