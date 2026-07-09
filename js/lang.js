const buttons = document.querySelectorAll('.lang-switch button');
const blocks = document.querySelectorAll('.lang');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;

    blocks.forEach(block => block.style.display = 'none');

    document.querySelectorAll('.lang-' + lang).forEach(block => {
      block.style.display = 'block';
    });
  });
});

document.querySelectorAll('.info-block').forEach(block => {
  block.addEventListener('click', () => {
    block.classList.toggle('active');
  });
});
window.addEventListener("load", () => {
    const sound = document.getElementById("boot-sound");

    // Воспроизведение звука через 0.5 сек после загрузки
    setTimeout(() => {
        sound.volume = 0.4; // громкость
        sound.play().catch(() => {});
    }, 500);

    // Показ контента после исчезновения splash
    setTimeout(() => {
        document.getElementById("site-content").style.display = "block";
    }, 2200);
});
