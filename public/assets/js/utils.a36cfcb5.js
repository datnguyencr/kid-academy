tailwind.config = {
    darkMode: "class",
};
const savedTheme = localStorage.getItem("theme");
const html = document.documentElement;
if (savedTheme === "dark") {
    html.classList.add("dark");
}

export const translations = {
    en: {
        english: "English",
        vietnamese: "Vietnamese",
        back: "Back",
        alphabetTitle: "Alphabet",
        alphabetDesc: "Learn A to Z with pictures and sounds",
        numbersTitle: "Numbers",
        numbersDesc: "Count numbers in a fun way",
        animalsTitle: "Animals",
        animalsDesc: "Discover animals and their sounds",
        birdsTitle: "Birds",
        birdsDesc: "Flying friends around us",
        fruitsTitle: "Fruits",
        fruitsDesc: "Learn about tasty fruits and their colors.",
        vegetablesTitle: "Vegetables",
        vegetablesDesc: "Learn about healthy vegetables.",
        //animals
        lion: "Lion",
        tiger: "Tiger",
        elephant: "Elephant",
        giraffe: "Giraffe",
        zebra: "Zebra",
        monkey: "Monkey",
        bear: "Bear",
        wolf: "Wolf",
        fox: "Fox",
        kangaroo: "Kangaroo",
        panda: "Panda",
        koala: "Koala",
        rhino: "Rhino",
        hippo: "Hippo",
        leopard: "Leopard",
        cheetah: "Cheetah",
        camel: "Camel",
        deer: "Deer",
        moose: "Moose",
        squirrel: "Squirrel",
        rabbit: "Rabbit",
        bat: "Bat",
        otter: "Otter",
        beaver: "Beaver",
        raccoon: "Raccoon",
        porcupine: "Porcupine",
        armadillo: "Armadillo",
        anteater: "Anteater",
        chimpanzee: "Chimpanzee",
        gorilla: "Gorilla",
        sloth: "Sloth",
        hyena: "Hyena",
        mongoose: "Mongoose",
        eland: "Eland",
        buffalo: "Buffalo",
        //birds
        parrot: "Parrot",
        eagle: "Eagle",
        sparrow: "Sparrow",
        owl: "Owl",
        pigeon: "Pigeon",
        crow: "Crow",
        hummingbird: "Hummingbird",
        kingfisher: "Kingfisher",
        peacock: "Peacock",
        flamingo: "Flamingo",
        robin: "Robin",
        seagull: "Seagull",
        woodpecker: "Woodpecker",
        swan: "Swan",
        duck: "Duck",
        turkey: "Turkey",
        quail: "Quail",
        crane: "Crane",
        falcon: "Falcon",
        parakeet: "Parakeet",
        cockatoo: "Cockatoo",
        toucan: "Toucan",
        magpie: "Magpie",
        nightingale: "Nightingale",
        canary: "Canary",
        eagleowl: "Eagle Owl",
        albatross: "Albatross",
        penguin: "Penguin",
        heron: "Heron",
        stork: "Stork",
        raven: "Raven",
        hawk: "Hawk",
        ibis: "Ibis",
        vulture: "Vulture",
        bluejay: "Bluejay",
        cardinal: "Cardinal",
        mockingbird: "Mockingbird",
        roadrunner: "Roadrunner",
        ostrich: "Ostrich",
        //fruits
        apple: "Apple",
        banana: "Banana",
        orange: "Orange",
        mango: "Mango",
        strawberry: "Strawberry",
        blueberry: "Blueberry",
        raspberry: "Raspberry",
        pineapple: "Pineapple",
        watermelon: "Watermelon",
        cantaloupe: "Cantaloupe",
        grape: "Grape",
        kiwi: "Kiwi",
        papaya: "Papaya",
        peach: "Peach",
        apricot: "Apricot",
        lemon: "Lemon",
        lime: "Lime",
        tangerine: "Tangerine",
        pomegranate: "Pomegranate",
        dragonfruit: "Dragonfruit",
        lychee: "Lychee",
        coconut: "Coconut",
        avocado: "Avocado",
        pear: "Pear",
        fig: "Fig",
        guava: "Guava",
        jackfruit: "Jackfruit",
        durian: "Durian",
        starfruit: "Starfruit",
        mangosteen: "Mangosteen",
        longan: "Longan",
        olive: "Olive",
        soursop: "Soursop",
        rambutan: "Rambutan",
        //numbers
        one: "One",
        two: "Two",
        three: "Three",
        four: "Four",
        five: "Five",
        six: "Six",
        seven: "Seven",
        eight: "Eight",
        nine: "Nine",
        ten: "Ten",
        //vegetables
        carrot: "Carrot",
        broccoli: "Broccoli",
        cauliflower: "Cauliflower",
        spinach: "Spinach",
        kale: "Kale",
        lettuce: "Lettuce",
        cabbage: "Cabbage",
        tomato: "Tomato",
        cucumber: "Cucumber",
        pepper: "Pepper",
        eggplant: "Eggplant",
        pumpkin: "Pumpkin",
        radish: "Radish",
        beetroot: "Beetroot",
        onion: "Onion",
        garlic: "Garlic",
        leek: "Leek",
        sweetpotato: "Sweet Potato",
        potato: "Potato",
        corn: "Corn",
        greenbean: "Green Bean",
        mushroom: "Mushroom",
        parsley: "Parsley",
        dill: "Dill",
        basil: "Basil",
        rosemary: "Rosemary",
    },
    vi: {
        english: "Tiếng Anh",
        vietnamese: "Tiếng Việt",
        back: "Trở lại",
        alphabetTitle: "Bảng Chữ Cái",
        alphabetDesc: "Học A đến Z với hình ảnh và âm thanh",
        numbersTitle: "Số",
        numbersDesc: "Đếm số một cách vui nhộn",
        animalsTitle: "Động vật",
        animalsDesc: "Khám phá các loài động vật và tiếng kêu của chúng",
        birdsTitle: "Chim",
        birdsDesc: "Những người bạn biết bay quanh ta",
        fruitsTitle: "Trái cây",
        fruitsDesc: "Tìm hiểu về trái cây ngon và màu sắc của chúng",
        vegetablesTitle: "Rau củ",
        vegetablesDesc: "Tìm hiểu về rau củ tốt cho sức khỏe",
        //animals
        lion: "Sư tử",
        tiger: "Hổ",
        elephant: "Voi",
        giraffe: "Hươu cao cổ",
        zebra: "Ngựa vằn",
        monkey: "Khỉ",
        bear: "Gấu",
        wolf: "Sói",
        fox: "Cáo",
        kangaroo: "Chuột túi",
        panda: "Gấu trúc",
        koala: "Gấu koala",
        rhino: "Tê giác",
        hippo: "Hà mã",
        leopard: "Báo",
        cheetah: "Báo gê-pa",
        camel: "Lạc đà",
        deer: "Hươu",
        moose: "Nai sừng tấm",
        squirrel: "Sóc",
        rabbit: "Thỏ",
        bat: "Dơi",
        otter: "Rái cá",
        beaver: "Hải ly",
        raccoon: "Gấu mèo",
        porcupine: "Nhím",
        armadillo: "Tê tê",
        anteater: "Thú ăn mối",
        chimpanzee: "Tinh tinh",
        gorilla: "Khỉ đột",
        sloth: "Lười",
        hyena: "Linh cẩu",
        mongoose: "Cầy mangut",
        eland: "Linh dương",
        buffalo: "Trâu",
        //birds
        parrot: "Vẹt",
        eagle: "Đại bàng",
        sparrow: "Chim sẻ",
        owl: "Cú",
        pigeon: "Bồ câu",
        crow: "Quạ",
        hummingbird: "Chim ruồi",
        kingfisher: "Chim bói cá",
        peacock: "Công",
        flamingo: "Hồng hạc",
        robin: "Chim chích chòe",
        seagull: "Hải âu",
        woodpecker: "Gõ kiến",
        swan: "Thiên nga",
        duck: "Vịt",
        turkey: "Gà tây",
        quail: "Chim cút",
        crane: "Sếu",
        falcon: "Diều hâu",
        parakeet: "Vẹt nhỏ",
        cockatoo: "Vẹt mào",
        toucan: "Chim Toucan",
        magpie: "Chim ác là",
        nightingale: "Chim sơn ca",
        canary: "Chim hoàng yến",
        eagleowl: "Cú đại bàng",
        albatross: "Hải âu lớn",
        penguin: "Chim cánh cụt",
        heron: "Chim diệc",
        stork: "Chim hạc",
        raven: "Chim quạ",
        hawk: "Chim ưng",
        ibis: "Chim cò quăm",
        vulture: "Kền kền",
        bluejay: "Chim giẻ cùi xanh",
        cardinal: "Chim hồng y",
        mockingbird: "Chim nhại",
        roadrunner: "Chim đà điểu đất",
        ostrich: "Đà điểu",
        //fruits
        apple: "Táo",
        banana: "Chuối",
        orange: "Cam",
        mango: "Xoài",
        strawberry: "Dâu tây",
        blueberry: "Việt quất",
        raspberry: "Mâm xôi",
        pineapple: "Dứa",
        watermelon: "Dưa hấu",
        cantaloupe: "Dưa lưới",
        grape: "Nho",
        kiwi: "Kiwi",
        papaya: "Đu đủ",
        peach: "Đào",
        apricot: "Mơ",
        lemon: "Chanh vàng",
        lime: "Chanh xanh",
        tangerine: "Quýt",
        pomegranate: "Lựu",
        dragonfruit: "Thanh long",
        lychee: "Vải",
        coconut: "Dừa",
        avocado: "Bơ",
        pear: "Lê",
        fig: "Sung",
        guava: "Ổi",
        jackfruit: "Mít",
        durian: "Sầu riêng",
        starfruit: "Khế",
        mangosteen: "Măng cụt",
        longan: "Nhãn",
        olive: "Ô liu",
        soursop: "Mãng cầu",
        rambutan: "Chôm chôm",
        //numbers
        one: "Một",
        two: "Hai",
        three: "Ba",
        four: "Bốn",
        five: "Năm",
        six: "Sáu",
        seven: "Bảy",
        eight: "Tám",
        nine: "Chín",
        ten: "Mười",
        //vegetables
        carrot: "Cà rốt",
        broccoli: "Bông cải xanh",
        cauliflower: "Bông cải trắng",
        spinach: "Rau chân vịt",
        kale: "Cải xoăn",
        lettuce: "Xà lách",
        cabbage: "Bắp cải",
        tomato: "Cà chua",
        cucumber: "Dưa leo",
        pepper: "Ớt",
        eggplant: "Cà tím",
        pumpkin: "Bí đỏ",
        radish: "Củ cải",
        beetroot: "Củ dền",
        onion: "Hành tây",
        garlic: "Tỏi",
        leek: "Hành lá",
        sweetpotato: "Khoai lang",
        potato: "Khoai tây",
        corn: "Ngô",
        greenbean: "Đậu xanh",
        mushroom: "Nấm",
        parsley: "Ngò tây",
        dill: "Thì là",
        basil: "Húng quế",
        rosemary: "Hương thảo",
    },
};

