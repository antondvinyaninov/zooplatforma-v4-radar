# Документация VK: https://dev.vk.com/ru/reference/objects/market-order

# Заказ

Объект, содержащий информацию о заказе.

## [](#id)`id`

`integer` Идентификатор заказа.

## [](#group_id)`group_id`

`integer` Идентификатор сообщества.

## [](#user_id)`user_id`

`integer` Идентификатор покупателя.

## [](#date)`date`

`integer` Дата создания заказа в формате Unixtime.

## [](#variants_grouping_id)`variants_grouping_id`

`integer` Идентификатор группы вариантов.

## [](#is_main_variant)`is_main_variant`

`bool` Является ли вариант основным.

## [](#property_values)`property_values`

`array` Массив объектов, каждый из которых может содержать поля:

*   •
    
    `variant_id` (`integer`) — идентификатор варианта;
    
*   •
    
    `variant_name` (`string`) — название варианта;
    
*   •
    
    `property_name` (`string`) — название свойства.
    

## [](#cart_quantity)`cart_quantity`

`integer` Количество товара в корзине.

## [](#status)`status`

`integer` Статус заказа:

*   •
    
    `0` - Новый,
    
*   •
    
    `1` - Согласуется,
    
*   •
    
    `2` - Собирается,
    
*   •
    
    `3` - Доставляется,
    
*   •
    
    `4` - Выполнен,
    
*   •
    
    `5` - Отменен,
    
*   •
    
    `6` - Возвращен.
    

## [](#items_count)`items_count`

`integer` Количество товаров в заказе.

## [](#total_price)`total_price`

`object` Общая стоимость заказа. Объект, который содержит поля:

*   •
    
    `amount` (`string`) — стоимость в сотых долях единицы валюты.
    
*   •
    
    `currency` (`object`) — валюта. Объект, содержащий поля:
    
    *   •
        
        `id` (`integer`) — идентификатор валюты;
        
    *   •
        
        `name`(`string`) — обозначение валюты;
        
    
*   •
    
    `text` (`string`) — строковое представление стоимости заказа.
    

## [](#display_order_id)`display_order_id`

`string` Номер заказа, состоящий из идентификатора покупателя и идентификатора заказа.

## [](#comment)`comment`

`string` Комментарий к заказу.

## [](#preview_order_items)`preview_order_items`

`Array` Массив объектов, описывающих [товары](/ru/reference/objects/market-item). Возвращается не больше 5 случайных товаров заказа.

## [](#delivery)`delivery`

`object` Информация о доставке. Объект, который содержит поля:

*   •
    
    `address` (`string`) — адрес доставки.
    
*   •
    
    `type` (`string`) — тип доставки.
    
*   •
    
    `track_number` (`string`) — трек-номер для отслеживания заказа.
    
*   •
    
    `track_link` (`string`) — ссылка для отслеживания заказа по трек-номеру.
    
*   •
    
    `delivery_point` (`object`) — информация о пункте выдачи.
    

## [](#recipient)`recipient`

`object` Информация о покупателе. Объект, который содержит поля:

*   •
    
    `name` (`string`) — имя покупателя.
    
*   •
    
    `phone` (`string`) — номер покупателя.
    
*   •
    
    `display_text` (`string`) — строковое представление информации о покупателе.