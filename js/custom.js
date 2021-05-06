$(document).ready(function() {
    $('.first-button').on('click', function() {

        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function() {

        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function() {

        $('.animated-icon3').toggleClass('open');
    });
    $('.first-button').click(function() {
        $("nav").toggleClass("selected");
        $(this).toggleClass("menu-btn");
    });
    $('.areas').click(function() {
        $(this).next().slideToggle()
    })
    if (screen.width <= 767) {
        $('.practice-cards').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            settings: "slick",

        });
    }
});