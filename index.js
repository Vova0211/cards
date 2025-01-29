let amountCards = 0;
let maxAmount = 4;
function addCard() {
    document.querySelector(`.dop${amountCards}`).classList.remove('inv');
    amountCards++;
    document.querySelector(`.dop${amountCards}`).classList.remove('inv');
    amountCards++;
    if (amountCards >= maxAmount) {
        document.querySelector('.add').classList.add('inv');
        document.querySelector('.rm').classList.remove('inv');
        amountCards--;
    }
}
function rmCard() {
    document.querySelector(`.dop${amountCards}`).classList.add('inv');
    amountCards--;
    document.querySelector(`.dop${amountCards}`).classList.add('inv');
    amountCards--;
    if (amountCards <= 0) {
        document.querySelector('.add').classList.remove('inv');
        document.querySelector('.rm').classList.add('inv');
        amountCards = 0;
    }
}
const btn_add = document.getElementsByClassName("add");
const btn_rm = document.getElementsByClassName("rm");
// btn_add[0].addEventListener('click', addCard);
// btn_rm[0].addEventListener('click', rmCard);
// document.body.onload = addCard3;

/*btn_add[0].addEventListener("click", () => {
    for (let i = 0; i < 2; i++) {
        addCard2();
        amountCards++;
    }
    if (amountCards >= maxAmount) {
        btn_add[0].classList.add("inv");
        btn_rm[0].classList.remove("inv");
    }
});*/
btn_rm[0].addEventListener('click', () => {
    for (let i = 0; i < 2; i++) {
        rmCard2();
        amountCards--;
    }
    if (amountCards == 0) {
        btn_add[0].classList.remove("inv");
        btn_rm[0].classList.add("inv");
    }
});

btn_add[0].addEventListener("click", () => {
    for (let i = 0; i < 2; i++) {
        addCard3();
        amountCards++;
    }
    if (amountCards >= maxAmount) {
        btn_add[0].classList.add("inv");
        btn_rm[0].classList.remove("inv");
    }
});


const titles = ["Работа с CSS", "Позиционирование", "Работа с CSS", "Позиционирование"];
const list_li = ["Первый", "Второй", "Третий", "Четвертый"];
function addCard2() {
    const card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement('div');
    img.classList.add("card__image", `img${amountCards + 1}`);  
    const title = document.createElement('h2');
    title.textContent = titles[amountCards];
    title.classList.add("card__title");
    const list = document.createElement('ul');
    list.classList.add("card__list");
    for (let i = 0; i < list_li.length; i++) {
        const item = document.createElement('li');
        item.classList.add("card__item");
        item.textContent = list_li[i];
        list.appendChild(item);
    }
    const cardNum = document.createElement("p");
    cardNum.classList.add("card__number");
    cardNum.textContent = `0${amountCards + 5}`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(list)
    card.appendChild(cardNum);
    document.getElementById("cont").appendChild(card);
}
function addCard3() {
    const template = document.getElementById("temp");
    const card = template.content.cloneNode(true);
    const img = card.querySelectorAll(".card__image");
    img[0].classList.remove("img1");
    img[0].classList.add(`img${amountCards + 1}`);
    const title = card.querySelectorAll(".card__title");
    title[0].textContent = titles[amountCards];
    const cardNum = card.querySelectorAll(".card__number");
    cardNum[0].textContent = `0${amountCards + 5}`;

    document.getElementById("cont").appendChild(card);
}
function rmCard2() {
    const cards = document.getElementsByClassName("card");
    cards[cards.length-1].remove();
}
