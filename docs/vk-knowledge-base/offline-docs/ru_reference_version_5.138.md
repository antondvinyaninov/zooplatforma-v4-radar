# Документация VK: https://dev.vk.com/ru/reference/version/5.138

[Версии API](/ru/reference/versions)

# 5.138

*   •
    
    В методе `wall.getById` изменён формат ответа, если параметр `extended` имеет значение `0`: теперь для однородности результат обёрнут в поле `items`, как в случае запроса с параметром `extended`, равным `1`.
    
*   •
    
    В методе `messages.send` параметр `user_ids` помечен как deprecated. Используйте вместо него параметр `peer_ids`.