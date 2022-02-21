const section = document.querySelector('section');
const nav = document.querySelector('nav');

section.addEventListener('scroll', function (e) {
  if (this.scrollTop > 40) {
    nav.style.top = '-60px';
  } else {
    nav.style.top = '0px';
  }
});
