# Документация VK: https://dev.vk.com/ru/reference/version/5.137

[Версии API](/ru/reference/versions)

# 5.137

*   •
    
    В методе `newsfeed.ignoreItem` изменился формат ответа. Теперь в `response` возвращаются поля `status` (обязательное, `boolean`) и `message` (необязательное, `string`) с сообщением о скрытии блока.