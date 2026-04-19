# Документация VK: https://dev.vk.com/ru/reference/version/5.84

[Версии API](/ru/reference/versions)

# 5.84

*   •
    
    Метод [`messages.getChatPreview`](/ru/messages.getChatPreview) теперь возвращает максимум 5 участников из чата. Метод [`messages.getConversationMembers`](/ru/messages.getConversationMembers) возвращает поле `can_kick (boolean)` для участников беседы.
    
*   •
    
    В объекте [записи на стене](/ru/reference/objects/post) для комментариев могут вернуться поля `can_close` (boolean) и `can_open (boolean)`.
    

### Связанные методы

[messages.getChatPreview](/method/messages.getChatPreview)

Получает данные для превью чата с приглашением по ссылке.

[messages.getConversationMembers](/method/messages.getConversationMembers)

Метод получает список участников беседы.

[wall.get](/method/wall.get)

Возвращает список записей со стены пользователя или сообщества.

[wall.getById](/method/wall.getById)

Возвращает список записей со стен пользователей или сообществ по их идентификаторам.

[wall.getComments](/method/wall.getComments)

Возвращает список комментариев к записи на стене.