export function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
export function language() {
    return localStorage.getItem("language") || "en";
}

let devToolsOpen = false;
let hostile = false;
export function enableContentProtection() {
    // ================= Right-Click Block =================
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    loadDevToolsWarningAndDetect();
    // ================= Detection Loop =================
    setInterval(() => {
        const before = new Date();
        debugger;

        const after = new Date();
        if (after - before > 100) {
            onHostile("debugger timing");
            if (!devToolsOpen) {
                devToolsOpen = true;
                showWarning();
            }
        } else {
            if (devToolsOpen) {
                devToolsOpen = false;
                hideWarning();
            }
        }
    }, 1000);
    //  ================= Optional Keyboard Block =================
    // Prevent F12 / Ctrl+Shift+I / Ctrl+Shift+C
    document.addEventListener("keydown", (e) => {
        if (
            e.key === "F12" ||
            (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key))
        )
            e.preventDefault();
    });
}

async function loadDevToolsWarningAndDetect() {
    try {
        const dialog = await loadDialog(
            "templates/devtools-warning.html",
            "devtoolsWarning"
        );
    } catch (err) {
        console.error(
            "Failed to load DevTools warning or start detection:",
            err
        );
    }
}

function onHostile(reason) {
    if (hostile) return;
    hostile = true;

    console.warn("Hostile detected:", reason);

    wipeContent();
}

function wipeContent() {}

function showWarning() {
    const banner = document.getElementById("devtools-warning");
    banner.classList.remove("hidden");
    banner.classList.add("animate-bounce");
}

function hideWarning() {
    const banner = document.getElementById("devtools-warning");
    banner.classList.add("hidden");
    banner.classList.remove("animate-bounce");
}
