const container = document.querySelector('.container');

container.addEventListener('scroll', function (e) {
  let navNode = document.querySelector('nav');
  if (container.scrollTop > 40) {
    navNode.style.top = '0px';
  } else {
    navNode.style.top = '-60px';
  }
});
