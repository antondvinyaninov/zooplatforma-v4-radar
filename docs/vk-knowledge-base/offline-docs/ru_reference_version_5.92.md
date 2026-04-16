# Документация VK: https://dev.vk.com/ru/reference/version/5.92

[Версии API](/ru/reference/versions)

# 5.92

*   •
    
    Метод [`wall.getComments`](/ru/wall.getComments) возвращает новые поля: `comment_id (integer)`, `current_level_count (integer)`.
    
*   •
    
    Метод [`wall.createComment`](/ru/wall.createComment) возвращает новое поле `parents_stack (array)`.
    
*   •
    
    Добавлен метод [`wall.getComment`](/ru/wall.getComment).
    
*   •
    
    В объекте [комментария к записи на стене](/ru/reference/objects/comment) возвращаются новые поля: `parents_stack (array)`, `thread (object)`. Может возвращаться поле `deleted (boolean)`, говорящее о том, что комментарий был удалён.
    
*   •
    
    В [объекте сообщения](/ru/reference/objects/message) разделены ответы и пересланные сообщения (`reply_message` и `fwd_messages`).
    
*   •
    
    В объектах [записи на стене](/ru/reference/objects/post), [видеозаписи](/ru/reference/objects/video), [товара](/ru/reference/objects/market-item) может возвращаться поле `is_favorite (boolean)`.
    

### Связанные методы

[wall.getComments](/method/wall.getComments)

Возвращает список комментариев к записи на стене.

[wall.getComment](/method/wall.getComment)

Получает информацию о комментарии на стене.

[wall.createComment](/method/wall.createComment)

Добавляет комментарий к записи на стене.