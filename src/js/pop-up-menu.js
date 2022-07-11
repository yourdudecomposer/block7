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


let close = document.querySelector('.header__burger-back'),
    popUp = document.querySelector('.mobile-menu');
close.addEventListener('click', () => {
    popUp.style.transform = 'translateX(-100%)';
})


let open = document.querySelector('.header__round-link');
open.addEventListener('click', () => {
    popUp.style.transform = 'translateX(0%)';
})