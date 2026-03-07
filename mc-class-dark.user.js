// ==UserScript==
// @name         MC-Class Dark Theme
// @namespace    https://mc-class.gr/
// @version      0.1.4
// @description  Dark theme for mc-class.gr
// @author       ek-mc
// @match        *://mc-class.gr/*
// @match        *://*.mc-class.gr/*
// @run-at       document-start
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/ek-mc/mc-class-dark-tampermonkey/main/mc-class-dark.user.js
// @updateURL    https://raw.githubusercontent.com/ek-mc/mc-class-dark-tampermonkey/main/mc-class-dark.user.js
// ==/UserScript==

(function () {
  'use strict';

  const css = `
:root {
  color-scheme: dark !important;
  --mc-bg: #0f1115;
  --mc-surface: #161a22;
  --mc-panel: #141b2d;
  --mc-text: #f2f6ff;
}
html, body { background:var(--mc-bg) !important; color:var(--mc-text) !important; }

body *, body *::before, body *::after { border-color:#2f3440 !important; }

header, nav, footer, main, section, article, aside,
.container, .content, .card, .panel, .box, .modal, .dropdown-menu,
.table, table, thead, tbody, tr, td, th,
input, textarea, select,
#opac-main-search,
.breadcrumb,
.LessonBoxTeachers {
  background-color:var(--mc-surface) !important;
  color:var(--mc-text) !important;
}

tr:nth-child(even), .muted, .bg-light, .light, .well {
  background-color:#1b2130 !important;
}

input, textarea, select {
  border:1px solid #2f3440 !important;
}
input::placeholder, textarea::placeholder { color:#9aa4b2 !important; }

a { color:#8ab4ff !important; }
a:hover, a:focus { color:#a9c7ff !important; }

/* Login text readability on dark blue background */
.login-text,
#login-text,
.login_text,
.LoginText,
[class*="login-text"],
[id*="login-text"] {
  color:#dbe9ff !important;
}

.dropdown-item {
  background:#161a22 !important;
  color:#e6e6e6 !important;
}
.dropdown-item:hover, .dropdown-item:focus,
.dropdown-item.active, .dropdown-item:active {
  background:#2b3550 !important;
  color:#ffffff !important;
}

button, .btn {
  background:#222938 !important;
  color:#e9eef9 !important;
  border:1px solid #33405a !important;
}
button:hover, .btn:hover { background:#2b3550 !important; }

/* Requested mc-class specific blocks */
.lessonbox, .LessonBox,
.fullwidthbox, .FullWidthBox,
.boxnotificationtop, .BoxNotificationTop,
.lessonboxcode, .LessonBoxCode,
.AccordionCard-header,
.LessonMenu,
.input-group-prepend,
.input-group-prepend * ,
.modal-content,
.card-footer,
.dropzone,
.dropdown-header,
.main-content,
.SliderClose,
#ctl00_DivUserLoggedIn,
.NotificationItem,
.NotificationRead,
.NewsBox,
.timeLineBody,
.BoxAbsencesInfo,
.BoxAbsencesTable,
.help_desk_side {
  background:var(--mc-panel) !important;
  color:var(--mc-text) !important;
  border:1px solid #2f3440 !important;
}

/* Navbar toggler fix */
.navbar-toggler {
  background:var(--mc-panel) !important;
  border:1px solid #3a4968 !important;
}
.navbar-toggler-icon {
  filter: invert(1) brightness(1.8) !important;
  opacity: 1 !important;
}

/* li-heavy areas */
li,
li.LessonMenu,
li.LessonBox,
.LessonMenu li,
.LessonBox li,
ul li,
ol li,
ul,
ol {
  background:var(--mc-panel) !important;
  color:var(--mc-text) !important;
  border-color:#2f3440 !important;
}

/* Improve readability in accordion bodies */
.AccordionCard-body,
.AccordionCard-body p,
.AccordionCard-body span,
.AccordionCard-body div,
.AccordionCard-body li,
.AccordionCard-body a,
.LessonBoxTeachers,
.LessonBoxTeachers p,
.LessonBoxTeachers span,
.LessonBoxTeachers div,
.LessonBoxTeachers li,
.LessonBoxTeachers a {
  color:var(--mc-text) !important;
}
.AccordionCard-body,
.LessonBoxTeachers {
  background:var(--mc-panel) !important;
}

/* page-link */
.page-link {
  background:#1b2130 !important;
  color:#cfe0ff !important;
  border:1px solid #33405a !important;
}
.page-link:hover, .page-link:focus {
  background:#25304a !important;
  color:#ffffff !important;
}
.page-item.active .page-link {
  background:#35507a !important;
  border-color:#4d6da3 !important;
  color:#ffffff !important;
}
.page-item.disabled .page-link {
  background:#171b24 !important;
  color:#7f8ba0 !important;
}

/* Select2 */
.select2-container .select2-selection--single,
.select2-container .select2-selection--multiple,
.select2-dropdown,
.select2-search--dropdown .select2-search__field,
.select2-results__option {
  background:#161a22 !important;
  color:#e6e6e6 !important;
  border-color:#2f3440 !important;
}
.select2-container--default .select2-results__option--highlighted[aria-selected] {
  background:#2b3550 !important;
  color:#e6e6e6 !important;
}

img, video, canvas, svg { filter:brightness(.92) contrast(1.05); }
`;

  const style = document.createElement('style');
  style.id = 'mc-class-dark-theme-style';
  style.textContent = css;

  const inject = () => {
    if (!document.getElementById(style.id)) {
      (document.head || document.documentElement).appendChild(style);
    }
  };

  const makeDarkPlaceholder = () => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675"><rect width="1200" height="675" fill="#161a22"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#f2f6ff" font-size="54" font-family="Arial, sans-serif">No Preview</text></svg>`;
    const placeholderDataUri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

    const imgs = document.querySelectorAll('img.w-100, img[src*="NoPhoto.jpg"], img[src*="nophoto.jpg"]');
    imgs.forEach((img) => {
      const src = (img.getAttribute('src') || '').toLowerCase();
      const isNoPhoto = src.includes('/admin/lessons/cover/nophoto.jpg') || src.includes('/admin/news/photos/nophoto.jpg');
      if (!isNoPhoto) return;
      if (img.dataset.darkPatched === '1') return;
      img.dataset.darkPatched = '1';
      img.src = placeholderDataUri;
      img.style.background = '#161a22';
      img.style.border = '1px solid #2f3440';
      img.style.borderRadius = '8px';
    });
  };

  inject();
  makeDarkPlaceholder();

  document.addEventListener('DOMContentLoaded', () => {
    inject();
    makeDarkPlaceholder();
  });

  new MutationObserver(() => {
    inject();
    makeDarkPlaceholder();
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
