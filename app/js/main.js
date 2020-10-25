$(function() {
    $('.header__menu-btn').on('click', function() {
        $('.header__menu-list').toggleClass('active');
    });

    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 1) {
    //         $('.header__top').addClass('scroll');
    //     } else {
    //         $('.header__top').removeClass('scroll');
    //     }
    // });
});