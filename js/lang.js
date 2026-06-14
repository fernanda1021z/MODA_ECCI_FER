/* =============================================
   MODA ECCI 2026 — lang.js
   Maneja el cambio de idioma ES ↔ EN
   ============================================= */

let currentLang = localStorage.getItem('lang') || 'es';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  document.documentElement.lang = lang;

  // Actualiza todos los elementos con data-es / data-en
  document.querySelectorAll('[data-es]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      // Si es un input o textarea, actualiza placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Actualiza el label del botón
  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang === 'es' ? 'EN' : 'ES';

  // Actualiza el <title>
  const titleEl = document.querySelector('title[data-es]');
  if (titleEl) {
    titleEl.textContent = titleEl.getAttribute(`data-${lang}`) || titleEl.textContent;
  }
}

function toggleLang() {
  applyLang(currentLang === 'es' ? 'en' : 'es');
}

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  if (nav) nav.classList.toggle('open');
}

// Aplica el idioma guardado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
});
