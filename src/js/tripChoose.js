
window.addEventListener('load',function(){

    let vm = new Vue({
        el:'#app',
        data:{
            selectedDate: null,
            //行程資料表
            activity_list:[],
            //餐廳資料表
            food_list:[],
            //住宿資料表
    
    
            //上午行程
            morningtriptext:'請點選上方選單列，開始安排您的旅程吧!',
            morningtripPrice:'0',
            morningtripImg:'./img/orderPage/welcome.jpg',
            //下午行程
            noontriptext:'請點選上方選單列，開始安排您的旅程吧!',
            noontripPrice:'0',
            noontripImg:'./img/orderPage/welcome.jpg',
            //晚上行程
            eveningtriptext:'請點選上方選單列，開始安排您的旅程吧!',
            eveningtripPrice:'0',
            eveningtripImg:'./img/orderPage/welcome.jpg',
    
            //早餐
            morningFoodtext:'請點選上方選單列，開始安排您的早餐!',
            morningFoodPrice:'0',
            morningFoodImg:'./img/orderPage/welcome.jpg',
            //午餐
            noonFoodtext:'請點選上方選單列，開始安排您的午餐!',
            noonFoodPrice:'0',
            noonFoodImg:'./img/orderPage/welcome.jpg',
            //晚餐
            eveningFoodtext:'請點選上方選單列，開始安排您的晚餐!',
            eveningFoodPrice:'0',
            eveningFoodImg:'./img/orderPage/welcome.jpg',
            
            //campingimg
            campingimg:'./img/orderPage/camping.jpg',
        },
        methods: {
            //上午行程
            morningChange(value){
                this.morningtriptext=this.activity_list[value][2]
                this.morningtripPrice=this.activity_list[value][3]
                this.morningtripImg=this.activity_list[value][5]
            },
            //下午行程
            noonChange(value){
                this.noontriptext=this.activity_list[value][2]
                this.noontripPrice=this.activity_list[value][3]
                this.noontripImg=this.activity_list[value][5]
            },
            //晚上行程
            eveningChange(value){
                this.eveningtriptext=this.activity_list[value][2]
                this.eveningtripPrice=this.activity_list[value][3]
                this.eveningtripImg=this.activity_list[value][5]
            },
            //早餐
            morningFoodChange(value){
                this.morningFoodtext=this.food_list[value][2]
                this.morningFoodPrice=this.food_list[value][1]
                this.morningFoodImg=this.food_list[value][3]
            },
            //午餐
            noonFoodChange(value){
                this.noonFoodtext=this.food_list[value][2]
                this.noonFoodPrice=this.food_list[value][1]
                this.noonFoodImg=this.food_list[value][3]
            },
            //晚餐
            eveningFoodChange(value){
                this.eveningFoodtext=this.food_list[value][2]
                this.eveningFoodPrice=this.food_list[value][1]
                this.eveningFoodImg=this.food_list[value][3]
            },
            //住宿換圖
            stayimgChange(value){
                if(value == 2){
                    this.campingimg = './img/orderPage/campingnight.jpg'
                }else{
                    this.campingimg = './img/orderPage/camping.jpg'
                }
            },

        },

        created() {
            //取行程資料表
            const url = './php/tripChoose.php'
            fetch(url)
            .then(response => response.json())
            .then(activity => this.activity_list = activity);
    
            //取餐廳資料表
            const url1 = './php/foodChoose.php'
            fetch(url1)
            .then(response => response.json())
            .then(food => this.food_list = food);
            
        },
        mounted() {
            $(function(){

                //RWD
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
                //住宿換圖
                //小木屋
                $('#cabinOption').on('change',function(){
                    console.log($('#cabinOption').val());
                    if(($('#cabinOption').val()) == 2){
                        $('#cabinImg').attr('src','./img/orderPage/cabinnight.jpg')
                    }else{
                        $('#cabinImg').attr('src','./img/orderPage/cabin.jpg')
                    }
                })
                //villa
                let villaChoose = document.getElementById('villaChoose');
                let villaImg =document.getElementById('villaImg');
                villaChoose.addEventListener('change',function(){
                    if(villaChoose.value == 2){
                        villaImg.src = './img/orderPage/villanight.jpg'
                    }else{
                        villaImg.src = './img/orderPage/villa.jpg'
                    }
                })
                
                //下一頁
                $('#NextPage').on('click',()=>{
                    window.location.href = './readyToPay.html'
                })
            })
        },
    
        
    });
})
