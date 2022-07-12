
import { closeModal, openModal } from "./modalMove";

let modalFeedback = document.querySelector('.feedback'),
    close = document.querySelector('.feedback__close-btn'),
    open = document.querySelector('.contact__chat');

close.addEventListener('click', () => {
    closeModal(modalFeedback);
})
open.addEventListener('click', () => {
    closeModal(document.querySelector('.pop-up-nav'));
    setTimeout(() => {
        openModal(modalFeedback);
    }, 333)

})