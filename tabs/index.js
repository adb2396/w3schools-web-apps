
// Get all tab nodes
const tabList = document.querySelectorAll('.tab');
// Get content node to fill tab information
const content = document.querySelector('.content');

function renderContent(country, info) {
    content.textContent = '';

    let header = document.createElement('h2');
    header.textContent = country;
    let infoPara = document.createElement('p');
    infoPara.textContent = info;

    content.appendChild(header);
    content.appendChild(infoPara);
}

// Add 'click' event to each tabList nodes
tabList.forEach(function (tab) {
    tab.addEventListener('click', function () {
        switch (tab.textContent) {
            case 'London':
                renderContent('London', 'London is the capital city of England.');
                return;
            case 'Paris':
                renderContent('Paris', 'Paris is the capital of France.');
                return;
            case 'New York':
                renderContent('New York', 'New York is the capital of USA.');
                return;
            default:
                return;
        }
    })
});