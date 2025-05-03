document.addEventListener("DOMContentLoaded", async () => {
    const storeDetailSection = document.getElementById("storeDetail");
    const params = new URLSearchParams(window.location.search);
    const storeName = params.get("name");

    if (!storeName) {
        storeDetailSection.innerHTML = `<p class="text-center text-red-500">Toko tidak ditemukan.</p>`;
        return;
    }

    try {
        const response = await fetch("src/stores_real.json");
        const stores = await response.json();
        const store = stores.find(s => s.name === storeName);

        if (!store) {
            storeDetailSection.innerHTML = `<p class="text-center text-red-500">Toko tidak ditemukan.</p>`;
            return;
        }

        // Tampilkan detail toko
        storeDetailSection.innerHTML = `
            <link rel="stylesheet" href="src/output.css">
            <div class="ml-2"><br>
               <br>
               <br>
            <h2 class="text-2xl font-bold text-orange-500 mb-4">${store.name}</h2>
            <p class="text-gray-600 mb-6">${store.description}</p>
            <h3 class="text-lg font-bold mb-2">Menu:</h3>
            <ul class="text-left">
                ${store.menu
            .map(
                menuItem =>
                    `<li class="flex justify-between border-b border-gray-200 py-2">
                                <span>${menuItem.item}</span>
                                <span>Rp ${menuItem.price.toLocaleString()}</span>
                            </li>`
            )
            .join("")}
            </ul></div>
               
        `;
    } catch (error) {
        console.error("Gagal memuat data toko:", error);
        storeDetailSection.innerHTML = `<p class="text-center text-red-500">Terjadi kesalahan. Silakan coba lagi nanti.</p>`;
    }
});