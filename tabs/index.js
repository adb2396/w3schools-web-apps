// Get all tab nodes
const horizontalTabs = document.querySelectorAll('.horizontal .tab');
const verticalTabs = document.querySelectorAll('.vertical .tab');
const hoverTabs = document.querySelectorAll('.hover .tab');

// Get content node to fill tab information
const h_content = document.querySelector('.horizontal .content');
const v_content = document.querySelector('.vertical .content');
const hover_content = document.querySelector('.hover .content');

function renderContent(country, info, element) {
    let title = element.firstElementChild;
    let text = element.lastElementChild;  
    
    title.textContent = country;
    text.textContent = info;
}

function onTabEvent(event, contentElement) {
    switch (event.currentTarget.textContent) {
        case 'London':
            event.currentTarget.classList.add('active');
            renderContent('London', 'London is the capital city of England.', contentElement);
            return;
        case 'Paris':
            event.currentTarget.classList.add('active');
            renderContent('Paris', 'Paris is the capital of France.', contentElement);
            return;
        case 'New York':
            event.currentTarget.classList.add('active');
            renderContent('New York', 'New York is the capital of USA.', contentElement);
            return;
        default:
            return;
    }
}

// Add 'click' event to each horizontalTabs nodes
horizontalTabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
        // remove current 'active' tab class
        document.querySelector('.horizontal .active').classList.remove('active');
        onTabEvent(e, h_content);
    });
});

// Add 'click' event to each verticalTabs nodes
verticalTabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
        // remove current 'active' tab class
        document.querySelector('.vertical .active').classList.remove('active');
        onTabEvent(e, v_content);
    });
});

// Add 'mouseover' event to each hoverTabs nodes
hoverTabs.forEach(function (tab) {
    tab.addEventListener('mouseover', function (e) {
        // remove current 'active' tab class
        document.querySelector('.hover .active').classList.remove('active');
        onTabEvent(e, hover_content);
    });
});
