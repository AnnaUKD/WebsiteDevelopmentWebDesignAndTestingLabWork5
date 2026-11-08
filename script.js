const timerEl = document.getElementById('timer');
let seconds = 0;

setInterval(() => {
  seconds++;
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  timerEl.textContent = min + ':' + sec;
}, 1000);


const pages = ['catalog', 'details', 'feedback'];
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('nav a');

function showPage() {
  let page = location.hash.slice(1);

  if (!pages.includes(page)) {
    page = 'catalog';
  }

  sections.forEach((section) => {
    if (section.id === page) {
      section.classList.remove('is-hidden');
    } else {
      section.classList.add('is-hidden');
    }
  });


  links.forEach((link) => {
    if (link.getAttribute('href') === '#' + page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('hashchange', showPage);

showPage();


const form = document.getElementById('feedback-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('user-name').value;
  message.textContent = 'Дякуємо, ' + name + '! Повідомлення отримано.';
  form.reset();
});