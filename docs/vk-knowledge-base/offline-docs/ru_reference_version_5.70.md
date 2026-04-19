# Документация VK: https://dev.vk.com/ru/reference/version/5.70

[Версии API](/ru/reference/versions)

# 5.70

*   •
    
    В поле `action` объекта [сообщения](/ru/reference/objects/message) может возвращаться значение `chat_invite_user_by_link`.
    
*   •
    
    В объекте [сообщения](/ru/reference/objects/message) добавлено поле `update_time`.
    
*   •
    
    Методы [`wall.post`](/ru/wall.post), [`wall.editAdsStealth`](/ru/wall.editAdsStealth), [`wall.edit`](/ru/wall.edit), [`wall.repost`](/ru/wall.repost) могут возвращать новую ошибку `224` — превышен лимит рекламных записей.
    
*   •
    
    В Callback API добавлено новое событие — `message_edit`.
    

### Связанные методы

[wall.post](/method/wall.post)

:::note \*\*27 августа 2025 года параметры метода изменились\*\* \[Подробнее\](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed) ::: Метод позволяет: \* Создать запись на стене. \* Предложить запись на стене публичной страницы. \* Опубликовать существующую отложенную запись.

[wall.editAdsStealth](/method/wall.editAdsStealth)

Позволяет отредактировать скрытую запись.

[wall.edit](/method/wall.edit)

:::note \*\*27 августа 2025 года параметры метода изменились\*\* \[Подробнее\](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed) ::: Редактирует запись на стене.

[wall.repost](/method/wall.repost)

Метод позволяет сделать репост — скопировать запись на стену пользователя или сообщества.

[groups.getCallbackSettings](/method/groups.getCallbackSettings)

Позволяет получить настройки уведомлений \[Callback API\](api/callback/getting-started) для сообщества.

[groups.setCallbackSettings](/method/groups.setCallbackSettings)

Позволяет задать настройки уведомлений о событиях в \[Callback API\](api/callback/getting-started).