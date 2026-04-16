# Документация VK: https://dev.vk.com/ru/method/ads.createTargetGroup

[ads](/ru/method/ads)

# ads.createTargetGroup

Создаёт аудиторию для ретаргетинга рекламных объявлений на пользователей, которые посетили сайт рекламодателя (просмотрели информации о товаре, зарегистрировались и т.д.).

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

Id клиента, в рекламном кабинете которого будет создаваться аудитория.

name

string

Название аудитории ретаргетинга — строка до 64 символов.

Обязательный параметр

lifetime

integer

Количество дней, через которое пользователи, добавляемые в аудиторию, будут автоматически исключены из неё.

Обязательный параметр

target\_pixel\_id

integer

Идентификатор пикселя, если требуется собирать аудиторию с веб-сайта.

target\_pixel\_rules

text

Массив правил для пополнения аудитории из пикселя. Имеет вид:

JSON

`[     {"type": args},     {"type": args},     ...     {"type": args} ](     {"type": args},     {"type": args},     ...     {"type": args} )`

Возможные значения типа правила `type` и аргументов правила `args`:

`type`

`args`

`url_full_match` Полное совпадение URL страницы (`http referer`), на которой находится пользователь

URL страницы (`string`), включая протокол и домен. Например, `"https:// example.com/catalog/shoes?item=836451"`

`url_substrings_match` Частичное совпадение URL страницы (`http referer`), на которой находится пользователь

Массив строк для поиска вхождения. Совпадение засчитывается в случае вхождения всех заданных подстрок в URL. Например, `["catalog", "men", "shoes"]`.

`url_regex_match` Соответствие URL страницы, на которой находится пользователь (`http referer`), регулярному выражению

Регулярное выражение (`string`). Например, `catalog/(men|women)/shoes?item=\d+`.

`event_full_match` Полное совпадение названия события

Название события. Например, `"click-red-button"`.

`event_substrings_match` Частичное совпадение названия события

Массив строк для поиска вхождения. Совпадение засчитывается в случае вхождения всех подстрок в название события. Например, `["click", "red", "button"]`.

`event_regex_match` Соответствие названия события регулярному выражению

Регулярное выражение (`string`). Например, `"^click-(red|green)-\d+$"`.

## [](#Результат)Результат

Возвращает объект со следующими полями:

*   •
    
    `id` — идентификатор аудитории.
    

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