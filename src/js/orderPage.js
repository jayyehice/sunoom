

$(function () {	

    let vm = new Vue({
        el:'#app',
        data:{
            count:0,
        },
        methods: {
            min(){
                if(this.count >= 2){
                    this.count-=1
                }
            },

        },
        
    })
    //傳送人數


    // //日月切換效果
    // $('#sunoomChange').addClass('changing');
    // $('#sunoomChange').click(function(){
        
    //     if($('#sunoomChange').hasClass('changing')){
    //         $('.orderPage').css({
    //             color:"#F5F0DD",
    //             backgroundColor:"#0C1244"
    //         })
    //         $('.chooseAdate').css({
    //             color:"#0C1244",
    //             backgroundColor:"#F5F0DD",
    //             border:'#F5F0DD',
    //         })
    //         $('.shoppingProcess div').css({
    //             border:'1px solid #F5F0DD',
    //         })
    //         $('.shoppingProcess img').attr('src','./img/orderPage/orderPageArrowWhite.png');

    //         $('.selectDate li').css({
    //             border:'1px solid #F5F0DD',
    //         })
    //         $('.datePickerBox div').css({
    //             border:'1px solid #F5F0DD',
    //         })
    //         $('#NextPage').css({
    //             color:"#F5F0DD",
    //             backgroundColor:"#0C1244",
    //             border:'1px solid #F5F0DD',
    //         })
    //         $('#NextPage').hover(function(){
    //             $('#NextPage').css({
    //                 color:"#0C1244",
    //                 backgroundColor:"#F5F0DD",
    //                 border:'1px solid #0C1244',
    //             })
    //         })
    //         $('#NextPage').mouseleave(function(){
    //             $('#NextPage').css({
    //                 color:"#F5F0DD",
    //                 backgroundColor:"#0C1244",
    //                 border:'1px solid #F5F0DD',
    //             })
    //         })

    //         $('#sunoomChange').removeClass('changing');

    //     }else{
    //         $('.orderPage').css({
    //             color:"#0C1244",
    //             backgroundColor:"#F5F0DD"
    //         })
    //         $('.chooseAdate').css({
    //             color:"#F5F0DD",
    //             backgroundColor:"#0C1244",
    //             border:'#0C1244',
    //         })
    //         $('.shoppingProcess div').css({
    //             border:'1px solid #0C1244',
    //         })
    //         $('.shoppingProcess img').attr('src','./img/orderPage/orderPageArrow.png');
    //         $('.selectDate li').css({
    //             border:'1px solid #0C1244',
    //         })
    //         $('.datePickerBox div').css({
    //             border:'1px solid #0C1244',
    //         })
    //         $('#NextPage').css({
    //             color:"#0C1244",
    //             backgroundColor:"#F5F0DD",
    //             border:'1px solid #0C1244',
    //         })
    //         $('#NextPage').hover(function(){
    //             $('#NextPage').css({
    //                 color:"#F5F0DD",
    //                 backgroundColor:"#0C1244",
    //                 border:'1px solid #F5F0DD',
    //             })
    //         })
    //         $('#NextPage').mouseleave(function(){
    //             $('#NextPage').css({
    //                 color:"#0C1244",
    //                 backgroundColor:"#F5F0DD",
    //                 border:'1px solid #0C1244',
    //             })
    //         })
            
    //         $('#sunoomChange').addClass('changing');
    //     }

    // })//日月切換效果結束
    
    // $('#dateBooking').daterangepicker({
    //     "showISOWeekNumbers": true,
    //     "showDropdowns": true,
    //     "alwaysShowCalendars": true,
    //     "opens": "center",
    //     "drops": "auto",
    //     "minDate":new Date(),
    //     "buttonClasses": "background-color:#F5F0DD;",
    // });
    // $('#dateBookin').on('apply.daterangepicker',function(){
    //     console.log($('#dateBooking').val());
    // })

    //日曆操作區塊
    $('#dateBooking').daterangepicker({
        "timePicker24Hour": true,
        "showISOWeekNumbers": true,
        "showDropdowns": true,
        "alwaysShowCalendars": true,
        "opens": "center",
        "drops": "auto",
        "minDate":new Date(),
    });

    $('#dateBooking').on('apply.daterangepicker', function(ev, picker) {
    console.log(picker.startDate.format('YYYY-MM-DD'));
    console.log(picker.endDate.format('YYYY-MM-DD'));

    //顯示出日期
    $('#beginDate').html(picker.startDate.format('YYYY-MM-DD'));
    $('#endDate').html(picker.endDate.format('YYYY-MM-DD'));
    
    //計算天數
    let Eday = new Date(picker.endDate).getTime();
    let Sday = new Date(picker.startDate).getTime();
    let Ddays = Math.abs(Eday - Sday);
    let theDays = parseInt(Ddays/(1000*3600*24));
    //顯示天數
    $('#manyDays').html(theDays+1);

    sendDays.push(Sday,theDays,Eday);
    
    
    });

    let sendDays=[];
    
    //下一頁
    $('#NextPage').on('click',function(){
        
        let pepoleNums = $('#pepoleNums').val();
        localStorage.setItem('pepoleNums',JSON.stringify(pepoleNums));
        localStorage.setItem('sendDays',JSON.stringify(sendDays));
        
        if(window.innerWidth < 576){
            window.location.href='tripChooseMobile.html';
        }else{
            window.location.href='tripChoose.html';
        }
        
    });
    //行程選擇用
    // $('#tripChoose').change(function(){
    //     // console.log(($('#tripChoose').find("option:selected").text()));
    //     $('#bookingDays').text(($('#tripChoose').find("option:selected").text()))
    // })
    
})

