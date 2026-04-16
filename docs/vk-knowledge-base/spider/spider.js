const puppeteer = require('puppeteer');
const TurndownService = require('turndown');
const fs = require('fs');
const path = require('path');
const url = require('url');

const turndownService = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
turndownService.remove(['script', 'style', 'nav', 'footer', 'aside', 'header', 'svg', 'button']);

// Сохраняем прямо в offline-docs рядом со spider
const outputDir = path.join(__dirname, '../offline-docs');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const startUrls = [
    // === Mini Apps ===
    'https://dev.vk.com/ru/mini-apps/overview',
    'https://dev.vk.com/ru/mini-apps/getting-started',
    'https://dev.vk.com/ru/mini-apps/catalog/advice',
    'https://dev.vk.com/ru/mini-apps/examples',
    'https://dev.vk.com/ru/mini-apps/examples/shop',
    'https://dev.vk.com/ru/mini-apps/getting-started/create-vk-mini-app',
    'https://dev.vk.com/ru/mini-apps/developer-support',
    'https://dev.vk.com/ru/mini-apps/developer-support/q-n-a-sessions',
    'https://dev.vk.com/ru/mini-apps/software-installation',
    'https://dev.vk.com/ru/mini-apps/bridge',
    'https://dev.vk.com/ru/mini-apps/development/launch-params',
    'https://dev.vk.com/ru/mini-apps/development/launch-params/vk_ref',
    'https://dev.vk.com/ru/mini-apps/development/launch-params-sign',
    'https://dev.vk.com/ru/mini-apps/development/iframe-webview',
    'https://dev.vk.com/ru/mini-apps/development/lottie',
    'https://dev.vk.com/ru/mini-apps/development/cache',
    'https://dev.vk.com/ru/mini-apps/development/pixel/overview',

    // === VK Maps ===
    'https://dev.vk.com/ru/vkmaps/getting-started',
    'https://dev.vk.com/ru/vkmaps/routing/direction',
    'https://dev.vk.com/ru/vkmaps/api',

    // === VK API Reference (общее) ===
    'https://dev.vk.com/ru/reference',
    'https://dev.vk.com/ru/reference/access-rights',
    'https://dev.vk.com/ru/reference/errors',
    'https://dev.vk.com/ru/reference/versions',
    'https://dev.vk.com/ru/reference/objects',
    'https://dev.vk.com/ru/api/access-token/getting-started',
    'https://dev.vk.com/ru/api/api-requests',

    // === Методы стены (wall) ===
    'https://dev.vk.com/ru/method/wall.post',
    'https://dev.vk.com/ru/method/wall.get',
    'https://dev.vk.com/ru/method/wall.delete',
    'https://dev.vk.com/ru/method/wall.edit',
    'https://dev.vk.com/ru/method/wall.getById',

    // === Фото (photos) ===
    'https://dev.vk.com/ru/method/photos.getWallUploadServer',
    'https://dev.vk.com/ru/method/photos.saveWallPhoto',
    'https://dev.vk.com/ru/method/photos.get',
    'https://dev.vk.com/ru/method/photos.getAlbums',

    // === Видео (video) ===
    'https://dev.vk.com/ru/method/video.save',
    'https://dev.vk.com/ru/method/video.get',

    // === Сообщения (messages) ===
    'https://dev.vk.com/ru/method/messages.send',
    'https://dev.vk.com/ru/method/messages.getConversations',
    'https://dev.vk.com/ru/method/messages.getHistory',
    'https://dev.vk.com/ru/method/messages.allowMessagesFromGroup',

    // === Группы / Сообщества (groups) ===
    'https://dev.vk.com/ru/method/groups.getById',
    'https://dev.vk.com/ru/method/groups.getMembers',
    'https://dev.vk.com/ru/method/groups.getTokenPermissions',
    'https://dev.vk.com/ru/method/groups.addCallbackServer',
    'https://dev.vk.com/ru/method/groups.isMember',
    'https://dev.vk.com/ru/method/groups.join',

    // === Пользователи (users) ===
    'https://dev.vk.com/ru/method/users.get',
    'https://dev.vk.com/ru/method/users.search',

    // === База данных (database) ===
    'https://dev.vk.com/ru/method/database.getCities',
    'https://dev.vk.com/ru/method/database.getCountries',
    'https://dev.vk.com/ru/method/database.getRegions',

    // === Утилиты (utils) ===
    'https://dev.vk.com/ru/method/utils.getShortLink',
    'https://dev.vk.com/ru/method/utils.getLinkStats',
    'https://dev.vk.com/ru/method/utils.resolveScreenName',

    // === Уведомления и приложения ===
    'https://dev.vk.com/ru/method/notifications.sendMessage',
    'https://dev.vk.com/ru/method/apps.get',
    'https://dev.vk.com/ru/method/apps.sendRequest',

    // === Хранилище (storage) ===
    'https://dev.vk.com/ru/method/storage.get',
    'https://dev.vk.com/ru/method/storage.set',
    'https://dev.vk.com/ru/method/storage.getKeys',
];

