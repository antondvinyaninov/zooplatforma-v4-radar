# Документация VK: https://dev.vk.com/ru/reference/version/5.63

[Версии API](/ru/reference/versions)

# 5.63

*   •
    
    В объекты, описывающие [запись на стене](/ru/reference/objects/post), добавлено поле `views`, которое содержит количество просмотров записи.
    
*   •
    
    В методы `wall.getComments` и `video.getComments` добавлен параметр `fields`.
    
*   •
    
    Метод `utils.getShortLink` возвращает новый тип объекта, описывающего ссылку. Этот объект содержит следующие поля:
    
    *   •
        
        `access_key` — ключ для доступа к приватной статистике ссылки.
        
    *   •
        
        `key` — содержательная часть ссылки, то есть та, что идёт после "vk.cc".
        
    *   •
        
        `url` — оригинальный URL.
        
    

### Связанные методы

[wall.getComments](/method/wall.getComments)

Возвращает список комментариев к записи на стене.

[video.getComments](/method/video.getComments)

Возвращает список комментариев к видеозаписи.

[utils.getShortLink](/method/utils.getShortLink)

Позволяет получить URL, сокращённый с помощью vk.cc.

[likes.getList](/method/likes.getList)

Метод получает список идентификаторов пользователей, которые поставили у заданного объекта отметку «Нравится».

[wall.get](/method/wall.get)

Возвращает список записей со стены пользователя или сообщества.