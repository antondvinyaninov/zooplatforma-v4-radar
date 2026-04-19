# Документация VK: https://dev.vk.com/ru/reference/version/5.50

[Версии API](/ru/reference/versions)

# 5.50

*   •
    
    Изменения в методе [ads.getAds](/ru/ads.getAds):
    
    *   •
        
        Возвращаемое поле `impressions_limit` заменено двумя полями: `impressions_limit` и `impressions_limited`.
        
    *   •
        
        Изменено возвращаемое поле `ad_platform`.
        
    *   •
        
        Возвращаемое поле `disclaimer` заменено полями `disclaimer_medical`, `disclaimer_specialist`, `disclaimer_supplements`.
        
    
*   •
    
    Изменения в методах [ads.createAds](/ru/ads.createAds) и [ads.updateAds](/ru/ads.updateAds):
    
    *   •
        
        Параметр `impressions_limit` в `ad_specification` заменён двумя параметрами: `impressions_limit` и `impressions_limited`.
        
    *   •
        
        Изменён параметр `ad_specification.ad_platform`.
        
    *   •
        
        Поле `disclaimer` в `ad_specification` заменено на поля `disclaimer_medical`, `disclaimer_specialist`, `disclaimer_supplements`.
        
    
*   •
    
    Параметр `ad_specification.ad_format` метода [ads.createAds](/ru/ads.createAds) стал обязательным.
    
*   •
    
    Параметр `ad_format` метода [ads.getUploadURL](/ru/ads.getUploadURL) стал обязательным.
    

### Связанные методы

[ads.getAds](/method/ads.getAds)

Возвращает список рекламных объявлений.

[ads.createAds](/method/ads.createAds)

Создает рекламные объявления.

[ads.updateAds](/method/ads.updateAds)

Редактирует рекламные объявления.

[ads.getUploadURL](/method/ads.getUploadURL)

Возвращает URL-адрес для загрузки фотографии рекламного объявления. Подробности о загрузке изображений для объявлений смотрите на \[отдельной странице\](method/ads/upload-photo-ads).