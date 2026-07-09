/* ============================================
   HVG PARTNERS — PREMIUM LANGUAGE SWITCHER
   GR • EN • UA
   ============================================ */

const buttons = document.querySelectorAll('.lang-switch a');
const blocks = document.querySelectorAll('.lang');

/* LOAD SAVED LANGUAGE */
function loadSavedLanguage() {
  const saved = localStorage.getItem('hvg-lang');
  if (saved) {
    switchLanguage(saved);
  }
}

/* SWITCH LANGUAGE */
function switchLanguage(lang) {
  // Hide all language blocks
  blocks.forEach(block => {
    block.style.display = 'none';
  });

  // Show selected language block
  const active = document.querySelector('.lang-' + lang);
  if (active) {
    active.style.display = 'block';
  }

  // Save language
  localStorage.setItem('hvg-lang', lang);

  // Update active button style
  buttons.forEach(btn => {
    btn.style.background = '#d4af37';
    btn.style.color = '#000';
  });

  const activeBtn = document.querySelector(`[data-lang="${lang}"]`);
  if (activeBtn) {
    activeBtn.style.background = '#f5e4b0';
  }
}

/* BUTTON CLICK EVENTS */
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    switchLanguage(lang);
  });
});

/* INIT */
loadSavedLanguage();
