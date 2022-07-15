let blur = document.querySelector('.blur');

export function closeModal(elem) {
    elem.style.transform = 'translateX(-100%)';
    blur.classList.remove('blur--opacity');
    setTimeout(() => {
        blur.style.position = 'initial';
    }, 250)
    elem.style.boxShadow = "none"

}
export function openModal(elem) {
    elem.style.transform = 'translateX(0%)';
    blur.style.position = 'fixed';
    blur.classList.add('blur--opacity');
    elem.style.boxShadow = '16px 0px 52px 0px rgba(14, 24, 80, 0.2)'
}


