var myVar;
function myFunction() {
    myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
    alert("Hello!");
}

var timerID;
var arrImage=new Array();
arrImage[0]="images/banner1.jpg"
arrImage[1]="images/banner2.jpg"
arrImage[2]="images/banner3.jpg"


function change_image(){
    var newImageNum=Math.round(Math.random()*2);
    while(true){
        if(document.banner.src.indexOf(arrImage[newImageNum]) >=0){
            newImageNum=Math.round(Math.random()*2);
        }else{
            document.banner.src=arrImage[newImageNum];
            break;
        }
    }
    timerID=setTimeout("change_image()", 2000);
}

function image_onclick(){
    timerID=setTimeout("change_image()", 2000);
    alert("배너를 시작합니다.");
}

function stop_banner(){
    alert("방금 정지한 타이머의 식별자(ID)는 "+timerID+"입니다.");
    clearTimeout(timerID);
}