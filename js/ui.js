// ===============================
//  HVG Partners — UI / Form Handler
// ===============================

// Fade-in page on load
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.8s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 200);
});

// Splash screen hide (если он есть)
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  if (splash) {
    splash.style.opacity = "0";
    splash.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
      splash.style.display = "none";
    }, 800);
  }
});

// Contact form handler
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".contact-form");

  forms.forEach(form => {
    const status = form.querySelector(".form-status");

    form.addEventListener("submit", (e) => {
      if (!status) return;

      status.textContent = "Sending...";

      // Auto-clear fields after sending
      setTimeout(() => {
        form.reset();
        status.textContent = "Message sent!";
      }, 1500);
    });
  });
});
