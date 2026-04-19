# Документация VK: https://dev.vk.com/ru/reference/version/5.68

[Версии API](/ru/reference/versions)

# 5.68

*   •
    
    В объекте [записи на стене](/ru/reference/objects/post) добавлено поле `groups_can_post` с информацией о том, могут ли сообщества комментировать запись.
    
*   •
    
    Метод [`messages.send`](/ru/messages.send) возвращает массив статусов отправки при использовании параметра `user_ids` и вызове с ключом доступа сообщества.
    
*   •
    
    Методы [`groups.getCallbackServerSettings`](/ru/groups.getCallbackServerSettings), `groups.setCallbackServerSettings` и `groups.setCallbackServer` устарели.
    
*   •
    
    В методах [`groups.setCallbackSettings`](/ru/groups.setCallbackSettings), [`groups.getCallbackSettings`](/ru/groups.getCallbackSettings) добавлен параметр `server_id`.
    

### Связанные методы

[messages.send](/method/messages.send)

Метод отправляет сообщение.

[groups.getCallbackServerSettings](/method/groups.getCallbackServerSettings)