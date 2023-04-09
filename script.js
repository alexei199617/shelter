// console.log('');
console.log('Мой diskord - gromotron5525#6640');
console.log('Мой telegram - https://t.me/gromotron');

const burgerBtn = document.querySelector('.burgerBtn');
const burgerMenuBlock = document.querySelector('.burgerMenuBlock');


burgerBtn.addEventListener('click', openBurger);
function openBurger(event) {
    burgerMenuBlock.classList.remove('dNone');
    // setTimeout(function(){burgerMenu.style.transform = 'translateX(0px)'},100);
}
burgerMenuBlock.addEventListener('click', closeBurger);
function closeBurger(event) {
    if (event.target.classList == 'burgerMenuBlock') {
        burgerMenuBlock.classList.add('dNone');
    }
}
