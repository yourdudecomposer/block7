let navItems = document.querySelectorAll('.page-nav__link'),
    navItemsParent = document.querySelectorAll('.page-nav__item');


for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
        for (let j = 0; j < navItemsParent.length; j++) {
            if (navItemsParent[j].classList.contains('page-nav__item--active')) {
                navItemsParent[j].classList.remove('page-nav__item--active')
            }

        }
        navItems[i].parentElement.classList.add('page-nav__item--active')
    }
    );

}
