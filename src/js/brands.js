let button = document.querySelector('.brands .expand-btn-container'),
    logo = document.querySelector('.brands .expand-btn__logo'),
    exspandText = document.querySelector('.brands .expand-btn__text'),
    brands = document.querySelector('.brands-container');
;
// console.log(exspandText);

button.addEventListener('click', () => {
    brands.classList.toggle('show-more-brands');
    if (brands.classList.contains('show-more-brands')) {
        exspandText.textContent = 'Скрыть';
        logo.style.transform = 'rotate(-180deg)';
    }
    else {
        
        logo.style.transform = 'rotate(0deg)';
        exspandText.textContent = 'Показать';
    }
})
