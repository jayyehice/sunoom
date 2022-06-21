"use strict"

// let juice = document.getElementsByClassName('juice');




$(document).ready(function(){

    //點擊icon打開燈箱
    $(".hambergur").click(function(){
        $(".iconBox").fadeIn();
        //燈箱開啟時的深色背景
        $(".backdrop").animate({"opacity" : "0.5"} 300, lenear);
        $(".backdrop").css({"display": "block"});
    });


    //點擊 X 或 其他地方 關閉燈箱
    $(".close , .backdrop" ).click(function(){
        $(".iconBox").fadeOut();
        //燈箱開啟時的深色背景
        $(".backdrop").animate({"opacity" : "0"} 300, lenear);
        $(".backdrop").css({"display": "none"});
    });

})