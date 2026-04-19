# Документация VK: https://dev.vk.com/ru/reference/version/5.54

[Версии API](/ru/reference/versions)

# 5.54

Если в параметрах вызова метода не была указана дата окончания, возвращаемые объекты, которые описывают [сообщество](/ru/reference/objects/group), теперь не содержат поле `finish_data`. Ранее это поле присутствовало в ответе и содержало по умолчанию, равное `start_date` + 2 часа.

### Связанные методы

[groups.getById](/method/groups.getById)

Возвращает информацию о заданном сообществе или о нескольких сообществах.

[groups.get](/method/groups.get)

Возвращает список сообществ указанного пользователя.

[groups.search](/method/groups.search)

Осуществляет поиск сообществ по заданной подстроке.

[users.getSubscriptions](/method/users.getSubscriptions)

[newsfeed.get](/method/newsfeed.get)

:::note \*\*27 августа 2025 года мы отключили фильтр \`friend\` и источник \`list\`\*\* \[Подробнее\](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed) ::: Возвращает данные, необходимые для показа списка новостей для текущего пользователя.

[newsfeed.getRecommended](/method/newsfeed.getRecommended)

:::note \*\*С 27 августа 2025 гогда метод не работает\*\* Удалите его из кода, чтобы избежать ошибок. \[Подробнее\](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed) ::: Получает список новостей, рекомендованных пользователю.

[newsfeed.getComments](/method/newsfeed.getComments)

:::note \*\*С 27 августа 2025 года метод не работает\*\* Удалите его из кода, чтобы избежать ошибок. \[Подробнее\](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed) ::: Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.

[newsfeed.getBanned](/method/newsfeed.getBanned)

Возвращает список пользователей и групп, которые текущий пользователь скрыл из ленты новостей.

[newsfeed.search](/method/newsfeed.search)

Возвращает результаты поиска по статусам. Новости возвращаются в порядке от более новых к более старым.

[newsfeed.getSuggestedSources](/method/newsfeed.getSuggestedSources)

Возвращает сообщества и пользователей, на которые текущему пользователю рекомендуется подписаться.

[photos.getComments](/method/photos.getComments)

Возвращает список комментариев к фотографии.

[video.get](/method/video.get)

Метод возвращает информацию о видеозаписях.

[video.search](/method/video.search)

Метод получает список видеозаписей в соответствии с заданными критериями поиска.

[video.getUserVideos](/method/video.getUserVideos)

[video.getComments](/method/video.getComments)

Возвращает список комментариев к видеозаписи.

[wall.get](/method/wall.get)

Возвращает список записей со стены пользователя или сообщества.

[wall.search](/method/wall.search)

[wall.getById](/method/wall.getById)

Возвращает список записей со стен пользователей или сообществ по их идентификаторам.