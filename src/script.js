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

document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const homeButton = document.getElementById("homeButton");
    const homeContent = document.getElementById("homeContent");
    const searchContent = document.getElementById("searchContent");
    const storeContainer = document.getElementById("storeContainer");

    // Fungsi untuk menampilkan daftar toko
    async function loadStores() {
        try {
            const response = await fetch("src/stores_real.json");
            const stores = await response.json();

            stores.forEach(store => {
                // Buat elemen card untuk setiap toko
                const storeCard = document.createElement("div");
                storeCard.classList.add(
                    "store-card",
                    "p-4",
                    "bg-white",
                    "shadow",
                    "rounded-lg",
                    "hover:shadow-lg",
                    "transition-shadow",
                    "duration-200"
                );

                storeCard.innerHTML = `
                    <h3 class="font-bold text-lg text-orange-500">${store.name}</h3>
                    <p class="text-sm text-gray-600 mb-4">${store.description}</p>
                    <a href="store.html?name=${encodeURIComponent(store.name)}"
                        class="text-blue-500 hover:underline text-sm">Lihat Detail</a>
                `;

                storeContainer.appendChild(storeCard);
            });
        } catch (error) {
            console.error("Gagal memuat data toko:", error);
        }
    }

    // Toggle antara Home dan Search
    searchButton.addEventListener("click", () => {
        homeContent.classList.add("hidden");
        searchContent.classList.remove("hidden");

        // Load toko hanya jika belum ada
        if (!storeContainer.hasChildNodes()) {
            loadStores();
        }
    });

    homeButton.addEventListener("click", () => {
        searchContent.classList.add("hidden");
        homeContent.classList.remove("hidden");
    });
});