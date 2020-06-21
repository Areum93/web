$(function(){
    var jbOffset = $('.jbMenu').offset();
    $(window).scroll(function(){
        if($(document).scrollTop()>200) {
            $('.jbMenu').addClass('jbFixed');
        }
        else{
            $('.jbMenu').removeClass('jbFixed');
        }
    });
});