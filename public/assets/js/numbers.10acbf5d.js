const container = document.getElementById("items");
const template = document.getElementById("item-template");
const dialog = document.getElementById("dialog");

const audio = new Audio();
audio.preload = "auto";

fetch("assets/data/numbers.json")
    .then((res) => res.json())
    .then((data) => {
        data.items.forEach((item) => {
            const clone = template.content.cloneNode(true);
            const card = clone.querySelector(".card");
            const img = clone.querySelector(".item-image");
            const name = clone.querySelector(".item-name");

            img.src = `assets/images/numbers/${item.image[0]}`;
            img.alt = item.name;
            name.innerText = item.name;

            container.appendChild(clone);

            card.addEventListener("click", () => {
                const dialogName = dialog.querySelector(".item-name");
                const dialogImg = dialog.querySelector(".item-image");

                dialogName.innerText = item.name;
                dialogImg.src = `assets/images/numbers/${item.image[0]}`;
                dialogImg.alt = item.name;

                dialogName.onclick = () => {
                    audio.src = `assets/media/numbers/${item.sound[0]}`;
                    audio.currentTime = 0;
                    audio.play().catch((err) => {
                        console.error("Audio play failed:", err);
                    });
                };

                dialog.classList.remove("hidden");
            });
        });
    })
    .catch((err) => console.error("Error loading data:", err));

// Close dialog when clicking outside content
dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
        dialog.classList.add("hidden");
    }
});
