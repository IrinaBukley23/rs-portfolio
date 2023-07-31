const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }

// menu

const burgerEl = document.querySelector('.burger'),
      menuEl = document.querySelector('.menu__list'),
      menuItemsEl = document.querySelectorAll('.menu__list-item'),
      headerEl = document.querySelector('.header'),
      bodyEl = document.querySelector('.body');

burgerEl.addEventListener( 'click', function(){
    burgerEl.classList.toggle('active');
    menuEl.classList.toggle('active');
    headerEl.classList.toggle('active');
    bodyEl.classList.toggle('lock');
} );

console.log(menuItemsEl);
menuItemsEl.forEach( (elem) => {
    elem.addEventListener('click', () => {
        burgerEl.classList.remove('active');
        menuEl.classList.remove('active');
        headerEl.classList.remove('active');
        bodyEl.classList.remove('lock');
    })
} )

// tabs

const portfolioBtns = document.querySelectorAll('.portfolio__btn');
const portfolioContent = document.querySelectorAll('.portfolio__content');
const btnsParent = document.querySelector('.portfoilo__tabs');

function hideContent() {
        
    portfolioContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    portfolioBtns.forEach(item => {
        item.classList.remove('portfolio__btn-active');
    });
}

function showContent(i = 0) {
    portfolioContent[i].classList.add('show', 'fade');
    portfolioContent[i].classList.remove('hide');
    portfolioBtns[i].classList.add('portfolio__btn-active');
}

hideContent();
showContent();

btnsParent.addEventListener('click', function(event) {
    const target = event.target;
    if(target && target.classList.contains('portfolio__btn')) {
        portfolioBtns.forEach((item, i) => {
            if (target == item) {
                hideContent();
                showContent(i);
            }
        });
    }
});

// translate
function getTranslate(lang) {
    const elems = document.querySelectorAll('[data-i18]'); 
    const objKeysEn = i18Obj.en;
    const objKeysRu = i18Obj.ru;
    elems.forEach( (elem) => {
        let currentElem = elem.getAttribute('data-i18');

        for(let key in objKeysEn){
            if(currentElem === key){
                console.log( objKeysEn[key], objKeysRu[key]);
                if(lang === ru) {
                    elem.textContent = objKeysRu[key];
                }else {
                    elem.textContent = objKeysEn[key];
                }
               
            }
        }
        

    } )
}

let enBtn = document.querySelector('#en');
let ruBtn = document.querySelector('#ru');
//console.log(enBtn, ruBtn)

ruBtn.addEventListener('click', () => {
    getTranslate(ru);
    document.querySelector('.ru').classList.add('active');
    document.querySelector('.en').classList.remove('active');
})
enBtn.addEventListener('click', () => {
    getTranslate(en);
    document.querySelector('.en').classList.add('active');
    document.querySelector('.ru').classList.remove('active');
})

// theme

let skills = document.querySelector('.skills');
let portfolio = document.querySelector('.portfolio');
let video = document.querySelector('.video');
let price = document.querySelector('.price');
let btns = document.querySelectorAll('.portfolio__btn');
let ligthThemeEl = [skills, portfolio, video, price, ...btns];

let themeBtn = document.querySelector('.theme-icon');
//ligthThemeEl.push(skills);
console.log(ligthThemeEl);
themeBtn.addEventListener('click', () => {
    ligthThemeEl.forEach((item) => {
       item.classList.toggle('light-theme');
    });
})

// video player

const player = document.querySelector('.video');
const videoEl = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelector('.player__slider');

function togglePlay() {
    const method = videoEl.paused ? 'play' : 'pause';
    videoEl[method]();
  }

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function handleRangeUpdate() {
    videoEl.volume = this.value;
}
  
function handleProgress() {
    const percent = (videoEl.currentTime / videoEl.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * videoEl.duration;
    videoEl.currentTime = scrubTime;
}

 videoEl.addEventListener('click', togglePlay);
 videoEl.addEventListener('play', updateButton);
 videoEl.addEventListener('pause', updateButton);
 videoEl.addEventListener('timeupdate', handleProgress);

 toggle.addEventListener('click', togglePlay);
 ranges.addEventListener('change', handleRangeUpdate);
 ranges.addEventListener('mousemove', handleRangeUpdate);

 let mousedown = false;
 progress.addEventListener('click', scrub);
 progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
 progress.addEventListener('mousedown', () => mousedown = true);
 progress.addEventListener('mouseup', () => mousedown = false);

// local storage

// 1 - save data
function setLocalStorage() {
    localStorage.setItem('lang', lang);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  // 2 - load data
function getLocalStorage() {
if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    getTranslate(lang);
}
}
window.addEventListener('load', getLocalStorage)