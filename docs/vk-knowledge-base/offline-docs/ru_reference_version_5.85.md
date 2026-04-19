# Документация VK: https://dev.vk.com/ru/reference/version/5.85

[Версии API](/ru/reference/versions)

# 5.85

*   •
    
    В объекте [приложения](/ru/reference/objects/app) в поле `type` приходят новые значения.
    
    *   •
        
        `app` — социальное приложение.
        
    *   •
        
        `game` — игра.
        
    *   •
        
        `site` — подключенный сайт.
        
    *   •
        
        `standalone` — отдельное приложение (для мобильного устройства).
        
    *   •
        
        `vk_app` — мини-приложение.
        
    *   •
        
        `community_app` — приложение сообщества.
        
    *   •
        
        `html5_game` — HTML5 игра.
        
    
*   •
    
    В объекте приложения больше не приходит поле `is_html5_app`.
    
*   •
    
    Метод [`messages.getConversationMembers`](/ru/messages.getConversationMembers) возвращает новую ошибку `917`.
    
*   •
    
    Изменения в API опросов:
    
    *   •
        
        Новый формат [объекта опроса](/ru/reference/objects/poll).
        
    *   •
        
        Метод [`polls.create`](/ru/polls.create) поддерживает новые параметры для опросов с мультивыбором и фоном.
        
    
*   •
    
    В методе [`groups.getLongPollServer`](/ru/groups.getLongPollServer) изменился тип поля `ts` — теперь это `string`, а не `integer`.
    

### Связанные методы

[apps.get](/method/apps.get)

Метод возвращает данные о приложениях.

[polls.create](/method/polls.create)

Позволяет создавать опросы, которые впоследствии можно прикреплять к записям на странице пользователя или сообщества.

[polls.getById](/method/polls.getById)

Возвращает детальную информацию об опросе по его идентификатору.

[messages.getConversationMembers](/method/messages.getConversationMembers)

Метод получает список участников беседы.

[groups.getLongPollServer](/method/groups.getLongPollServer)

Возвращает данные для подключения к \[Bots Longpoll API\](api/bots-long-poll/getting-started).