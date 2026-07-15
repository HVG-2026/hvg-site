// js/lang.js

document.addEventListener("DOMContentLoaded", () => {
  const switchers = document.querySelectorAll(".lang-switch button");

  function setLang(lang) {
    // показать нужные блоки .lang-XX
    document.querySelectorAll(".lang").forEach(el => {
      if (el.classList.contains("lang-" + lang)) {
        el.style.display = "";
      } else {
        el.style.display = "none";
      }
    });

    // подсветить активную кнопку
    switchers.forEach(btn => {
      btn.dataset.active = (btn.dataset.lang === lang) ? "true" : "false";
    });
  }

  // стартовый язык — греческий
  setLang("gr");

  // обработчики клика по кнопкам
  switchers.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLang(lang);
    });
  });
});
