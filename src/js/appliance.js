let button = document.querySelector('.appliances .expand-btn-container'),
    logo2 = document.querySelector('.appliances .expand-btn__logo'),
    exspandText2 = document.querySelector('.appliances .expand-btn__text'),
    appliances = document.querySelector('.appliances .swiper-wrapper');
    

// button.addEventListener('click', () => {
//     if (window.matchMedia('(max-width: 1439px)').matches) { // // свайпер у нас будет работать, если разрешение эерана не превышает 767px

//         for (let i = 0; i < h768.length; i++) {
//             h768[i].classList.toggle('hide768');
//         }
//         if (!h768[0].classList.contains('hide768')) {            
//             logo2.style.transform = 'rotate(-180deg)';
//             exspandText2.textContent = 'Скрыть'
//         } else {
//             logo2.style.transform = 'rotate(0deg)';
//             exspandText2.textContent = 'Показать';

//         }
//     } else {
//         for (let i = 0; i < h1440.length; i++) {
//             h1440[i].classList.toggle('hide1440');
//         }
//         if (!h1440[0].classList.contains('hide1440')) {            
//             logo2.style.transform = 'rotate(-180deg)';
//             exspandText2.textContent = 'Скрыть'
//         } else {
//             logo2.style.transform = 'rotate(0deg)';
//             exspandText2.textContent = 'Показать';

//         }
//     }
// })


button.addEventListener('click', () => {
    appliances.classList.toggle('show-more-appliance');
    if (appliances.classList.contains('show-more-appliance')) {
        exspandText2.textContent = 'Скрыть';
        logo2.style.transform = 'rotate(-180deg)';
    }
    else {
        logo2.style.transform = 'rotate(0deg)';
        exspandText2.textContent = 'Показать';
    }
})





