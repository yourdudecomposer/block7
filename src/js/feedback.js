
import { closeModal, openModal, openModalForBig, closeModalForBig } from "./modalMove";
let modalFeedback = document.querySelector('.feedback'),
    close = document.querySelector('.feedback__close-btn'),
    open = document.querySelector('.contact__chat'),
    bigBlur = document.querySelector('.big-blur'),
    bigClose = document.querySelector('.image-for-big-btn');
    ;
    ;




close.addEventListener('click', () => {
    closeModal(modalFeedback);

})

// open.addEventListener('click', () => {
    
//     closeModal(document.querySelector('.pop-up-nav'));
//     setTimeout(() => {
//         openModal(modalFeedback);

//     }, 250)
// })

open.addEventListener('click', () => {
    console.log(999);
    
    let bigScreen = window.matchMedia('(min-width: 1440px)').matches;
    if (!bigScreen) {
        closeModal(document.querySelector('.pop-up-nav'));
        setTimeout(() => {
            openModal(modalFeedback);
            modalFeedback.style.boxShadow = "16px 0px 52px 0px rgba(14, 24, 80, 0.2)"
        }, 250)
    } else {
        openModalForBig(modalFeedback)
    }
})


bigBlur.addEventListener('click', () => {
    closeModalForBig(modalFeedback)
})
bigClose.addEventListener('click', () => {
    closeModalForBig(modalFeedback)

})







// get color from input
let color;
let input = document.querySelector('.feedback__form input');
input.addEventListener('focus', () => {
    color = (getComputedStyle(input).outline);
})
//set color for btn
let btn = document.querySelector(".feedback__submit-label");
let origBtn = document.querySelector(".feedback__submit input[type='submit']");

origBtn.addEventListener('focusin', () => {
    btn.style.outline = color
})
origBtn.addEventListener('focusout', () => {
    btn.style.outline = '';
})




