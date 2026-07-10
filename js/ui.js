document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const logo = document.querySelector(".splash-logo");
  const header = document.querySelector(".site-header");
  const main = document.querySelector("main");

  // сначала прячем шапку и контент
  if (header) header.style.opacity = "0";
  if (main) main.style.opacity = "0";

  // анимация логотипа по центру
  if (logo) {
    logo.style.opacity = "0";
    logo.style.transform = "scale(0.9)";
    setTimeout(() => {
      logo.style.transition = "opacity 1.2s ease, transform 1.2s ease";
      logo.style.opacity = "1";
      logo.style.transform = "scale(1)";
    }, 100);
  }

  // затухание splash
  setTimeout(() => {
    if (splash) {
      splash.style.transition = "opacity 1s ease";
      splash.style.opacity = "0";
    }
  }, 1800);

  // скрываем splash и показываем меню + стартовую страницу
  setTimeout(() => {
    if (splash) splash.style.display = "none";
    if (header) {
      header.style.transition = "opacity 0.8s ease";
      header.style.opacity = "1";
    }
    if (main) {
      main.style.transition = "opacity 0.8s ease";
      main.style.opacity = "1";
    }
  }, 2600);
});
