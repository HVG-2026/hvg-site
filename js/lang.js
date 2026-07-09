document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".lang-switch button");
  const langBlocks = document.querySelectorAll(".lang");

  function setLang(code) {
    langBlocks.forEach(block => {
      if (block.classList.contains(`lang-${code}`)) {
        block.style.display = "";
      } else {
        block.style.display = "none";
      }
    });

    buttons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === code);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
    });
  });

  // Язык по умолчанию — греческий
  setLang("gr");
});
