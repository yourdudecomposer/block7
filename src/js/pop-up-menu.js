import { closeModal, openModal } from "./modalMove";

let items = document.querySelectorAll('.list__link');
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains('list__link--active')) {
                items[i].classList.remove('list__link--active')
            }

        }
        items[i].classList.add('list__link--active')
    })

}

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 1440px').matches && popUp.style.transform === 'translateX(-100%)') {
        popUp.style.transform = 'translateX(0%)'
    } else if (window.matchMedia('(max-width: 1439px').matches && popUp.style.transform === 'translateX(0%)') {
        popUp.style.transform = 'translateX(-100%)'

    }
})



let close = document.querySelector('.header__burger-back'),
    popUp = document.querySelector('.pop-up-nav');

close.addEventListener('click', () => {
    closeModal(popUp);
})



let open = document.querySelector('.header__round-link');
open.addEventListener('click', () => {
    openModal(popUp);
})

const index = (array, n) => {
    for (let i = 0; i < array.length; i++) {
        if (n === array.indexOf(array[i])) return array[i] ** n;
        else if (n > array.length - 1) return -1;

    }
};

