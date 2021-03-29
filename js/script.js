$(document).ready(function () {
    $('.burger-menu').on('click', function() {
        $('nav').slideToggle();
        $('.burger-menu').toggleClass('active');
        $('header').toggleClass('active');
    });

});