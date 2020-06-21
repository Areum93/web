// function abc() {
//     document.getElementById
//     ("demo").innerHTML = Boolean(10 > 9); 
// }

// $(function() {
//     var items = $("li");
//     // <li>요소를 모두 선택하여 변수 items에 저장함.
//     $("button").on("click", function() {
//         $("#len").text("저장된 <li>요소의 총 개수는 " + items.length + "개입니다.");
//     });
// });

// $(function() {
//     var abc=$("li");
//     $('button').click(function() {
//         $('#len').text("저장된 li 요소의 총 개수는"+abc.length+"개입니다.");
//     });
// });

// $(function(){
//     var abc=$("li");
//     $('button').click(function(){
//         $("#list").prepend("<li>li요소를 추가하겠습니다.</li>");
//         // append 는 추가하는것!
//         // prepend 앞에 추가하는것
//     });
// });

// $(function(){
//     // $("button").on("click",function() {
//     //     $("<td>새로운 셀이에요!</td>").insertBefore("#target");
//         // before 바로 앞
//         // after 바로 뒤
//         // insertBefore 지정방식
//         // insertAfter
//     $("button").on("click",function(){
//         // class가 "content"인 각 요소를 포함하는 새로운 요소를 추가함.
//         $(".content").wrap("<div class='wrapper'></div>");
//     });
// });

// $(function(){
//     $('#btn01').click(function(){
//         $('#warp').stop().fadeOut();
//     });
//     $('#btn02').click(function(){
//         $("#warp").stop().fadeIn();
//     });
// });


$(function(){
    $('#btn01').click(function(){
        $('#warp').slideUp();
    $('#btn02').click(function(){
        $('#warp').slideDown();
    });
 });

 