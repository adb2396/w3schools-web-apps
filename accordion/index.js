
// Get all accordion nodes
const accordionList = document.querySelectorAll('.accordion');

// looping through each accordion node
accordionList.forEach(function (accordion) {

    // Get nodes of title, icon and content
    const title = accordion.firstElementChild;
    const content = accordion.lastElementChild;
    const icon = title.firstElementChild;

    // add click event listener on the node title
    title.addEventListener('click', function (event) {
        // toggle between 'active' class to open anc close 
        // the accordion
        
        title.classList.toggle("active");

        // change display of node .content to block
        if (content.style.maxHeight) {
            icon.textContent = '+';
            content.style.maxHeight = null;
        } else {
            icon.textContent = '-';
            content.style.maxHeight = `${content.scrollHeight}px`;
        }
    });
}); 