let text768 = document.querySelector('.text__768'),
    button = document.querySelector('.intro-article__expand'),
    text = document.querySelector('.intro-article'),
    logo = document.querySelector('.expand__logo'),
    secondPar = document.querySelector('.intro-article__text :nth-child(2)'),
    exspandText = document.querySelector('.expand__text');
text.addEventListener('click', () => {
    console.log(34);
    text768.classList.toggle('text__768')
    if (!secondPar.classList.contains('text__768')) {
        logo.style.transform = 'rotate(-180deg)';
        exspandText.textContent = 'Скрыть'
    } else {
        logo.style.transform = 'rotate(0deg)';
        exspandText.textContent = 'Читать далее'
    }
})

