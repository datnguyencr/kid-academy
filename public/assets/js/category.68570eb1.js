const container = document.getElementById("items");
const template = document.getElementById("item-template");
const dialog = document.getElementById("dialog");

async function loadCategory() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    if (!category) {
        throw new Error("Missing category in URL");
    }

    fetch(`assets/data/${category}.json`)
        .then((res) => res.json())
        .then((data) => {
            const container = document.getElementById("items");
            const template = document.getElementById("item-template");

            data.items.forEach((item) => {
                const clone = template.content.cloneNode(true);
                const card = clone.querySelector(".card");
                const img = clone.querySelector(".item-image");
                const name = clone.querySelector(".item-name");
                img.src = `assets/images/${category}/${item.image[0]}`;
                img.alt = item.name;
                name.innerText = item.name;

                container.appendChild(clone);

                card.addEventListener("click", () => {
                    const name = dialog.querySelector(".item-name");
                    const playBtn = dialog.querySelector(".play-btn");

                    name.innerText = item.name;
                    const img = dialog.querySelector(".item-image");
                    img.src = `assets/images/${category}/${item.image[0]}`;
                    img.alt = item.name;
                    playBtn.onclick = () => {
                        const audio = new Audio(
                            `assets/media/${category}/${item.sound[0]}`
                        );
                        audio.play();
                    };
                    img.onclick = () => {
                        const audio = new Audio(
                            `assets/media/${category}/${item.sound[0]}`
                        );
                        audio.play();
                    };
                    dialog.classList.remove("hidden");
                });
            });
        })
        .catch((err) => console.error("Error loading data:", err));
}
loadCategory();

// Close dialog when clicking outside the content
dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
        // only if clicked on the overlay
        dialog.classList.add("hidden");
    }
});
