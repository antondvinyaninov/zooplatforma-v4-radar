# Документация VK: https://dev.vk.com/ru/reference/version/5.67

[Версии API](/ru/reference/versions)

# 5.67

*   •
    
    В метод `wall.createComment` добавлен новый параметр `from_group`. Он позволяет указать идентификатор сообщества, от лица которого будет опубликован комментарий.
    
*   •
    
    Метод `messages.getChat` не добавляет в возвращаемые объекты [`chat`](/ru/reference/objects/chat) поле `users`, если оно пустое.
    

### Связанные методы

[wall.createComment](/method/wall.createComment)

Добавляет комментарий к записи на стене.

[messages.getChat](/method/messages.getChat)

Возвращает информацию о беседе.