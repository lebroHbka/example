$(window).scroll(function() {
    if ($(document).scrollTop() > 110){
        $('nav').addClass('nav-shrink');
    } else {
        $('nav').removeClass('nav-shrink');
    }
});

$(document).ready(function(){
    $(".slow-scroll").on("click", "a", function(event){
        event.preventDefault();
        var id = $(this).attr("href"),
        top = $(id).offset().top;
        $("body,html").animate({scrollTop: top-30}, 1500);
    });
});


$(document).ready(function(){
    $(".works-btn").on("click", "i", function(){
        var pos = $(this).offset().top;
        $("body,html").animate({scrollTop: pos+50}, 1200);
    });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip({
      delay: { show: 250, hide: 200 }
  });
});
