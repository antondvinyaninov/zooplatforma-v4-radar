# Документация VK: https://dev.vk.com/ru/method/ads.updateTargetGroup

[ads](/ru/method/ads)

# ads.updateTargetGroup

Редактирует аудиторию ретаргетинга.

Для вызова метода можно использовать:

• [ключ доступа пользователя](/ru/api/access-token/getting-started#Ключ%20доступа%20пользователя) (требуется [право доступа](/ru/reference/access-rights): ads — выдаётся в исключительных случаях через запрос в поддержку по электронной почте [devsupport@corp.vk.com](mailto:devsupport@corp.vk.com))

## [](#Параметры)Параметры

account\_id

integer

Идентификатор рекламного кабинета.

Обязательный параметр

client\_id

integer

**Только для рекламных агентств**.

Id клиента, в рекламном кабинете которого будет редактироваться аудитория.

target\_group\_id

integer

Идентификатор аудитории.

Обязательный параметр

name

string

Новое название аудитории ретаргетинга — строка до 64 символов.

Обязательный параметр

domain

string

Домен сайта, на котором будет размещен код учета пользователей.

Устаревший параметр. Используется только для старых групп ретаргетинга, которые пополнялись без помощи пикселя. Для новых аудиторий его следует опускать, иначе будет возвращена ошибка.

lifetime

integer

Количество дней, через которое пользователи, добавляемые в аудиторию, будут автоматически исключены из неё.

Обязательный параметр

target\_pixel\_id

integer

Передайте в этом параметре идентификатор пикселя, если требуется собирать аудиторию с веб-сайта.

target\_pixel\_rules

text

Закодированный в JSON массив правил, в соответствии с которыми будет пополняться аудитория из пикселя. Подробнее см. документацию метода [`ads.createTargetGroup`](/ru/method/ads.createTargetGroup).

## [](#Результат)Результат

В случае успеха метод возвратит `1`.

## [](<#Коды ошибок>)Коды ошибок

601

Permission denied. You have requested too many actions this day. Try later.

В ходе выполнения могут произойти [общие ошибки](/ru/reference/errors)

## [](<#Связанные версии>)Связанные версии

[Перейти на страницу версий API](/ru/reference/versions)

[5.102](/ru/reference/version/5.102)

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