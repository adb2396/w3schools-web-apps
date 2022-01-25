// Get burger menu node
const burgerMenu = document.querySelector('.burger');

burgerMenu.addEventListener('click', function (e) { 
    let nav = document.querySelector('.navbar');

    if (nav.className === 'navbar') {
        nav.className += ' mobile'
    } else {
        nav.className = 'navbar';
    }
});