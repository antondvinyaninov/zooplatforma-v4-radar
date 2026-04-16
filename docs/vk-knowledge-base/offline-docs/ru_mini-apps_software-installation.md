# Документация VK: https://dev.vk.com/ru/mini-apps/software-installation

# Установка ПО

Чтобы библиотеки ВКонтакте работали корректно, установите программное обеспечение:

*   •
    
    [Node.js 16.x.x](#%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0%20Node.js).
    
*   •
    
    [Python 3.x](#%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0%20Python).
    
*   •
    
    [C++](#%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0%20C++) (только для Linux и Windows).
    

## [](<#Установка Node.js>)Установка Node.js

Необходима именно 16 мажорная версия Node.js.

### [](#macOS)macOS

Установите Node.js, например с помощью [менеджера пакетов brew](https://vk.com/away.php?to=https%3A%2F%2Fnodejs.org%2Fen%2Fdownload%2Fpackage-manager%2F%23macos):

Shell

`brew install node@16`

### [](#Linux)Linux

Пример команд для установки Node.js с помощью cURL и менеджера пакетов nvm:

Shell

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash source ~/.bashrc nvm list-remote nvm install v16.15.0`

### [](<#Windows 10>)Windows 10

1.  1.
    
    Скачайте [установщик Node.js 16.x.x](https://vk.com/away.php?to=https%3A%2F%2Fnodejs.org%2Fdownload%2Frelease%2Flatest-v16.x%2F).
    
2.  2.
    
    Запустите установщик.
    
3.  3.
    
    Выполните шаги по установке.
    
4.  4.
    
    Перезагрузите компьютер.
    

## [](<#Установка Python>)Установка Python

Необходима именно 3 мажорная версия Python.

### [](#macOS)macOS

Shell

`brew install python@3.9`

### [](<#Linux \(Ubuntu\)>)Linux (Ubuntu)

Shell

`sudo apt install python3.9`

### [](<#Windows 10>)Windows 10

1.  1.
    
    Перейдите на [страницу пакета Python 3.x в Microsoft Store](https://vk.com/away.php?to=https%3A%2F%2Fwww.microsoft.com%2Fen-us%2Fp%2Fpython-310%2F9pjpw5ldxlz5).
    
2.  2.
    
    Нажмите кнопку **Get in Store app**.
    
3.  3.
    
    Нажмите кнопку **Открыть приложение "Microsoft Store"**.
    
4.  4.
    
    Нажмите **Получить** и **Установить**.
    
5.  5.
    
    Перезагрузите компьютер.
    

## [](<#Установка C++>)Установка C++

> Если вы создаёте мини-приложение на Linux или Windows, установите С++ по этой инструкции.

### [](<#Linux \(Ubuntu\)>)Linux (Ubuntu)

Установите инструменты компилятора C/C++, например [GCC](https://vk.com/away.php?to=https%3A%2F%2Fgcc.gnu.org%2F):

Shell

`sudo apt -y install build-essential`

### [](<#Windows 10>)Windows 10

Установите компоненты C/C++ с помощью Visual Studio:

1.  1.
    
    Скачайте [установщик Visual Studio](https://vk.com/away.php?to=https%3A%2F%2Fvisualstudio.microsoft.com%2Fthank-you-downloading-visual-studio%2F%3Fsku%3DBuildTools).
    
2.  2.
    
    Запустите установщик.
    
3.  3.
    
    Установите флажок **Разработка классических приложений на C++**.
    
4.  4.
    
    Нажмите кнопку **Установить**. Дождитесь окончания установки.
    
5.  5.
    
    Откройте командную строку и выполните команду:
    
    Shell
    
    `npm config set msvs_version 2017`
    

## [](#FAQ)FAQ

### [](<#Как сменить версию Node.js на 16?>)Как сменить версию Node.js на 16?

Чтобы сменить версию Node.js на macOS, выполните команды:

Shell

`brew unlink node brew link --overwrite node@16`

Иногда после смены версии требуется добавить Node.js в переменные окружения:

Shell

`echo 'export PATH="/usr/local/opt/node@16/bin:$PATH"' >> ~/.zshrc`

Чтобы сменить версию Node.js на Linux, выполните команду:

Shell

`nvm install v16.15.0`

Чтобы убедиться, что смена прошла успешно, проверьте номер версии:

Shell

`node -v`

### [](<#Что такое NPM?>)Что такое NPM?

NPM — менеджер пакетов, который автоматически устанавливается вместе с Node.js. Если вы уже установили Node.js, устанавливать NPM отдельно не нужно. Рекомендуем почитать про NPM и NPX в [официальной документации](https://vk.com/away.php?to=https%3A%2F%2Fdocs.npmjs.com%2Fabout-npm).

### [](<#Зачем устанавливать C++?>)Зачем устанавливать C++?

Модули, написанные на С++, используются в библиотеках ВКонтакте. Для компиляции кода на C++ используется [node-gyp](https://vk.com/away.php?to=https%3A%2F%2Fgithub.com%2Fnodejs%2Fnode-gyp), который устанавливается вместе с Node.js и может вызывать ошибки, если C++ не установлен.