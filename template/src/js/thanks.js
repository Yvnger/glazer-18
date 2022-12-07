const thanksSlider = new Swiper('.thanks__slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        797: {
            slidesPerView: 3,
            spaceBetween: 28
        }
    },

    navigation: {
        nextEl: '.thanks__slider-btn-next',
        prevEl: '.thanks__slider-btn-prev',
    },
});