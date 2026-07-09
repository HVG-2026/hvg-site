/* ============================================
   HVG PARTNERS — PREMIUM UI SCRIPT
   Splash animation • Smooth fade • Logo reveal
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const logo = document.querySelector(".splash-logo");
  const circles = document.querySelectorAll(".circle");

  /* 1. Плавное появление логотипа */
  if (logo) {
    logo.style.opacity = "0";
    logo.style.transform = "scale(0.85)";
    setTimeout(() => {
      logo.style.transition = "opacity 1.2s ease, transform 1.2s ease";
      logo.style.opacity = "1";
      logo.style.transform = "scale(1)";
    }, 100);
  }

  /* 2. Анимация кругов (если есть CSS keyframes — они сами запустятся) */
  circles.forEach(circle => {
    circle.style.opacity = "0";
    setTimeout(() => {
      circle.style.transition = "opacity 0.8s ease";
      circle.style.opacity = "1";
    }, 400);
  });

  /* 3. Плавное исчезновение splash */
  setTimeout(() => {
    if (splash) {
      splash.style.transition = "opacity 1.2s ease";
      splash.style.opacity = "0";
    }
  }, 2000);

  /* 4. Полное скрытие splash */
  setTimeout(() => {
    if (splash) {
      splash.style.display = "none";
    }
  }, 3200);
});
