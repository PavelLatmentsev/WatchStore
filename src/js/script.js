
$(document).ready(function () {
    // $('.carousel__inner').slick({
    //     speed: 1200,
    //     adaptiveHeight: true,
    //     prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    //     nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    //     responsive: [
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 dots: true,
    //                 arrows: false
    //             }
    //         }
    //     ]
    // });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: "required",
                phone: {
                    required: true, email: true
                },
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите имя",
                    minlength: jQuery.validator.format("Введите {0} символов")
                },
                phone: "Пожалуйста, введите телефон",
                email: {
                    required: "Пожалуйста, введите почту",
                    email: " email должен быть по формату"
                }
            }


        })
    }
    validateForms("#consultation-form");
    validateForms("#order form");
    validateForms("#consultation form");
    $("input[name=phone]").mask("+ 7 (999) 999-999-99")
});
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


// document.addEventListener('DOMContentLoaded', () => {

//     const menuContent = document.querySelectorAll('.catalog-item__content'),
//         menuList = document.querySelector('.catalog-item__list'),
//         moreInfo = document.querySelectorAll('.catalog-item__link');
//     backInfo = document.querySelectorAll('.catalog-item__back');

//     moreInfo.forEach(item => {
//         item.addEventListener('click', () => {
//             event.preventDefault();
//             menuContent.closest("div.catalog-item__content").classList.remove('catalog-item__content_active');
//             menuList.closest("ul.catalog-item__list").classList.add('catalog-item__list_active');
//         });
//     })
//     backInfo.forEach(item => {
//         item.addEventListener('click', () => {
//             event.preventDefault();
//             menuContent.closest("div.catalog-item__content").classList.add('catalog-item__content_active');
//             menuList.closest("ul.catalog-item__list").classList.remove('catalog-item__list_active');
//         });
//     })

// })