document.addEventListener('DOMContentLoaded', function () {
  const splash = document.getElementById('splash');
  const words = splash ? splash.querySelectorAll('.splash-words span') : [];
  let index = 0;

  function showNextWord() {
    words.forEach(w => w.style.display = 'none');
    if (words[index]) {
      words[index].style.display = 'inline';
      index++;
      if (index < words.length) {
        setTimeout(showNextWord, 700);
      } else {
        setTimeout(finishSplash, 800);
      }
    } else {
      finishSplash();
    }
  }

  function finishSplash() {
    if (!splash) return;
    splash.style.opacity = '1';
    const fade = setInterval(() => {
      const o = parseFloat(splash.style.opacity);
      if (o <= 0) {
        clearInterval(fade);
        splash.style.display = 'none';
        window.location.href = 'about.html';
      } else {
        splash.style.opacity = (o - 0.05).toString();
      }
    }, 40);
  }

  if (splash && words.length) {
    splash.style.opacity = '1';
    setTimeout(showNextWord, 800);
  }

  // CONTACT FORM AJAX + RESET
  document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      status.textContent = '';
      const data = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(res => {
        if (res.ok) {
          form.reset();
          status.textContent = 'Повідомлення надіслано / Message sent';
        } else {
          status.textContent = 'Помилка / Error';
        }
      }).catch(() => {
        status.textContent = 'Помилка / Error';
      });
    });
  });
});
