# Документация VK: https://dev.vk.com/ru/reference/version/5.48

[Версии API](/ru/reference/versions)

# 5.48

*   •
    
    Метод `messages.getHistory` принимает параметр `rev` вместе с `start_message_id` равный `0`.
    
*   •
    
    Метод `friends.edit` возвращает ошибку `"Code: 100, Message: invalid list_ids"`, если указан неправильный `list_ids`.
    

### Связанные методы

[messages.getHistory](/method/messages.getHistory)

Возвращает историю сообщений для указанного диалога.