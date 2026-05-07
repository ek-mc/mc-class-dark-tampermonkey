# MC-Class Dark Theme (Tampermonkey)

![Version](https://img.shields.io/badge/version-0.1.13-2563eb)
![Platform](https://img.shields.io/badge/platform-Tampermonkey-1f2937)

Dark theme userscript for `mc-class.gr`.

![MC-Class Dark Theme preview](assets/screenshots/preview.jpg)

## Install

### Recommended
1. Install the Tampermonkey extension in your browser.
2. Open `mc-class-dark.user.js`.
3. Click **Install** in Tampermonkey.
4. Visit `https://mc-class.gr` and refresh (`Cmd+Shift+R`).

## Features
- Dark theme styles aligned with the Chrome and Firefox versions
- Improves readability across common MC-Class UI blocks
- Replaces default `NoPhoto.jpg` placeholders with a dark preview image

## Files
- `mc-class-dark.user.js` — the userscript

## Notes
- If a page element still looks off, inspect its class/id and add it to the script selectors.
- This script is tailored for `mc-class.gr` and may need updates if site HTML changes.

## License
See [LICENSE](LICENSE).

## Changelog
See [CHANGELOG.md](CHANGELOG.md).

## Support
For issues, use [GitHub Issues](https://github.com/ek-mc/mc-class-dark-tampermonkey/issues).

## Automation
This repository uses GitHub Actions workflows:
- `ci.yml`
