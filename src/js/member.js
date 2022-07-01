$(document).ready(function(){
    // 分頁
    var $li = $("ul.memberPage li");
    $($li.eq(0).addClass('active').find('a').attr('href')).siblings('.memberInner').hide();

    $li.click(function(){
        // alert("t");
        $($li).toggleClass("-on");
        $($(this).find('a').attr('href')).show().siblings('.memberInner').hide();
        $(this).addClass('active').siblings('.active').removeClass('active');
        e.preventDefault();
    });


    // 明細伸縮
    $("#checkOrder").click(function(){
        // alert("t")
        // 出現明細
        // $(".orderDetail").show();
        $(".orderDetailRwd").show();
    });

    $("#i").click(function(){
        // alert("t")
        $(".orderDetail").hide();
        $(".orderDetailRwd").hide();
    });

    $("#i2").click(function(){
        // alert("t")
        $(".orderDetailRwd").hide();
    });


    $("#cancel").click(function(){
        confirm("您確定要取消訂單嗎？")
    })



});


new Vue({
    el:'#member',

    data:{
            account:null,
            isLogin:'no',
    },
    methods:{
        logout(){
            sessionStorage.clear()
            window.location.href = './new-login.html';
        }
    },
})