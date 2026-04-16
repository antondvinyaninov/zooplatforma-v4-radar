# Документация VK: https://dev.vk.com/ru/reference/version/5.90

[Версии API](/ru/reference/versions)

# 5.90

*   •
    
    Метод [`account.getBanned`](/ru/account.getBanned) возвращает поля `profiles (array)` и `groups (array)` с данными [пользователей](/ru/reference/objects/user) и [сообществ](/ru/reference/objects/group).
    
*   •
    
    Добавлен новый формат ответа метода [`docs.save`](/ru/docs.save).
    
*   •
    
    Параметр `random_id` в методе [`messages.send`](/ru/messages.send) теперь обязательный.
    

### Связанные методы

[messages.send](/method/messages.send)

Метод отправляет сообщение.

[docs.save](/method/docs.save)

Метод сохраняет файл после его успешной \[загрузки на сервер\](api/upload/document-in-profile).