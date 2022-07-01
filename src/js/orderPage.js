
$(function () {	
    // Vue.component('v-date-picker',{
    //     data() {
    //         return {
    //             range: {
    //                 start: new Date(2020, 0, 1),
    //                 end: new Date(2020, 0, 5)
    //               },
    //         }
    //     },
    //     template:`<v-date-picker v-model="range" is-range/>`
    // })

    let vm = new Vue({
        el:'#app',
        data() {
            return {
              time: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
              },
              calendarArr: [],
              count:0,
            };
          },
        methods: {
            min(){
                if(this.count >= 2){
                    this.count-=1
                }
            },
            test(e) {
                console.log(e);
                console.log(123);
                e.classList.add("active");
              },
              reduceMonth() {
                if (this.time.month > 0) {
                  this.time.month = this.time.month - 1;
                } else {
                  this.time.month = 11;
                  this.time.year = this.time.year - 1;
                }
              },
              addMonth() {
                if (this.time.month < 11) {
                  this.time.month = this.time.month + 1;
                } else {
                  this.time.month = 0;
                  this.time.year = this.time.year + 1;
                }
              },
              getDateValue(day,month){
                // console.log(day,(month+1));
              },
              startDay(e){
                console.log($(e.target));
                // $(e.target).parent().parent().find('.startDay').removeClass('startDay')
                // e.target.parentNode.classList.add("startDay");
                if(e.target.parentNode.childNodes.classList.contains('.startDay')){
                    // $(e.target).parent().parent().find('.startDay').removeClass('startDay')
                    console.log("aaa");
                    e.target.parentNode.classList.add("EndDay");
                }else{
                    console.log("BBB");
                    e.target.parentNode.classList.add("startDay");
                }
                
                // $(e.target).parent().parent().find('.startDay').removeClass('EndDay')

                
              },
            //   deleteall(e){
            //     $(e.target).parent().parent().find('.startDay').removeClass('startDay')
            //     e.target.parentNode.classList.add("startDay");
                
            //   },
              RangeHover(e){
                // console.log(e.target);
                if($(e.target).parent().parent().find('.startDay')){
                //    console.log($('.startDay'));
                }
              }

        },
        computed: {
            // 獲取當前月份顯示日曆,共42天
            visibleCalendar: function () {
              // 獲取今天的年月日
              const today = new Date();
              today.setHours(0);
              today.setMinutes(0);
              today.setSeconds(0);
              today.setMilliseconds(0);
              const calendarArr = [];
              // 獲取當前月份第一天
              const currentFirstDay = new Date(
                this.time.year,
                this.time.month,
                1
              );
              // 獲取第一天是周幾
              const weekDay = currentFirstDay.getDay();
              // 用當前月份第一天减去周幾前面幾天，就是看見的日曆的第一天
              const startDay = currentFirstDay - (weekDay - 1) * 24 * 3600 * 1000;
              // 我們統一用42天來顯示當前顯示日曆
              for (let i = 0; i < 35; i++) {
                const date = new Date(startDay + i * 24 * 3600 * 1000);
                calendarArr.push({
                  date: new Date(startDay + i * 24 * 3600 * 1000),
                  year: date.getFullYear(),
                  month: date.getMonth(),
                  day: date.getDate(),
                  // 是否在當月
                  thisMonth:
                    date.getFullYear() === today.getFullYear() &&
                    date.getMonth() === today.getMonth()
                      ? "thisMonth"
                      : "",
                  // 是否是今天
                  isToday:
                    date.getFullYear() === today.getFullYear() &&
                    date.getMonth() === today.getMonth() &&
                    date.getDate() === today.getDate()
                      ? "isToday"
                      : "",
                  // 是否在今天之後
                  afterToday:
                    date.getTime() >= today.getTime() ? "afterToday" : "",
                beforeToday:
                    date.getTime() <= today.getTime() ? "beforeToday" : "",
                });
              }
              return calendarArr;
            },
          },
          updated() {


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
    // $(window).load(()=>{
    //     $('#dateBooking').on('show.daterangepicker')
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
        locale:{showLabel: 'true'}
        

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

