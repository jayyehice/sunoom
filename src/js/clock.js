"use strict"

$(document).ready(function(){
    //資料庫渲染到前端

    
    let event_num =1;
    let bg_num = 1;
    setInterval((timeFloat),5000);
    function timeFloat(){
        let timeBegin = parseInt($(".progress-ring__circle").css("stroke-dashoffset"));
        if(timeBegin > "-1472"){
            //轉場黑幕(1-4)
            $(".blackCover").animate({"opacity":"1"},{duration:0})
            $(".blackCover").animate({"opacity":"0.3"},{duration:3000})

            //中心文字(隱藏1-4活動)
            $(`.event-item${event_num}`).css({"display":"none"})

            $(`.ocean${event_num}`).animate({"top":"135px"})
            $(`.chName${event_num}`).animate({"top":"200px"})
            $(`.enName${event_num}`).animate({"top":"300px"})
            $(`.discover${event_num}`).animate({"top":"350px"})

            event_num = event_num + 1;

            //中心文字(顯示1-4活動)
            $(`.event-item${event_num}`).css({"opacity":"0"})
            $(`.event-item${event_num}`).css({"display":"block"})
            $(`.event-item${event_num}`).animate({"opacity":"1"},{duration:3500})

            $(`.ocean${event_num}`).animate({"top":"-65px"},{duration:2000})
            $(`.chName${event_num}`).animate({"top":"0px"},{duration:2300})
            $(`.enName${event_num}`).animate({"top":"100px"},{duration:2500})
            $(`.discover${event_num}`).animate({"top":"150px"},{duration:2500})

            // 流動線圈(1-4)
            $(".progress-ring__circle").css("stroke-dashoffset",(timeBegin-368))

            //換背景
            bg_num = bg_num + 1;
            $("#banner").addClass(`bg${bg_num}`)

            console.log(event_num)
        }

        else{
            //轉場黑幕
            $(".blackCover").animate({"opacity":"1"},{duration:0})
            $(".blackCover").animate({"opacity":"0.3"},{duration:3000})

            // 流動線圈
            $(".progress-ring__circle").css("stroke-dashoffset",0)

            //換背景
            bg_num = 1;
            $("#banner").removeClass('bg2');
            $("#banner").removeClass('bg3');
            $("#banner").removeClass('bg4');
            $("#banner").removeClass('bg5');

            //中心文字(顯示5活動)
            $(`.event-item${event_num}`).css({"display":"none"})

            $(`.ocean${event_num}`).animate({"top":"135px"})
            $(`.chName${event_num}`).animate({"top":"200px"})
            $(`.enName${event_num}`).animate({"top":"300px"})
            $(`.discover${event_num}`).animate({"top":"350px"})

            event_num =1
            
             //中心文字(顯示5活動)
             $(`.event-item${event_num}`).css({"opacity":"0"})
             $(`.event-item${event_num}`).css({"display":"block"})
             $(`.event-item${event_num}`).animate({"opacity":"1"},{duration:3500})
 
             $(`.ocean${event_num}`).animate({"top":"-65px"},{duration:2000})
             $(`.chName${event_num}`).animate({"top":"0px"},{duration:2300})
             $(`.enName${event_num}`).animate({"top":"100px"},{duration:2500})
             $(`.discover${event_num}`).animate({"top":"150px"},{duration:2500})
            // -------------------------------------------------------------------------------------------------------------------------

            console.log(event_num)
        }
    } 
})
