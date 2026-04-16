# Документация VK: https://dev.vk.com/ru/reference/version/5.102

[Версии API](/ru/reference/versions)

# 5.102

*   •
    
    В методах секции [`messages.*`](/ru/method/messages) доступен метод для получения [материалов диалога или беседы](/ru/reference/objects/story-feed-item).
    
*   •
    
    Сообщения, которые не помещаются в Bots Long Poll API или Callback API, обрезаются и имеют пометку `is_cropped`. В случае обрезания остается одно пересланное сообщение или ответ и только одно вложение на каждое сообщение.
    
*   •
    
    Для методов [`ads.createTargetGroup`](/ru/method/ads.createTargetGroup) и [`ads.updateTargetGroup`](/ru/method/ads.updateTargetGroup) параметр `lifetime` стал обязательным. Параметр принимает значения от `1` до `720`.
    
*   •
    
    Истории в методе [`stories.get`](/ru/method/stories.get) в рамках одного автора теперь приходят в хронологическом порядке. Раньше приходили в обратном.
    
*   •
    
    В методы [`stories.getPhotoUploadServer`](/ru/method/stories.getPhotoUploadServer) и [`stories.getVideoUploadServer`](/ru/method/stories.getVideoUploadServer) добавлен параметр `clickable_stickers`.
    

### Связанные методы

[ads.createTargetGroup](/method/ads.createTargetGroup)

Создаёт аудиторию для ретаргетинга рекламных объявлений на пользователей, которые посетили сайт рекламодателя (просмотрели информации о товаре, зарегистрировались и т.д.).

[ads.updateTargetGroup](/method/ads.updateTargetGroup)

Редактирует аудиторию ретаргетинга.

[stories.get](/method/stories.get)

Возвращает истории, доступные для текущего пользователя.

[stories.getVideoUploadServer](/method/stories.getVideoUploadServer)

Метод получает адрес сервера для \[загрузки изображения в историю\](api/upload/story-in-profile).

[stories.getPhotoUploadServer](/method/stories.getPhotoUploadServer)

Метод получает адрес сервера для \[загрузки изображения в историю\](api/upload/story-in-profile).