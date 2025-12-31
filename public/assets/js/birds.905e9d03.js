const container = document.getElementById("items");
const template = document.getElementById("item-template");
const dialog = document.getElementById("dialog");

const audio = new Audio();
audio.preload = "auto";

fetch("assets/data/birds.json")
    .then((res) => res.json())
    .then((data) => {
        const container = document.getElementById("items");
        const template = document.getElementById("item-template");

        data.items.forEach((item) => {
            const clone = template.content.cloneNode(true);
            const card = clone.querySelector(".card");
            const img = clone.querySelector(".item-image");
            const name = clone.querySelector(".item-name");
            img.src = `assets/images/birds/${item.image[0]}`;
            img.alt = item.name;
            name.innerText = item.name;

            container.appendChild(clone);

            card.addEventListener("click", () => {
                const name = dialog.querySelector(".item-name");

                const playBtn = document.getElementById("play-btn");

                name.innerText = item.name;
                const img = dialog.querySelector(".item-image");
                img.src = `assets/images/birds/${item.image[0]}`;
                img.alt = item.name;
                playBtn.onclick = () => {
                    audio.src = `assets/media/birds/${item.sound[0]}`;
                    audio.currentTime = 0;
                    audio.play().catch((err) => {
                        console.error("Audio play failed:", err);
                    });
                };
                img.onclick = () => {
                    const audio = new Audio(
                        `assets/media/birds/${item.sound[0]}`
                    );
                    audio.play();
                };
                dialog.classList.remove("hidden");
            });
        });
    })
    .catch((err) => console.error("Error loading data:", err));

// Close dialog when clicking outside the content
dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
        // only if clicked on the overlay
        dialog.classList.add("hidden");
    }
});
