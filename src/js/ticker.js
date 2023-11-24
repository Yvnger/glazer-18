const ticker = document.querySelector('.ticker');
const list = document.querySelector('.ticker__list');
const clone = list.cloneNode(true);

ticker.append(clone)