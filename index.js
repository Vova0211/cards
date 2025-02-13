let amountCards = 0;
let maxAmount = 6;
const btn_add = document.getElementsByClassName("add")[0];
// const btn_rm = document.getElementsByClassName("rm");


function remove(){
    for (let i = 0; i < 6; i++) {
        rmCard2();
        amountCards--;
    }
    if (amountCards == 0) {
        btn_add.textContent = "Показать ещё"
        btn_add.removeEventListener("click", remove);
        btn_add.addEventListener("click", add)
    }
}
function add(){
    addCard2();
    if (amountCards >= maxAmount) {
        btn_add.textContent = "Убрать"
        btn_add.removeEventListener("click", add);
        btn_add.addEventListener("click", remove)

    }
}
btn_add.addEventListener("click", add)

let courses = [
    {
        image: "images/html.jpg",
        title: "Основы HTML",
        topics: [
            "Введение в HTML",
            "Структура HTML-документа",
            "Теги и атрибуты",
            "Списки и таблицы",
            "Работа с изображениями",
            "Ссылки и навигация"
        ]
    },
    {
        image: "images/css.jpg",
        title: "Основы CSS",
        topics: [
            "Введение в CSS",
            "Селекторы и свойства",
            "Модели блочной модели",
            "Flexbox и Grid",
            "Анимации и переходы",
            "Стилизация форм"
        ]
    },
    {
        image: "images/javascript.jpg",
        title: "Основы JavaScript",
        topics: [
            "Введение в JavaScript",
            "Переменные и типы данных",
            "Условия и циклы",
            "Функции и объекты",
            "Работа с DOM",
            "Асинхронное программирование"
        ]
    },
    {
        image: "images/responsive.jpg",
        title: "Адаптивный веб-дизайн",
        topics: [
            "Принципы адаптивного дизайна",
            "Media Queries",
            "Mobile-first подход",
            "Гридовые системы",
            "Работа с изображениями",
            "Тестирование адаптивного дизайна"
        ]
    },
    {
        image: "images/frameworks.jpg",
        title: "Основы CSS-фреймворков",
        topics: [
            "Введение в CSS-фреймворки",
            "Bootstrap",
            "Tailwind CSS",
            "Foundation",
            "Стилизация компонентов",
            "Адаптация фреймворков"
        ]
    },
    {
        image: "images/backend.jpg",
        title: "Основы веб-разработки на Node.js",
        topics: [
            "Введение в Node.js",
            "Установка и настройка окружения",
            "Работа с Express.js",
            "Создание API",
            "Работа с базами данных",
            "Деплой приложения"
        ]
    },
    {
        image: "images/git.jpg",
        title: "Основы работы с Git",
        topics: [
            "Введение в системы контроля версий",
            "Установка Git",
            "Создание и клонирование репозиториев",
            "Основные команды Git",
            "Работа с ветками",
            "Слияние и разрешение конфликтов"
        ]
    }
];
function addCard2() {
    const data = courses.slice(0, 2);
    data.forEach(info => {
        const card = document.createElement("div");
        const img = document.createElement('div');
        const title = document.createElement('h2');
        const list = document.createElement('ul');
        const cardNum = document.createElement("p");
        for (let i = 0; i < info.topics.length; i++) {
            const item = document.createElement('li');
            item.classList.add("card__item");
            item.textContent = info.topics[i];
            list.appendChild(item);
        }

        card.classList.add("card");
        img.classList.add("card__image", `img${amountCards + 5}`); 
        cardNum.classList.add("card__number");
        title.classList.add("card__title");
        list.classList.add("card__list");
        cardNum.textContent = `${amountCards + 5}`;
        title.textContent = info.title; 

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(list)
        card.appendChild(cardNum);
        document.getElementById("cont").appendChild(card);
        amountCards++;
    });
}
function rmCard2() {
    const cards = document.getElementsByClassName("card");
    cards[cards.length-1].remove();
}
