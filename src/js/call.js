
import { closeModal, openModal, openModalForBig,closeModalForBig } from "./modalMove";
let modalCall = document.querySelector('.call'),
    close = document.querySelector('.call__close-btn'),
    open = document.querySelector('.contact__call'),
    bigBlur = document.querySelector('.big-blur'),
    bigClose = document.querySelector('.image-for-big-btn');
    ;


close.addEventListener('click', () => {
    closeModal(modalCall);
    modalCall.style.boxShadow = "none"

})

open.addEventListener('click', () => {
    let bigScreen = window.matchMedia('(min-width: 1440px)').matches;
    if (!bigScreen) {
        closeModal(document.querySelector('.pop-up-nav'));
        setTimeout(() => {
            openModal(modalCall);
            modalCall.style.boxShadow = "16px 0px 52px 0px rgba(14, 24, 80, 0.2)"
        }, 250)
    } else {

        openModalForBig(modalCall);
    }
})
bigBlur.addEventListener('click', () => {
    closeModalForBig(modalCall)
})
bigClose.addEventListener('click', () => {
    closeModalForBig(modalCall)

})
// openModalForBig(modalCall)

// get color from input
let color;
let input = document.querySelector('.call__form input');
input.addEventListener('focus', () => {
    color = (getComputedStyle(input).outline);
    console.log(color)

})
//set color for btn
let btn = document.querySelector(".call__submit-label");
let origBtn = document.querySelector(".call__submit input[type='submit']");

origBtn.addEventListener('focusin', () => {
    btn.style.outline = color
})
origBtn.addEventListener('focusout', () => {
    btn.style.outline = '';
})

