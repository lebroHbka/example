$(window).scroll(function() {
    if ($(document).scrollTop() > 100){
        $('nav').addClass('nav-shrink');
    } else {
        $('nav').removeClass('nav-shrink');
    }
});
