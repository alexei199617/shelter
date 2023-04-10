console.log('Реализация burger menu на обеих страницах: +24');
console.log('Мой diskord - gromotron5525#6640');
console.log('Мой telegram - https://t.me/gromotron');

const burgerBtn = document.querySelector('.burgerBtn');
const burgerMenuBlock = document.querySelector('.burgerMenuBlock');
const burgerMenu = document.querySelector('.burgerMenu');
let randomNumArr = ['one', 'two', 'tree', 'four', 'five', 'six', 'seven', 'eight'];
let newRandomNumArr = [];

//активация и деактивация бургер меню (пункт 1)
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


//перемешивание карточек (часть 2)
function getNewArr() {
    shuffle(randomNumArr);
    addItemNewArr();
}
getNewArr()
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}
function getNextArr() {
    shuffle(randomNumArr);
    addItemNewArr ();
    addItemOldArr ();
}
function addItemNewArr () {
    for (let i=0; i < 3; i++) {
        newRandomNumArr.push(randomNumArr.pop())
    };
}
function addItemOldArr () {
    for (let i=0; i < 3; i++) {
        randomNumArr.unshift(newRandomNumArr.shift())
    }
}
// слайдер (часть 2)


// пагинация pets (часть 3)
const petsControllBlok = document.querySelector('.petsControllBlok');
petsControllBlok.addEventListener('click', pageClick);
function pageClick (event) {
    let et = event.target;
    if (et.classList.contains('arrStart') == true) {
        return
    } else if (et.classList.contains('arrPrev') == true) {
        return
    } else if (et.classList.contains('arrNext') == true) {
        return
    } else if (et.classList.contains('arrEnd') == true) {
        return
    }
}
