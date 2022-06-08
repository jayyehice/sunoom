$(function(){
    $('.ListSmall').addClass('on');
    $('.ListSmall').click(function(){
        
        if($('.ListSmall').hasClass('on')){
            $('.bigList').css({
                width:"1000px",
                height:"920px",
                display:"block",
            })
            $('.bodyCover').css('display','block')
            $('.ListSmall').removeClass('on');
        }else{
            
            $('.bigList').css({
                width:"0px",
                height:"0px",
                display:"none",
            })
            $('.bodyCover').css('display','none')
            $('.ListSmall').addClass('on');
        }
        
    })
})