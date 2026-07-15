// ui.js — HVG Partners

// Плавное появление страницы
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.6s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 150);
});

// Скрытие splash-экрана и загрузка стартовой страницы "Про нас" (GR)
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  if (!splash) return;

  // Плавное исчезновение splash
  splash.style.transition = "opacity 1.2s ease";
  splash.style.opacity = "0";

  // Удаление splash и показ стартовой страницы
  setTimeout(() => {
    splash.remove();

    // Включаем греческий язык как стартовый
    const langBlocks = document.querySelectorAll(".lang");
    langBlocks.forEach(el => {
      el.style.display = el.classList.contains("lang-gr") ? "" : "none";
    });

    // Если мы на index.html — автоматически показываем "Про нас"
    if (window.location.pathname.endsWith("index.html") ||
        window.location.pathname.endsWith("/")) {
      window.location.href = "about.html?lang=gr";
    }

  }, 1200);
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
