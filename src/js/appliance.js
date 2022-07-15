let h768 = document.querySelectorAll('.appliances .hide768'),
    h1440 = document.querySelectorAll('.appliances .hide1440');
console.log(h768);

button = document.querySelector('.appliances .expand-btn-container'),
    logo = document.querySelector('.appliances .expand-btn__logo'),
    exspandText = document.querySelector('.appliances .expand-btn__text');

button.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 1439px)').matches) { // // свайпер у нас будет работать, если разрешение эерана не превышает 767px

        for (let i = 0; i < h768.length; i++) {
            h768[i].classList.toggle('hide768');
        }
        if (!h768[0].classList.contains('hide768')) {            
            logo.style.transform = 'rotate(-180deg)';
            exspandText.textContent = 'Скрыть'
        } else {
            logo.style.transform = 'rotate(0deg)';
            exspandText.textContent = 'Показать';

        }
    } else {
        for (let i = 0; i < h1440.length; i++) {
            h1440[i].classList.toggle('hide1440');
        }
        if (!h1440[0].classList.contains('hide1440')) {            
            logo.style.transform = 'rotate(-180deg)';
            exspandText.textContent = 'Скрыть'
        } else {
            logo.style.transform = 'rotate(0deg)';
            exspandText.textContent = 'Показать';

        }
    }
})

