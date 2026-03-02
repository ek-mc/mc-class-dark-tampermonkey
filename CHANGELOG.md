# Changelog

All notable changes to this project will be documented in this file.

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
