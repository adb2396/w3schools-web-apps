// Get all tab nodes
const tabList = document.querySelectorAll('.tab');
// Get content node to fill tab information
const content = document.querySelector('.content');

function renderContent(country, info) {
    let title = content.firstElementChild;
    let text = content.lastElementChild;
    
    title.textContent = country;
    text.textContent = info;
}

function changeBgColor(element) {
    element.style.color = 'white';
    content.style.color = 'white';
    element.style.backgroundColor = element.getAttribute('data-color');
    content.style.backgroundColor = element.getAttribute('data-color');   
}

function onTabClick(event) {
    // remove current 'active' tab class
    const currActive = document.querySelector('.active');
    currActive.classList.remove('active');
    currActive.style.color = 'black';
    currActive.style.backgroundColor = '#efefef';

    changeBgColor(this);

    switch (event.currentTarget.textContent) {
        case 'London':
            event.currentTarget.classList.add('active');
            renderContent('London', 'London is the capital city of England.');
            return;
        case 'Paris':
            event.currentTarget.classList.add('active');
            renderContent('Paris', 'Paris is the capital of France.');
            return;
        case 'New York':
            event.currentTarget.classList.add('active');
            renderContent('New York', 'New York is the capital of USA.');
            return;
        default:
            return;
    }
}

function onMouseOver(event) {
    if (!event.currentTarget.classList.contains('active')) {
        event.currentTarget.style.backgroundColor = '#d8d8d8';
    }
}

function onMouseOut(event) {
     if (!event.currentTarget.classList.contains('active')) {
        event.currentTarget.style.backgroundColor = '#efefef';
    }
}

// Add 'click' event to each tabList nodes
tabList.forEach(function (tab) {
    tab.addEventListener('click', onTabClick);
});

// Add 'mouseover' event to each tabList nodes
tabList.forEach(function (tab) {
    tab.addEventListener('mouseover', onMouseOver);
});

// Add 'mouseover' event to each tabList nodes
tabList.forEach(function (tab) {
    tab.addEventListener('mouseout', onMouseOut);
});