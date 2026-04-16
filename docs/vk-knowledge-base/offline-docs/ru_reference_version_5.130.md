# Документация VK: https://dev.vk.com/ru/reference/version/5.130

[Версии API](/ru/reference/versions)

# 5.130

*   •
    
    В методе `market.editOrder` добавлены поля, которые может изменять администратор сообщества:
    
    *   •
        
        `delivery_price` — стоимость доставки.
        
    *   •
        
        `track_number` — трек-номер.
        
    *   •
        
        `payment_status` — статус оплаты.
        
    
    Также добавлены поля для редактирования габаритов и веса заказа:
    
    *   •
        
        `width` — ширина.
        
    *   •
        
        `length` — длина.
        
    *   •
        
        `height` — высота.
        
    *   •
        
        `weight` — вес.
        
    
    Поле `merchant_comment` теперь сохраняет комментарий продавца.
    

### Связанные методы

[market.editOrder](/method/market.editOrder)

Редактирует заказ.

[messages.getById](/method/messages.getById)

Возвращает сообщения по их идентификаторам.

[messages.getHistory](/method/messages.getHistory)

Возвращает историю сообщений для указанного диалога.

[messages.getLongPollHistory](/method/messages.getLongPollHistory)

Возвращает обновления в личных сообщениях пользователя.

[messages.getConversations](/method/messages.getConversations)

Возвращает список бесед пользователя.

[messages.getConversationsById](/method/messages.getConversationsById)

Позволяет получить беседу по её идентификатору.

[wall.get](/method/wall.get)

Возвращает список записей со стены пользователя или сообщества.