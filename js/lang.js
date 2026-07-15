(function () {
  const STORAGE_KEY = 'hvg-lang';

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    document.querySelectorAll('.lang').forEach(el => {
      el.style.display = el.classList.contains('lang-' + lang) ? '' : 'none';
    });
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      const active = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('data-active', active ? 'true' : 'false');
    });
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.lang-switch button');
    if (!btn) return;
    const lang = btn.getAttribute('data-lang');
    setLang(lang);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem(STORAGE_KEY) || 'gr';
    applyLang(saved);
  });
})();
