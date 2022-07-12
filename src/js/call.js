
import { closeModal, openModal } from "./modalMove";
let modalCall = document.querySelector('.call'),
    close = document.querySelector('.call__close-btn'),
    open = document.querySelector('.contact__call');

close.addEventListener('click', () => {
    closeModal(modalCall);
})

open.addEventListener('click', () => {
    closeModal(document.querySelector('.pop-up-nav'));
    setTimeout(() => {
        openModal(modalCall);
    }, 250)
})


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

