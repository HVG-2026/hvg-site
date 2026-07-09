document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".lang-switch button");
  const langBlocks = document.querySelectorAll(".lang");

  function setLang(code) {
    langBlocks.forEach(block => {
      block.style.display = block.classList.contains(`lang-${code}`) ? "" : "none";
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

  setLang("gr");
});
