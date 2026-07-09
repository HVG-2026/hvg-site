document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");

  setTimeout(() => {
    if (splash) splash.style.opacity = "0";
  }, 1500);

  setTimeout(() => {
    if (splash) splash.style.display = "none";
  }, 2200);
});

});
