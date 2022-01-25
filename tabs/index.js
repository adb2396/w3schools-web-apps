// Get all tab nodes
const horizontalTabs = document.querySelectorAll('.horizontal .tab');
const verticalTabs = document.querySelectorAll('.vertical .tab');
// Get content node to fill tab information
const h_content = document.querySelector('.horizontal .content');
const v_content = document.querySelector('.vertical .content');

function renderContent(country, info, type) {
    let title, text;

    if (type === 'hTab') {
        title = h_content.firstElementChild;
        text = h_content.lastElementChild;  
    } else {
        title = v_content.firstElementChild;
        text = v_content.lastElementChild;  
    }
    
    title.textContent = country;
    text.textContent = info;
}

function updateActive(type) {
    let currActive;
    if (type === 'hTab') {
        currActive = document.querySelector('.horizontal .active');
    } else {
        currActive = document.querySelector('.vertical .active');
    }
    currActive.classList.remove('active');
}

function onTabEvent(event, type) {
    // remove current 'active' tab class
    updateActive(type);

    switch (event.currentTarget.textContent) {
        case 'London':
            event.currentTarget.classList.add('active');
            renderContent('London', 'London is the capital city of England.', type);
            return;
        case 'Paris':
            event.currentTarget.classList.add('active');
            renderContent('Paris', 'Paris is the capital of France.', type);
            return;
        case 'New York':
            event.currentTarget.classList.add('active');
            renderContent('New York', 'New York is the capital of USA.', type);
            return;
        default:
            return;
    }
}

// Add 'click' event to each tabList nodes
horizontalTabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
        onTabEvent(e, 'hTab');
    });
});

// Add 'click' event to each tabList nodes
verticalTabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
        onTabEvent(e, 'vTab');
    });
});
