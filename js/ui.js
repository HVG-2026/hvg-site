document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");

  if (!splash) return; // если нет splash — ничего не делаем

  const logo = document.querySelector(".splash-logo");
  const header = document.querySelector(".site-header");
  const main = document.querySelector(".page");

  header.style.opacity = "0";
  main.style.opacity = "0";

  logo.style.opacity = "0";
  logo.style.transform = "scale(0.9)";
  setTimeout(() => {
    logo.style.transition = "opacity 1.2s ease, transform 1.2s ease";
    logo.style.opacity = "1";
    logo.style.transform = "scale(1)";
  }, 100);

  setTimeout(() => {
    splash.style.transition = "opacity 1s ease";
    splash.style.opacity = "0";
  }, 2000);

  setTimeout(() => {
    splash.style.display = "none";
    header.style.transition = "opacity 0.8s ease";
    main.style.transition = "opacity 0.8s ease";
    header.style.opacity = "1";
    main.style.opacity = "1";
  }, 2800);
});
