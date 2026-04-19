# Документация VK: https://dev.vk.com/ru/reference/version/5.46

[Версии API](/ru/reference/versions)

# 5.46

*   •
    
    Методы `messages.send` и `messages.sendSticker` теперь используют параметр `random_id` вместо `guid`.
    
*   •
    
    Метод `account.getPushSettings` возвращает поле `peer_id` вместо параметров `chat_id` и `user_id`.
    
*   •
    
    Метод `account.setSilenceMode` принимает параметр `peer_id` вместо параметров `chat_id` и `user_id`.
    
*   •
    
    Метод `messages.getHistoryAttachments` возвращает товары, записи со стены и комментарии в виде ссылок.
    

### Связанные методы

[messages.send](/method/messages.send)

Метод отправляет сообщение.

[messages.getHistoryAttachments](/method/messages.getHistoryAttachments)

Возвращает материалы диалога или беседы.