// SLIDER
const slides = document.querySelectorAll('.offer__slide');
const slider = document.querySelector('.offer__slider');
const next = document.querySelector('.offer__slider-next');
const prev = document.querySelector('.offer__slider-prev');
const slidesWrapper = document.querySelector('.offer__slider-wrapper');
const slidesField = document.querySelector('.offer__slider-inner');
// const width = window.getComputedStyle(slidesWrapper).width;
let slideIndex = 1;
let offset = 0;
let width;

const draw = () => {
    width = window.getComputedStyle(slidesWrapper).width;
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    slides.forEach(slide => {
        slide.style.width = width;
    });
};
draw();

window.addEventListener('resize', draw);

next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if(slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }
});

prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if(slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }
});

// BURGER MENU 
const btnBurger = document.querySelector('.btn-burger');
const menuBurger = document.querySelector('.burger__menu');

btnBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');

});

// SCROLL TOP 
const btnScrollTop = document.querySelector('.scroll__top');
let t;

const up = () => {
    let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -100);
        t = setTimeout(up, 20);
    } else {
        clearTimeout(t);
    }
    return false;
};

btnScrollTop.addEventListener('click', up);
