# Документация VK: https://dev.vk.com/ru/reference/version/5.131

[Версии API](/ru/reference/versions)

# 5.131

*   •
    
    В методах `market.add` и `market.edit` добавлено поле `sku`  — артикул товара.
    
*   •
    
    В методах `market.getOrderItems`, `market.getOrderById` и `market.get` в объект `item` добалено поле `sku`, обозначающее артикул товара.
    
*   •
    
    В методе `market.getOrderItems` добавлен новый опциональный параметр `user_id`. При этом метод сохраняет предыдущую логику поведения при отсутствии указания `user_id`.
    

### Связанные методы

[market.add](/method/market.add)

Метод добавляет новый товар.

[market.edit](/method/market.edit)

Метод редактирует информацию о товаре.

[market.getOrderItems](/method/market.getOrderItems)

Возвращает товары в заказе.

[market.getOrderById](/method/market.getOrderById)

Возвращает заказ по идентификатору.

[market.get](/method/market.get)

Возвращает список товаров в сообществе.