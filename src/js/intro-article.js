let button = document.querySelector('.intro-article__expand'),
    text = document.querySelector('.intro-article'),
    logo = document.querySelector('.expand__logo'),
    exspandText = document.querySelector('.expand__text');

let article = document.querySelector('.intro-article__text');

button.addEventListener('click', () => {

    article.classList.toggle('show-more-read');
    if (article.classList.contains('show-more-read')) {
        logo.style.transform = 'rotate(-180deg)';
        exspandText.textContent = 'Скрыть'
    } else {
        logo.style.transform = 'rotate(0deg)';
        exspandText.textContent = 'Читать далее';

    }
})

