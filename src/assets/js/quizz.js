import * as Utils from "./utils.js";

const questionImage = document.getElementById("question-image");
const answersDiv = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

let quizData = [];
let currentIndex = 0;
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const backBtn = document.getElementById("back-btn");
if (category) {
    backBtn.href = `category.html?category=${encodeURIComponent(category)}`;
} else {
    backBtn.href = "index.html"; // fallback
}
// Load quiz data based on category
async function loadQuiz() {
    if (!category) throw new Error("Missing category in URL");

    try {
        const res = await fetch(`assets/data/${category}.json`);
        const data = await res.json();

        quizData = data.items.map((item) => {
            const wrongOptions = data.items
                .filter((i) => i.name !== item.name)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
                .map((i) => i.name);

            const options = [...wrongOptions, item.name].sort(
                () => 0.5 - Math.random()
            );

            const sounds = {};
            options.forEach((name) => {
                const found = data.items.find((i) => i.name === name);
                sounds[name] = found
                    ? `media/${category}/${found.sound[0]}`
                    : null;
            });

            return {
                image: `images/${category}/${item.image[0]}`,
                options,
                correct: item.name,
                sounds,
            };
        });

        loadQuestion(currentIndex);
    } catch (err) {
        console.error("Error loading quiz data:", err);
    }
}
function loadQuestion(index) {
    const q = quizData[index];
    questionImage.src = q.image;
    questionImage.alt = q.correct;
    answersDiv.innerHTML = "";
    nextBtn.classList.add("hidden");

    q.options.forEach((option) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.className =
            "px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow hover:bg-blue-100 dark:hover:bg-blue-700 transition-transform duration-150 text-md capitalize";

        // Use precomputed sound from quizData
        const soundUrl = q.sounds[option];

        btn.addEventListener("click", () =>
            checkAnswer(option, q.correct, btn, soundUrl)
        );

        answersDiv.appendChild(btn);
    });

    Utils.applyLanguage(Utils.language());
}

function checkAnswer(selected, correct, btn, soundUrl) {
    // Stop hover effect to prevent visual conflicts
    btn.classList.remove("hover:bg-blue-100", "dark:hover:bg-blue-700");

    // Play the sound immediately
    if (soundUrl) {
        new Audio(soundUrl).play();
    }

    // Flicker neon effect
    if (selected === correct) {
        btn.classList.add("flicker-green");
    } else {
        btn.classList.add("flicker-red");
    }

    nextBtn.classList.remove("hidden");

    // Reset after 1.6s
    setTimeout(() => {
        btn.classList.remove("flicker-green", "flicker-red");
        btn.classList.add(
            "bg-white",
            "dark:bg-gray-700",
            "hover:bg-blue-100",
            "dark:hover:bg-blue-700"
        );
    }, 1600);
}

loadQuiz();
