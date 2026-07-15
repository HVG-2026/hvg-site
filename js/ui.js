// ui.js — HVG Partners (эффект как раньше)

// Плавное появление страницы
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.8s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 200);
});

// Скрытие splash и переход на страницу "Про нас" (GR)
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  if (!splash) return;

  // Плавное исчезновение splash — 2 секунды (как раньше)
  splash.style.transition = "opacity 2s ease";
  splash.style.opacity = "0";

  setTimeout(() => {
    splash.remove();

    // Автоматическая загрузка страницы "Про нас" на греческом
    if (window.location.pathname.endsWith("index.html") ||
        window.location.pathname.endsWith("/")) {
      window.location.href = "about.html?lang=gr";
    }

  }, 2000); // ← 2 секунды, как было раньше
});

// Обработка форм контактов
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".contact-form");

  forms.forEach(form => {
    const status = form.querySelector(".form-status");

    form.addEventListener("submit", () => {
      if (!status) return;

      status.textContent = "Sending...";
      setTimeout(() => {
        form.reset();
        status.textContent = "Message sent!";
      }, 1500);
    });
  });
});
