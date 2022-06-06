
// var app = new Vue({
//     el: "#app" ,
//     data: function () {
//         return {
//             disabled: [], //禁用的日期
//             value: new Date(), //值
//             format: "yyyy-MM-dd", //文本框中顯示的日期格式
//             clear: false , //是否在文本框右側顯示清除按鈕（X）
//             placeholder: "日期", //水印
//             position: "left", //日期面板位置，默認null和left 居左，right則靠右
//             lang: "" //語言，默認中文，可選值：zh-CN、en
//         };
//     },

//     methods: {
//         //鼠標點擊日曆面板上的日期時的事件，
//         //傳遞的兩個參數均是同一個值，只是類型不同，隨便用哪個看個人需要
//         // date 是Date 類型
//         // dateStr 是String 類型
//         dayClick: function (date, dateStr) {
//             console.log(date);
//            console.log(dateStr);
//             console.log( this .value);
//         }
//     },
//     components: {
//         calendar: Calendar
//     }
// });

$(function () {	
    //日月切換效果
    $('#sunoomChange').addClass('changing');
    $('#sunoomChange').click(function(){
        
        if($('#sunoomChange').hasClass('changing')){
            $('body').css({
                color:"#F5F0DD",
                backgroundColor:"#0C1244"
            })
            $('.chooseAdate').css({
                color:"#0C1244",
                backgroundColor:"#F5F0DD",
                border:'#F5F0DD',
            })
            $('.shoppingProcess div').css({
                border:'1px solid #F5F0DD',
            })
            $('.shoppingProcess img').attr('src','./image/orderPageArrowWhite.png');

            $('.selectDate li').css({
                border:'1px solid #F5F0DD',
            })
            $('.datePickerBox div').css({
                border:'1px solid #F5F0DD',
            })
            $('#NextPage').css({
                color:"#F5F0DD",
                backgroundColor:"#0C1244",
                border:'1px solid #F5F0DD',
            })
            $('#NextPage').hover(function(){
                $('#NextPage').css({
                    color:"#0C1244",
                    backgroundColor:"#F5F0DD",
                    border:'1px solid #0C1244',
                })
            })
            $('#NextPage').mouseleave(function(){
                $('#NextPage').css({
                    color:"#F5F0DD",
                    backgroundColor:"#0C1244",
                    border:'1px solid #F5F0DD',
                })
            })

            $('#sunoomChange').removeClass('changing');

        }else{
            $('body').css({
                color:"#0C1244",
                backgroundColor:"#F5F0DD"
            })
            $('.chooseAdate').css({
                color:"#F5F0DD",
                backgroundColor:"#0C1244",
                border:'#0C1244',
            })
            $('.shoppingProcess div').css({
                border:'1px solid #0C1244',
            })
            $('.shoppingProcess img').attr('src','./image/orderPageArrow.png');
            $('.selectDate li').css({
                border:'1px solid #0C1244',
            })
            $('.datePickerBox div').css({
                border:'1px solid #0C1244',
            })
            $('#NextPage').css({
                color:"#0C1244",
                backgroundColor:"#F5F0DD",
                border:'1px solid #0C1244',
            })
            $('#NextPage').hover(function(){
                $('#NextPage').css({
                    color:"#F5F0DD",
                    backgroundColor:"#0C1244",
                    border:'1px solid #F5F0DD',
                })
            })
            $('#NextPage').mouseleave(function(){
                $('#NextPage').css({
                    color:"#0C1244",
                    backgroundColor:"#F5F0DD",
                    border:'1px solid #0C1244',
                })
            })
            
            $('#sunoomChange').addClass('changing');
        }

    })//日月切換效果結束
    
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
    $('#beginDate').html(picker.startDate.format('YYYY-MM-DD'));
    $('#endDate').html(picker.startDate.format('YYYY-MM-DD'));
    });

    $('#NextPage').click(function(){
        window.location.href='tripChoose.html';
    });
    
})