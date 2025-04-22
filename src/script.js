const homeButton = document.getElementById('homeButton');
const searchButton = document.getElementById('searchButton');
const homeContent = document.getElementById('homeContent');
const searchContent = document.getElementById('searchContent');

homeButton.addEventListener('click', () => {
    homeContent.classList.remove('hidden');
    searchContent.classList.add('hidden');
    homeButton.classList.add('active');
    searchButton.classList.remove('active');
});

searchButton.addEventListener('click', () => {
    console.log('Search button clicked'); // Debug log
    searchContent.classList.remove('hidden');
    homeContent.classList.add('hidden');
    searchButton.classList.add('active');
    homeButton.classList.remove('active');

    const searchInput = searchContent.querySelector('input');
    if (searchInput) {
        searchInput.focus();
        console.log('Input focused'); // Debug log
    }
});

