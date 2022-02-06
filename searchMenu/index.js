// Get search input node
const search = document.getElementById('search');
// list of menu items
const menuList = document.querySelectorAll('.menu li');

search.addEventListener('keyup', function (e) {
    const value = e.currentTarget.value.toLowerCase();

    menuList.forEach(function (item) {
        if (item.textContent.toLowerCase().includes(value)) {
            item.style.display = "";
        } else {
            item.style.display = "none"
        }
    });
});