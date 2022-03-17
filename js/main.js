$(document).ready(function() {
    
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function() {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('.header').css({'background':'#0cc1ee', 'box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }else{
            $('.header').css({'background':'none', 'box-shadow':'none'});
        }
    });

    $('.acordion_header').click(function() {
        $('.acordion .acordion_body').slideUp();
        $(this).next('.acordion_body').slideDown();
        $('.acordion .acordion_header span').text('+');
        $(this).children('span').text('-');
    });

});