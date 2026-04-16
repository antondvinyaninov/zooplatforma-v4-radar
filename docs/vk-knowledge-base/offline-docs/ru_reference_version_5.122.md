# Документация VK: https://dev.vk.com/ru/reference/version/5.122

[Версии API](/ru/reference/versions)

# 5.122

*   •
    
    В объекте товара поля `date` и `views_count` теперь возвращаются только администратору группы, которой принадлежит товар.
    
*   •
    
    В объекте [заказа](/ru/reference/objects/market-order) информация о доставке и заказчике вынесена из основного объекта в новые вложенные объекты: `delivery` и `recepient`.
    

### Связанные методы

[market.getById](/method/market.getById)

Возвращает информацию о товарах по идентификаторам.

[market.getGroupOrders](/method/market.getGroupOrders)

Возвращает заказы сообщества.

[market.get](/method/market.get)

Возвращает список товаров в сообществе.

[market.getOrderById](/method/market.getOrderById)

Возвращает заказ по идентификатору.