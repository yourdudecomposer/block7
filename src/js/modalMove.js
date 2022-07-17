let blur = document.querySelector('.blur'),
    btn = document.querySelector('.image-for-big-btn'),
    bigBlur = document.querySelector('.big-blur'),
    bigClose = document.querySelector('.image-for-big-btn');

let modal = document.querySelectorAll('.modal');


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
export function openModalForBig(elem) {

    elem.style.transition = '0s';
    elem.style.position = 'fixed';
    elem.style.right = '0px';
    elem.style.transform = 'translateX(100%)';
    btn.style.right = '472px';
    bigBlur.style.display = 'block';

    setTimeout(() => {
        bigBlur.style.right = '440px';
        bigBlur.style.opacity = '.96';
        bigBlur.style.boxShadow = 'inset 16px 0px 52px 0px rgba(14, 24, 80, 0.2)';

        elem.style.transition = '.25s';
        elem.style.transform = 'translateX(0%)';

    }, 10)
    elem.style.boxShadow = '16px 0px 52px 0px rgba(14, 24, 80, 0.2)'
}


export function closeModalForBig(elem) {
    btn.style.right = '-50px';
    bigBlur.style.right = '0px';
    bigBlur.style.opacity = '0';
    elem.style.boxShadow = "none"

    elem.style.transform = 'translateX(100%)';

    setTimeout(() => {
        bigBlur.style.display = 'none';

    }, 250)

}


window.addEventListener('resize', () => {
    let lessThen1440 = window.matchMedia('(max-width: 1439px)').matches;
    let greatThen1440 = window.matchMedia('(min-width: 1440px)').matches;
    if (lessThen1440) {
        for (let i = 0; i < modal.length; i++) {
            modal[i].style.transform = 'translateX(-100%)';
            modal[i].style.right = 'auto';

        }
    } else if (greatThen1440) {
        for (let i = 0; i < modal.length; i++) {
            modal[i].style.transform = 'translateX(100%)';
            modal[i].style.right = '0px';

        }

    }

})


