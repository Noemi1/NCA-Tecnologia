NProgress.start();
$(document).ready(function () {
    let screenSize = 'XL' | 'LG' | 'MD' | 'SM';

    AOS.init();
    NProgress.done();
    setScreenSize();


    $('.btn-mobile').on('click', function (e) {
        e.preventDefault();
        setScreenSize();
        if (screenSize == 'MD' || screenSize == 'SM') {
            $('.header').toggleClass('toggle');
        }
    });

    $(window).on('resize', function () {
        setScreenSize();
    })


    function setScreenSize() {
        $(window).scrollLeft(0)
        let size = $(window).width();
        if (size < 576) {
            screenSize = 'SM'
        }
        else if (size >= 576 && size < 992) {
            screenSize = 'MD'
        }
        else if (size >= 992) {
            screenSize = 'LG'
        }
        else {
            screenSize = 'XL'
        }
    }
    $(window).scrollLeft(0);

    $('.sobre-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.sobre-slider-nav'
    });
    $('.sobre-slider-for-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.sobre-slider-nav'
    });


    $('.sobre-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.sobre-slider-for-text, .sobre-slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

});


function toggleHeaderNavigation() {
    if ($(window).width() <= 992) {
        $('.header').toggleClass('toggle');
    }
}
