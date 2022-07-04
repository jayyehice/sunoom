


window.addEventListener('load',function(){
    // const bus = new Vue();
    let vm = new Vue({
        el:'#app',
        data:{
            
            choosePrice:'',
            pepoleNums:0,
            newPrice: 0,
            //日期按鈕
            daysbutton:[],
            selectedDate: null,
            //行程資料表
            activity_list:[],
            //餐廳資料表
            food_list:[],
            //套餐資料表
            set_list:[],
            //折扣碼資料表
            discount_list:[],
            //選擇日期
            newDay:'',
            dayindex:0,

            //訂單明細總表
            //上午
            tripMorningNameValue:'',
            //下午
            tripNoonNameValue:'',
            //晚間
            tripEveningNameValue:'',

            //早餐
            FoodMorningNameValue:'',
            //午餐
            FoodNoonNameValue:'',
            //晚餐
            FoodEveningNameValue:'',

            //住宿
            StayNameValue:'',
            
            //訂單明細價格計算變數
            minorTotalPrice:0,
            Discount:0,
            totalPrice:0,
            //結帳明細金額
            minorTotalPriceR:0,
            DiscountR:0,
            totalPriceR:0,

            //綠界用
            greenPrice:0,
            greenOrderNums:0,
            
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

            //日期區
            startDay:'',
            endDay:'',
            dateArray:[],
            Chooseweek:[],

            chooseData:'',

            SetChooseAndDay:''
        },
        methods: { 
            //按鈕日期選擇
            day(val,index){
                this.newDay = val;
                this.dayindex = index;
                let daysbutton = document.getElementsByClassName('daysbutton')
                let setChooseList = document.getElementsByClassName('setChooseList')
                let SendChoose = document.getElementsByClassName('SendChoose')
                
                for(i = 0 ; i < daysbutton.length ; i++){
                    daysbutton[i].classList.remove('UseForCheck')
                    daysbutton[i].classList.remove('dayclick')
                    SendChoose[index].classList.remove('buttonBorderTop')
                    setChooseList[index].classList.remove('buttonBorderBottom')
                    daysbutton[index].querySelector('input').style.outline = 'none'
                    
                }
                if(daysbutton[index].querySelector('input').value != '已選擇' && daysbutton[index].querySelector('input').value != '請點下列購物車'){
                    daysbutton[index].querySelector('input').value = '確認送出'
                }
                if(daysbutton[index].querySelector('input').value == '已選擇'){
                    $('.tripChooseBlock').addClass('divCover')
                    $('.foodChooseBlock').addClass('divCover')
                    $('.stayChooseBlock').addClass('divCover') 
                }
                
                daysbutton[index].classList.add('UseForCheck')
                daysbutton[index].classList.add('dayclick')
                SendChoose[index].classList.add('buttonBorderTop')
                setChooseList[index].classList.add('buttonBorderBottom')
            },
            //確認是否為自由行，是才可出現刪除形成按鈕函式
            CheckForFree(dateindex){
                let setChooseList = document.getElementsByClassName('setChooseList')
                let SendChoose = document.getElementsByClassName('SendChoose')
                for(i = 0; i < setChooseList.length; i++){
                    if(dateindex == i){
                        if(setChooseList[i].value == '-1' && SendChoose[i].value == '請點下列購物車' ){
                            return true
                        }
                    }
                }
            },
            //點選日期帶回當天已選擇的行程資料
            ChooseReturn(indexval,e){

                let tripList = document.getElementsByClassName('tripList')
                let tripMorningName = document.getElementsByClassName('tripMorningName')
                let tripNoonName = document.getElementsByClassName('tripNoonName')
                let tripEveningName = document.getElementsByClassName('tripEveningName') 

                let FoodMorningName = document.getElementsByClassName('FoodMorningName')
                let FoodNoonName = document.getElementsByClassName('FoodNoonName')
                let FoodEveningName = document.getElementsByClassName('FoodEveningName') 

                let StayChooseName =document.getElementsByClassName('StayChooseName')
                let stayChoose = document.getElementsByClassName('stayChoose')

                let tripMchoose = document.getElementById('tripMchoose');
                let tripNchoose = document.getElementById('tripNchoose');
                let tripEchoose = document.getElementById('tripEchoose');

                console.log('冒泡');

                //先清空
                //上午行程
                tripMchoose.value = -1
                this.morningtriptext= '請點選上方選單列，開始安排您的旅程吧!'
                this.morningtripPrice = 0
                this.morningtripImg='./img/orderPage/welcome.jpg'
                //下午行程
                tripNchoose.value =-1
                this.noontriptext='請點選上方選單列，開始安排您的旅程吧!'
                this.noontripPrice='0'
                this.noontripImg='./img/orderPage/welcome.jpg'
                //晚上行程
                tripEchoose.value = -1
                this.eveningtriptext='請點選上方選單列，開始安排您的旅程吧!'
                this.eveningtripPrice='0'
                this.eveningtripImg='./img/orderPage/welcome.jpg'
        
                //早餐
                FoodMchoose.value = -1
                this.morningFoodtext='請點選上方選單列，開始安排您的早餐!'
                this.morningFoodPrice='0'
                this.morningFoodImg='./img/orderPage/welcome.jpg'
                //午餐
                FoodNchoose.value = -1 
                this.noonFoodtext='請點選上方選單列，開始安排您的午餐!'
                this.noonFoodPrice='0'
                this.noonFoodImg='./img/orderPage/welcome.jpg'
                //晚餐
                FoodEchoose.value = -1
                this.eveningFoodtext='請點選上方選單列，開始安排您的晚餐!'
                this.eveningFoodPrice='0'
                this.eveningFoodImg='./img/orderPage/welcome.jpg'

                cabinButton.checked = false
                campingButton.checked = false
                villaButton.checked = false

                $('#addItineraryM').css('opacity','0')
                $('#addItineraryN').css('opacity','0')
                $('#addItineraryE').css('opacity','0')

                $('#addFoodM').css('opacity','0')
                $('#addFoodN').css('opacity','0')
                $('#addFoodE').css('opacity','0')


                //在開始對比
                for(i = 0; i < tripList.length; i++){
                    if(indexval == i ){
                        //對比上午行程
                        for(tm = 0; tm < this.activity_list.length; tm++ ){
                            // console.log(this.activity_list[j][1]);
                            if(this.activity_list[tm][1] == tripMorningName[i].innerText){
                                tripMchoose.value = tm
                                this.morningtriptext=this.activity_list[tm][2]
                                this.morningtripPrice=this.activity_list[tm][3]
                                this.morningtripImg=this.activity_list[tm][5]
                            }
                        }
                        //對比下午行程
                        for(tn = 0; tn < this.activity_list.length; tn++ ){
                            // console.log(this.activity_list[j][1]);
                            if(this.activity_list[tn][1] == tripNoonName[i].innerText){
                                tripNchoose.value = tn
                                this.noontriptext=this.activity_list[tn][2]
                                this.noontripPrice=this.activity_list[tn][3]
                                this.noontripImg=this.activity_list[tn][5]
                            }
                        }
                        //對比晚間行程
                        for(te = 0; te < this.activity_list.length; te++ ){
                            // console.log(this.activity_list[j][1]);
                            if(this.activity_list[te][1] == tripEveningName[i].innerText){
                                tripEchoose.value = te
                                this.eveningtriptext=this.activity_list[te][2]
                                this.eveningtripPrice=this.activity_list[te][3]
                                this.eveningtripImg=this.activity_list[te][5]
                            }
                        }
                        //早餐
                        for(fm = 0; fm < this.food_list.length; fm++ ){
                            // console.log(this.activity_list[j][1]);
                            if(this.food_list[fm][0] == FoodMorningName[i].innerText){
                                FoodMchoose.value = fm
                                this.morningFoodtext=this.food_list[fm][2]
                                this.morningFoodPrice=this.food_list[fm][1]
                                this.morningFoodImg=this.food_list[fm][3]
                            }
                        }
                        //午餐
                        for(fn = 0; fn < this.food_list.length; fn++ ){
                            // console.log(this.activity_list[j][1]);
                            if(this.food_list[fn][0] == FoodNoonName[i].innerText){
                                FoodNchoose.value = fn
                                this.noonFoodtext=this.food_list[fn][2]
                                this.noonFoodPrice=this.food_list[fn][1]
                                this.noonFoodImg=this.food_list[fn][3]
                            }
                        }
                        //晚餐
                        for(fe = 0; fe < this.food_list.length; fe++ ){
                            // console.log(this.activity_list[j][1]);
                            if(this.food_list[fe][0] == FoodEveningName[i].innerText){
                                FoodEchoose.value = fe
                                this.eveningFoodtext=this.food_list[fe][2]
                                this.eveningFoodPrice=this.food_list[fe][1]
                                this.eveningFoodImg=this.food_list[fe][3]
                            }
                        }
                        //住宿
                        for(sc = 0 ; sc < stayChoose.length ; sc++){
                            if(StayChooseName[i].innerText.slice(0,-3) == stayChoose[sc].value){
                                stayChoose[sc].checked = true;
                                let v1 = '日';
                                // console.log(stayChoose[sc].parentNode.querySelector('img'));
                                if(StayChooseName[i].innerText.slice(-2,-1) == v1){
                                    stayChoose[sc].parentNode.querySelectorAll('select').value = 1
                                    
                                }else{
                                    stayChoose[sc].parentNode.querySelectorAll('select').value = 2
                                }
                                
                            }
                        }

                    }

                }
                e.stopPropagation();
                
            },

            //套餐選單Change事件 + scroll事件設定

            setChoose(val,e,index){
                let eg = e.target
                // console.log($(eg).parent().text().substring(0,4));
                this.newDay = $(eg).parent().find('p').text()

                this.dayindex = index
                // let setChooseList = document.getElementsByClassName('setChooseList')
                // let SendChoose = document.getElementsByClassName('SendChoose')

                let daysbutton = document.getElementsByClassName('daysbutton')

                // this.daysbutton[index].classList.add('UseForCheck')
                // this.daysbutton[index].classList.add('dayclick')
                // SendChoose[index].classList.add('buttonBorderTop')
                // setChooseList[index].classList.add('buttonBorderBottom')
                for(i = 0 ; i < this.dateArray.length ; i++){
                    
                    daysbutton[i].classList.remove('dayclick')
                    
                    // SendChoose[index].classList.remove('buttonBorderTop')
                    // setChooseList[index].classList.remove('buttonBorderBottom')
                    // daysbutton[index].querySelector('input').style.outline = 'none'
                    
                }
                $(eg).parent().addClass('dayclick')
                $(eg).addClass('buttonBorderBottom');
                $(eg).parent().find('input').addClass('buttonBorderTop')
                // console.log($(eg).parent().find('.weekCircular'));
                $(eg).parent().find('.weekCircular').addClass('weekCircularMoon')
                // weekCircular[index].classList.add('weekCircularMoon')
                // if(daysbutton[index].querySelector('input').value != '已選擇'){
                //     daysbutton[index].querySelector('input').value = '確認送出'
                // }
                if(val == '-1'){
                    $(eg).parent().find('.SendChoose').val("請點下列購物車")
                }else{
                    $(eg).parent().find('.SendChoose').val("確認送出")
                }
                if(val != '-1' && val != ''){
                    $('.tripChooseBlock').addClass('divCover')
                    $('.foodChooseBlock').addClass('divCover')
                    $('.stayChooseBlock').addClass('divCover')
                }else{
                    $('.tripChooseBlock').removeClass('divCover')
                    $('.foodChooseBlock').removeClass('divCover')
                    $('.stayChooseBlock').removeClass('divCover')
                }
                
                // if(val != '' && val != -1){
                //     $(window).scroll(()=>{
                //         // console.log($(window).scrollTop());
                //         if($(eg).parent().hasClass('UseForCheck') &&  this.newDay == $(eg).parent().text().substring(0,4)){
                //             if($(window).scrollTop() > 600 ){
                //                 $(eg).parent().addClass('ChooseMove')
                //             }
                //             // console.log($('.stayChooseBlock').offset().top);
                //             if($(window).scrollTop() > $('.stayChooseBlock').offset().top ){
                //                 $('.ChooseMove').find('input').css('display','block')
                //                 $(eg).parent().removeClass('UseForCheck')
                //             }
                //         }
                //         if($(window).scrollTop() < 600 || $(eg).parent().hasClass('send')){
                //             $(eg).parent().removeClass('ChooseMove')
                //         }
                //     })
                // }

                let tripMchoose = document.getElementById('tripMchoose');
                let tripNchoose = document.getElementById('tripNchoose');
                let tripEchoose = document.getElementById('tripEchoose');

                let FoodMchoose = document.getElementById('FoodMchoose');
                let FoodNchoose = document.getElementById('FoodNchoose');
                let FoodEchoose = document.getElementById('FoodEchoose');

                let cabinButton = document.getElementById('cabinButton');
                let campingButton = document.getElementById('campingButton');
                let villaButton = document.getElementById('villaButton');

                let cabinOption = document.getElementById('cabinOption');
                let campingChoose = document.getElementById('campingChoose');
                let villaChoose = document.getElementById('villaChoose');

                let cabinImg = document.getElementById('cabinImg');
                let campingImg = document.getElementById('campingImg');
                let villaImg = document.getElementById('villaImg');
                // console.log(tripMchoose.querySelectorAll('option')[3]);
                switch (val) {
                    case '-1':
                        //上午行程
                        tripMchoose.value = -1
                        this.morningtriptext= '請點選上方選單列，開始安排您的旅程吧!'
                        this.morningtripPrice='0'
                        this.morningtripImg='./img/orderPage/welcome.jpg'
                        //下午行程
                        tripNchoose.value =-1
                        this.noontriptext='請點選上方選單列，開始安排您的旅程吧!'
                        this.noontripPrice='0'
                        this.noontripImg='./img/orderPage/welcome.jpg'
                        //晚上行程
                        tripEchoose.value = -1
                        this.eveningtriptext='請點選上方選單列，開始安排您的旅程吧!'
                        this.eveningtripPrice='0'
                        this.eveningtripImg='./img/orderPage/welcome.jpg'
                
                        //早餐
                        FoodMchoose.value = -1
                        this.morningFoodtext='請點選上方選單列，開始安排您的早餐!'
                        this.morningFoodPrice='0'
                        this.morningFoodImg='./img/orderPage/welcome.jpg'
                        //午餐
                        FoodNchoose.value = -1 
                        this.noonFoodtext='請點選上方選單列，開始安排您的午餐!'
                        this.noonFoodPrice='0'
                        this.noonFoodImg='./img/orderPage/welcome.jpg'
                        //晚餐
                        FoodEchoose.value = -1
                        this.eveningFoodtext='請點選上方選單列，開始安排您的晚餐!'
                        this.eveningFoodPrice='0'
                        this.eveningFoodImg='./img/orderPage/welcome.jpg'
                        cabinButton.checked = false
                        campingButton.checked = false
                        villaButton.checked = false
                        $('#addItineraryM').css('opacity','0.1')
                        $('#addItineraryN').css('opacity','0.1')
                        $('#addItineraryE').css('opacity','0.1')

                        $('#addFoodM').css('opacity','0.1')
                        $('#addFoodN').css('opacity','0.1')
                        $('#addFoodE').css('opacity','0.1')

                        $('#addcabin').css('opacity','0.1')
                        $('#addCamping').css('opacity','0.1')
                        $('#addVilla').css('opacity','0.1')
                        
                        $(eg).parent().find('input').css({
                            outline:'none'
                        })
                        break;
                    case '0':
                        //上午行程
                        tripMchoose.value = 2;
                        this.morningtriptext=this.activity_list[2][2]
                        this.morningtripPrice=this.activity_list[2][3]
                        this.morningtripImg=this.activity_list[2][5]
                        //下午行程
                        tripNchoose.value = 1
                        this.noontriptext=this.activity_list[1][2]
                        this.noontripPrice=this.activity_list[1][3]
                        this.noontripImg=this.activity_list[1][5]
                        //夜間行程
                        tripEchoose.value = 0
                        this.eveningtriptext=this.activity_list[0][2]
                        this.eveningtripPrice=this.activity_list[0][3]
                        this.eveningtripImg=this.activity_list[0][5]
                        //早餐
                        FoodMchoose.value = 5
                        this.morningFoodtext=this.food_list[5][2]
                        this.morningFoodPrice=this.food_list[5][1]
                        this.morningFoodImg=this.food_list[5][3]
                        //午餐
                        FoodNchoose.value = 1
                        this.noonFoodtext=this.food_list[1][2]
                        this.noonFoodPrice=this.food_list[1][1]
                        this.noonFoodImg=this.food_list[1][3]
                        //晚餐
                        FoodEchoose.value = 3
                        this.eveningFoodtext=this.food_list[3][2]
                        this.eveningFoodPrice=this.food_list[3][1]
                        this.eveningFoodImg=this.food_list[3][3]
                        //住宿選項
                        campingButton.checked = true;
                        cabinButton.checked = false;
                        villaButton.checked = false;
                        campingChoose.value = 1;
                        //清空購物車
                        $('#addItineraryM').css('opacity','0')
                        $('#addItineraryN').css('opacity','0')
                        $('#addItineraryE').css('opacity','0')

                        $('#addFoodM').css('opacity','0')
                        $('#addFoodN').css('opacity','0')
                        $('#addFoodE').css('opacity','0')

                        $('#addcabin').css('opacity','0')
                        $('#addCamping').css('opacity','0')
                        $('#addVilla').css('opacity','0')
                        
                        break;
                    case '1':
                        //上午行程
                        tripMchoose.value = 1;
                        this.morningtriptext=this.activity_list[1][2]
                        this.morningtripPrice=this.activity_list[1][3]
                        this.morningtripImg=this.activity_list[1][5]
                        //下午行程
                        tripNchoose.value = 0
                        this.noontriptext=this.activity_list[0][2]
                        this.noontripPrice=this.activity_list[0][3]
                        this.noontripImg=this.activity_list[0][5]
                        //夜間行程
                        tripEchoose.value = 12
                        this.eveningtriptext=this.activity_list[12][2]
                        this.eveningtripPrice=this.activity_list[12][3]
                        this.eveningtripImg=this.activity_list[12][5]
                        //早餐
                        FoodMchoose.value = 5
                        this.morningFoodtext=this.food_list[5][2]
                        this.morningFoodPrice=this.food_list[5][1]
                        this.morningFoodImg=this.food_list[5][3]
                        //午餐
                        FoodNchoose.value = 1
                        this.noonFoodtext=this.food_list[1][2]
                        this.noonFoodPrice=this.food_list[1][1]
                        this.noonFoodImg=this.food_list[1][3]
                        //晚餐
                        FoodEchoose.value = 3
                        this.eveningFoodtext=this.food_list[3][2]
                        this.eveningFoodPrice=this.food_list[3][1]
                        this.eveningFoodImg=this.food_list[3][3]
                        //住宿選項
                        campingButton.checked = false;
                        cabinButton.checked = true;
                        villaButton.checked = false;
                        cabinOption.value = 1;
                        //清空購物車
                        $('#addItineraryM').css('opacity','0')
                        $('#addItineraryN').css('opacity','0')
                        $('#addItineraryE').css('opacity','0')

                        $('#addFoodM').css('opacity','0')
                        $('#addFoodN').css('opacity','0')
                        $('#addFoodE').css('opacity','0')

                        $('#addcabin').css('opacity','0')
                        $('#addCamping').css('opacity','0')
                        $('#addVilla').css('opacity','0')
                        break;
                    case '2':
                        //上午行程
                        tripMchoose.value = 4;
                        this.morningtriptext=this.activity_list[4][2]
                        this.morningtripPrice=this.activity_list[4][3]
                        this.morningtripImg=this.activity_list[4][5]
                        //下午行程
                        tripNchoose.value = 5
                        this.noontriptext=this.activity_list[5][2]
                        this.noontripPrice=this.activity_list[5][3]
                        this.noontripImg=this.activity_list[5][5]
                        //夜間行程
                        tripEchoose.value = 13
                        this.eveningtriptext=this.activity_list[13][2]
                        this.eveningtripPrice=this.activity_list[13][3]
                        this.eveningtripImg=this.activity_list[13][5]
                        //早餐
                        FoodMchoose.value = 5
                        this.morningFoodtext=this.food_list[5][2]
                        this.morningFoodPrice=this.food_list[5][1]
                        this.morningFoodImg=this.food_list[5][3]
                        //午餐
                        FoodNchoose.value = 3
                        this.noonFoodtext=this.food_list[3][2]
                        this.noonFoodPrice=this.food_list[3][1]
                        this.noonFoodImg=this.food_list[3][3]
                        //晚餐
                        FoodEchoose.value = 1
                        this.eveningFoodtext=this.food_list[1][2]
                        this.eveningFoodPrice=this.food_list[1][1]
                        this.eveningFoodImg=this.food_list[1][3]
                        //住宿選項
                        villaButton.checked = true;
                        campingButton.checked = false;
                        cabinButton.checked = false;
                        villaChoose.value = 1;
                        //清空購物車
                        $('#addItineraryM').css('opacity','0')
                        $('#addItineraryN').css('opacity','0')
                        $('#addItineraryE').css('opacity','0')

                        $('#addFoodM').css('opacity','0')
                        $('#addFoodN').css('opacity','0')
                        $('#addFoodE').css('opacity','0')

                        $('#addcabin').css('opacity','0')
                        $('#addCamping').css('opacity','0')
                        $('#addVilla').css('opacity','0')
                        break;
                    case '3':
                            //上午行程
                            tripMchoose.value = 13;
                            this.morningtriptext=this.activity_list[13][2]
                            this.morningtripPrice=this.activity_list[13][3]
                            this.morningtripImg=this.activity_list[13][5]
                            //下午行程
                            tripNchoose.value = 3
                            this.noontriptext=this.activity_list[3][2]
                            this.noontripPrice=this.activity_list[3][3]
                            this.noontripImg=this.activity_list[3][5]
                            //夜間行程
                            tripEchoose.value = 2
                            this.eveningtriptext=this.activity_list[2][2]
                            this.eveningtripPrice=this.activity_list[2][3]
                            this.eveningtripImg=this.activity_list[2][5]
                            //早餐
                            FoodMchoose.value = 3
                            this.morningFoodtext=this.food_list[3][2]
                            this.morningFoodPrice=this.food_list[3][1]
                            this.morningFoodImg=this.food_list[3][3]
                            //午餐
                            FoodNchoose.value = 1
                            this.noonFoodtext=this.food_list[1][2]
                            this.noonFoodPrice=this.food_list[1][1]
                            this.noonFoodImg=this.food_list[1][3]
                            //晚餐
                            FoodEchoose.value = 6
                            this.eveningFoodtext=this.food_list[6][2]
                            this.eveningFoodPrice=this.food_list[6][1]
                            this.eveningFoodImg=this.food_list[6][3]
                            //住宿選項
                            villaButton.checked = true;
                            campingButton.checked = false;
                            cabinButton.checked = false;
                            villaChoose.value = 1;
                            //清空購物車
                            $('#addItineraryM').css('opacity','0')
                            $('#addItineraryN').css('opacity','0')
                            $('#addItineraryE').css('opacity','0')
    
                            $('#addFoodM').css('opacity','0')
                            $('#addFoodN').css('opacity','0')
                            $('#addFoodE').css('opacity','0')
                            
                            $('#addcabin').css('opacity','0')
                            $('#addCamping').css('opacity','0')
                            $('#addVilla').css('opacity','0')
                        break;
                        case '4':
                            //上午行程
                            tripMchoose.value = 13;
                            this.morningtriptext=this.activity_list[13][2]
                            this.morningtripPrice=this.activity_list[13][3]
                            this.morningtripImg=this.activity_list[13][5]
                            //下午行程
                            tripNchoose.value = 12
                            this.noontriptext=this.activity_list[12][2]
                            this.noontripPrice=this.activity_list[12][3]
                            this.noontripImg=this.activity_list[12][5]
                            //夜間行程
                            tripEchoose.value = 16
                            this.eveningtriptext=this.activity_list[16][2]
                            this.eveningtripPrice=this.activity_list[16][3]
                            this.eveningtripImg=this.activity_list[16][5]
                            //早餐
                            FoodMchoose.value = 5
                            this.morningFoodtext=this.food_list[5][2]
                            this.morningFoodPrice=this.food_list[5][1]
                            this.morningFoodImg=this.food_list[5][3]
                            //午餐
                            FoodNchoose.value = 3
                            this.noonFoodtext=this.food_list[3][2]
                            this.noonFoodPrice=this.food_list[3][1]
                            this.noonFoodImg=this.food_list[3][3]
                            //晚餐
                            FoodEchoose.value = 1
                            this.eveningFoodtext=this.food_list[1][2]
                            this.eveningFoodPrice=this.food_list[1][1]
                            this.eveningFoodImg=this.food_list[1][3]
                            //住宿選項
                            villaButton.checked = true;
                            campingButton.checked = false;
                            cabinButton.checked = false;
                            villaChoose.value = 1;
                            //清空購物車
                            $('#addItineraryM').css('opacity','0')
                            $('#addItineraryN').css('opacity','0')
                            $('#addItineraryE').css('opacity','0')
    
                            $('#addFoodM').css('opacity','0')
                            $('#addFoodN').css('opacity','0')
                            $('#addFoodE').css('opacity','0')

                            $('#addcabin').css('opacity','0')
                            $('#addCamping').css('opacity','0')
                            $('#addVilla').css('opacity','0')
                        break;
                        case '5':
                            //上午行程
                            tripMchoose.value = 5;
                            this.morningtriptext=this.activity_list[5][2]
                            this.morningtripPrice=this.activity_list[5][3]
                            this.morningtripImg=this.activity_list[5][5]
                            //下午行程
                            tripNchoose.value = 18
                            this.noontriptext=this.activity_list[18][2]
                            this.noontripPrice=this.activity_list[18][3]
                            this.noontripImg=this.activity_list[18][5]
                            //夜間行程
                            tripEchoose.value = 12
                            this.eveningtriptext=this.activity_list[12][2]
                            this.eveningtripPrice=this.activity_list[12][3]
                            this.eveningtripImg=this.activity_list[12][5]
                            //早餐
                            FoodMchoose.value = 5
                            this.morningFoodtext=this.food_list[5][2]
                            this.morningFoodPrice=this.food_list[5][1]
                            this.morningFoodImg=this.food_list[5][3]
                            //午餐
                            FoodNchoose.value = 3
                            this.noonFoodtext=this.food_list[3][2]
                            this.noonFoodPrice=this.food_list[3][1]
                            this.noonFoodImg=this.food_list[3][3]
                            //晚餐
                            FoodEchoose.value = 1
                            this.eveningFoodtext=this.food_list[1][2]
                            this.eveningFoodPrice=this.food_list[1][1]
                            this.eveningFoodImg=this.food_list[1][3]
                            //住宿選項
                            campingButton.checked = false;
                            cabinButton.checked = true;
                            villaButton.checked = false;
                            cabinOption.value = 1;
                            //清空購物車
                            $('#addItineraryM').css('opacity','0')
                            $('#addItineraryN').css('opacity','0')
                            $('#addItineraryE').css('opacity','0')
    
                            $('#addFoodM').css('opacity','0')
                            $('#addFoodN').css('opacity','0')
                            $('#addFoodE').css('opacity','0')

                            $('#addcabin').css('opacity','0')
                            $('#addCamping').css('opacity','0')
                            $('#addVilla').css('opacity','0')
                        break;
                        case '6':
                            //上午行程
                            tripMchoose.value = 9;
                            this.morningtriptext=this.activity_list[9][2]
                            this.morningtripPrice=this.activity_list[9][3]
                            this.morningtripImg=this.activity_list[9][5]
                            //下午行程
                            tripNchoose.value = 6
                            this.noontriptext=this.activity_list[6][2]
                            this.noontripPrice=this.activity_list[6][3]
                            this.noontripImg=this.activity_list[6][5]
                            //夜間行程
                            tripEchoose.value = 10
                            this.eveningtriptext=this.activity_list[10][2]
                            this.eveningtripPrice=this.activity_list[10][3]
                            this.eveningtripImg=this.activity_list[10][5]
                            //早餐
                            FoodMchoose.value = 6
                            this.morningFoodtext=this.food_list[6][2]
                            this.morningFoodPrice=this.food_list[6][1]
                            this.morningFoodImg=this.food_list[6][3]
                            //午餐
                            FoodNchoose.value = 2
                            this.noonFoodtext=this.food_list[2][2]
                            this.noonFoodPrice=this.food_list[2][1]
                            this.noonFoodImg=this.food_list[2][3]
                            //晚餐
                            FoodEchoose.value = 4
                            this.eveningFoodtext=this.food_list[4][2]
                            this.eveningFoodPrice=this.food_list[4][1]
                            this.eveningFoodImg=this.food_list[4][3]
                            //住宿選項
                            this.campingimg = './img/orderPage/campingnight.jpg'
                            campingButton.checked = false;
                            cabinButton.checked = true;
                            villaButton.checked = false;
                            cabinOption.value = 2;
                            //清空購物車
                            $('#addItineraryM').css('opacity','0')
                            $('#addItineraryN').css('opacity','0')
                            $('#addItineraryE').css('opacity','0')
    
                            $('#addFoodM').css('opacity','0')
                            $('#addFoodN').css('opacity','0')
                            $('#addFoodE').css('opacity','0')

                            $('#addcabin').css('opacity','0')
                            $('#addCamping').css('opacity','0')
                            $('#addVilla').css('opacity','0')
                        break;
                        case '7':
                            //上午行程
                            tripMchoose.value = 6;
                            this.morningtriptext=this.activity_list[6][2]
                            this.morningtripPrice=this.activity_list[6][3]
                            this.morningtripImg=this.activity_list[6][5]
                            //下午行程
                            tripNchoose.value = 20
                            this.noontriptext=this.activity_list[20][2]
                            this.noontripPrice=this.activity_list[20][3]
                            this.noontripImg=this.activity_list[20][5]
                            //夜間行程
                            tripEchoose.value = 9
                            this.eveningtriptext=this.activity_list[9][2]
                            this.eveningtripPrice=this.activity_list[9][3]
                            this.eveningtripImg=this.activity_list[9][5]
                            //早餐
                            FoodMchoose.value = 6
                            this.morningFoodtext=this.food_list[6][2]
                            this.morningFoodPrice=this.food_list[6][1]
                            this.morningFoodImg=this.food_list[6][3]
                            //午餐
                            FoodNchoose.value = 2
                            this.noonFoodtext=this.food_list[2][2]
                            this.noonFoodPrice=this.food_list[2][1]
                            this.noonFoodImg=this.food_list[2][3]
                            //晚餐
                            FoodEchoose.value = 4
                            this.eveningFoodtext=this.food_list[4][2]
                            this.eveningFoodPrice=this.food_list[4][1]
                            this.eveningFoodImg=this.food_list[4][3]
                            //住宿選項
                            cabinButton.checked = true;
                            cabinOption.value = 2;
                            cabinImg.src = './img/orderPage/cabinnight.jpg'
                            campingButton.checked = false
                            villaButton.checked = false
                            $('#addItineraryM').css('opacity','0')
                            $('#addItineraryN').css('opacity','0')
                            $('#addItineraryE').css('opacity','0')
    
                            $('#addFoodM').css('opacity','0')
                            $('#addFoodN').css('opacity','0')
                            $('#addFoodE').css('opacity','0')

                            $('#addcabin').css('opacity','0')
                            $('#addCamping').css('opacity','0')
                            $('#addVilla').css('opacity','0')
                        break;
                        case '8':
                            //上午行程
                            tripMchoose.value = 10;
                            this.morningtriptext=this.activity_list[10][2]
                            this.morningtripPrice=this.activity_list[10][3]
                            this.morningtripImg=this.activity_list[10][5]
                            //下午行程
                            tripNchoose.value = 22
                            this.noontriptext=this.activity_list[22][2]
                            this.noontripPrice=this.activity_list[22][3]
                            this.noontripImg=this.activity_list[22][5]
                            //夜間行程
                            tripEchoose.value = 23
                            this.eveningtriptext=this.activity_list[23][2]
                            this.eveningtripPrice=this.activity_list[23][3]
                            this.eveningtripImg=this.activity_list[23][5]
                            //早餐
                            FoodMchoose.value = 6
                            this.morningFoodtext=this.food_list[6][2]
                            this.morningFoodPrice=this.food_list[6][1]
                            this.morningFoodImg=this.food_list[6][3]
                            //午餐
                            FoodNchoose.value = 4
                            this.noonFoodtext=this.food_list[4][2]
                            this.noonFoodPrice=this.food_list[4][1]
                            this.noonFoodImg=this.food_list[4][3]
                            //晚餐
                            FoodEchoose.value = 2
                            this.eveningFoodtext=this.food_list[2][2]
                            this.eveningFoodPrice=this.food_list[2][1]
                            this.eveningFoodImg=this.food_list[2][3]
                            //住宿選項
                            villaImg.src = './img/orderPage/villanight.jpg'
                            villaButton.checked = true;
                            campingButton.checked = false;
                            cabinButton.checked = false;
                            villaChoose.value = 2;
                            //清空購物車
                            $('#addItineraryM').css('opacity','0')
                            $('#addItineraryN').css('opacity','0')
                            $('#addItineraryE').css('opacity','0')
    
                            $('#addFoodM').css('opacity','0')
                            $('#addFoodN').css('opacity','0')
                            $('#addFoodE').css('opacity','0')

                            $('#addcabin').css('opacity','0')
                            $('#addCamping').css('opacity','0')
                            $('#addVilla').css('opacity','0')
                        break;
                        case '9':
                            //上午行程
                            tripMchoose.value = 11;
                            this.morningtriptext=this.activity_list[11][2]
                            this.morningtripPrice=this.activity_list[11][3]
                            this.morningtripImg=this.activity_list[11][5]
                            //下午行程
                            tripNchoose.value = 8
                            this.noontriptext=this.activity_list[8][2]
                            this.noontripPrice=this.activity_list[8][3]
                            this.noontripImg=this.activity_list[8][5]
                            //夜間行程
                            tripEchoose.value = 24
                            this.eveningtriptext=this.activity_list[24][2]
                            this.eveningtripPrice=this.activity_list[24][3]
                            this.eveningtripImg=this.activity_list[24][5]
                            //早餐
                            FoodMchoose.value = 6
                            this.morningFoodtext=this.food_list[6][2]
                            this.morningFoodPrice=this.food_list[6][1]
                            this.morningFoodImg=this.food_list[6][3]
                            //午餐
                            FoodNchoose.value = 4
                            this.noonFoodtext=this.food_list[4][2]
                            this.noonFoodPrice=this.food_list[4][1]
                            this.noonFoodImg=this.food_list[4][3]
                            //晚餐
                            FoodEchoose.value = 2
                            this.eveningFoodtext=this.food_list[2][2]
                            this.eveningFoodPrice=this.food_list[2][1]
                            this.eveningFoodImg=this.food_list[2][3]
                            //住宿選項
                            this.campingimg = './img/orderPage/campingnight.jpg'
                            campingButton.checked = false;
                            cabinButton.checked = true;
                            villaButton.checked = false;
                            cabinOption.value = 2;
                            //清空購物車
                            $('#addItineraryM').css('opacity','0')
                            $('#addItineraryN').css('opacity','0')
                            $('#addItineraryE').css('opacity','0')
    
                            $('#addFoodM').css('opacity','0')
                            $('#addFoodN').css('opacity','0')
                            $('#addFoodE').css('opacity','0')

                            $('#addcabin').css('opacity','0')
                            $('#addCamping').css('opacity','0')
                            $('#addVilla').css('opacity','0')
                        break;
                        case '10':
                            //上午行程
                            tripMchoose.value = 21;
                            this.morningtriptext=this.activity_list[21][2]
                            this.morningtripPrice=this.activity_list[21][3]
                            this.morningtripImg=this.activity_list[21][5]
                            //下午行程
                            tripNchoose.value = 19
                            this.noontriptext=this.activity_list[19][2]
                            this.noontripPrice=this.activity_list[19][3]
                            this.noontripImg=this.activity_list[19][5]
                            //夜間行程
                            tripEchoose.value = 23
                            this.eveningtriptext=this.activity_list[23][2]
                            this.eveningtripPrice=this.activity_list[23][3]
                            this.eveningtripImg=this.activity_list[23][5]
                            //早餐
                            FoodMchoose.value = 6
                            this.morningFoodtext=this.food_list[6][2]
                            this.morningFoodPrice=this.food_list[6][1]
                            this.morningFoodImg=this.food_list[6][3]
                            //午餐
                            FoodNchoose.value = 4
                            this.noonFoodtext=this.food_list[4][2]
                            this.noonFoodPrice=this.food_list[4][1]
                            this.noonFoodImg=this.food_list[4][3]
                            //晚餐
                            FoodEchoose.value = 2
                            this.eveningFoodtext=this.food_list[2][2]
                            this.eveningFoodPrice=this.food_list[2][1]
                            this.eveningFoodImg=this.food_list[2][3]
                            //住宿選項
                            villaImg.src = './img/orderPage/villanight.jpg'
                            villaButton.checked = true;
                            campingButton.checked = false;
                            cabinButton.checked = false;
                            villaChoose.value = 2;
                            //清空購物車
                            $('#addItineraryM').css('opacity','0')
                            $('#addItineraryN').css('opacity','0')
                            $('#addItineraryE').css('opacity','0')
    
                            $('#addFoodM').css('opacity','0')
                            $('#addFoodN').css('opacity','0')
                            $('#addFoodE').css('opacity','0')

                            $('#addcabin').css('opacity','0')
                            $('#addCamping').css('opacity','0')
                            $('#addVilla').css('opacity','0')
                        break;
                        case '11':
                            //上午行程
                            tripMchoose.value = 17;
                            this.morningtriptext=this.activity_list[17][2]
                            this.morningtripPrice=this.activity_list[17][3]
                            this.morningtripImg=this.activity_list[17][5]
                            //下午行程
                            tripNchoose.value = 24
                            this.noontriptext=this.activity_list[24][2]
                            this.noontripPrice=this.activity_list[24][3]
                            this.noontripImg=this.activity_list[24][5]
                            //夜間行程
                            tripEchoose.value = 11
                            this.eveningtriptext=this.activity_list[1][2]
                            this.eveningtripPrice=this.activity_list[11][3]
                            this.eveningtripImg=this.activity_list[11][5]
                            //早餐
                            FoodMchoose.value = 6
                            this.morningFoodtext=this.food_list[6][2]
                            this.morningFoodPrice=this.food_list[6][1]
                            this.morningFoodImg=this.food_list[6][3]
                            //午餐
                            FoodNchoose.value = 4
                            this.noonFoodtext=this.food_list[4][2]
                            this.noonFoodPrice=this.food_list[4][1]
                            this.noonFoodImg=this.food_list[4][3]
                            //晚餐
                            FoodEchoose.value = 2
                            this.eveningFoodtext=this.food_list[2][2]
                            this.eveningFoodPrice=this.food_list[2][1]
                            this.eveningFoodImg=this.food_list[2][3]
                            //住宿選項
                            this.campingimg = './img/orderPage/campingnight.jpg'
                            campingButton.checked = false;
                            cabinButton.checked = true;
                            villaButton.checked = false;
                            cabinOption.value = 2;
                            //清空購物車
                            $('#addItineraryM').css('opacity','0')
                            $('#addItineraryN').css('opacity','0')
                            $('#addItineraryE').css('opacity','0')
    
                            $('#addFoodM').css('opacity','0')
                            $('#addFoodN').css('opacity','0')
                            $('#addFoodE').css('opacity','0')

                            $('#addcabin').css('opacity','0')
                            $('#addCamping').css('opacity','0')
                            $('#addVilla').css('opacity','0')
                        break;
                    default:
                        break;
                }
                e.stopPropagation();
            },
            stopPropagation(e,index){
                // this.dayindex = index
                // e.stopPropagation();

            },
            //套餐加入訂單
            sendChoose(date,e){
                let eg = event.target;
                let SendChoose = document.getElementsByClassName('SendChoose')
                // console.log($(eg).parent().find('select').val());
                for(let i = 0; i <= this.dateArray.length ;i++ ){
                    if($(eg).parent().find('select').val() != '' && $(eg).parent().find('select').val() != '-1'){
                        if(date == i ){
                            $('.tripMorningName')[i].innerHTML = this.activity_list[this.tripMorningNameValue][1];
                            $('.tripMorningPrice')[i].innerHTML = (this.activity_list[this.tripMorningNameValue][3] * this.pepoleNums)
                            
                            // $('.tripMorningNameR')[i].innerHTML = this.activity_list[this.tripMorningNameValue][1];
                            // $('.tripMorningPriceR')[i].innerHTML = (this.activity_list[this.tripMorningNameValue][3] * this.pepoleNums)
    
                            $('.tripNoonName')[i].innerHTML = this.activity_list[this.tripNoonNameValue][1];
                            $('.tripNoonPrice')[i].innerHTML = (this.activity_list[this.tripNoonNameValue][3] * this.pepoleNums)

                            // $('.tripNoonNameR')[i].innerHTML = this.activity_list[this.tripNoonNameValue][1];
                            // $('.tripNoonPriceR')[i].innerHTML = (this.activity_list[this.tripNoonNameValue][3] * this.pepoleNums)
    
                            // let tripNoonChooseList = [];
                            // tripNoonChooseList.push(this.dateArray[i],this.activity_list[this.tripNoonNameValue][1],this.activity_list[this.tripNoonNameValue][3])
                            // localStorage.setItem('tripNoonChooseList'+[i],JSON.stringify(tripNoonChooseList))
                            
                            $('.tripEveningName')[i].innerHTML = this.activity_list[this.tripEveningNameValue][1];
                            $('.tripEveningPrice')[i].innerHTML = (this.activity_list[this.tripEveningNameValue][3] * this.pepoleNums)

                            // $('.tripEveningNameR')[i].innerHTML = this.activity_list[this.tripEveningNameValue][1];
                            // $('.tripEveningPriceR')[i].innerHTML = (this.activity_list[this.tripEveningNameValue][3] * this.pepoleNums)
    
                            // let tripEveningChooseList = [];
                            // tripEveningChooseList.push(this.dateArray[i],this.activity_list[this.tripEveningNameValue][1],this.activity_list[this.tripEveningNameValue][3])
                            // localStorage.setItem('tripEveningChooseList'+[i],JSON.stringify(tripEveningChooseList))
    
                            $('.FoodMorningName')[i].innerHTML = this.food_list[this.FoodMorningNameValue][0];
                            $('.FoodMorningPrice')[i].innerHTML = (this.food_list[this.FoodMorningNameValue][1] * this.pepoleNums)

                            // $('.FoodMorningNameR')[i].innerHTML = this.food_list[this.FoodMorningNameValue][0];
                            // $('.FoodMorningPriceR')[i].innerHTML = (this.food_list[this.FoodMorningNameValue][1] * this.pepoleNums)
    
                            // let FoodMorningChooseList = [];
                            // FoodMorningChooseList.push(this.dateArray[i],this.food_list[this.FoodMorningNameValue][0],this.food_list[this.FoodMorningNameValue][1])
                            // localStorage.setItem('FoodMorningChooseList'+[i],JSON.stringify(FoodMorningChooseList))
    
                            $('.FoodNoonName')[i].innerHTML = this.food_list[this.FoodNoonNameValue][0];
                            $('.FoodNoonPrice')[i].innerHTML = (this.food_list[this.FoodNoonNameValue][1] * this.pepoleNums)

                            // $('.FoodNoonNameR')[i].innerHTML = this.food_list[this.FoodNoonNameValue][0];
                            // $('.FoodNoonPriceR')[i].innerHTML = (this.food_list[this.FoodNoonNameValue][1] * this.pepoleNums)
    
                            // let FoodNoonChooseList = [];
                            // FoodNoonChooseList.push(this.dateArray[i],this.food_list[this.FoodNoonNameValue][0],this.food_list[this.FoodNoonNameValue][1])
                            // localStorage.setItem('FoodNoonChooseList'+[i],JSON.stringify(FoodNoonChooseList))
    
                            $('.FoodEveningName')[i].innerHTML = this.food_list[this.FoodEveningNameValue][0];
                            $('.FoodEveningPrice')[i].innerHTML = (this.food_list[this.FoodEveningNameValue][1] * this.pepoleNums)

                            // $('.FoodEveningNameR')[i].innerHTML = this.food_list[this.FoodEveningNameValue][0];
                            // $('.FoodEveningPriceR')[i].innerHTML = (this.food_list[this.FoodEveningNameValue][1] * this.pepoleNums)
    
                            // let FoodEveningChooseList = [];
                            // FoodEveningChooseList.push(this.dateArray[i],this.food_list[this.FoodEveningNameValue][0],this.food_list[this.FoodEveningNameValue][1])
                            // localStorage.setItem('FoodNoonChooseList'+[i],JSON.stringify(FoodEveningChooseList))
    
                            let stayChoose = document.getElementsByClassName('stayChoose');
                            for(let j = 0 ; j < stayChoose.length ; j++){
                                if(stayChoose[j].checked == true){
                                    // console.log(stayChoose[j].parentNode.querySelectorAll('span')[0].innerText.substring(1,5));
                                    let thisStayName = stayChoose[j].parentNode.querySelectorAll('h4')[0].innerText
                                    let thisPrice = stayChoose[j].parentNode.querySelectorAll('span')[0].innerText.substring(1,5)
                                    // console.log(cabinOption.value);
                                    if(cabinOption.value == 1){
                                       thisStayName = thisStayName + '(日)';
                                    }else{
                                        thisStayName = thisStayName + '(月)';
                                    }
                                    $('.StayChooseName')[i].innerHTML = thisStayName;
                                    $('.StayChoosePrice')[i].innerHTML = (this.pepoleNums * parseInt(thisPrice));
            
                                    // let stayChooseList = [];
                                    // stayChooseList.push(this.dateArray[i],thisStayName,thisPrice)
                                    // localStorage.setItem('stayChooseList'+[i],JSON.stringify(stayChooseList))
                                }
                            }
                            // e.stopPropagation();
                            
                            // console.log(SendChoose[date].value);
                            
                            SendChoose[date].value = '已選擇'
    
                        }

                        $('.addfadein').fadeTo(1,0.9)
                        $('.addfadein').fadeOut(1000)
                        $('.addfadein').css({'z-index':'999'})
                        setTimeout(()=>{
                            $('.addfadein').css({'z-index':'-999'})
                        },1000)
                        // console.log($(eg));
                        $(eg).parent().addClass('send');
                        // e.stopPropagation();

                    }
                   
                }

            },

            //上午行程
            morningChange(value){
                this.morningtriptext=this.activity_list[value][2]
                this.morningtripPrice=this.activity_list[value][3]
                this.morningtripImg=this.activity_list[value][5]
                this.tripMorningNameValue = value
                // console.log(addItineraryM);
                $('#addItineraryM').css({
                    opacity:'1',
                    cursor: 'pointer',
                })
            },
            //下午行程
            noonChange(value){
                this.noontriptext=this.activity_list[value][2]
                this.noontripPrice=this.activity_list[value][3]
                this.noontripImg=this.activity_list[value][5]
                this.tripNoonNameValue = value
                $('#addItineraryN').css({
                    opacity:'1',
                    cursor: 'pointer',
                })
            },
            //晚上行程
            eveningChange(value){
                this.eveningtriptext=this.activity_list[value][2]
                this.eveningtripPrice=this.activity_list[value][3]
                this.eveningtripImg=this.activity_list[value][5]
                this.tripEveningNameValue = value
                $('#addItineraryE').css({
                    opacity:'1',
                    cursor: 'pointer',
                })
            },
            //早餐
            morningFoodChange(value){
                this.morningFoodtext=this.food_list[value][2]
                this.morningFoodPrice=this.food_list[value][1]
                this.morningFoodImg=this.food_list[value][3]
                FoodMorningNameValue = value
                $('#addFoodM').css({
                    opacity:'1',
                    cursor: 'pointer',
                })
            },
            //午餐
            noonFoodChange(value){
                this.noonFoodtext=this.food_list[value][2]
                this.noonFoodPrice=this.food_list[value][1]
                this.noonFoodImg=this.food_list[value][3]
                FoodNoonNameValue = value
                $('#addFoodN').css({
                    opacity:'1',
                    cursor: 'pointer',
                })
            },
            //晚餐
            eveningFoodChange(value){
                this.eveningFoodtext=this.food_list[value][2]
                this.eveningFoodPrice=this.food_list[value][1]
                this.eveningFoodImg=this.food_list[value][3]
                FoodEveningNameValue = value
                $('#addFoodE').css({
                    opacity:'1',
                    cursor: 'pointer',
                })
            },
            //住宿換圖
            stayimgChange(value){
                if(value == 2){
                    this.campingimg = './img/orderPage/campingnight.jpg'
                }else{
                    this.campingimg = './img/orderPage/camping.jpg'
                }
            },

            //金額小計
            total(){
                let tripMorningPrice = document.getElementsByClassName('tripMorningPrice')
                let tripNoonPrice = document.getElementsByClassName('tripNoonPrice')
                let tripEveningPrice = document.getElementsByClassName('tripEveningPrice')

                let FoodMorningPrice = document.getElementsByClassName('FoodMorningPrice')
                let FoodNoonPrice = document.getElementsByClassName('FoodNoonPrice')
                let FoodEveningPrice = document.getElementsByClassName('FoodEveningPrice')

                let StayChoosePrice = document.getElementsByClassName('StayChoosePrice')

                let tripMoringPricetotal = 0 ;
                let tripNoonPricetotal = 0 ;
                let tripEveningPricetotal = 0 ;

                let FoodMorningPricetotal = 0;
                let FoodNoonPricetotal = 0;
                let FoodEveningPricetotal = 0;

                let StayChoosePricetotal = 0;
                for(let i = 0 ; i < this.dateArray.length; i++){
                    
                    tripMoringPricetotal += parseInt(tripMorningPrice[i].innerText)
                    tripNoonPricetotal += parseInt(tripNoonPrice[i].innerText)
                    tripEveningPricetotal += parseInt(tripEveningPrice[i].innerText)

                    FoodMorningPricetotal += parseInt(FoodMorningPrice[i].innerText)
                    FoodNoonPricetotal += parseInt(FoodNoonPrice[i].innerText)
                    FoodEveningPricetotal += parseInt(FoodEveningPrice[i].innerText)

                    StayChoosePricetotal += parseInt(StayChoosePrice[i].innerText)

                };
                this.minorTotalPrice = tripMoringPricetotal + tripNoonPricetotal + tripEveningPricetotal +FoodMorningPricetotal +FoodNoonPricetotal + FoodEveningPricetotal + StayChoosePricetotal;
                this.minorTotalPrice ='$'+this.minorTotalPrice.toLocaleString('en-US')
                this.minorTotalPriceR = this.minorTotalPrice
                this.discount_list.forEach(() => {
                    // console.log((1 -( this.discount_list[discountNums.value][1]  / 10 )));
                    this.Discount =  '-$'+(Math.round((this.minorTotalPrice.slice(1).replace(/,/g,'')) * ( 1 -( this.discount_list[discountNums.value][1] / 10)))).toLocaleString('en-US');
                });
                this.DiscountR = this.Discount
                this.totalPrice = '$'+(parseInt(this.minorTotalPrice.slice(1).replace(/,/g,'')) - parseInt(this.Discount.slice(2).replace(/,/g,''))).toLocaleString('en-US');
                this.totalPriceR = this.totalPrice
            },
            // getNewDiscountPrice(){
            //     this.Discount =  '-$'+(Math.round((this.minorTotalPrice.slice(1).replace(/,/g,'')) * ( 1 -( this.discount_list[discountNums.value][1] / 10)))).toLocaleString('en-US');
            // },
            //人數減
            dpnums(e){
                // console.log(typeof(eg.nextElementSibling.innerHTML));
               
                // console.log(eg);
                if(e.nextElementSibling.innerText > 1){
                    let newNums= e.nextElementSibling.innerText 
                    let oldPrice = (e.parentElement.nextElementSibling.innerHTML / newNums)

                    e.nextElementSibling.innerText--
                    newNums--
                    let newPrice = (oldPrice * newNums)
            
                    e.parentElement.nextElementSibling.innerHTML = newPrice
                    
                }
            },
            //人數加
            apnums(e){
                // console.log(eg.parentElement.nextElementSibling.innerText);
                // console.log($('#ccc').innerHTML);
                
                if(e.previousElementSibling.innerText < JSON.parse(localStorage.getItem('pepoleNums'))){
                    // for(let i = 0 ; i <= tripMorningPrice.length; i++){
                        //     if(eg.parentElement.nextElementSibling[i] = i){
                            //         console.log(eg.parentElement.nextElementSibling[i]);
                            //     }
                    let newNums= e.previousElementSibling.innerText
                    let oldPrice = (e.parentElement.nextElementSibling.innerHTML / newNums)

                    e.previousElementSibling.innerText++
                    newNums++

                    let newPrice = (oldPrice * newNums)
            
                    e.parentElement.nextElementSibling.innerHTML = newPrice
                    // console.log(newNums, oldPrice, newPrice);
                    }
            
                
            },

            //行程刪除按鈕
            morningTripDeleteButton(e){
                let eg = e.target;
                eg.parentElement.previousElementSibling.innerHTML = '0';
                eg.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = ''
                localStorage.removeItem('tirpMorningChooseList'+[eg.dataset.deleteindex])
            },
            noonTripDeleteButton(e){
                let eg = e.target;
                eg.parentElement.previousElementSibling.innerHTML = '0';
                eg.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = ''
                localStorage.removeItem('tripNoonChooseList'+[eg.dataset.deleteindex])
            },
            eveningTripDeleteButton(e){
                let eg = e.target;
                eg.parentElement.previousElementSibling.innerHTML = '0';
                eg.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = ''
                localStorage.removeItem('tripEveningChooseList'+[eg.dataset.deleteindex])
            },     
            //餐點刪除按鈕
            morningFoodDeleteButton(e){
                let eg = e.target;
                eg.parentElement.previousElementSibling.innerHTML = '0';
                eg.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = ''
                localStorage.removeItem('FoodMorningChooseList'+[eg.dataset.deleteindex])
            },
            noonFoodDeleteButton(e){
                let eg = e.target;
                eg.parentElement.previousElementSibling.innerHTML = '0';
                eg.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = ''
                localStorage.removeItem('FoodNoonChooseList'+[eg.dataset.deleteindex])
            },
            eveningFoodDeleteButton(e){
                let eg = e.target;
                eg.parentElement.previousElementSibling.innerHTML = '0';
                eg.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = ''
                localStorage.removeItem('FoodEveningChooseList'+[eg.dataset.deleteindex])
            },     
            StayDeleteButton(e){
                let eg = e.target;
                eg.parentElement.previousElementSibling.innerHTML = '0';
                eg.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = ''
                localStorage.removeItem('StayDeleteButton'+[eg.dataset.deleteindex])
            },
            //判斷住宿是否全都已選擇完畢
            FinishCheck(){ 
                let StayChooseName = document.getElementsByClassName('StayChooseName');
                let ans = StayChooseName.every(()=>{
                    console.log(innerText);
                    return innerText != ''
                })
                return ans
            },
            //完成選擇後開始結帳，隱藏選單
            close(){
                //選取內容帶去完整明細表
                let tripMorningName = document.getElementsByClassName('tripMorningName');
                let tripMorningPrice = document.getElementsByClassName('tripMorningPrice');
                let tripMorningNameR = document.getElementsByClassName('tripMorningNameR');
                let tripMorningPriceR = document.getElementsByClassName('tripMorningPriceR');

                let tripNoonName = document.getElementsByClassName('tripNoonName');
                let tripNoonPrice = document.getElementsByClassName('tripNoonPrice');
                let tripNoonNameR = document.getElementsByClassName('tripNoonNameR');
                let tripNoonPriceR = document.getElementsByClassName('tripNoonPriceR');

                let tripEveningName = document.getElementsByClassName('tripEveningName');
                let tripEveningPrice = document.getElementsByClassName('tripEveningPrice');
                let tripEveningNameR = document.getElementsByClassName('tripEveningNameR');
                let tripEveningPriceR = document.getElementsByClassName('tripEveningPriceR');

                let FoodMorningName = document.getElementsByClassName('FoodMorningName');
                let FoodMorningPrice = document.getElementsByClassName('FoodMorningPrice');
                let FoodMorningNameR = document.getElementsByClassName('FoodMorningNameR');
                let FoodMorningPriceR = document.getElementsByClassName('FoodMorningPriceR');

                let FoodNoonName = document.getElementsByClassName('FoodNoonName');
                let FoodNoonPrice = document.getElementsByClassName('FoodNoonPrice');
                let FoodNoonNameR = document.getElementsByClassName('FoodNoonNameR');
                let FoodNoonPriceR = document.getElementsByClassName('FoodNoonPriceR');

                let FoodEveningName = document.getElementsByClassName('FoodEveningName');
                let FoodEveningPrice = document.getElementsByClassName('FoodEveningPrice');
                let FoodEveningNameR = document.getElementsByClassName('FoodEveningNameR');
                let FoodEveningPriceR = document.getElementsByClassName('FoodEveningPriceR');

                let StayChooseName = document.getElementsByClassName('StayChooseName');
                let StayChoosePrice = document.getElementsByClassName('StayChoosePrice');
                let StayChooseNameR = document.getElementsByClassName('StayChooseNameR');
                let StayChoosePriceR = document.getElementsByClassName('StayChoosePriceR');

                let PepoleImg = '<i class="fa-solid fa-user"></i>'

                let staycheck = true;
                for(i = 0; i < StayChooseName.length; i++){
                    if(StayChooseName[i].innerText == ''){
                        staycheck = false;
                    }
                }
                if(!staycheck){
                    // alert('請確認您尚未選擇的住宿')
                    sectionBlock.style.display = 'block'
                    readyToPay.style.display = 'none'
                }else{
                    sectionBlock.style.display = 'none'
                    readyToPay.style.display = 'block'
                    $('html, body').animate({
                        scrollTop:'0'
                    },1000)
                }
                // let trippepoleNumsList = [];
                // let foodpepoleNumsList = [];
                for(i = 0 ; i < this.dateArray.length; i++){
                    //行程
                    tripMorningNameR[i].innerText = tripMorningName[i].innerText
                    tripMorningNameR[i].nextElementSibling.innerHTML = tripMorningName[i].nextElementSibling.innerText + PepoleImg
                    tripMorningPriceR[i].innerText = tripMorningPrice[i].innerText
                    
                    tripNoonNameR[i].innerText = tripNoonName[i].innerText
                    tripNoonNameR[i].nextElementSibling.innerHTML = tripNoonName[i].nextElementSibling.innerText + PepoleImg
                    tripNoonPriceR[i].innerText = tripNoonPrice[i].innerText

                    tripEveningNameR[i].innerText = tripEveningName[i].innerText
                    tripEveningNameR[i].nextElementSibling.innerHTML = tripEveningName[i].nextElementSibling.innerText + PepoleImg
                    tripEveningPriceR[i].innerText = tripEveningPrice[i].innerText
                    //餐點
                    FoodMorningNameR[i].innerText = FoodMorningName[i].innerText
                    FoodMorningNameR[i].nextElementSibling.innerHTML = FoodMorningName[i].nextElementSibling.innerText + PepoleImg
                    FoodMorningPriceR[i].innerText = FoodMorningPrice[i].innerText

                    FoodNoonNameR[i].innerText = FoodNoonName[i].innerText
                    FoodNoonNameR[i].nextElementSibling.innerHTML = FoodNoonName[i].nextElementSibling.innerText + PepoleImg
                    FoodNoonPriceR[i].innerText = FoodNoonPrice[i].innerText

                    FoodEveningNameR[i].innerText = FoodEveningName[i].innerText
                    FoodEveningNameR[i].nextElementSibling.innerHTML = FoodEveningName[i].nextElementSibling.innerText + PepoleImg
                    FoodEveningPriceR[i].innerText = FoodEveningPrice[i].innerText

                    //傳送人數至第四頁用
                    // trippepoleNumsList.push(tripMorningName[i].nextElementSibling.innerText,tripNoonName[i].nextElementSibling.innerText,tripEveningName[i].nextElementSibling.innerText);
                    // foodpepoleNumsList.push(FoodMorningName[i].nextElementSibling.innerText, FoodNoonName[i].nextElementSibling.innerText,FoodEveningName[i].nextElementSibling.innerText);
                    // localStorage.setItem('trippepoleNumsList',JSON.stringify(trippepoleNumsList));
                    // localStorage.setItem('foodpepoleNumsList',JSON.stringify(foodpepoleNumsList));
                    //住宿
                    StayChooseNameR[i].innerText = StayChooseName[i].innerText
                    StayChoosePriceR[i].innerText = StayChoosePrice[i].innerText
                }
                this.minorTotalPriceR = this.minorTotalPrice
                this.DiscountR = this.Discount
                this.totalPriceR =this.totalPrice
                // this.discount_list.forEach(() => {
                // this.DiscountR =  '-$'+(Math.round((this.minorTotalPriceR.slice(1).replace(/,/g,'')) * ( 1 -( this.discount_list[discountNumsR.value][1] / 10)))).toLocaleString('en-US');
                // })
                // this.totalPriceR = '$'+(parseInt(this.minorTotalPriceR.slice(1).replace(/,/g,'')) - parseInt(this.DiscountR.slice(2).replace(/,/g,''))).toLocaleString('en-US');

            },
            //準備結帳頁的金額重算
            totalR(){
                this.discount_list.forEach(() => {
                    this.DiscountR =  '-$'+(Math.round((this.minorTotalPriceR.slice(1).replace(/,/g,'')) * ( 1 -( this.discount_list[discountNumsR.value][1] / 10)))).toLocaleString('en-US');
                    })
                this.totalPriceR = '$'+(parseInt(this.minorTotalPrice.slice(1).replace(/,/g,'')) - parseInt(this.DiscountR.slice(2).replace(/,/g,''))).toLocaleString('en-US');
            },
            //返回日期選單頁
            back(){
                window.location.href = './orderPage.html'
            },
            //返回行程選單頁
            backToChoosePage(){
                sectionBlock.style.display = 'block'
                readyToPay.style.display = 'none'
                $('html, body').animate({
                    scrollTop:'0'
                },1000)
            },
            
            //新增會員資料至DB & 送(尚未付款)訂單明細入DB
            SendOrder(){
                //選取內容帶去完整明細表

                let tripMorningNameR = document.getElementsByClassName('tripMorningNameR');

                let tripNoonNameR = document.getElementsByClassName('tripNoonNameR');

                let tripEveningNameR = document.getElementsByClassName('tripEveningNameR');

                let FoodMorningNameR = document.getElementsByClassName('FoodMorningNameR');

                let FoodNoonNameR = document.getElementsByClassName('FoodNoonNameR');

                let FoodEveningNameR = document.getElementsByClassName('FoodEveningNameR');

                let StayChooseNameR = document.getElementsByClassName('StayChooseNameR');
                
                let nt = (+new Date()) + payPhoneNumber.value;
                let url3 = './php/order_new_member.php'
                // let url2 = './php/pay.php'
                let url = './php/inserOrder.php';
                // fetch(`./php/pay.php?ordernums=${nt}&total=${this.totalPriceR.slice(1).replace(/,/g,'')}`)
                this.greenPrice = this.totalPriceR.slice(1).replace(/,/g,'');
                this.greenOrderNums = nt;
                html2canvas(document.querySelector("#readyToPay")).then(canvas => {
                    // console.log("object");
                    var AVATAR = canvas.toDataURL("image/png , 1");
                    console.log(AVATAR);
                    const url = './php/saveimg.php';    
                        fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                img: AVATAR,
                                ordernums:nt,
                            })
                        });

                    // Canvas2Image.saveAsPNG(canvas);

                    // document.body.appendChild(canvas)
                });
                fetch(url3,{
                    method:'POST', 
                    headers:{ 'Content-Type': 'application/json' },
                    body:JSON.stringify({
                        account:payEmail.value,
                        first_name:firstName.value,
                        last_name:lastName.value,
                        phone: payPhoneNumber.value,
                        createdate:new Date().toLocaleDateString(),
                        state:"未開通",
                    })
                    // .then(response => response.text())
                    // .then((body) => {console.log(body)})
                })
                localStorage.setItem('sendToFinishPage',JSON.stringify(nt));
                for(let i = 0; i < this.dateArray.length; i++){
                    let triplist = tripMorningNameR[i].innerText +',' + tripNoonNameR[i].innerText + ',' + tripEveningNameR[i].innerText
                    let foodlist = FoodMorningNameR[i].innerText + ',' + FoodNoonNameR[i].innerText + ',' + FoodEveningNameR[i].innerText ;

                    fetch(url,{
                        method:'POST', 
                        headers:{ 'Content-Type': 'application/json' },
                        body:JSON.stringify({
                            account:payEmail.value,
                            phone: payPhoneNumber.value,
                            paymode: payWayMobileUse.value,
                            total: this.totalPriceR.slice(1).replace(/,/g,''),
                            tripchoose: triplist,
                            foodchoose: foodlist,
                            staychoose: StayChooseNameR[i].innerText,
                            ordernums: nt,
                            tripdate: this.dateArray[i],
                        })
                        // .then(response => response.text())
                        // .then((body) => {console.log(body)})
                    })
                }
            },
            emailcheck(){
                if(is.email(payEmail.value)){
                    $('#FinishPage').addClass('emailcheck');
                }else{
                    console.log("aaa");
                }
            }
        },
        computed:{
            
        },
        created() {
            //取行程資料表
            const url = './php/tripChoose.php'
            fetch(url)
            .then(response => response.json())
            .then(activity => this.activity_list = activity)
            .then(()=>{
                this.activity_list.forEach(elementA => {
                    if(elementA[4] == 1){
                       elementA[1] = elementA[1] + '(日島)';
                    }else{
                        elementA[1] = elementA[1] + '(月島)';
                    }
                })
            })
    
            //取餐廳資料表
            const url1 = './php/foodChoose.php'
            fetch(url1)
            .then(response => response.json())
            .then(food => this.food_list = food);
            //取套餐資料表
            const url2 = './php/set.php'
            fetch(url2)
            .then(response => response.json())
            .then(set => this.set_list = set)
            .then(()=>{
                this.set_list.forEach(element => {
                    if(element[2] == 1){
                       element[4] = element[4] + '(日)';
                    }else{
                        element[4] = element[4] + '(月)';
                    }
                })
            })

            const url3 = './php/discount.php'
            fetch(url3)
            .then(response => response.json())
            .then(code => this.discount_list = code)
            
        },
        mounted() {


            $('#testimg').on('click',()=>{
                

            })
                // bus.$on('sync',nums => this.chooseData = nums)
                // bus.$on('sync1',nums => this.choosePrice = nums)
                //取得第一頁的人數
                this.pepoleNums = JSON.parse(localStorage.getItem('pepoleNums'));
                //取的選擇的日期
                let senDays = JSON.parse(localStorage.getItem('sendDays'))
                // console.log(senDays);
                this.startDay = (new Date(senDays[0]).getFullYear()+'/'+ ((new Date(senDays[0]).getMonth()+1).toString().padStart(2,'0'))+'/'+(new Date(senDays[0]).getDate().toString().padStart(2,'0')))
                this.endDay = (new Date(senDays[2]).getFullYear()+'/'+ ((new Date(senDays[2]).getMonth()+1).toString().padStart(2,'0'))+'/'+(new Date(senDays[2]).getDate().toString().padStart(2,'0')))
                howManyDays(senDays[0],senDays[1],this.dateArray,this.Chooseweek);
                
                function howManyDays (startDate,days,array,week){
                    for(let i = 0; i <= days; i++){
                        let x = startDate + (i*1000*3600*24)
                        let y = (new Date(startDate).getFullYear()+'/'+ ((new Date(x).getMonth()+1).toString().padStart(2,'0'))+'/'+(new Date(x).getDate().toString().padStart(2,'0')));
                        array.push(y);
                        // console.log(new Date(x));
                        week.push(new Date(x).toDateString().slice(0,3))
                    };

                };

                //上午行程選擇器
                let addItineraryM = document.getElementById('addItineraryM');
                let tripMorningName = document.getElementsByClassName('tripMorningName');
                let tripMorningPrice = document.getElementsByClassName('tripMorningPrice');
                let setChooseList = document.getElementsByClassName('setChooseList')
                addItineraryM.addEventListener('click',()=>{
                    if(this.newDay !== ''  ){
                        for(let i = 0; i < this.dateArray.length ;i++ ){
                            console.log(this.dayindex);
                            if(this.dayindex == i ){
                                tripMorningName[i].innerHTML = this.activity_list[this.tripMorningNameValue][1];
                                tripMorningPrice[i].innerHTML = (this.activity_list[this.tripMorningNameValue][3] * this.pepoleNums)
    
                                // let tirpMorningChooseList = [];
                                // tirpMorningChooseList.push(this.dateArray[i],this.activity_list[this.tripMorningNameValue][1],this.activity_list[this.tripMorningNameValue][3])
                                // localStorage.setItem('tirpMorningChooseList'+[i],JSON.stringify(tirpMorningChooseList))
    
                                // $('.addfadein').fadeTo(1,0.9).css('display','block')

                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(2000)
                                $('.addfadein').css({'z-index':'999'})
                                setTimeout(()=>{
                                    $('.addfadein').css({'z-index':'-999'})
                                },2000)
                            }
                        }
                        $('#addItineraryM').css({
                            opacity:'0',
                            cursor:'not-allowed',
                        })
                    }else{
                        alert('請先選擇日期')
                        $('#addItineraryM').css({
                            opacity:'0',
                            cursor:'not-allowed',
                        })
                        tripMchoose.value = '-1'
                        this.morningtriptext ='請點選上方選單列，開始安排您的旅程吧!'
                        this.morningtripPrice='0'
                        this.morningtripImg='./img/orderPage/welcome.jpg'
                        
                    }  

                })
                //下午行程選擇器
                let addItineraryN = document.getElementById('addItineraryN');
                let tripNoonName = document.getElementsByClassName('tripNoonName');
                let tripNoonPrice = document.getElementsByClassName('tripNoonPrice');
                
                addItineraryN.addEventListener('click',()=>{
                    if(this.newDay !== ''){

                        for(let i = 0; i <= this.dateArray.length ;i++ ){
                            if(this.dayindex == i ){
                                tripNoonName[i].innerHTML = this.activity_list[this.tripNoonNameValue][1];
                                tripNoonPrice[i].innerHTML = (this.activity_list[this.tripNoonNameValue][3] * this.pepoleNums)
    
                                // let tripNoonChooseList = [];
                                // tripNoonChooseList.push(this.dateArray[i],this.activity_list[this.tripNoonNameValue][1],this.activity_list[this.tripNoonNameValue][3])
                                // localStorage.setItem('tripNoonChooseList'+[i],JSON.stringify(tripNoonChooseList))
                                
                                
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(2000)
                                $('.addfadein').css({'z-index':'999'})
                                setTimeout(()=>{
                                    $('.addfadein').css({'z-index':'-999'})
                                },2000)
                            }
                        }
                        $('#addItineraryN').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                    }else{
                        alert('請先選擇日期')
                        $('#addItineraryN').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                        tripNchoose.value = -1
                        this.noontriptext='請點選上方選單列，開始安排您的旅程吧!'
                        this.noontripPrice='0'
                        this.noontripImg='./img/orderPage/welcome.jpg'
                        
                    }  
                    
                })
                //晚間行程選擇器
                let addItineraryE = document.getElementById('addItineraryE');
                let tripEveningName = document.getElementsByClassName('tripEveningName');
                let tripEveningPrice = document.getElementsByClassName('tripEveningPrice');
                
                addItineraryE.addEventListener('click',()=>{
                    if(this.newDay !== ''){
                        for(let i = 0; i <= this.dateArray.length ;i++ ){
                            if(this.dayindex == i ){
                                tripEveningName[i].innerHTML = this.activity_list[this.tripEveningNameValue][1];
                                tripEveningPrice[i].innerHTML = (this.activity_list[this.tripEveningNameValue][3] * this.pepoleNums)
    
                                // let tripEveningChooseList = [];
                                // tripEveningChooseList.push(this.dateArray[i],this.activity_list[this.tripEveningNameValue][1],this.activity_list[this.tripEveningNameValue][3])
                                // localStorage.setItem('tripEveningChooseList'+[i],JSON.stringify(tripEveningChooseList))
                                
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(2000)
                                $('.addfadein').css({'z-index':'999'})
                                setTimeout(()=>{
                                    $('.addfadein').css({'z-index':'-999'})
                                },2000)
                            } 
                        }
                        $('#addItineraryE').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                    }else{
                        alert('請先選擇日期')
                        $('#addItineraryE').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                        tripEchoose.value = -1
                        this.eveningtriptext='請點選上方選單列，開始安排您的旅程吧!'
                        this.eveningtripPrice='0'
                        this.eveningtripImg='./img/orderPage/welcome.jpg'
                    } 

                })

                //早餐選擇器
                let addFoodM = document.getElementById('addFoodM');
                let FoodMorningName = document.getElementsByClassName('FoodMorningName');
                let FoodMorningPrice = document.getElementsByClassName('FoodMorningPrice');
                
                addFoodM.addEventListener('click',()=>{
                    if(this.newDay !== ''){
                        for(let i = 0; i <= this.dateArray.length ;i++ ){
                            if(this.dayindex == i && this.newDay != ''){
                                FoodMorningName[i].innerHTML = this.food_list[this.FoodMorningNameValue][0];
                                FoodMorningPrice[i].innerHTML = (this.food_list[this.FoodMorningNameValue][1] * this.pepoleNums)
    
                                // let FoodMorningChooseList = [];
                                // FoodMorningChooseList.push(this.dateArray[i],this.food_list[this.FoodMorningNameValue][0],this.food_list[this.FoodMorningNameValue][1])
                                // localStorage.setItem('FoodMorningChooseList'+[i],JSON.stringify(FoodMorningChooseList))
    
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(2000)
                                $('.addfadein').css({'z-index':'999'})
                                setTimeout(()=>{
                                    $('.addfadein').css({'z-index':'-999'})
                                },2000)
                                
                            } 
                        }
                        $('#addFoodM').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                    }else{
                        alert('請先選擇日期')
                        $('#addFoodM').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                        FoodMchoose.value = -1
                        this.morningFoodtext='請點選上方選單列，開始安排您的早餐!'
                        this.morningFoodPrice='0'
                        this.morningFoodImg='./img/orderPage/welcome.jpg'
                        
                    } 

                })
                //午餐選擇器
                let addFoodN = document.getElementById('addFoodN');
                let FoodNoonName = document.getElementsByClassName('FoodNoonName');
                let FoodNoonPrice = document.getElementsByClassName('FoodNoonPrice');

                addFoodN.addEventListener('click',()=>{
                    if(this.newDay !== ''){
                        for(let i = 0; i <= this.dateArray.length ;i++ ){
                            if(this.dayindex == i ){
                                FoodNoonName[i].innerHTML = this.food_list[this.FoodNoonNameValue][0];
                                FoodNoonPrice[i].innerHTML = (this.food_list[this.FoodNoonNameValue][1] * this.pepoleNums)
    
                                // let FoodNoonChooseList = [];
                                // FoodNoonChooseList.push(this.dateArray[i],this.food_list[this.FoodNoonNameValue][0],this.food_list[this.FoodNoonNameValue][1])
                                // localStorage.setItem('FoodNoonChooseList'+[i],JSON.stringify(FoodNoonChooseList))
    
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(2000)
                                $('.addfadein').css({'z-index':'999'})
                                setTimeout(()=>{
                                    $('.addfadein').css({'z-index':'-999'})
                                },2000)
                                
                            } 
                        }
                        $('#addFoodN').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                    }else{
                        alert('請先選擇日期')
                        $('#addFoodN').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                        FoodNchoose.value = -1 
                        this.noonFoodtext='請點選上方選單列，開始安排您的午餐!'
                        this.noonFoodPrice='0'
                        this.noonFoodImg='./img/orderPage/welcome.jpg'
                        
                    } 

                })
                //晚餐選擇器
                let addFoodE = document.getElementById('addFoodE');
                let FoodEveningName = document.getElementsByClassName('FoodEveningName');
                let FoodEveningPrice = document.getElementsByClassName('FoodEveningPrice');

                addFoodE.addEventListener('click',()=>{
                    if(this.newDay !== ''){
                        for(let i = 0; i <= this.dateArray.length ;i++ ){
                            if(this.dayindex == i && this.newDay != ''){
                                FoodEveningName[i].innerHTML = this.food_list[this.FoodEveningNameValue][0];
                                FoodEveningPrice[i].innerHTML = (this.food_list[this.FoodEveningNameValue][1] * this.pepoleNums)
    
                                // let FoodEveningChooseList = [];
                                // FoodEveningChooseList.push(this.dateArray[i],this.food_list[this.FoodEveningNameValue][0],this.food_list[this.FoodEveningNameValue][1])
                                // localStorage.setItem('FoodNoonChooseList'+[i],JSON.stringify(FoodEveningChooseList))
    
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(2000)
                                $('.addfadein').css({'z-index':'999'})
                                setTimeout(()=>{
                                    $('.addfadein').css({'z-index':'-999'})
                                },2000)
    
                                $('#addFoodE').css({
                                    opacity:'0.1',
                                    cursor:'not-allowed',
                                })
                                
                            }
                        }
                        $('#addFoodE').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                    }else{
                            alert('請先選擇日期')
                            $('#addFoodE').css({
                                opacity:'0.1',
                                cursor:'not-allowed',
                            })
                            FoodEchoose.value = -1
                            this.eveningFoodtext='請點選上方選單列，開始安排您的晚餐!'
                            this.eveningFoodPrice='0'
                            this.eveningFoodImg='./img/orderPage/welcome.jpg'
                        }


                })
                //住宿選擇
                  //小木屋
                let addcabin = document.getElementById('addcabin');
                let StayChooseName = document.getElementsByClassName('StayChooseName');
                let StayChoosePrice = document.getElementsByClassName('StayChoosePrice');
                let cabinOption = document.getElementById('cabinOption');
                addcabin.addEventListener('click',(e)=>{
                    if(this.newDay !== ''){
                        if($('#cabinButton').hasClass('check')){
                            for(let i = 0; i <= this.dateArray.length ;i++ ){
                                if(this.dayindex == i ){
                                    let thisStayName = $(e.target).parent().find('h4').text()
                                    let thisPrice = $(e.target).prev().find('span').text().substring(1,5);
                                    
                                    if(cabinOption.value == 1){
                                       thisStayName = thisStayName + '(日)';
                                    }else{
                                        thisStayName = thisStayName + '(月)';
                                    }
                                    StayChooseName[i].innerHTML = thisStayName;
                                    StayChoosePrice[i].innerHTML = (this.pepoleNums * parseInt(thisPrice));
        
                                    // let stayChooseList = [];
                                    // stayChooseList.push(this.dateArray[i],thisStayName,thisPrice)
                                    // localStorage.setItem('stayChooseList'+[i],JSON.stringify(stayChooseList))
        
                                    $('.addfadein').fadeTo(1,0.9)
                                    $('.addfadein').fadeOut(2000)
                                    $('.addfadein').css({'z-index':'999'})
                                    setTimeout(()=>{
                                        $('.addfadein').css({'z-index':'-999'})
                                    },2000)
                                    
                                }
                            }
                        }
                        $('#cabinButton').removeClass('check');
                        $('#addcabin').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                    }else{
                        alert('請先選擇日期')
                        $('#cabinButton').removeClass('check');
                        cabinButton.checked = false
                        $('#addcabin').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })                        
                    }  

                })
                //露營選擇
                let addCamping = document.getElementById('addCamping');
                addCamping.addEventListener('click',(e)=>{
                    // console.log(e.target);
                    if(this.newDay !== ''){
                        for(let i = 0; i <= this.dateArray.length ;i++ ){
                            if(this.dayindex == i && $('#campingButton').hasClass('check') && this.newDay != ''){
                                let thisStayName = $(e.target).parent().find('h4').text()
                                let thisPrice = $(e.target).prev().find('span').text().substring(1,5);
                                if(campingChoose.value == 1){
                                    thisStayName = thisStayName + '(日)';
                                 }else{
                                     thisStayName = thisStayName + '(月)';
                                 }
                                StayChooseName[i].innerHTML = thisStayName;
                                StayChoosePrice[i].innerHTML = (this.pepoleNums * parseInt(thisPrice));
    
                                // let stayChooseList = [];
                                // stayChooseList.push(this.dateArray[i],thisStayName,thisPrice)
                                // localStorage.setItem('stayChooseList'+[i],JSON.stringify(stayChooseList))
    
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(2000)
                                $('.addfadein').css({'z-index':'999'})
                                setTimeout(()=>{
                                    $('.addfadein').css({'z-index':'-999'})
                                },2000)
                                
                            }  
                        }
                        $('#campingButton').removeClass('check');
                        $('#addCamping').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                    }else{
                        campingButton.checked =false
                        $('#campingButton').removeClass('check');
                        $('#addCamping').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                        alert('請先選擇日期')
                        
                    }  

                })
                //Villa選擇
                let addVilla = document.getElementById('addVilla');
                addVilla.addEventListener('click',(e)=>{
                    // console.log(e.target);
                    if(this.newDay !== ''){
                        for(let i = 0; i <= this.dateArray.length ;i++ ){
                            if(this.dayindex == i && $('#villaButton').hasClass('check') && this.newDay != ''){
                                let thisStayName = $(e.target).parent().find('h4').text()
                                let thisPrice = $(e.target).prev().find('span').text().substring(1,5);
                                if(villaChoose.value == 1){
                                    thisStayName = thisStayName + '(日)';
                                 }else{
                                     thisStayName = thisStayName + '(月)';
                                 }
                                StayChooseName[i].innerHTML = thisStayName;
                                StayChoosePrice[i].innerHTML = (this.pepoleNums * parseInt(thisPrice));
    
                                // let stayChooseList = [];
                                // stayChooseList.push(this.dateArray[i],thisStayName,thisPrice)
                                // localStorage.setItem('stayChooseList'+[i],JSON.stringify(stayChooseList))
    
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(2000)
                                $('.addfadein').css({'z-index':'999'})
                                setTimeout(()=>{
                                    $('.addfadein').css({'z-index':'-999'})
                                },2000)
                                
                            }   
                        }
                        $('#villaButton').removeClass('check');
                        $('#addVilla').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                    }else{
                        alert('請先選擇日期')
                        villaButton.checked = false
                        $('#villaButton').removeClass('check');
                        $('#addVilla').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                        
                    } 

                })  

                //住宿判斷
                $('#villaButton').click(()=>{
                    // console.log($('#villaButton').addClass('check'));
                    $('#villaButton').addClass('check')
                    if( $('#villaButton').hasClass('check')){
                        $('#addVilla').css({
                            opacity:'1',
                            cursor: 'pointer',
                        })
                        $('#addcabin').css({
                            opacity:'0.1',
                            cursor: 'not-allowed',
                        })
                        $('#addCamping').css({
                            opacity:'0.1',
                            cursor: 'not-allowed',
                        })
                    }
                });
                $('#cabinButton').click(()=>{
                    // console.log($('#villaButton').addClass('check'));
                    $('#cabinButton').addClass('check')
                    if( $('#cabinButton').hasClass('check') ){
                        $('#addcabin').css({
                            opacity:'1',
                            cursor: 'pointer',
                        })
                        $('#addVilla').css({
                            opacity:'0.1',
                            cursor: 'not-allowed',
                        })
                        $('#addCamping').css({
                            opacity:'0.1',
                            cursor: 'not-allowed',
                        })
                        
                    }
                });
                $('#campingButton').click(()=>{
                    // console.log($('#villaButton').addClass('check'));
                    $('#campingButton').addClass('check')
                    if( $('#campingButton').hasClass('check')){
                        $('#addCamping').css({
                            opacity:'1',
                            cursor: 'pointer',
                        })
                        $('#addcabin').css({
                            opacity:'0.1',
                            cursor: 'not-allowed',
                        })
                        $('#addVilla').css({
                            opacity:'0.1',
                            cursor: 'not-allowed',
                        })
                    }
                })
                
                
                //RWD
                // $(window).ready(function(){
                //     $(window).resize(function(){
                //         if(window.innerWidth < 576){
                //             console.log(window.innerWidth);
                //             window.location.href='tripChooseMobile.html';
                //         }else{
                //             window.location.href='tripChoose.html';
                //         }
                //     })
                // })
                

            
                //日曆
                // $('#dateBooking').daterangepicker({
                //     "showISOWeekNumbers": true,
                //     "showDropdowns": true,
                //     "alwaysShowCalendars": true,
                //     "opens": "center",
                //     "drops": "down",
                //     "minDate":new Date(),
                // });
                // $('#dateBooking').on('apply.daterangepicker', function(ev, picker) {
                // console.log(picker.startDate.format('YYYY-MM-DD'));
                // console.log(picker.endDate.format('YYYY-MM-DD'));
                // });
            
                //訂購明細彈窗
                $('.ListSmall').addClass('on');
                $('.ListSmall').click(function(){
            
                    if($('.ListSmall').hasClass('on')){
                        $('.BigList').css({
                            width:"280px",
                            display:"block",
                        })
                        $('.bodyCover').css('display','block')
                        
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
                    let StayChooseName = document.getElementsByClassName('StayChooseName');
                    let daysbutton = document.getElementsByClassName('daysbutton')
                    for(i = 0 ; i < this.dateArray.length; i++){
                        if(StayChooseName[i].innerText == ''){
                            daysbutton[i].classList.add('notCheck')
                            daysbutton[i].querySelector('input').value = '請選擇住宿'
                            daysbutton[i].querySelector('input').style.outline = '3rem solid #FF4444'

                            setTimeout(()=>{
                                $('.daysbutton').removeClass('notCheck')
                            },500)
                        }
                        // if(StayChooseName.innerText != ''){
                        //     window.location.href = './readyToPay.html'
                        // }
                    }
                    
                })
            
        },
        updated(){
            this.newPrice =  parseInt(this.choosePrice * this.pepoleNums);
            this.pepoleNums = parseInt(this.pepoleNums)

            let tripMchoose = document.getElementById('tripMchoose');
            let tripNchoose = document.getElementById('tripNchoose');
            let tripEchoose = document.getElementById('tripEchoose');

            let FoodMchoose = document.getElementById('FoodMchoose');
            let FoodNchoose = document.getElementById('FoodNchoose');
            let FoodEchoose = document.getElementById('FoodEchoose');

            this.tripMorningNameValue = tripMchoose.value;
            this.tripNoonNameValue = tripNchoose.value;
            this.tripEveningNameValue = tripEchoose.value;

            this.FoodMorningNameValue = FoodMchoose.value;
            this.FoodNoonNameValue = FoodNchoose.value;
            this.FoodEveningNameValue = FoodEchoose.value;


            // console.log(typeof(payPhoneNumber.value));
            // let nt = (+new Date())
            // //選取內容帶去完整明細表
            // let tripMorningName = document.getElementsByClassName('tripMorningName');
            // let tripMorningPrice = document.getElementsByClassName('tripMorningPrice');
            // let tripMorningNameR = document.getElementsByClassName('tripMorningNameR');
            // let tripMorningPriceR = document.getElementsByClassName('tripMorningPriceR');

            // let tripNoonName = document.getElementsByClassName('tripNoonName');
            // let tripNoonPrice = document.getElementsByClassName('tripNoonPrice');
            // let tripNoonNameR = document.getElementsByClassName('tripNoonNameR');
            // let tripNoonPriceR = document.getElementsByClassName('tripNoonPriceR');

            // let tripEveningName = document.getElementsByClassName('tripEveningName');
            // let tripEveningPrice = document.getElementsByClassName('tripEveningPrice');
            // let tripEveningNameR = document.getElementsByClassName('tripEveningNameR');
            // let tripEveningPriceR = document.getElementsByClassName('tripEveningPriceR'); 

            // let FoodMorningName = document.getElementsByClassName('FoodMorningName');
            // let FoodMorningPrice = document.getElementsByClassName('FoodMorningPrice');
            // let FoodMorningNameR = document.getElementsByClassName('FoodMorningNameR');
            // let FoodMorningPriceR = document.getElementsByClassName('FoodMorningPriceR');

            // let FoodNoonName = document.getElementsByClassName('FoodNoonName');
            // let FoodNoonPrice = document.getElementsByClassName('FoodNoonPrice');
            // let FoodNoonNameR = document.getElementsByClassName('FoodNoonNameR');
            // let FoodNoonPriceR = document.getElementsByClassName('FoodNoonPriceR');

            // let FoodEveningName = document.getElementsByClassName('FoodEveningName');
            // let FoodEveningPrice = document.getElementsByClassName('FoodEveningPrice');
            // let FoodEveningNameR = document.getElementsByClassName('FoodEveningNameR');
            // let FoodEveningPriceR = document.getElementsByClassName('FoodEveningPriceR');

            // let StayChooseName = document.getElementsByClassName('StayChooseName');
            // let StayChoosePrice = document.getElementsByClassName('StayChoosePrice');
            // let StayChooseNameR = document.getElementsByClassName('StayChooseNameR');
            // let StayChoosePriceR = document.getElementsByClassName('StayChoosePriceR');

            // let PepoleImg = '<i class="fa-solid fa-user"></i>'
            // for(i = 0 ; i < this.dateArray.length; i++){
            //     //行程
            //     tripMorningNameR[i].innerText = tripMorningName[i].innerText
            //     tripMorningNameR[i].nextElementSibling.innerHTML = tripMorningName[i].nextElementSibling.innerText + PepoleImg
            //     tripMorningPriceR[i].innerText = tripMorningPrice[i].innerText

            //     tripNoonNameR[i].innerText = tripNoonName[i].innerText
            //     tripNoonNameR[i].nextElementSibling.innerHTML = tripNoonName[i].nextElementSibling.innerText + PepoleImg
            //     tripNoonPriceR[i].innerText = tripNoonPrice[i].innerText

            //     tripEveningNameR[i].innerText = tripEveningName[i].innerText
            //     tripEveningNameR[i].nextElementSibling.innerHTML = tripEveningName[i].nextElementSibling.innerText + PepoleImg
            //     tripEveningPriceR[i].innerText = tripEveningPrice[i].innerText
            //     //餐點
            //     FoodMorningNameR[i].innerText = FoodMorningName[i].innerText
            //     FoodMorningNameR[i].nextElementSibling.innerHTML = FoodMorningName[i].nextElementSibling.innerText + PepoleImg
            //     FoodMorningPriceR[i].innerText = FoodMorningPrice[i].innerText

            //     FoodNoonNameR[i].innerText = FoodNoonName[i].innerText
            //     FoodNoonNameR[i].nextElementSibling.innerHTML = FoodNoonName[i].nextElementSibling.innerText + PepoleImg
            //     FoodNoonPriceR[i].innerText = FoodNoonPrice[i].innerText

            //     FoodEveningNameR[i].innerText = FoodEveningName[i].innerText
            //     FoodEveningNameR[i].nextElementSibling.innerHTML = FoodEveningName[i].nextElementSibling.innerText + PepoleImg
            //     FoodEveningPriceR[i].innerText = FoodEveningPrice[i].innerText
            //     //住宿
            //     StayChooseNameR[i].innerText = StayChooseName[i].innerText
            //     StayChoosePriceR[i].innerText = StayChoosePrice[i].innerText
            // }
            // this.discount_list.forEach(() => {
            //     // console.log((1 -( this.discount_list[discountNums.value][1]  / 10 )));
            //     this.DiscountR =  '-$'+(Math.round((this.minorTotalPrice.slice(1).replace(/,/g,'')) * ( 1 -( this.discount_list[discountNumsR.value][1] / 10)))).toLocaleString('en-US');
            // });
            // this.totalPriceR = '$'+(parseInt(this.minorTotalPrice.slice(1).replace(/,/g,'')) - parseInt(this.DiscountR.slice(2).replace(/,/g,''))).toLocaleString('en-US');
            // this.discount_list.forEach(() => {
            //     // console.log((1 -( this.discount_list[discountNums.value][1]  / 10 )));
            //     this.Discount =  '-$'+(Math.round((this.minorTotalPrice.slice(1).replace(/,/g,'')) * ( 1 -( this.discount_list[discountNums.value][1] / 10)))).toLocaleString('en-US');
            // });
            
            // this.totalPrice = '$'+(parseInt(this.minorTotalPrice.slice(1).replace(/,/g,'')) - parseInt(this.Discount.slice(2).replace(/,/g,''))).toLocaleString('en-US');
        
            if(cabinOption.value == 1){
                cabinImg.src = "./img/orderPage/cabin.jpg"
            }else{
                cabinImg.src = "./img/orderPage/cabinnight.jpg"
            }

            if(campingChoose.value == 1){
                campingImg.src = "./img/orderPage/camping.jpg"
            }else{
                campingImg.src = "./img/orderPage/campingnight.jpg"
            }

            if(villaChoose.value == 1){
                villaImg.src = "./img/orderPage/villa.jpg"
            }else{
                villaImg.src = "./img/orderPage/villanight.jpg"
            }
            // $(window).scroll(()=>{
            //     $('.daysbutton').each((index)=>{
            //         if($('.daysbutton'+index).hasClass('send')){
            //             $('.daysbutton'+index).removeClass('send')
            //             $('.daysbutton'+index).find('input').css('display','none')
            //         }
            //     })
            // })

            // function apnums(eg){
            //     // console.log(eg.parentElement.nextElementSibling.innerText);
            //     // console.log($('#ccc').innerHTML);
            //     if(eg.previousElementSibling.innerText < JSON.parse(localStorage.getItem('pepoleNums'))){
            //         eg.previousElementSibling.innerText ++
            //         // for(let i = 0 ; i <= tripMorningPrice.length; i++){
            //         //     if(eg.parentElement.nextElementSibling[i] = i){
            //         //         console.log(eg.parentElement.nextElementSibling[i]);
            //         //     }
            //         let newNums= eg.previousElementSibling.innerText
            //         let oldPrice = (eg.parentElement.nextElementSibling.innerHTML / newNums)
            //         let newPrice = (oldPrice * newNums)
            
            //         eg.parentElement.nextElementSibling.innerHTML = newPrice
            //         console.log(newNums, oldPrice, newPrice);
            //         }
            
                
            // }
            // function dpnums(eg){
            //     // console.log(typeof(eg.nextElementSibling.innerHTML));
            //     if(eg.nextElementSibling.innerText > 1){
            //         eg.nextElementSibling.innerHTML --
            //         let newNums= eg.nextElementSibling.innerText 
            //         let oldPrice = (eg.parentElement.nextElementSibling.innerHTML / newNums)
            //         let newPrice = (oldPrice * newNums)
            
            //         eg.parentElement.nextElementSibling.innerHTML = newPrice
            //         console.log(newPrice);
            //     }
            // }
        },
        
    });



})

