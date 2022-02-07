// main section node
const main = document.getElementById('main');
// nav node
const nav = document.getElementsByTagName('nav')[0];
// close node
const close = document.querySelector('.close-btn');

// action buttons
const overlay = document.getElementById('overlay');
const overlayWA = document.getElementById('overlayWA');
const pushCanvas = document.getElementById('pushCanvas');
const pushCanvasOpacity = document.getElementById('pushCanvasOpacity');
const fullWidth = document.getElementById('fullWidth');

/* Navbar Overlay With Animation */
overlay.addEventListener("click", function (e) {
    nav.classList.value = 'overlay animation';
});

/* Navbar Overlay Without Animation */
overlayWA.addEventListener("click", function (e) {
    nav.classList.value = 'overlay';
});

/* Navbar Overlay Push Canvas */
pushCanvas.addEventListener("click", function (e) {
    nav.classList.value = 'overlay animation';
    main.classList.value = "push-canvas animation";
});

/* Navbar Overlay Push Canvas Opacity */
pushCanvasOpacity.addEventListener("click", function (e) {
    nav.classList.value = 'overlay animation';
    main.classList.value = "push-canvas animation opacity";
});

/* Navbar Overlay Full Width */
fullWidth.addEventListener("click", function (e) {
    nav.classList.value = 'full-width-overlay animation';
});

close.addEventListener('click', function (e) {
    if (nav.classList.contains('animation')) {
        nav.classList.value = 'close animation';
    } else {
        nav.classList.value = 'close';
    }

    main.classList.value = 'animation';
})