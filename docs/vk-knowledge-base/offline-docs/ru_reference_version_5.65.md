# Документация VK: https://dev.vk.com/ru/reference/version/5.65

[Версии API](/ru/reference/versions)

# 5.65

*   •
    
    В метод `auth.restore` добавлен обязательный параметр `last_name`.
    
*   •
    
    В метод `messages.getLongPollServer` добавлен параметр `lp_version`.
    
*   •
    
    Метод `ads.getCategories` возвращает результат в новом формате.
    
*   •
    
    Метод `wall.edit` больше нельзя использовать для редактирования рекламной записи, вместо него нужно использовать метод `wall.editAdsStealth`.
    
*   •
    
    Методы `audio.getAlbums`, `audio.addAlbum`, `audio.editAlbum`, `audio.deleteAlbum` и `audio.moveToAlbum` устарели.
    

### Связанные методы

[audio.addAlbum](/method/audio.addAlbum)

Создает пустой альбом аудиозаписей.

[audio.editAlbum](/method/audio.editAlbum)

[audio.deleteAlbum](/method/audio.deleteAlbum)

[messages.getLongPollServer](/method/messages.getLongPollServer)

Возвращает данные, необходимые для \[подключения к Long Poll серверу\](api/user-long-poll/getting-started).