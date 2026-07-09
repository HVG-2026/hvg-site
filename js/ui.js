/* ============================================
   HVG PARTNERS — PREMIUM UI SCRIPT
   Splash animation • Boot sound • Smooth UX
   ============================================ */

/* PLAY BOOT SOUND */
function playBootSound() {
  const audio = document.getElementById('boot-sound');
  if (audio) {
    audio.volume = 0.7;
    audio.play().catch(() => {
      // Autoplay blocked — wait for user interaction
      document.body.addEventListener('click', () => audio.play(), { once: true });
    });
  }
}

/* SPLASH SCREEN ANIMATION */
function hideSplash() {
  const splash = document.getElementById('splash');
  if (!splash) return;

  splash.style.opacity = '0';

  setTimeout(() => {
    splash.style.display = 'none';
  }, 1200);
}

/* INITIAL PAGE ANIMATION */
function fadeInPage() {
  const page = document.querySelector('.page');
  if (page) {
    page.style.opacity = '0';
    page.style.transition = 'opacity 1.2s ease';
    setTimeout(() => {
      page.style.opacity = '1';
    }, 300);
  }
}

/* RUN SEQUENCE */
window.addEventListener('load', () => {
  playBootSound();
  fadeInPage();

  setTimeout(() => {
    hideSplash();
  }, 1800);
});
