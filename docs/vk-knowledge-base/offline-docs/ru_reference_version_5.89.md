# Документация VK: https://dev.vk.com/ru/reference/version/5.89

[Версии API](/ru/reference/versions)

# 5.89

В [объекте пользователя](/ru/reference/objects/user) добавлены новые обязательные поля:

*   •
    
    `is_closed (boolean)` — включена ли приватность профиля.
    
*   •
    
    `can_access_closed (boolean)` — есть ли у текущего пользователя возможность видеть профиль пользователя при `is_closed = true`.
    

### Связанные методы

[users.get](/method/users.get)

Метод позволяет получить информацию о пользователях.

[users.search](/method/users.search)

Возвращает список пользователей в соответствии с заданным критерием поиска.