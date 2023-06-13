// бургер-меню
const menuIcon = document.querySelector('.menu__icon');
const menuNav = document.querySelector('nav');
menuIcon.addEventListener('click', function(e) {
    document.body.classList.toggle('_lock');
    menuIcon.classList.toggle('_active');
    menuNav.classList.toggle('_active');
});
const menuLinks = document.querySelectorAll('[data-goto]');
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", clickOnLink);
});
function clickOnLink(e) {
    const menuLink = e.target;
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
    if (menuIcon.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        menuIcon.classList.remove('_active');
        menuNav.classList.remove('_active');
    }
    window.scrollTo({
		top: gotoBlockValue
	});
    e.preventDefault();
}

// анимация при скролле
var options = {
    threshold: 0.99
};
var callback = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('_transform');
            observer.unobserve(entry.target);
        }
    });
};
var observer = new IntersectionObserver(callback, options);
var animItems = document.querySelectorAll('.anim-item');
animItems.forEach(animItem => {
    observer.observe(animItem);
});

// ссылка "scroll-to-top"
var options2 = {
    threshold: 0.02
};
var callback2 = function(entries2) {
    entries2.forEach(entry2 => {
        if (entry2.isIntersecting) {
            entry2.target.classList.add('_display');
        } else {
            entry2.target.classList.remove('_display');
        }
    });
    if (animItems2Set.has(document.querySelector('._display'))){
        scrollToTop.style.display = "flex";
    } else {
        scrollToTop.style.display = "none";
    }
};
var observer2 = new IntersectionObserver(callback2, options2);
var animItems2 = document.querySelectorAll('.anim-item2');
animItems2.forEach(animItem2 => {
    observer2.observe(animItem2);
});
var animItems2Set = new Set(animItems2);
var scrollToTop = document.querySelector('.scroll-to-top');

// слайдер для "Life is better in running shoes"
const box1Swiper = new Swiper('.box-1-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    spaceBetween: 30,
    keyboard: true,
    speed: 600,
    autoplay: true,
    loop: true,
});

// слайдер для "Gallary"
const box3TabsSwiper = new Swiper('.tabs-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    spaceBetween: 30,
    keyboard: true,
    speed: 600,
    slidesPerView: 1,
    breakpoints: {
        381: {
            slidesPerView: 2,
            spaceBetween: 21
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 31
        },
        601: {
            slidesPerView: 3,
            spaceBetween: 21
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 31
        },
        993: {
            slidesPerView: 4,
            spaceBetween: 31
        }
    }
});

// слайдер для "Testimonials"
const box4Swiper = new Swiper('.box-4-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoHeight: true,
    spaceBetween: 30,
    keyboard: true,
    parallax: true,
    speed: 600,
});
window.addEventListener("load", function() {
    box4Swiper.updateAutoHeight();
});

// спойлеры
const spButtons = document.querySelectorAll(".sp-button");
spButtons.forEach(spButton => {
    spButton.addEventListener("click", function() {
        this.classList.toggle("_open");
        let spContent = this.nextElementSibling;
        if (this.classList.contains("_open")){
            spContent.style.maxHeight = spContent.scrollHeight + "px";
        } else {
            spContent.style.maxHeight = "";
        }
    });
});

// outline для input и select
document.body.addEventListener('mousedown', function() {
    document.body.classList.add('_using-mouse');
});
document.body.addEventListener('keydown', function(e) {
    if (e.key === "Tab") {
        document.body.classList.remove('_using-mouse');
    }
});