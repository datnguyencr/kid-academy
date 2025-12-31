const categories = [
    {
        title: "Alphabet",
        desc: "Learn A to Z with pictures and sounds",
        image: "assets/images/alphabet.avif",
        id: "alphabet",
        bg: "bg-red-400",
    },
    {
        title: "Numbers",
        desc: "Count numbers in a fun way",
        image: "assets/images/numbers.avif",
        id: "numbers",
        bg: "bg-yellow-400",
    },
    {
        title: "Animals",
        desc: "Discover animals and their sounds",
        image: "assets/images/animals.avif",
        id: "animals",
        bg: "bg-amber-800",
        textColor: "text-white",
    },
    {
        title: "Birds",
        desc: "Flying friends around us",
        image: "assets/images/birds.avif",
        id: "birds",
        bg: "bg-blue-400",
    },
    {
        title: "Fruits",
        desc: "Flying friends around us",
        image: "assets/images/fruits.avif",
        id: "fruits",
        bg: "bg-green-400",
    },
    {
        title: "Vegetables",
        desc: "Flying friends around us",
        image: "assets/images/vegetables.avif",
        id: "vegetables",
        bg: "bg-green-400",
    },
];

const container = document.getElementById("mainMenu");
const template = document.getElementById("item-template");

categories.forEach((category) => {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector("a");

    card.onclick = () => {
        location.href = `category.html?category=${category.id}`;
    };
    if (category.bg) {
        card.classList.add(category.bg);
    }

    if (category.textColor) {
        card.classList.add(category.textColor);
    }

    clone.querySelector(".item-image").src = category.image;
    clone.querySelector(".item-image").alt = category.title;
    clone.querySelector(".item-title").textContent = category.title;
    clone.querySelector(".item-desc").textContent = category.desc;

    container.appendChild(clone);
});
