
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
    }, 250)
})


// get color from input
let color;
let input = document.querySelector('.feedback__form input');
input.addEventListener('focus', () => {
    color = (getComputedStyle(input).outline);
    console.log(color)

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






const warnTheSheep = (queue) => {
    if (queue[queue.length - 1] === "wolf") return "Pls go away and stop eating my sheep";
    let n;
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] === "wolf") {
            n = queue.length - i - 1; //находим н
            break;
        }
    }
    return "Oi! Sheep number " + n + " You are about to be eaten by a wolf!";
};
console.log(warnTheSheep(["sheep", "sheep", "wolf", "sheep", "sheep", "sheep"]));
