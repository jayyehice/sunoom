// 漢堡的按鈕

$(function(){
  
    // 按鈕狀態的切換
    $("button.hamburger_icon").click(function(e){
      e.preventDefault();
      $(this).toggleClass("-on");
      // 按鈕1消失
      $(this).hide();
      //header 兩個消失
      $(".headerCenter").hide();
      $(".headerRight").hide();


      $("button.btn2").toggleClass("-on");
      // 按鈕2出現
      $("button.btn2").show();

     // 禁止滾動
    //  $("body").addClass("overFlow");


     // 點擊按鈕，選單縮放
     $("nav").slideToggle();
     // 點擊消失
     // $(this).hide();
     // 按鈕2出現
    //  $("button.btn2").toggle();
   


    });
    
});

// 按鈕2
$(function(){
  
    // 按鈕狀態的切換
    $("button.btn2").click(function(){
      $(this).toggleClass("-on");
      // 按鈕2消失
      // $("button.btn2").hide();

      $("button.hamburger_icon").toggleClass("-on");
    
    

      // 按鈕1出現
      // settimeout 0.5秒
     setTimeout(function(){
      $("button.hamburger_icon").toggle();
      //header 兩個出現
      $(".headerCenter").toggle();
      $(".headerRight").toggle();
      
     },500);
    
     // 解開禁止滑動
    //  $("body").removeClass("overFlow");


     // 點擊按鈕，選單縮放
     $("nav").slideToggle();
     // 點擊消失
       // 測試
       $("button.btn2").hide();
       // 按鈕1出現
       // $("button.hamburger_icon").toggle();
   

    });
});

function imgSwitch(){
  let img_tag = document.getElementsByTagName("img");

  for(let i=0; i<img_tag.length; i++){
    
    if(img_tag[i].getAttribute("src").includes("/sun/")){
        img_tag[i].src = img_tag[i].getAttribute("src").replace("sun", "moon");
    }else if(img_tag[i].getAttribute("src").includes("/moon/")){
        img_tag[i].src = img_tag[i].getAttribute("src").replace("moon", "sun");
    }

  }

}
  
  
// 日按紐
  $(function(){
    
    //加上className_moon by Jay
    let moon_class = $("body")[0].className + "_moon";


    $("#sunSwitch").click(function(){
      // alert("test")
      $(this).hide();
      $("#moonSwitch").show();

      console.log($("body")[0].className);
      


      // 背景切換
      $("body").addClass(moon_class);
      $("body").addClass("moon");
      // $("header").addClass("moon");

      // 切換月島版logo
      $(".headerSunLogo").hide();
      $(".headerMoonLogo").show();

      // 切換月島版pay
      $(".sunPay").hide();
      $(".moonPay").show();

      // 切換月版漢堡
      // $("button.hamburger_icon").hide();
      // $("button.hamburger_icon_moon").show();

      

      //照片切換 by Jay
      imgSwitch()
    });


// 月按鈕

    
    $("#moonSwitch").click(function(){
      // alert("test")
      $(this).hide();
      $("#sunSwitch").show();
      $("body").removeClass("moon");
      $("body").removeClass(moon_class);
      // $("header").removeClass("moon");

      // 切換日島版logo
      $(".headerMoonLogo").hide();
      $(".headerSunLogo").show();

      // 切換月島版pay
      $(".moonPay").hide();
      $(".sunPay").show();

      // 切換日版漢堡
      // $("button.hamburger_icon_moon").hide();
      // $("button.hamburger_icon").show();
      
      //照片切換 by Jay
      imgSwitch()
    });

  });

// $(function(){
  
//     // 按鈕狀態的切換
//     $("button.hamburger_icon_moon").click(function(){
//       $(this).toggleClass("-on");
//       // 按鈕1消失
//       $(this).hide();
//       //header 兩個消失
//       $(".headerCenter").hide();
//       $(".headerRight").hide();


//       $("button.btn2").toggleClass("-on");
//       // 按鈕2出現
//       $("button.btn2").show();

//      // 禁止滾動
//      $("body").addClass("overFlow");


//     });
    
// });

// // 按鈕2
// $(function(){
  
//   // 按鈕狀態的切換
//   $("button.btn2").click(function(){
//     $(this).toggleClass("-on");
//     // 按鈕2消失
//     // $("button.btn2").hide();

//     $("button.hamburger_icon_moon").toggleClass("-on");
  
  

//     // 按鈕1出現
//     // settimeout 0.5秒
//    setTimeout(function(){
//     $("button.hamburger_icon_moon").toggle();
//     //header 兩個出現
//     $(".headerCenter").toggle();
//     $(".headerRight").toggle();
    
//    },500);
  
//    // 解開禁止滑動
//    $("body").removeClass("overFlow");

//   });
// });


// // 點擊按鈕，選單縮放
// $("button.hamburger_icon_moon").click(function(){
// $("nav").slideToggle();
// // 點擊消失
// // $(this).hide();
// // 按鈕2出現
// $("button.btn2").toggle();

// });


