# Документация VK: https://dev.vk.com/ru/method/groups.addCallbackServer

[groups](/ru/method/groups)

# groups.addCallbackServer

Добавляет сервер для [Callback API](/ru/api/callback/getting-started) в сообщество.

Для вызова метода можно использовать:

• ключ доступа пользователя, полученный в Standalone‑приложении через [Implicit Flow](/ru/api/access-token/implicit-flow-user) (требуется [право доступа](/ru/reference/access-rights): groups — выдаётся в исключительных случаях через запрос в поддержку по электронной почте [devsupport@corp.vk.com](mailto:devsupport@corp.vk.com))

• [ключ доступа сообщества](/ru/api/access-token/getting-started#Ключ%20доступа%20сообщества)

## [](#Параметры)Параметры

group\_id

positive

Идентификатор сообщества.

Обязательный параметр

url

string

URL сервера.

Обязательный параметр

title

string

Название сервера.

Обязательный параметр Макс. длина = 14

secret\_key

string

Секретный ключ.

Макс. длина = 50

## [](#Результат)Результат

После успешного выполнения возвращает идентификатор добавленного сервера в поле `server_id` (`integer`).

## [](<#Коды ошибок>)Коды ошибок

2000

Servers number limit is reached

В ходе выполнения могут произойти [общие ошибки](/ru/reference/errors)