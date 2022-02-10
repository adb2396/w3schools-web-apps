const icon = document.querySelector('.icon');

icon.addEventListener('click', function (e) {
  const nav = document.getElementById('navbar');
  if (nav.className === 'mobile') {
    nav.className = '';
  } else {
    nav.className = 'mobile';
  }
});
