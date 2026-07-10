// ===============================
//  HVG Partners — Language System
// ===============================

// Load saved language or default to Greek
let currentLang = localStorage.getItem("hvg-lang") || "gr";

// Apply language on page load
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
  highlightActiveLanguage(currentLang);
});

// Handle language switch buttons
document.querySelectorAll(".lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    currentLang = lang;

    // Save language
    localStorage.setItem("hvg-lang", lang);

    // Apply language
    applyLanguage(lang);

    // Highlight active language
    highlightActiveLanguage(lang);
  });
});

// Show selected language blocks, hide others
function applyLanguage(lang) {
  document.querySelectorAll(".lang").forEach(block => {
    block.style.display = block.classList.contains(`lang-${lang}`)
      ? "block"
      : "none";
  });
}

// Highlight active language button
function highlightActiveLanguage(lang) {
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    }
  });
}
