# Документация VK: https://dev.vk.com/ru/reference/version/5.64

[Версии API](/ru/reference/versions)

# 5.64

*   •
    
    В ответ метода `messages.getDialogs` добавлены поля `unanswered` и `important`. Они используются в объектах, описывающих сообщения сообществ.
    
*   •
    
    В ответ метода `groups.getCallbackSettings` добавлено поле `wall_repost`, которое содержит информацию о настройках уведомления о репосте.
    
*   •
    
    Метод `video.save` возвращает ошибку `15`, если в вызове указан параметр `wallpost = 1`, и приложение не запрашивало права доступа **wall**.
    

### Связанные методы

[groups.getCallbackSettings](/method/groups.getCallbackSettings)

Позволяет получить настройки уведомлений \[Callback API\](api/callback/getting-started) для сообщества.

[video.save](/method/video.save)

Метод получает адрес сервера, на который необходимо \[загрузить\](api/upload/video-in-profile) видео, а также данные этого видео. :::note \*\*Примечание.\*\* Приложение может вызвать этот метод не более 5&nbsp;000 раз в сутки. :::