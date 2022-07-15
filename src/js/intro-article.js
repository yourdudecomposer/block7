let t768 = document.querySelector('.text__768'),
    t1440 = document.querySelector('.text__1440'),
    tRest = document.querySelector('.text__rest-hide'),

    button = document.querySelector('.intro-article__expand'),
    text = document.querySelector('.intro-article'),
    logo = document.querySelector('.expand__logo'),
    exspandText = document.querySelector('.expand__text');


button.addEventListener('click', () => {
    t768.classList.toggle('text__768')
    t1440.classList.toggle('text__1440')
    tRest.classList.toggle('text__rest-hide')

    if (!tRest.classList.contains('text__rest-hide')) {
        logo.style.transform = 'rotate(-180deg)';
        exspandText.textContent = 'Скрыть'
    } else {
        logo.style.transform = 'rotate(0deg)';
        exspandText.textContent = 'Читать далее';

    }
})

