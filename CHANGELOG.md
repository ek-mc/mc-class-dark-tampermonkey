# Changelog

## [0.1.21] - 2026-05-09

### Changed
- `.DropItems` padding set to `6px 8px`.
- `.table` background set to `var(--mc-panel)`.
- `.help_desk_toggle` now has right border: `1px solid #2f3440`.
- Reverted `man.svg` avatar recolor override to original behavior.
- Minimized sidebar hover now stays icon-only (removed floating labels on the right).

## [0.1.20] - 2026-05-09

### Changed
- Recolored default `man.svg` avatar instances to match theme-muted tone `#9198A9`.

## [0.1.19] - 2026-05-09

### Fixed
- Restored minimized-sidebar icon centering and hover behavior:
  - Centered minimized `.nav-item` and icon slot.
  - Fixed hover label trigger to work when hovering icon area, not only text.
- Survey containers now consistently use `var(--mc-panel)` to remove mismatched extra dark layer.

## [0.1.18] - 2026-05-09

### Changed
- Navigation/dropdown alignment polish:
  - Set `.nav-link` and `.nav-link a` color to `#9198A9`.
  - Centered dropdown Font Awesome icons in a fixed slot for cleaner spacing.

## [0.1.13] - 2026-05-07

### Fixed
- Darkened Help Desk toggle area for better dark-mode consistency:
  - `.help_desk_toggle` now uses `var(--mc-bg)`.

## [0.1.12] - 2026-05-07

### Fixed
- Updated survey header info area to use body-dark background for consistent contrast:
  - `.MainSurveyHeader.fixed .SurveyHeaderInfo` now uses `var(--mc-bg)`.
- Updated Likert question row backgrounds to dark body tone:
  - `.questionItemLikert:nth-child(2n+1)` and `.questionItemLikert:nth-child(2n)` now use `var(--mc-bg)`.

## [0.1.11] - 2026-04-02

### Fixed
- Extended survey dark-theme styling to `.SurveyNb`:
  - dark panel background
  - readable light text color

## [0.1.10] - 2026-04-02

### Fixed
- Improved survey readability in dark mode:
  - `.SectorContainer` now uses the dark panel background instead of white
  - `.SurveyEkfwnisiText` now uses readable light text
  - `.MainSurveyHeader.fixed .SurveyHeaderInfo` now stays readable in dark mode

## [0.1.9] - 2026-03-25

### Fixed
- `SliderClose` border now matches panel background (`var(--mc-panel)`) for cleaner dark UI.

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

## 2026-04-29

- Added basic GitHub Actions CI workflow (`.github/workflows/basic-ci.yml`).
- Maintenance: closed stale dependency PR queue for cleaner triage (where applicable).
