"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callVkApi = callVkApi;
exports.publishVkPost = publishVkPost;
exports.searchVkCities = searchVkCities;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const VK_API_VERSION = '5.199';
async function callVkApi(method, params, token) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null) {
            searchParams.append(key, String(value));
        }
    }
    searchParams.append('v', VK_API_VERSION);
    searchParams.append('lang', 'ru');
    searchParams.append('access_token', token);
    const url = `https://api.vk.com/method/${method}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: searchParams.toString()
    });
    const data = await response.json();
    if (data.error) {
        throw new Error(`VK API Error [${method}]: ${data.error.error_msg}`);
    }
    return data.response;
}
async function publishVkPost(groupId, token, message, localMediaPaths, publishDate) {
    const attachments = [];
    for (const mediaPath of localMediaPaths) {
        try {
            // 1. Получаем сервер для загрузки
            const uploadServer = await callVkApi('photos.getWallUploadServer', { group_id: groupId }, token);
            // 2. Формируем Blob для загрузки
            const fullPath = path_1.default.resolve(mediaPath);
            if (!fs_1.default.existsSync(fullPath)) {
                console.error(`File not found: ${fullPath}`);
                continue;
            }
            const buffer = fs_1.default.readFileSync(fullPath);
            const ext = path_1.default.extname(fullPath).toLowerCase();
            let mimeType = 'image/jpeg';
            if (ext === '.png')
                mimeType = 'image/png';
            else if (ext === '.gif')
                mimeType = 'image/gif';
            else if (['.mp4', '.mov'].includes(ext)) {
                console.warn('Video uploading requires a different VK method (video.save). Skipping for now.');
                continue;
            }
            const blob = new Blob([buffer], { type: mimeType });
            const formData = new FormData();
            formData.append('file1', blob, `upload${ext}`);
            // 3. Загружаем на сервер
            const uploadResponse = await fetch(uploadServer.upload_url, {
                method: 'POST',
                body: formData
            });
            const uploadData = await uploadResponse.json();
            if (!uploadData.server || !uploadData.photo || !uploadData.hash) {
                throw new Error('Failed to upload photo to VK server');
            }
            // 4. Сохраняем фотографию на сервере ВКонтакте
            const savedPhoto = await callVkApi('photos.saveWallPhoto', {
                group_id: groupId,
                server: uploadData.server,
                photo: uploadData.photo,
                hash: uploadData.hash
            }, token);
            if (savedPhoto && savedPhoto.length > 0) {
                attachments.push(`photo${savedPhoto[0].owner_id}_${savedPhoto[0].id}`);
            }
        }
        catch (e) {
            console.error(`Error processing media ${mediaPath}:`, e);
        }
    }
    // 5. Публикуем запись
    const postParams = {
        owner_id: `-${groupId}`,
        from_group: 1,
        message: message,
        attachments: attachments.join(',')
    };
    if (publishDate) {
        postParams.publish_date = Math.floor(publishDate.getTime() / 1000);
    }
    const postResult = await callVkApi('wall.post', postParams, token);
    return postResult.post_id;
}
async function searchVkCities(query, serviceToken) {
    const result = await callVkApi('database.getCities', {
        country_id: 1, // Russia id by default for VK
        q: query,
        need_all: 1, // 1 to return all cities, including villages and settlements
        count: 20
    }, serviceToken);
    return result;
}
