$(function(){
    $('.menu01').mouseenter(function(){
        $(".sub-navi").slideDown();
    });
    $('.menu01').mouseleave(function(){
        $(".sub-navi").stop().slideUp();
    });
});


