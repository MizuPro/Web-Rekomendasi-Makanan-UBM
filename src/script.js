// Load base data

document.addEventListener("DOMContentLoaded", () => {
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

    
    // load data
    loadStores();   
});