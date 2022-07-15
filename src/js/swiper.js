import Swiper, { Navigation, Pagination } from 'swiper';
let swiper = [{}];
swiper[0].destroyed = true;

function initialiseSwiper() {
    swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        direction: 'horizontal', // устанавливаем напрвление Swiper
        loop: true,  // делаем Swiper зацикленным (Swiper самостоятельно добавит слайды в начало и конец .swiper-wrapper для создания иллюзии "бесконечности" слайдов)
        slidesPerView: 'auto', // позволит устанавливать произвольную ширину слайдов, в противном случае - растянет на ширину контейнера .swiper-wrapper
        pagination: { // подключаем пагинацию
            el: '.swiper-pagination', // контейнер для пагинации
            clickable: true // добавляем параметр, если хотим сделать bullets кликабельными
        },
        init: true

    })
    console.log(swiper);

}


window.onload = () => {  // ожидаем загрузку окна браузера
    if (window.matchMedia('(max-width: 767px)').matches) { // // свайпер у нас будет работать, если разрешение эерана не превышает 767px
        initialiseSwiper()
    }
}


window.addEventListener('resize', () => {
    let isNeed = window.matchMedia('(max-width: 767px)').matches,
        isDesrtoyed = swiper[0].destroyed;
    if (isNeed && isDesrtoyed) {
        initialiseSwiper();
    } else if (!isNeed && !isDesrtoyed) {
        destroySwiper()
    }

})

const destroySwiper = function () {
    for (let s of swiper) {
        s.destroy(true, true);
    }

}
