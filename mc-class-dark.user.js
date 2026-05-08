// ==UserScript==
// @name         MC-Class Dark Theme
// @namespace    https://mc-class.gr/
// @version      0.1.13
// @description  Dark theme for mc-class.gr
// @author       ek-mc
// @license      MIT
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
  --mc-panel: rgba(255, 255, 255, 0.05);
  --mc-text: #f0f6fc;
}
html, body { background:var(--mc-bg) !important; color:var(--mc-text) !important; }

body *, body *::before, body *::after { border-color:#2f3440 !important; }

nav, footer, main, section, article, aside,
.container, .content, .card, .panel, .box, .modal, .dropdown-menu,
.table, table, thead, tbody, tr, td, th,
input, textarea, select,
#opac-main-search,
.breadcrumb,
.LessonBoxTeachers {
  background-color:var(--mc-surface) !important;
  color:var(--mc-text) !important;
}

header {
  background-color:var(--mc-panel) !important;
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

/* Requested tweak: SliderClose border should match panel background */
.SliderClose {
  border-color: var(--mc-panel) !important;
}

/* Notification detail readability (ViewNotificationDescr often has hardcoded low-contrast gray) */
.ViewNotificationDescr,
#ViewNotificationDescr,
[class*="ViewNotificationDescr"],
[id*="ViewNotificationDescr"],
.ViewNotificationDescr p,
.ViewNotificationDescr span,
.ViewNotificationDescr div,
#ViewNotificationDescr p,
#ViewNotificationDescr span,
#ViewNotificationDescr div,
.ViewNotificationDescr [style*="color"],
#ViewNotificationDescr [style*="color"] {
  color:var(--mc-text) !important;
  opacity:1 !important;
}

/* Navbar toggler fix */
.navbar-toggler {
  background:var(--mc-panel) !important;
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

/* Sidebar minimized fix: keep only icon, hide tiny label text */
@media (min-width: 992px) {
  .sidebar-minimized .sidebar .sidebar-nav .nav .nav-link {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .sidebar-minimized .sidebar .sidebar-nav .nav .menu-icon {
    margin: 0 !important;
    font-size: 18px !important;
    line-height: 1 !important;
    min-width: 18px !important;
    text-align: center !important;
  }

  .sidebar-minimized .sidebar .sidebar-nav .nav .menu-text,
  .sidebar-minimized .sidebar .sidebar-nav .nav span.menu-text {
    display: none !important;
    width: 0 !important;
    opacity: 0 !important;
    overflow: hidden !important;
    white-space: nowrap !important;
  }
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

/* News/notification readability fixes */
.NewsBoxDescr,
.ViewNewDescr p,
.ViewNewTitle h3,
.NewsBoxTitle,
.NewsBoxDescr *,
.ViewNewDescr *,
.ViewNewTitle *,
.NewsBoxTitle * {
  color: var(--mc-text) !important;
  opacity: 1 !important;
}

/* Replace legacy bright-green backgrounds with dark-theme-safe accent */
[style*="background-color:#7cb742"],
[style*="background-color: #7cb742"],
[style*="background:#7cb742"],
[style*="background: #7cb742"],
[style*="rgb(124,183,66)"],
[style*="rgb(124, 183, 66)"] {
  background-color: #2d6a8a !important;
  border-color: #3f86ab !important;
  color: #eaf6ff !important;
}

/* Global low-contrast rescue for legacy hardcoded gray text on dark backgrounds */
[style*="#515050"],
[style*="#515050" i],
[style*="rgb(81,80,80)"],
[style*="rgb(81, 80, 80)"] {
  color: var(--mc-text) !important;
}



/* Completed status icons: normalize across all variants (outline-like, muted blue) */
.UnitAssets .AssetIconCompleted,
.AssetIconCompleted,
.Completed .LessonBoxFooterIconCompleted,
.LessonBoxFooterIconCompleted,
.BoxStatus.Completed {
  background: transparent !important;
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;
}

.UnitAssets .AssetIconCompleted i,
.AssetIconCompleted i,
.Completed .LessonBoxFooterIconCompleted i,
.LessonBoxFooterIconCompleted i,
.BoxStatus.Completed i,
i.RDCicon-completed {
  color: #059669 !important;
}

/* Survey readability fixes */
.SectorContainer {
  background: var(--mc-bg) !important;
  color: var(--mc-text) !important;
}

.SurveyEkfwnisiText {
  color: var(--mc-text) !important;
}

.MainSurveyHeader.fixed .SurveyHeaderInfo {
  background: var(--mc-bg) !important;
  color: var(--mc-text) !important;
}

.questionItemLikert:nth-child(2n+1),
.questionItemLikert:nth-child(2n) {
  background: var(--mc-bg) !important;
}

.help_desk_toggle {
  background: var(--mc-panel) !important;
}

.sidebar {
  background: var(--mc-panel) !important;
}

.SurveyNb {
  background: var(--mc-bg) !important;
  color: var(--mc-text) !important;
}

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

  const forceListViewByClick = () => {
    const listIcon = document.querySelector('i.LessonView.RDCicon-list');
    const gridIcon = document.querySelector('i.LessonView.RDCicon-grid-view');
    if (!listIcon || !gridIcon) return;

    const key = `mc-class-force-list-clicked:${location.pathname}${location.search}`;
    const gridActive = (gridIcon.className || '').toLowerCase().includes('active');
    if (!gridActive) {
      sessionStorage.setItem(key, '1');
      return;
    }
    if (sessionStorage.getItem(key) === '1') return;

    listIcon.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    listIcon.click();
    sessionStorage.setItem(key, '1');
  };

  const apply = () => {
    inject();
    makeDarkPlaceholder();
    forceListViewByClick();
  };

  apply();

  document.addEventListener('DOMContentLoaded', apply);

  new MutationObserver(() => {
    apply();
  }).observe(document.documentElement, { childList: true, subtree: true });
})();


.InProgress {
  background-color: #55607A !important;
}

/* Additional dark-theme alignment */
.badge-danger {
  background-color: #4493f8 !important;
}

.SectorContainer {
  background: var(--mc-bg) !important;
}

.SurveyNb {
  background: var(--mc-bg) !important;
}



.NotificationAvatar.avatar {
  background-color: var(--mc-bg) !important;
}

.NotificationTitle,
NotificationTitle {
  color: #f0f6fc !important;
}


.BoxDates {
  color: var(--mc-text) !important;
}

.BoxLessonTeacher label {
  color: var(--mc-text) !important;
}


label.BoxTeacher,
.BoxDates.SameDay,
.BoxRoomTitle,
.BoxDurationTitle {
  color: var(--mc-text) !important;
}

.main {
  background: var(--mc-bg) !important;
}

.card {
  background-color:var(--mc-bg) !important;
}

.LessonBoxTitle {
  color: var(--mc-text) !important;
}


.BoxRoomCode,
.BoxDurationTime {
  color: var(--mc-text) !important;
}


.UnitAssets li a,
.AssetClick {
  color: var(--mc-text) !important;
}

.UnitAssets li a:hover,
.UnitAssets li a:focus,
.AssetClick:hover,
.AssetClick:focus {
  color: rgb(68, 147, 248) !important;
}


.BoxAbsencesInfoLesson,
.BoxAbsencesInfoTeacher,
.BoxAbsencesInfoClass {
  color: var(--mc-text) !important;
}


.StartsInCert {
  background-color: #55607A !important;
}

h3 {
  color: var(--mc-text) !important;
}

.ViewNotificationTitle h3 {
  color: var(--mc-text) !important;
}

.ViewNotificationAvatar {
  background-color: var(--mc-bg) !important;
}


.AccordionCard-body:hover {
  color: rgb(68, 147, 248) !important;
}


.sidebar .nav-link i {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 18px !important;
  margin: 0 0.55rem 0 0 !important;
  font-size: 14px !important;
  line-height: 1 !important;
  color: #fff !important;
}
footer {
  background: var(--mc-bg) !important;
}
