# Документация VK: https://dev.vk.com/ru/reference/version/5.86

[Версии API](/ru/reference/versions)

# 5.86

*   •
    
    Метод [`messages.search`](/ru/messages.search) при использовании параметра `extended` = `1` возвращает массив объектов [бесед](/ru/reference/objects/conversation).
    
*   •
    
    Изменения в методе [`stats.get`](/ru/stats.get):
    
    *   •
        
        Входные параметры `date_from` и `date_to` устарели, вместо них используются `timestamp_from` и `timestamp_to` — целые числа, представляющее собой время в Unixtime.
        
    *   •
        
        Появился входной параметр `stats_groups`, который позволяет фильтровать по отдельным блокам в статистике. Возможные значения: `visitors`, `reach`, `activity`.
        
    *   •
        
        В ответе поля `period_from` и `period_to` являются целыми числами и так же представляют собой время в Unixtime.
        
    

### Связанные методы

[messages.search](/method/messages.search)

Возвращает список найденных личных сообщений текущего пользователя по введенной строке поиска.

[stats.get](/method/stats.get)

Возвращает статистику сообщества или приложения.