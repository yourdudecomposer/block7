import Swiper, { Navigation, Pagination } from 'swiper';

window.onload = () => {  // ожидаем загрузку окна браузера
    if (window.matchMedia('(max-width: 767px)').matches) { // // свайпер у нас будет работать, если разрешение эерана не превышает 767px
        const swiper = new Swiper('.swiper', {
            // инициализируем новый Swiper
            modules: [Navigation, Pagination],
            direction: 'horizontal', // устанавливаем напрвление Swiper
            loop: true,  // делаем Swiper зацикленным (Swiper самостоятельно добавит слайды в начало и конец .swiper-wrapper для создания иллюзии "бесконечности" слайдов)
            // spaceBetween: 20, // отступ между слайдами в px
            slidesPerView: 'auto', // позволит устанавливать произвольную ширину слайдов, в противном случае - растянет на ширину контейнера .swiper-wrapper
            pagination: { // подключаем пагинацию
                el: '.swiper-pagination', // контейнер для пагинации
                clickable: true // добавляем параметр, если хотим сделать bullets кликабельными
            },
            init: true
        })
    }
}