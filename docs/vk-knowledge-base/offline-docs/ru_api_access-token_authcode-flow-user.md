# Документация VK: https://dev.vk.com/ru/api/access-token/authcode-flow-user

# Authorization Code Flow для получения ключа доступа пользователя

С 25 июня 2024 года способ получения ключа доступа пользователя (access token) изменился.

Получить ключ теперь можно так:

*   •
    
    **C помощью библиотеки VK ID SDK.**  
    Шаги получения ключа зависят от типа вашего приложения: [Web](https://vk.com/away.php?to=https%3A%2F%2Fid.vk.com%2Fabout%2Fbusiness%2Fgo%2Fdocs%2Fru%2Fvkid%2Flatest%2Fvk-id%2Fconnection%2Fweb%2Finstall), [Android](https://vk.com/away.php?to=https%3A%2F%2Fid.vk.com%2Fabout%2Fbusiness%2Fgo%2Fdocs%2Fru%2Fvkid%2Flatest%2Fvk-id%2Fconnection%2Fandroid%2Finstall), [iOS](https://vk.com/away.php?to=https%3A%2F%2Fid.vk.com%2Fabout%2Fbusiness%2Fgo%2Fdocs%2Fru%2Fvkid%2Flatest%2Fvk-id%2Fconnection%2Fios%2Finstall).
    
    — или —
    
*   •
    
    **Без SDK, используя HTTP-запрос.**  
    Шаги получения ключа зависят от типа вашего приложения: [Web](https://vk.com/away.php?to=https%3A%2F%2Fid.vk.com%2Fabout%2Fbusiness%2Fgo%2Fdocs%2Fru%2Fvkid%2Flatest%2Fvk-id%2Fconnection%2Fweb%2Fauth-without-sdk), [Android](https://vk.com/away.php?to=https%3A%2F%2Fid.vk.com%2Fabout%2Fbusiness%2Fgo%2Fdocs%2Fru%2Fvkid%2Flatest%2Fvk-id%2Fconnection%2Fandroid%2Fauth-without-sdk), [iOS](https://vk.com/away.php?to=https%3A%2F%2Fid.vk.com%2Fabout%2Fbusiness%2Fgo%2Fdocs%2Fru%2Fvkid%2Flatest%2Fvk-id%2Fconnection%2Fios%2Fauth-without-sdk).
    

Мы рекомендуем использовать SDK-библиотеку. Она включает готовый код для отрисовки формы ввода имени пользователя и пароля, а также даёт возможность использовать вход по [One Tap](https://vk.com/away.php?to=https%3A%2F%2Fid.vk.com%2Fabout%2Fbusiness%2Fgo%2Fdocs%2Fru%2Fvkid%2Flatest%2Fvk-id%2Fintro%2Fmain%23Po-One-Tap).

При подключении без SDK форму ввода понадобится реализовать самостоятельно, а вход по One Tap будет недоступен. При создании формы необходимо соблюдать [требования VK к дизайну кнопки](https://vk.com/away.php?to=https%3A%2F%2Fid.vk.com%2Fabout%2Fbusiness%2Fgo%2Fdocs%2Fru%2Fvkid%2Flatest%2Fvk-id%2Fconnection%2Fguidelines%2Fdesign-rules).

После получения ключа доступа любым из способов вы сможете работать с API ВКонтакте.

Ключи доступа, созданные ранее, продолжают поддерживаться.

## [](<#Материалы по теме>)Материалы по теме

[Ключи доступа](/ru/api/access-token/getting-started)