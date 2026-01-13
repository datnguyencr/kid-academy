import * as Utils from "./utils.js";
const container = document.getElementById("items");
const template = document.getElementById("item-template");
const dialog = document.getElementById("dialog");

async function loadCategory() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    if (!category) throw new Error("Missing category in URL");

    try {
        const res = await fetch(`assets/data/${category}.json`);
        const data = await res.json();

        const fragment = document.createDocumentFragment(); // Use fragment for faster DOM updates

        data.items.forEach((item) => {
            const clone = template.content.cloneNode(true);
            const card = clone.querySelector(".card");
            const img = clone.querySelector(".item-image");
            const name = clone.querySelector(".item-name");

            img.src = `images/${category}/${item.image[0]}`;
            img.alt = item.name;
            name.dataset.i18n = item.name;

            // Handle card click
            card.addEventListener("click", () => {
                const dialogName = dialog.querySelector(".item-name");
                const dialogImg = dialog.querySelector(".item-image");
                const playBtn = dialog.querySelector(".play-btn");

                dialogName.dataset.i18n = item.name;
                dialogImg.src = `images/${category}/${item.image[0]}`;
                dialogImg.alt = item.name;

                playBtn.onclick = () =>
                    new Audio(`media/${category}/${item.sound[0]}`).play();
                dialogImg.onclick = playBtn.onclick;

                dialog.classList.remove("hidden");
                Utils.applyLanguage(Utils.language()); // Only needed here for dialog texts
            });

            fragment.appendChild(clone);
        });

        container.appendChild(fragment);

        // Apply language once after all items are added
        Utils.applyLanguage(Utils.language());
    } catch (err) {
        console.error("Error loading data:", err);
    }
}

loadCategory();

// Close dialog when clicking outside the content
dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.classList.add("hidden");
});
// Assign the button by ID
const testMenuBtn = document.getElementById("test-menu-btn");

// Get current category
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// Attach click event
if (testMenuBtn && category) {
    testMenuBtn.addEventListener("click", () => {
        location.href = `quizz.html?category=${category}`;
    });
}

//Utils.enableContentProtection();
