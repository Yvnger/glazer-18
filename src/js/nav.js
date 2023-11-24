const navToggles = document.querySelectorAll('.js-nav-toggle');
const nav = document.getElementById('main-nav');
const navActiveClass = 'navbar_opened';

navToggles.forEach(e => {
    e.addEventListener('click', () => {
        navToggle();
    })
});

function navToggle() {
    nav.classList.toggle(navActiveClass);
    document.body.classList.toggle('no-scroll');
}