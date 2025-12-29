const categories = [
    {
        title: "Alphabet",
        desc: "Learn A to Z with pictures and sounds",
        image: "assets/images/alphabet.avif",
        link: "alphabet.html",
        bg: "bg-red-400",
    },
    {
        title: "Numbers",
        desc: "Count numbers in a fun way",
        image: "assets/images/numbers.avif",
        link: "numbers.html",
        bg: "bg-yellow-400",
    },
    {
        title: "Animals",
        desc: "Discover animals and their sounds",
        image: "assets/images/animals.avif",
        link: "animals.html",
        bg: "bg-green-400",
    },
    {
        title: "Birds",
        desc: "Flying friends around us",
        image: "assets/images/birds.avif",
        link: "birds.html",
        bg: "bg-blue-400",
    },
];

const container = document.getElementById("mainMenu");
const template = document.getElementById("item-template");

categories.forEach((cat) => {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector("a");

    card.href = cat.link;
    card.classList.add(cat.bg);

    clone.querySelector(".item-image").src = cat.image;
    clone.querySelector(".item-image").alt = cat.title;
    clone.querySelector(".item-title").textContent = cat.title;
    clone.querySelector(".item-desc").textContent = cat.desc;

    container.appendChild(clone);
});
