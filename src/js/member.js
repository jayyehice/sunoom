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
        $(".orderDetail").show();
    });

    $("#i").click(function(){
        // alert("t")
        $(".orderDetail").hide();
    });

    $("#cancel").click(function(){
        alert("確定取消？")
    })
});