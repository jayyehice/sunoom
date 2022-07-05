//首頁、海遊、路遊logo切換

(function(){
  let url = window.location.href;
  if(url.includes('index.html') || !url.includes('.html')){
    $('#top_logo_sun').attr('src', './img/common/sunoom_logo_landingPage.png');
    $('#top_logo_moon').attr('src', './img/common/sunoom_logo_landingPage.png');
  }else if(url.includes('sea.html') || url.includes('land_tour.html')){
    $('#top_logo_sun').attr('src', './img/header/header_sunoomlogo_moon.png');
  }

})();


//判斷是否為登入
(function(){
  // console.log(sessionStorage.getItem('id'));
  if(sessionStorage.getItem('id')){
    $('#hamL').hide();
    $('#hamO').show();
    // console.log($('#hamL')[0]);
    $('#ham_member').attr('src', sessionStorage.getItem('photo'));
  }else{
    $('#hamL').removeAttr('style');
    $('#hamO').removeAttr('style');
    $('#ham_member').attr('src', './img/common/member/default_big.jpg');
  }

  $('#hamO').click(function(e){
    e.preventDefault();
    $('#ham_member').attr('src', './img/common/member/default_big.jpg');
    sessionStorage.clear();
    location.reload(true);
  });

})();



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
    $('html').css('overflow','hidden');


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
    $('html').removeAttr('style');

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


function changeBtn(){
  if($('#changeButton')[0]){
    $('#changeButton')[0].click();
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

      // console.log($("body")[0].className);
      


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
      imgSwitch();

      //changeButton按鈕
      changeBtn();
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

      //changeButton按鈕
      changeBtn();
    });

  });

// 登入登出切換
$(function(){

  $("#hamL").click(function(){
    // alert("tt");
    // 要改到login.js那裡判斷
  })

})

//go top 按鈕
$(function() {
  /* 按下GoTop按鈕時的事件 */
  $('#go_top').click(function(){
      $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
      return false;
  });
  
  /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
  $(window).scroll(function() {
      let h =  document.body.scrollHeight*0.4;
      if ( $(this).scrollTop() > h){
        // console.log(h);
          $('#go_top').fadeIn();
      } else {
          $('#go_top').fadeOut();
      }
  });
});

gsap.set("#moon, .star", {opacity: 0});
gsap.set("#sun, #cloud, #moon", {x: 15});
gsap.set(".star", {x: 35, y: -5});

$("#sunSwitch").click(function(){
  gsap.to("#sun", 1, {x: -157, opacity: 0, ease: Power1.easeInOut});
  gsap.to("#cloud", .5, {opacity: 0, ease: Power1.easeInOut});
  gsap.to("#moon", 1, {x: -157, rotate: -360, transformOrigin: "center", opacity: 1, ease: Power1.easeInOut});
  gsap.to(".star", .5, {opacity: 1, ease: Power1.easeInOut});
  gsap.to("#moonSwitch", 1, {background: "#224f6d", borderColor: "#cad4d8", ease: Power1.easeInOut});
  // gsap.to("#background", 1, {background: "#0d1f2b", ease: Power1.easeInOut});
  $(this).css({"pointer-events": "none"});
  
  setTimeout(function(){
    $("#moonSwitch").css({"pointer-events": "all"})
  }, 1000);
});

$("#moonSwitch").click(function(){
  gsap.to("#sun", 1, {x: 15, opacity: 1, ease: Power1.easeInOut});
  gsap.to("#cloud", 1, {opacity: 1, ease: Power1.easeInOut});
  gsap.to("#moon", 1, {opacity: 0, x: 35, rotate: 360, transformOrigin: "center", ease: Power1.easeInOut});
  gsap.to(".star", 1, {opacity: 0, ease: Power1.easeInOut});
  gsap.to("#moonSwitch", 1, {background: "#9cd6ef", borderColor: "#65c0e7", ease: Power1.easeInOut});
  // gsap.to("#background", 1, {background: "#d3edf8", ease: Power1.easeInOut});
  $(this).css({"pointer-events": "none"});
  
  setTimeout(function(){
    $("#sunSwitch").css({"pointer-events": "all"})
  }, 1000);
});




