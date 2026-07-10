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

    localStorage.setItem("hvg-lang", code);
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
    });
  });

  const saved = localStorage.getItem("hvg-lang") || "gr";
  setLang(saved);
});
