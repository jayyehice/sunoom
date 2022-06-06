$(function(){
    
    $(".registerBtn").on("click",function(){
        // alert("hello")
        $(".member_left").hide()
        $(".member_right").show();

    });

    $(".loginBtn").on("click",function(){
        // alert("hello")
        $(".member_right").hide()
        $(".member_left").show();

    });

});
