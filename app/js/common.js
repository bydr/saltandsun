$(function () {

    // Custom JS
    $('.sliders').owlCarousel({
        loop: false,
        margin: 0,
        autoWidth: false,
        nav: true,
        animateOut: 'fadeOut',
        smartSpeed: 400,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        dots: true,
        navText: [
            "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<path d=\"M19 12H5\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "<path d=\"M12 19L5 12L12 5\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "</svg> ",
            "<svg width=\"25\" height=\"24\" viewBox=\"0 0 25 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M5.38211 12H19.3821\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "<path d=\"M12.3821 5L19.3821 12L12.3821 19\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "</svg>\n"],
        responsive:{
            0:{
                items: 1
            }
        }
    });
    $('.products-slider').owlCarousel({
        loop: false,
        margin: 15,
        autoWidth: false,
        nav: true,
        smartSpeed: 400,
        dots: false,
        navText: [
            "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M19 12H5\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "<path d=\"M12 19L5 12L12 5\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "</svg> ",
            "<svg width=\"25\" height=\"24\" viewBox=\"0 0 25 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M5.38211 12H19.3821\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "<path d=\"M12.3821 5L19.3821 12L12.3821 19\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "</svg>\n"],
        responsive:{
            0:{
                items: 1
            },
            550: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    var slshowContents = $('.slideshow__contents');
    slshowContents.owlCarousel({
        loop: false,
        margin: 0,
        autoWidth: false,
        nav: true,
        smartSpeed: 200,
        dots: false,
        navText: [
            "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M19 12H5\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "<path d=\"M12 19L5 12L12 5\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "</svg> ",
            "<svg width=\"25\" height=\"24\" viewBox=\"0 0 25 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M5.38211 12H19.3821\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "<path d=\"M12.3821 5L19.3821 12L12.3821 19\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "</svg>\n"],
        responsive:{
            0:{
                items: 1
            },
        }
    });

    var slshowPreviews = $('.slideshow__previews');
    slshowPreviews.owlCarousel({
        loop: false,
        margin: 0,
        autoWidth: false,
        nav: true,
        smartSpeed: 200,
        dots: true,
        animateOut: 'fadeOut',
        navText: [
            "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M19 12H5\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "<path d=\"M12 19L5 12L12 5\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "</svg> ",
            "<svg width=\"25\" height=\"24\" viewBox=\"0 0 25 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M5.38211 12H19.3821\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "<path d=\"M12.3821 5L19.3821 12L12.3821 19\" stroke=\"black\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "</svg>\n"],
        responsive:{
            0:{
                items: 1
            },
        }
    });


    slshowContents.on('changed.owl.carousel', function(event) {
        slshowPreviews.trigger('to.owl.carousel', [event.item.index,200,true]);
    });
    slshowPreviews.on('changed.owl.carousel', function(event) {
        slshowContents.trigger('to.owl.carousel', [event.item.index,200,true]);
    });

    //кастомизация плавающего label
    var show = 'is-active';
    $('.form-group__element').on('checkval', function () {
        let label = $(this).next('label');
        if(this.value !== '') {
            label.addClass(show);
        } else {
            label.removeClass(show);
        }
    }).on('keyup', function () {
        $(this).trigger('checkval');
    });

    $('.dr-dropdown').on('mousemove', function () {
        $(this)
            .addClass('show')
            .find('.dropdown-menu')
            .addClass('show');
        $('#main').addClass('dropdown-active');
        $('body, html').css('overflow-y', 'hidden');
    });
    $('.dr-dropdown').on('mouseout', function () {
        $(this)
            .removeClass('show')
            .find('.dropdown-menu')
            .removeClass('show');
        $('#main').removeClass('dropdown-active');
        $('body, html').css('overflow-y', 'auto');
    });

    $('.mobile-menu__show').on('click', function () {

        $(this)
            .removeClass('is-active')
            .closest('.header')
            .find('.mobile-menu__hide')
            .addClass('is-active');
        $(this)
            .closest('.header')
            .find('.mobile-menu')
            .addClass('is-active');
        $('body, html').css('overflow-y', 'hidden');

    });

    $('.mobile-menu__hide').on('click', function () {

        $(this)
            .removeClass('is-active')
            .closest('.header')
            .find('.mobile-menu__show')
            .addClass('is-active');
        $(this)
            .closest('.header')
            .find('.mobile-menu')
            .removeClass('is-active');
        $('body, html').css('overflow-y', 'auto');

    });


    $('.dropdown-btn__drop').on('click', function () {
        $(this).closest('.dr-dropdown-mobile').toggleClass('is-active');
    });
});
