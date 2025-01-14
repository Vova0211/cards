let amount = 0;
let maxAmount = 4;
function addCard() {
    document.querySelector(`.dop${amount}`).classList.remove('inv');
    amount++;
    document.querySelector(`.dop${amount}`).classList.remove('inv');
    amount++;
    if (amount >= maxAmount) {
        document.querySelector('.add').classList.add('inv');
        document.querySelector('.rm').classList.remove('inv');
        amount--;
    }
}
function rmCard() {
    document.querySelector(`.dop${amount}`).classList.add('inv');
    amount--;
    document.querySelector(`.dop${amount}`).classList.add('inv');
    amount--;
    if (amount <= 0) {
        document.querySelector('.add').classList.remove('inv');
        document.querySelector('.rm').classList.add('inv');
        amount = 0;
    }
}