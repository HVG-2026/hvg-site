// ui.js — HVG & Partners UI

// Плавное появление страницы
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.6s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 150);
});

// Скрытие splash-экрана после загрузки
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  if (!splash) return;

  splash.style.transition = "opacity 0.8s ease";
  splash.style.opacity = "0";

  setTimeout(() => {
    splash.remove();
  }, 800);
});

// Обработка форм контактов (статус + авто-очистка)
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
