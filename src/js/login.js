$(document).ready(function(){
    
    $(".registerBtn").click(function(e){
        // alert("hello")
        $(".member_left").hide();
        $(".member_right").show();
        // 停止預設行為
        e.preventDefault();


    });

    $(".loginBtn").click(function(e){
        // alert("hello")
        $(".member_right").hide();
        $(".member_left").show();
        // 停止預設行為
        e.preventDefault();
    });

});
