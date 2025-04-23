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

// JavaScript
const homeSection = document.getElementById("homeContent");
const searchSection = document.getElementById("searchContent");

let startX = 0;
let endX = 0;

// Detect touch start
homeSection.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

// Detect touch end
homeSection.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;

    // Calculate swipe distance
    const distance = startX - endX;

    // If swipe is to the left and distance is significant
    if (distance > 50) {
        homeSection.classList.add("hidden");
        searchSection.classList.remove("hidden");

        // Update active class
        searchButton.classList.add("active");
        homeButton.classList.remove("active");
    }
});

homeButton.addEventListener('click', () => {
    homeContent.classList.remove('animate-slideOut');
    homeContent.classList.add('animate-slideIn');
    searchContent.classList.remove('animate-slideIn');
    searchContent.classList.add('animate-slideOut');
});

searchButton.addEventListener('click', () => {
    searchContent.classList.remove('animate-slideOut');
    searchContent.classList.add('animate-slideIn');
    homeContent.classList.remove('animate-slideIn');
    homeContent.classList.add('animate-slideOut');
});