
$(function(){
    
    $(window).ready(function(){
        $(window).resize(function(){
            if(window.innerWidth < 576){
                console.log(window.innerWidth);
                window.location.href='tripChooseMobile.html';
            }else{
                window.location.href='tripChoose.html';
            }
        })
    })


    //日曆
    $('#dateBooking').daterangepicker({
        "showISOWeekNumbers": true,
        "showDropdowns": true,
        "alwaysShowCalendars": true,
        "opens": "center",
        "drops": "down",
        "minDate":new Date(),
    });
    $('#dateBooking').on('apply.daterangepicker', function(ev, picker) {
    console.log(picker.startDate.format('YYYY-MM-DD'));
    console.log(picker.endDate.format('YYYY-MM-DD'));
    // $('#beginDate').html(picker.startDate.format('YYYY-MM-DD'));
    // $('#endDate').html(picker.startDate.format('YYYY-MM-DD'));
    });

    //訂購明細彈窗

    $('.ListSmall').addClass('on');
    $('.ListSmall').click(function(){

        if($('.ListSmall').hasClass('on')){
            $('.BigList').css({
                width:"280px",
                display:"block",
            })
            $('.bodyCover').css('display','block')
            $('#dateBooking').css('opacity','0.5')
            $('.circle').css({
                transform:'rotateZ(405deg)',
            })
            $('.ListSmall').removeClass('on');
        }else{
            
            $('.BigList').css({
                width:"0px",
                display:"none",
            })
            $('.circle').css({
                transform:'rotate(0deg)',
            })
            $('#dateBooking').css('opacity','1')
            $('.bodyCover').css('display','none')
            $('.ListSmall').addClass('on');
        }
        
    })

    $('#NextPage').on('click',()=>{
        window.location.href = './readyToPay.html'
    })
})