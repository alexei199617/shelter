console.log('Реализация burger menu на обеих страницах: +24');
console.log('Мой diskord - gromotron5525#6640');
console.log('Мой telegram - https://t.me/gromotron');

const burgerBtn = document.querySelector('.burgerBtn');
const burgerMenuBlock = document.querySelector('.burgerMenuBlock');
const burgerMenu = document.querySelector('.burgerMenu');
let scrollY;


burgerBtn.addEventListener('click', openBurger);
function openBurger(event) {
    if (event.target.classList == 'burgerBtn burgerBtnRotate') {
        closeBurgerAction();
    } else {
        document.body.style.overflowY = 'hidden';
        setTimeout(function(){burgerMenuBlock.style.backgroundColor = '#0008';},100);
        burgerBtn.classList.add('burgerBtnRotate');
        burgerMenuBlock.classList.remove('dNone');
        setTimeout(function(){burgerMenu.classList.remove('burgerMenuRotate')},100);
    }
}

burgerMenuBlock.addEventListener('click', closeBurger);
function closeBurger(event) {
    if (event.target.classList == 'burgerMenuBlock') {
        closeBurgerAction();
    }
}
function closeBurgerAction() {
    document.body.style.overflowY = 'scroll';
    burgerMenu.classList.add('burgerMenuRotate');
    burgerBtn.classList.remove('burgerBtnRotate');
    setTimeout(function(){burgerMenuBlock.style.background = '#0000';},100);
    setTimeout(function(){burgerMenuBlock.classList.add('dNone')},500);
}
document.querySelector('.navBar320').addEventListener('click', burgerLinkClick);
function burgerLinkClick(event) {
    if (event.target.classList == 'navA' || event.target.classList == 'navA navAActive') {
        closeBurgerAction();
    }
}
