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
    //------------------------------------
    $('.portfolio__btn').on('focus', function() {
        $(this).parents('.portfolio-corner').removeClass('hide');
        //поиск родителей элемента '.portfolio__btn' у которых есть класс
    }); //'.portfolio-corner'

    $('.portfolio__btn').on('focusout', function() {
        $(this).parents('.portfolio-corner').addClass('hide');
        //поиск родителей элемента '.portfolio__btn' у которых есть класс
    }); //'.portfolio-corner'
    //------------------------------------

    $('.feedback__slider-inner').slick({
        arrows: false,
        dots: true,
    });


    // $('.portfolio__btn.mixitup-control-active').on('click', function() {
    //     $(this).parents('.portfolio-corner').removeClass('hide');

    //     //поиск родителей элемента '.portfolio__btn' у которых есть класс
    // }); //'.portfolio-corner'



    // $('.portfolio__btn').on('click', function() {
    //     $(this).parents('.portfolio-corner').removeClass('hide');
    //     $(this).parents('.portfolio-corner').addClass('hide');





    // $('.btn').hover(function() {
    //     $('.top-corner').toggleClass('hide');
    // });
    // $('.btn').hover(function() {
    //     $('.bottom-corner').toggleClass('hide');
    // });
    // $('.btn').hover(function() {
    //     $('.top-corner').toggleClass('hide');
    // });

    var mixer = mixitup('.portfolio__images');

    // map = new google.maps.Map(document.getElementById('map'), {
    //     center: { lat: 43.052094, lng: -76.182432 },
    //     zoom: 15
    // });

    $('.price__card-btn').on('click', function() {
        $('.prices__inner').css('filter', 'blur(5px)');
        $('.js-overlay').fadeIn();
        // $('.js-overlay').addClass('disabled');
    });

    $('.popup__close-btn').on('click', function() {
        $('.js-overlay').fadeOut();
        $('.prices__inner').css('filter', 'none');
    });

    $(document).on('mouseup', function(e) {
        var popup = $('.popup');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.js-overlay').fadeOut();
            $('.prices__inner').css('filter', 'none');
        }
    });

});