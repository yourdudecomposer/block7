import { closeModal } from "./modalMove";


let back = document.querySelector('.blur'),
    modalCall = document.querySelector('.call'),
    modalFeedback = document.querySelector('.feedback'),
    popUp = document.querySelector('.pop-up-nav');
;


back.addEventListener('click', () => {
    console.log(33);

    closeModal(popUp);
    closeModal(modalCall);
    closeModal(modalFeedback);
})