# Changelog

## [1.0.0] - 2026-04-09
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
