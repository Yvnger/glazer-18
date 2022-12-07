const modalTriggers = document.querySelectorAll('.js-modal-trigger');
const modal = document.getElementById('call-request');
const modalClose = modal.querySelector('.js-modal-close')
const modalBody = modal.querySelector('.modal__body');

modalTriggers.forEach(e => {
    e.addEventListener('click', () => {
        modalToggle(modal);
    });
});

modalBody.addEventListener('click', event => {
    event._isClickOnModalBody = true;
})

modal.addEventListener('click', event => {
    if (event._isClickOnModalBody) return;
    modalToggle(modal);
})

modalClose.addEventListener('click', () => {
    modalToggle(modal);
})

function modalToggle(modal) {
    modal.classList.toggle('modal_opened');
    document.body.classList.toggle('no-scroll');
}