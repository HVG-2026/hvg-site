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
