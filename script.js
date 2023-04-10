console.log('Реализовано burger menu на обеих страницах и на главной странице частично реализована смена слайдов. Буду доделывать, так что просьба перепроверить ближе к концу ;)');
console.log('Мой diskord - gromotron5525#6640');
console.log('Мой telegram - https://t.me/gromotron');

const petsArr = {
    "Jennifer": {
        "name": "Jennifer",
        "img": "url(img/pets-jennifer.jpg)",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    "Sophia": {
        "name": "Sophia",
        "img": "url(img/pets-sophia.jpg)",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    "Woody": {
        "name": "Woody",
        "img": "url(img/pets-woody.jpg)",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    "Scarlett": {
        "name": "Scarlett",
        "img": "url(img/pets-scarlett.jpg)",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    "Katrine": {
        "name": "Katrine",
        "img": "url(img/pets-katrine.jpg)",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    "Timmy": {
        "name": "Timmy",
        "img": "url(img/pets-timmy.jpg)",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    "Freddie": {
        "name": "Freddie",
        "img": "url(img/pets-freddie.jpg)",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    "Charly": {
        "name": "Charly",
        "img": "url(img/pets-charly.jpg)",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
};
const burgerBtn = document.querySelector('.burgerBtn');
const burgerMenuBlock = document.querySelector('.burgerMenuBlock');
const burgerMenu = document.querySelector('.burgerMenu');
let randomNumArr = ['Jennifer', 'Sophia', 'Woody', 'Scarlett', 'Katrine', 'Timmy', 'Freddie', 'Charly'];
let newRandomNumArr = [];

//активация и деактивация бургер меню (пункт 1)
burgerBtn.addEventListener('click', openBurger);
function openBurger(event) {
    if (event.target.classList == 'burgerBtn burgerBtnRotate') {
        closeBurgerAction();
    } else {
        document.body.style.overflowY = 'hidden';
        setTimeout(function() {
            burgerMenuBlock.style.backgroundColor = '#0008';
        }, 100);
        burgerBtn.classList.add('burgerBtnRotate');
        burgerMenuBlock.classList.remove('dNone');
        setTimeout(function() {
            burgerMenu.classList.remove('burgerMenuRotate')
        }, 100);
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
    setTimeout(function() {
        burgerMenuBlock.style.background = '#0000';
    }, 100);
    setTimeout(function() {
        burgerMenuBlock.classList.add('dNone')
    }, 500);
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
    addItemNewArr();
    addItemOldArr();
    console.log(newRandomNumArr);
}
function addItemNewArr() {
    for (let i = 0; i < 3; i++) {
        newRandomNumArr.push(randomNumArr.pop())
    };
}
function addItemOldArr() {
    for (let i = 0; i < 3; i++) {
        randomNumArr.unshift(newRandomNumArr.shift())
    }
}

// слайдер (часть 2)
const petCard1 = document.getElementById('petCard1');
const petCard2 = document.getElementById('petCard2');
const petCard3 = document.getElementById('petCard3');
document.getElementById('sliderArrLeft').addEventListener('click', sliderMainClick);
document.getElementById('sliderArrRight').addEventListener('click', sliderMainClick);
document.getElementById('sliderArrLeft320').addEventListener('click', sliderMainClick);
document.getElementById('sliderArrRight320').addEventListener('click', sliderMainClick);
function sliderMainClick (event) {
    getNextArr();
    getNextSlide();
}
function getNextSlide (event) {
    for (let i=0; i<3; i++) {
        let name = document.getElementById('petCard' + (i+1));
        name.childNodes[3].innerHTML = petsArr[newRandomNumArr[i]].name;
        name.childNodes[1].style.backgroundImage = petsArr[newRandomNumArr[i]].img;
    }
}
sliderMainClick()



// пагинация pets (часть 3)
const petsControllBlok = document.querySelector('.petsControllBlok');
petsControllBlok.addEventListener('click', pageClick);
function pageClick(event) {
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
