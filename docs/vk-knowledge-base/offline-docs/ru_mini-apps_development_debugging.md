# Документация VK: https://dev.vk.com/ru/mini-apps/development/debugging

# Отладка

## [](<#Отладка в браузере>)Отладка в браузере

У событий VK Bridgе, которые поддерживаются в десктопной версии, в [справочнике](/ru/bridge/overview) указана платформа **Web**. Самый простой способ протестировать получение таких событий — включить десктопную версию мини-приложения и перехватывать их прямо в браузере.

Откройте мини-приложение в браузере, перейдите в инструменты разработчика и на вкладке **Консоль** (**Сonsole**) введите код:

JavaScript

`window.addEventListener('message', (event) => { if (event.data?.type === 'vk-connect') { console.log(event); } });`

Код перехватит сообщения от мини-приложения и покажет, что они содержат.

## [](<#Отладка на мобильных устройствах>)Отладка на мобильных устройствах

### [](<#Консоль Eruda>)Консоль Eruda

[Eruda](https://vk.com/away.php?to=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Feruda) — это консоль с инструментами разработчика для отладки мини-приложений для Android и iOS, которая работает подобно консоли браузера.

![Внешний вид консоли Eruda](https://sun9-76.userapi.com/LunqlH1JFxb_hxz5m7aYizEvVSxXHENlnj9FbA/KNKfx1_B_S8.jpg "Консоль Eruda")Консоль Eruda

#### [](<#Как включить консоль>)Как включить консоль

Чтобы разработчики могли использовать консоль Eruda для отладки мини-приложения, [администраторы](/ru/mini-apps/settings/managers) этого мини-приложения должны активировать её в [панели управления](/ru/mini-apps/settings/overview) мини-приложением. Сделать это может администратор с правами [создателя](/ru/mini-apps/settings/managers#%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D0%B5%D0%BB%D1%8C) мини-приложения, администратор [с полным доступом](/ru/mini-apps/settings/managers#%D0%90%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80%20%D1%81%20%D0%BF%D0%BE%D0%BB%D0%BD%D1%8B%D0%BC%20%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BE%D0%BC) или администратор [с частичным доступом](/ru/mini-apps/settings/managers#%D0%90%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80%20%D1%81%20%D1%87%D0%B0%D1%81%D1%82%D0%B8%D1%87%D0%BD%D1%8B%D0%BC%20%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BE%D0%BC) с правом «Редактирование».

1.  1.
    
    Откройте [список приложений](https://vk.com/away.php?to=https%3A%2F%2Fdev.vk.com%2Fadmin%2Fapps-list) и перейдите в настройки вашего мини-приложения.
    
2.  2.
    
    Переключитесь в раздел [Настройки → Дополнительные](/ru/mini-apps/settings/general/additional) и в блоке **Консоль Eruda** выберите **Включена**.
    
    ![Настройки включения консоли Eruda](https://sun9-69.userapi.com/Hf1AhK-7E_4GYb1fKVPZz0RhqaYEoT-xtbok2g/n7pax2s1D18.jpg "Настройки включения консоли")Настройки включения консоли
    

#### [](<#Как использовать консоль>)Как использовать консоль

1.  1.
    
    Запустите мини-приложение.
    
2.  2.
    
    Нажмите на кнопку •••.
    
3.  3.
    
    В меню выберите **Показать консоль**. Если консоль уже открыта, в меню отобразится пункт **Скрыть консоль**.
    
    ![Внешний вид консоли Eruda](https://sun9-52.userapi.com/abN5M2UD1z6kwXWD9lGNUMODjrcUUEJk6hpVBQ/R-sgYZ2E6mE.jpg "Консоль Eruda")Консоль Eruda
    
4.  4.
    
    Чтобы открыть отладочную консоль прямо внутри мини-приложения, нажмите на появившийся значок в правом нижнем углу.
    

**Примечание.** Консоль Eruda встроена в [библиотеку `create-vk-mini-app`](/ru/mini-apps/getting-started#1.%20%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%B9%D1%82%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%20%D0%BC%D0%B8%D0%BD%D0%B8-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F), которая используется для создания мини-приложений из шаблона и доступна для:

*   •
    
    Мобильного приложения (Android и iOS).
    
*   •
    
    Мобильной версии сайта ([m.vk.com](https://vk.com/away.php?to=https%3A%2F%2Fm.vk.com)).
    
*   •
    
    Десктопной версии сайта ([vk.com](https://vk.com/away.php?to=https%3A%2F%2Fvk.com)).
    

Пример работы консоли можно посмотреть в мини-приложении [Eruda](https://vk.com/away.php?to=https%3A%2F%2Fvk.com%2Fapp6876702).

### [](<#Chrome DevTools>)Chrome DevTools

Отладка осуществляется в десктопной версии браузера. Чтобы отладить мини-приложение для Android, используйте на Android-устройствах [Сhrome Remote debugging](https://vk.com/away.php?to=https%3A%2F%2Fdeveloper.chrome.com%2Fdocs%2Fdevtools%2Fremote-debugging).

Чтобы мини-приложение отображалось в Chrome Developer Tools:

1.  1.
    
    Подключите устройство к компьютеру по USB.
    
2.  2.
    
    Выполните [шаг 1](https://vk.cc/cgf8in) и [шаг 2](https://vk.cc/cgf8kx) инструкции по удалённой отладке Android-устройств.
    
3.  3.
    
    Откройте приложение ВКонтакте на Android, перейдите в **Настройки** → **Debug** и включите **Отладка WebView**.
    
    > Чтобы пункт Debug отображался в настройках, перейдите в **Настройки** → **О приложении** и нажмите на иконку VK 11 раз.
    

Теперь при отладке по USB открытое на Android-устройстве мини-приложение будет отображаться в Сhrome DevTools: `chrome://inspect/#devices`.

## [](<#Отладка при помощи vk-bridge-mock>)Отладка при помощи vk-bridge-mock

Если под рукой нет Android-устройства, используйте библиотеку [`vk-bridge-mock`](https://vk.com/away.php?to=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40vkontakte%2Fvk-bridge-mock), которая позволит эмулировать получение данных при работе на компьютере. При вызове событий библиотеки вам вернутся тестовые данные, которые можно использовать для отладки.

### [](<#Использование библиотеки>)Использование библиотеки

1.  1.
    
    Установите библиотеку:
    
    Shell
    
    `npm install @vkontakte/vk-bridge-mock || yarn add @vkontakte/vk-bridge-mock`
    
2.  2.
    
    В файле `index.js` подключите библиотеку:
    
    JavaScript
    
    `import bridge from '@vkontakte/vk-bridge-mock';`
    
3.  3.
    
    Используйте методы объекта `bridge`:
    
    JavaScript
    
    `bridge.subscribe((e) => { if (e.detail.type === 'VKWebAppGetUserInfoResult') { // do something } }); bridge.send('VKWebAppGetUserInfo', {});`
    

### [](<#Пример возвращаемых тестовых данных>)Пример возвращаемых тестовых данных

JSON

`{ "type": "VKWebAppGetUserInfoResult", "data": { "id": 743784474, "bdate": "21.12.2000", "bdate_visibility": 1, "city": { "id": 2, "title": "Санкт-Петербург" }, "country": { "id": 1, "title": "Россия" }, "photo_200": "https://sun1-91.userapi.com/s/v1/ig2/Dcf-SWu7nVYDDldq9oQegiC06VqsSa43-HpDxzPjrvFCUUk9nSevY2Uf9xzm0bxvLfgsTOH6XiiW-zeLcDhPDj_w.jpg?size=200x200&quality=96&crop=26,26,204,204&ava=1", "photo_max_orig": "https://sun1-91.userapi.com/s/v1/ig2/trHNebJQhG4BmLxC8h4hOpDU6bKRy6uJi586wcyFcCj5fzrwYk7AtoNab-RSil0Bp9b569VQyGK_skG9e6oK7Ap7.jpg?size=256x256&quality=96&crop=0,0,256,256&ava=1", "sex": 2, "photo_100": "https://sun1-91.userapi.com/s/v1/ig2/M4vtl7tcmeP6ANUgE0vU7JZWuJszbHaN5QcCcK2xD66EIc6SeSA1NyFVLTSOt2iLOkFhJSJ4DawEJGOjzKtszMpR.jpg?size=100x100&quality=96&crop=26,26,204,204&ava=1", "first_name": "Персик", "last_name": "Рыжий", "can_access_closed": true, "is_closed": false } }`

### [](<#Изменение тестовых данных>)Изменение тестовых данных

Если вам нужно изменить тестовые данные, чтобы посмотреть, как будет вести себя мини-приложение, если пользователь, например, не указал город, данные можно переопределить:

JavaScript

`import { response as res } from '@vkontakte/vk-bridge-mock'; res.VKWebAppGetUserInfo.data = { type: 'VKWebAppGetUserInfoResult', data: { city: { id: 1, title: 'London' }, country: { id: 1, title: 'UK' }, photo_200: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg', photo_max_orig: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg', sex: 0, photo_100: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg', first_name: 'Friedrich', last_name: 'Engels', } }`

### [](<#Поддерживаемые события>)Поддерживаемые события

Библиотека `vk-bridge-mock` поддерживает работу с событиями:

*   •
    
    [`VKWebAppInit`](/ru/bridge/VKWebAppInit)
    
*   •
    
    [`VKWebAppGetAuthToken`](/ru/bridge/VKWebAppGetAuthToken)
    
*   •
    
    [`VKWebAppCallAPIMethod`](/ru/bridge/VKWebAppCallAPIMethod)
    
*   •
    
    [`VKWebAppGetGeodata`](/ru/bridge/VKWebAppGetGeodata)
    
*   •
    
    [`VKWebAppGetUserInfo`](/ru/bridge/VKWebAppGetUserInfo)
    
*   •
    
    [`VKWebAppGetPhoneNumber`](/ru/bridge/VKWebAppGetPhoneNumber)
    
*   •
    
    [`VKWebAppGetClientVersion`](/ru/bridge/VKWebAppGetClientVersion)
    
*   •
    
    [`VKWebAppGetEmail`](/ru/bridge/VKWebAppGetEmail)
    

## [](<#Тестирование приложения>)Тестирование приложения

Чтобы проверить новые функции или показать изменения в мини-приложении определённым пользователям ВКонтакте, настройте тестовые группы в панели управления. В каждой тестовой группе можно указать ссылку на версию мини-приложения, которая будет доступна только участникам этой группы.

Подробнее — в разделе [Тестовые группы](/ru/mini-apps/settings/test-groups).