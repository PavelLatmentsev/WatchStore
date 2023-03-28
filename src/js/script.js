// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         speed: 1200,
//         prevArrow: `<button type="button" class="slick-prev"><img src="../icons/left.svg" alt="left"></button>`,
//         nextArrow: `<button type="button" class="slick-next"><img src="../icons/right.svg" alt="right"></button>`,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 2
        },
        700: {
            gutter: 30
        },
        900: {
            items: 1
        }
    }
});

document.querySelector('.prev').addEventListener("click", function () {
    slider.goTo("prev");
});
document.querySelector('.next').addEventListener("click", function () {
    slider.goTo("next");
});


document.addEventListener('DOMContentLoaded', () => {

    const menuContent = document.querySelectorAll('.catalog-item__content'),
        menuList = document.querySelector('.catalog-item__list'),
        moreInfo = document.querySelectorAll('.catalog-item__link');
    backInfo = document.querySelectorAll('.catalog-item__back');

    moreInfo.forEach(item => {
        item.addEventListener('click', () => {
            event.preventDefault();
            menuContent.closest("div.catalog-item__content").classList.remove('catalog-item__content_active');
            menuList.closest("ul.catalog-item__list").classList.add('catalog-item__list_active');
        });
    })
    backInfo.forEach(item => {
        item.addEventListener('click', () => {
            event.preventDefault();
            menuContent.closest("div.catalog-item__content").classList.add('catalog-item__content_active');
            menuList.closest("ul.catalog-item__list").classList.remove('catalog-item__list_active');
        });
    })

})