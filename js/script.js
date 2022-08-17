const header = document.querySelector('header');

document.addEventListener('scroll', () => {
  if (window.scrollY >= header.scrollHeight) {
    header.classList.add('change-bg');
  } else {
    header.classList.remove('change-bg');
  }
});