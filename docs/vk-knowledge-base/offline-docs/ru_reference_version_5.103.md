# Документация VK: https://dev.vk.com/ru/reference/version/5.103

[Версии API](/ru/reference/versions)

# 5.103

*   •
    
    Для метода [`ads.getPostsReach`](/ru/method/ads.getPostsReach) изменилось поведение при ошибках, они будут возвращаться для каждого объявления отдельно.
    
*   •
    
    Метод [`ads.getAdsPostsReach`](/ru/method/ads.getAdsPostsReach) отключён, вместо него следует использовать [`ads.getPostsReach`](/ru/method/ads.getPostsReach).
    
*   •
    
    Добавлена поддержка новых типов клавиш в клавиатуре ботов.
    
*   •
    
    В Callback API и LongPoll API у события `message_new` вместо `{ object: message }` будет приходить `{ object: { message, client_info } }`.
    
*   •
    
    В [`client_info`](/ru/api/bots/getting-started#%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BE%20%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D1%8B%D1%85%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8E%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F%D1%85) содержится информация о клиенте, полезная для формирования сообщений ботами.
    

### Связанные методы

[ads.getPostsReach](/method/ads.getPostsReach)

Возвращает подробную статистику по охвату рекламных записей из объявлений и кампаний для продвижения записей сообщества.