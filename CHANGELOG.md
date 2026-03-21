# Changelog

## [0.1.8] - 2026-03-21

### Fixed
- Completed-state icon styling now applies consistently across:
  - `.LessonBoxFooterIconCompleted`
  - `.Completed .LessonBoxFooterIconCompleted`
  - `.BoxStatus.Completed`
  - `.AssetIconCompleted`
- Switched completed icon color to muted blue `#526d82` for better dark-theme contrast.

# Changelog

## [0.1.7] - 2026-03-21

### Changed
- Completed lesson icons are now outline-only (no filled background) for:
  - `.UnitAssets .AssetIconCompleted`
  - `.Completed .LessonBoxFooterIconCompleted`
- Updated completed icon color to `rgb(2, 133, 255)` for icon glyphs.

## [0.1.6] - 2026-03-15

### Fixed
- Improved readability for news/notification text areas (`NewsBoxDescr`, `ViewNewDescr`, `ViewNewTitle`, `NewsBoxTitle`).
- Added dark-theme-safe override for legacy bright green backgrounds (`#7cb742` -> blue-green accent).

## [0.1.5] - 2026-03-15
### Fixed
- Improved notification detail readability by overriding hardcoded low-contrast gray (`#515050`) text in dark mode.
- Added targeted readability override for `ViewNotificationDescr` and nested notification content.

## [0.1.4] - 2026-03-07

### Fixed
- Improved login text readability on dark blue backgrounds by forcing light text color for login-text selectors.

### Changed
- Bumped userscript version to `0.1.4`.

## [0.1.4] - 2026-03-04

### Added
- Documented GitHub Actions workflows in README.

# Changelog


All notable changes to this project will be documented in this file.

## [0.1.3] - 2026-03-03

### Added
- Added `LICENSE` file with MIT license.

### Changed
- Bumped userscript version to `0.1.3`.

## [0.1.2] - 2026-03-03

### Changed
- Replaced external placeholder image service (`placehold.co`) with inline SVG data URI for `NoPhoto.jpg` replacements.
- Added local `assets/placeholder.svg` reference asset.
- Bumped userscript version to `0.1.2`.

## [0.1.1] - 2026-03-02

### Added
- Initial Tampermonkey dark theme script for `mc-class.gr`.
- High-contrast dark palette variables and base surface styling.
- Targeted styling for mc-class components:
  - `LessonBox`, `LessonBoxCode`, `LessonMenu`
  - `FullWidthBox`, `BoxNotificationTop`
  - `AccordionCard-header`, `AccordionCard-body`
  - `NotificationItem`, `NotificationRead`, `NewsBox`
  - `BoxAbsencesInfo`, `BoxAbsencesTable`
  - `help_desk_side`, `timeLineBody`
  - `main-content`, `SliderClose`, `#ctl00_DivUserLoggedIn`
- Select2 dark styling.
- Pagination/link (`.page-link`) dark styling.
- Navbar toggler icon visibility fix (`.navbar-toggler-icon`).
- Dark replacement for default `NoPhoto.jpg` placeholders:
  - `/admin/lessons/cover/NoPhoto.jpg`
  - `/admin/news/photos/nophoto.jpg`

### Changed
- Improved readability for dark-gray text areas by enforcing brighter text in key containers.
- Unified `ul`/`li` panel backgrounds to match accordion panel theme.

### Notes
- This release is tuned against current mc-class markup and may require updates if upstream HTML/CSS changes.

