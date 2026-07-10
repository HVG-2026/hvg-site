// ===============================
//  HVG Partners — UI / Splash System
// ===============================

// Splash screen hide after load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const splash = document.getElementById("splash");
    if (splash) {
      splash.style.opacity = "0";
      splash.style.transition = "opacity 0.8s ease";

      setTimeout(() => {
        splash.style.display = "none";
      }, 800);
    }
  }, 2200); // splash duration
});

// Smooth fade-in for page content
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.8s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 300);
});

// Fix mobile header spacing
function adjustMobileHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  if (window.innerWidth < 768) {
    header.style.padding = "15px 0";
  } else {
    header.style.padding = "10px 0";
  }
}

window.addEventListener("resize", adjustMobileHeader);
window.addEventListener("DOMContentLoaded", adjustMobileHeader);

// Prevent layout shift on splash removal
window.addEventListener("load", () => {
  document.body.style.visibility = "visible";
});
