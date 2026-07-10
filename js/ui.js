document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const logo = document.querySelector(".splash-logo");

  // Windows‑style boot animation
  if (logo) {
    logo.style.opacity = "0";
    logo.style.transform = "scale(0.9)";
    setTimeout(() => {
      logo.style.transition = "opacity 1.2s ease, transform 1.2s ease";
      logo.style.opacity = "1";
      logo.style.transform = "scale(1)";
    }, 100);
  }

  // Fade out splash
  setTimeout(() => {
    splash.style.opacity = "0";
  }, 1800);

  setTimeout(() => {
    splash.style.display = "none";
  }, 2600);
});
