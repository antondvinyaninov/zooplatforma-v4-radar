# Changelog

## [0.0.3] - 2026-04-17
### Added
- **Tooling / VKUI MCP:** `.cursor/mcp.json` приведён к официальной инструкции [MCP-сервер (VKUI 8.1.0)](https://vkui.io/8.1.0/overview/mcp/): `npx` + `-y` + `@vkontakte/vkui-mcp`, `env.VKUI_VERSION=8.1.0`. Локальный `vendor/*.tgz` убран; установка в проект `npm install -D @vkontakte/vkui-mcp` и `node node_modules/@vkontakte/vkui-mcp/dist/cli.js` — по доке, когда пакет появится в npm.
- **Backend / API:** Added `DELETE /posts/:id` and `DELETE /radar/pins/:id` endpoints for safe deletion of user-created content with ownership validation.
- **Backend / API:** Added `PATCH /radar/pins/:id` endpoint for editing radar pin title and description.
- **Frontend / MyAds:** Implemented full edit/delete flow via `ModalPage` with `FormLayoutGroup`, `FormItem`, `Input`, and `Textarea` (VKUI v8 standard).
- **Frontend / MyAds:** Added `ToolButton` action bar with `Icon24Write` (edit) and `Icon24DeleteOutline` (delete) per card, conforming to VKUI ToolButton box-style design.
- **Frontend / MyAds:** Unified data feed now merges both `/radar/pins/my` and `/posts/my` via `Promise.all` with graceful error handling per source.

### Changed
- **Frontend / Profile:** Для админа блок «Управление сообществом» показывается первым под шапкой (до карточки профиля и «Сервисы»).
- **Frontend / Profile:** В карточке профиля убраны заголовок «Профиль ZooPlatform», строка «Город VK не указан» и блок «Домашний город» / координаты в режиме просмотра; город и точка по-прежнему задаются в форме «Редактировать».
- **Frontend / Profile:** Шапка профиля: роль входа в виде «капсулы» под именем; блок метрик (события / отзывы / рейтинг) перенесён в градиентную зону под аватаром в отдельную карточку с тенью и рамкой; дублирующая группа со статистикой ниже удалена; шапка профиля на стандартных компонентах VKUI: `PanelHeader` → `PanelHeaderContent` с `aside` (`PanelHeaderButton`), без кастомного `div` и без слота `after` (в Epic он может не отображаться); у градиента под шапкой уменьшен верхний padding.
- **Backend / Auth Middleware (`vkAuth.ts`):** Fixed `TypeError` on GET requests by safely initializing `req.body = {}` before injecting VK user params. This was causing 500 errors on `/radar/pins/my` and `/posts/my`.
- **Backend / API:** Enhanced `PATCH /posts/:id` to reset post status to `pending` upon content edit, enforcing re-moderation.
- **Backend / API:** Added ownership checks (`vk_user_id` author validation) on all PATCH and DELETE endpoints for posts and radar pins.
- **Frontend / ModalContext:** Memoized `registerModal` and `unregisterModal` with `useCallback`, and context value with `useMemo`, fixing `Maximum update depth exceeded` infinite loop.
- **Frontend / MyAds:** Migrated action buttons from `ButtonGroup` to `ToolButton` (mode="secondary") for cleaner card design.
- **Frontend / Design Tokens:** All UI colors use native VKUI design tokens (`--vkui--color_*`), zero hardcoded hex values.

### Fixed
- **Frontend / Profile:** Шапка без `PanelHeader`/`after` (Epic/WebView): строка на `Flex` с `paddingInline="m"` / `paddingBlock="s"`, `Title` + [`Button`](https://vkui.io/8.1.0/components/button/) (`size="s"`, `mode="secondary"`, `appearance="accent"`, `rounded`), разделитель; у `Panel` убран лишний `background`, чтобы не отличаться от экрана «Мои объявления».
- **Backend / Auth:** 500 Internal Server Error on all GET endpoints caused by `req.body` being `undefined` in Express GET requests.
- **Frontend / VKUI:** Fixed `AdaptiveIconRenderer` crash by passing icons via `IconRegular`/`IconCompact` props instead of children.

## [0.0.2] - 2026-04-16
### Added
- **Frontend / Super-App:** Fully consolidated `vk_post_app` and `vk_radar_app` into a single high-performance multi-module application.
- **Frontend / Radar:** Implemented "Map-Center" targeting system with a central crosshair for precise incident reporting.
- **Frontend / UI:** Added perfectly circular tactile buttons for SOS and Geolocation with smooth micro-animations.

### Changed
- **Frontend / VKUI:** Migrated entire component library to VKUI v8 standards (Card, Badge, Button, SimpleCell).
- **Frontend / React:** Optimized rendering flow for React 19 compatibility, fixed `Spinner` and `ScreenSpinner` invalid element errors.
- **Frontend / Navigation:** Standardized application port to 5173 and simplified startup sequence in root `run` script.
- **Frontend / Map:** Optimized map view by removing redundant attribution and debug panels.

### Removed
- **Project Structure:** Deleted obsolete `vk_post_app/` directory and standalone startup blocks.
- **UI:** Removed legacy debug coordinate displays and redundant Settings/Add icons on the map.

## [0.0.1] - 2026-04-09
### Added
- **Backend / Database:** Connected to remote PostgreSQL database using Prisma via `.env`.
- **Frontend / CreatePost:** Integrated CustomSelect component for City selection proxying `database.getCities` with `need_all: 1` parameter to cover towns and villages.
- **Frontend / Media:** Implemented multi-upload support (Photos and Videos) using `FormData` and `upload.array`.
- **Frontend / Modals:** Enabled dynamic tag selection based on `Community.acceptedTags` DB field.

### Changed
- **Frontend / Settings:** Refactored entire Settings/Home tab from flat list into multiple `Accordion` sections (VKUI v8 implementation). Added section icons, visual separators, and fixed global saving logic.
- **Frontend / VKUI:** Fixed syntax errors resulting from VKUI v8 update (`Accordion` vs `<Accordion.Item>`).

### Removed
- **Frontend / Forms:** Removed outdated single-file form handling.
