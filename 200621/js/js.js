$(function(){
    $('.navi-box').mouseover(function(){
        $('.sub-nav').stop().slideDown();
    });
    $('.navi-box').mouseleave(function(){
        $('.sub-nav').stop().slideUp();
    });
});

// setInterval(function(){
//     $('.slider-box').delay("2500");
//     $('.slider-box').animate({marginLeft:"-1200px"},"500");
//     $('.slider-box').delay("2500");
//     $('.slider-box').animate({marginLeft:"-2400px"},"500");
//     $('.slider-box').delay("2500");
//     $('.slider-box').animate({marginLeft:"0px"},"500");
// })

// nav
$(function(){
    $('.slick').slick({
        autoplay:true,
        autoplaySpeed:2000
    });
});
