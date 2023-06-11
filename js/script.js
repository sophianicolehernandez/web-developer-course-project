$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >20){
            $('.navbar').css('background','rgb(238, 73, 44)');
        } else{
            $('.navbar').css('background','turquoise');
        }
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior","smooth");
        $('.navbar .menu').toggleClass("active");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('menu-btn img').toggleClass("active");
    });

});