import * as Utils from "./utils.js";
const categories = [
    {
        title: "alphabetTitle",
        desc: "alphabetDesc",
        image: "images/alphabet.avif",
        id: "alphabet",
        bg: "bg-red-400",
    },
    {
        title: "numbersTitle",
        desc: "numbersDesc",
        image: "images/numbers.avif",
        id: "numbers",
        bg: "bg-yellow-400",
    },
    {
        title: "animalsTitle",
        desc: "animalsDesc",
        image: "images/animals.avif",
        id: "animals",
        bg: "bg-amber-800",
        textColor: "text-white",
    },
    {
        title: "birdsTitle",
        desc: "birdsDesc",
        image: "images/birds.avif",
        id: "birds",
        bg: "bg-blue-400",
    },
    {
        title: "fruitsTitle",
        desc: "fruitsDesc",
        image: "images/fruits.avif",
        id: "fruits",
        bg: "bg-green-400",
    },
    {
        title: "vegetablesTitle",
        desc: "vegetablesDesc",
        image: "images/vegetables.avif",
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
        card.classList.add(`dark:${category.textColor}`);
    } else {
        card.classList.add("text-gray-900");
        card.classList.add("dark:text-gray-900");
    }

    const img = clone.querySelector(".item-image");
    img.src = category.image;
    img.alt = category.titleKey;
    clone.querySelector(".item-title").dataset.i18n = category.title;
    clone.querySelector(".item-desc").dataset.i18n = category.desc;

    container.appendChild(clone);
});

(() => {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    const html = document.documentElement;
    toggle.addEventListener("click", () => {
        const isDark = html.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
})();
const languageSelect = document.getElementById("language-select");
const savedLang = localStorage.getItem("language") || "en";

// Populate option text on page load
languageSelect.querySelectorAll("option").forEach((opt) => {
    const key = opt.dataset.i18n;
    opt.textContent = Utils.translations[savedLang][key] || opt.value;
});

// Set select to saved language
languageSelect.value = savedLang;
Utils.applyLanguage(savedLang);

// Listen for change
languageSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("language", lang);

    // Update page texts
    Utils.applyLanguage(lang);

    // Update option text to match selected language
    languageSelect.querySelectorAll("option").forEach((opt) => {
        const key = opt.dataset.i18n;
        opt.textContent = translations[lang][key] || opt.value;
    });
});
Utils.applyLanguage(Utils.language());

if (Utils.isProduction()) {
    Utils.enableContentProtection();
}
