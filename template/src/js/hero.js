const heroSlider = new Swiper('.hero__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    // autoHeight: true,
    centeredSlides: true,
    // Navigation arrows
    navigation: {
        nextEl: '.hero__slider-btn-next',
        prevEl: '.hero__slider-btn-prev',
    },
});