async function crawl() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Блокируем загрузку тяжелых ресурсов для ускорения
    await page.setRequestInterception(true);
    page.on('request', (req) => {
        if (['image', 'stylesheet', 'font', 'media'].includes(req.resourceType())) {
            req.abort();
        } else {
            req.continue();
        }
    });

    const queue = startUrls.map(u => ({ link: u, depth: 0 }));
    const visited = new Set();
    let count = 0;
    const MAX_PAGES = 250;
    const MAX_DEPTH = 1;

    console.log('Запуск Node.js Паука для dev.vk.com...');
    console.log(`Всего стартовых URL: ${startUrls.length}`);
    console.log(`Выходная папка: ${outputDir}\n`);

    while (queue.length > 0 && count < MAX_PAGES) {
        const item = queue.shift();
        const currentUrl = item.link.split('#')[0];

        if (visited.has(currentUrl)) continue;
        visited.add(currentUrl);

        console.log(`[${count + 1}/${MAX_PAGES}] Парсинг: ${currentUrl}`);
        try {
            await page.goto(currentUrl, { waitUntil: 'networkidle2', timeout: 30000 });
            await new Promise(resolve => setTimeout(resolve, 1000));

            const htmlContent = await page.evaluate(() => {
                const el =
                    document.querySelector('article') ||
                    document.querySelector('main') ||
                    document.querySelector('.vkuiDocs-content') ||
                    document.body;
                return el ? el.innerHTML : '';
            });

            if (htmlContent && htmlContent.trim() !== '') {
                let markdown = turndownService.turndown(htmlContent);
                const parsed = url.parse(currentUrl);
                // Имя файла: ru_mini-apps_overview.md, ru_method_wall.post.md и т.д.
                let fileName = parsed.pathname
                    .replace(/^\/|\/$/g, '')
                    .replace(/\//g, '_') || 'index';
                const filePath = path.join(outputDir, `${fileName}.md`);
                fs.writeFileSync(filePath, `# Документация VK: ${currentUrl}\n\n${markdown}`, 'utf-8');
                console.log(`  -> Сохранено: ${fileName}.md`);
            } else {
                console.log('  -> Пустой контент. Пропуск.');
            }

            // Ищем дочерние ссылки на том же домене
            if (item.depth < MAX_DEPTH) {
                const links = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .map(a => a.href)
                        .filter(href =>
                            href.includes('dev.vk.com/ru/mini-apps') ||
                            href.includes('dev.vk.com/ru/vkmaps') ||
                            href.includes('dev.vk.com/ru/reference') ||
                            href.includes('dev.vk.com/ru/method') ||
                            href.includes('dev.vk.com/ru/api/')
                        );
                });

                for (const href of links) {
                    const cleanHref = href.split('#')[0];
                    if (!visited.has(cleanHref)) {
                        queue.push({ link: cleanHref, depth: item.depth + 1 });
                    }
                }
            }
        } catch (e) {
            console.error(`  -> Ошибка: ${e.message}`);
        }
        count++;
    }

    await browser.close();
    console.log(`\n✅ Паук завершил работу. Получено страниц: ${count}`);
    console.log(`📁 Файлы сохранены в: ${outputDir}`);
}

crawl();
