
window.addEventListener('load',function(){
    // const bus = new Vue();

    // Vue.component('triplist1',{
    //     props:['activity_list','date'],
    //     data() {
            
    //         return {
    //             chooseData:'',
    //             choosePrice:'',
    //             pepoleNums:0,
    //             newPrice: 0,

    //         }
    //     },
    //     template:
    //     `
    //     <div class="tripList">
    //         <h6 class="tripTitle">{{date}}</h6>
    //         <ul v-if="activity_list[chooseData]">
    //             <li>{{activity_list[chooseData][1]}}</li>
    //             <li><img class="leftButton" @click="dpnums" src="./img/orderPage/sun/left_button.png" >{{pepoleNums}}<img class="rightButton" @click="apnums" src="./img/orderPage/sun/right_button.png"></li>
    //             <li va\-model='newPrice'>\${{newPrice}}</li>
    //             <li><img class="deleteButton" src="./img/orderPage/sun/delete_button.png"></li>
    //         </ul>
    //     </div>
    //     `,
    //     methods:{
    //         dpnums(){
    //             if(this.pepoleNums > 1){
    //                 this.pepoleNums -=1
    //             }
                
    //         },
    //         apnums(){
    //             if(this.pepoleNums < JSON.parse(localStorage.getItem('pepoleNums'))){
    //                 this.pepoleNums +=1
    //             }
    //         }
    //     },
    //     computed:{
    //     },
    //     mounted() {
    //             this.pepoleNums = JSON.parse(localStorage.getItem('pepoleNums'));
    //             bus.$on('sync',nums => this.chooseData = nums)
    //             bus.$on('sync1',nums => this.choosePrice = nums)
    //             console.log(this.chooseData);
            
    //     },
    //     updated() {
    //         this.newPrice =  parseInt(this.choosePrice * this.pepoleNums);
    //         this.pepoleNums = parseInt(this.pepoleNums)
    //         console.log(typeof(this.pepoleNums));
    //     },

    // })

    // Vue.component('ChooseBlock0',{
    //     props:["activity_list","food_list","day","dayindex"],
    //     data() {
    //         return {
    //         //上午行程
    //         morningtriptext:'請點選上方選單列，開始安排您的旅程吧!',
    //         morningtripPrice:'0',
    //         morningtripImg:'./img/orderPage/welcome.jpg',
    //         //下午行程
    //         noontriptext:'請點選上方選單列，開始安排您的旅程吧!',
    //         noontripPrice:'0',
    //         noontripImg:'./img/orderPage/welcome.jpg',
    //         //晚上行程
    //         eveningtriptext:'請點選上方選單列，開始安排您的旅程吧!',
    //         eveningtripPrice:'0',
    //         eveningtripImg:'./img/orderPage/welcome.jpg',
    
    //         //早餐
    //         morningFoodtext:'請點選上方選單列，開始安排您的早餐!',
    //         morningFoodPrice:'0',
    //         morningFoodImg:'./img/orderPage/welcome.jpg',
    //         //午餐
    //         noonFoodtext:'請點選上方選單列，開始安排您的午餐!',
    //         noonFoodPrice:'0',
    //         noonFoodImg:'./img/orderPage/welcome.jpg',
    //         //晚餐
    //         eveningFoodtext:'請點選上方選單列，開始安排您的晚餐!',
    //         eveningFoodPrice:'0',
    //         eveningFoodImg:'./img/orderPage/welcome.jpg',
            
    //         //campingimg
    //         campingimg:'./img/orderPage/camping.jpg',
            

    //         choosevalue:'',

    //         dateBox:[],

    //         countent:'',
            
    //         pepoleNums:0,
    //         tripPriceM: 0,
            

    //         }
    //     },
    //     methods: {
    //         //購物車
    //         dpnums(){
    //             if(this.pepoleNums > 1){
    //                 this.pepoleNums -=1
    //             }
                
    //         },
    //         apnums(){
    //             if(this.pepoleNums < JSON.parse(localStorage.getItem('pepoleNums'))){
    //                 this.pepoleNums +=1
    //             }
    //         },


    //         //上午行程
    //         morningChange(value){
    //             this.morningtriptext=this.activity_list[value][2]
    //             this.morningtripPrice=this.activity_list[value][3]
    //             this.morningtripImg=this.activity_list[value][5]
    //             this.choosevalue = value
    //         },
    //         //下午行程
    //         noonChange(value){
    //             this.noontriptext=this.activity_list[value][2]
    //             this.noontripPrice=this.activity_list[value][3]
    //             this.noontripImg=this.activity_list[value][5]
    //             this.choosevalue = value
    //         },
    //         //晚上行程
    //         eveningChange(value){
    //             this.eveningtriptext=this.activity_list[value][2]
    //             this.eveningtripPrice=this.activity_list[value][3]
    //             this.eveningtripImg=this.activity_list[value][5]
    //             this.choosevalue = value
    //         },
    //         //早餐
    //         morningFoodChange(value){
    //             this.morningFoodtext=this.food_list[value][2]
    //             this.morningFoodPrice=this.food_list[value][1]
    //             this.morningFoodImg=this.food_list[value][3]
    //             this.choosevalue = value
    //         },
    //         //午餐
    //         noonFoodChange(value){
    //             this.noonFoodtext=this.food_list[value][2]
    //             this.noonFoodPrice=this.food_list[value][1]
    //             this.noonFoodImg=this.food_list[value][3]
    //             this.choosevalue = value
    //         },
    //         //晚餐
    //         eveningFoodChange(value){
    //             this.eveningFoodtext=this.food_list[value][2]
    //             this.eveningFoodPrice=this.food_list[value][1]
    //             this.eveningFoodImg=this.food_list[value][3]
    //             this.choosevalue = value
    //         },
    //         //住宿換圖
    //         stayimgChange(value){
    //             if(value == 2){
    //                 this.campingimg = './img/orderPage/campingnight.jpg'
    //             }else{
    //                 this.campingimg = './img/orderPage/camping.jpg'
    //             }
    //         },
    //         sync(){
                
    //             bus.$emit('sync',this.choosevalue)
    //             bus.$emit('sync1',this.morningtripPrice)
                
                
    //         },
    //     },   
            
        
    //     mounted(){
    //         // bus.$emit('day', this.dateBox,this.pepoleNums)
    //         let tripTitle = document.getElementsByClassName("tripTitle");
    //         // console.log(tripTitle);
    //         let x = [];
    //         for(let i = 0; i < tripTitle.length; i++){
    //             x.push(tripTitle[i].innerHTML)
    //         }
    //         // console.log(x);
            
    //         this.dateBox = x;

    //         //取得人數
    //         this.pepoleNums = JSON.parse(localStorage.getItem('pepoleNums'));
    //         this.pepoleNums = parseInt(this.pepoleNums)

            

    //         //JS的方式寫入購物清單
    //         let addItineraryM = document.getElementById('addItineraryM');
    //         addItineraryM.addEventListener('click',()=>{
    //             this.tripPriceM =  parseInt(this.morningtripPrice * this.pepoleNums);
    //             for(let i = 0; i <= x.length ;i++ ){
    //                 if(this.dayindex == i){
    //                     tripTitle[i].insertAdjacentHTML('afterend',
    //                     `<ul>
    //                         <li>${this.activity_list[this.choosevalue][1]}</li>
    //                         <li><img class="leftButton" onclick="dpnums()" src="./img/orderPage/sun/left_button.png" >${this.pepoleNums}<img class="rightButton" onclick="apnums()" src="./img/orderPage/sun/right_button.png"></li>
    //                         <li>${this.tripPriceM}</li>
    //                         <li><img @click="deleteChoose()" class="deleteButton" src="./img/orderPage/sun/delete_button.png"></li>
    //                     </ul>`
    //                     )
    //                 }  
    //             }
    //         })



    //     },
    //     updated() {
    //         // bus.$emit('sync',this.choosevalue)
    //         // bus.$emit('sync1',this.morningtripPrice)
            

    //         // console.log(morningChoose.target);
    //     },
    //     template:
    //     `<div>
    //             <div class="tripChooseBlock">  
    //                 <div class="itineraryTitle">
    //                     <h4>遊</h4>
    //                     <h4 class="chooseDate">{{day}}</h4>
    //                 </div>
    //                 <!-- 上午行程 -->
    //                 <div class="morningItineraryA" >
    //                     <img class="morningTime" src="./img/orderPage/sun/morning.png" alt="">
    //                     <div class="morningBlockA">
    //                         <img id="morningImg" :src="morningtripImg" alt="">
    //                         <div class="morningBlockB">
    //                             <div class="optionBlockA">
    //                                 <select id="morningChoose" @change="morningChange($event.target.value)">
    //                                     <option value="">開始選購您的行程</option>
    //                                     <option v-for="(list,index) in activity_list" :value="index">{{list[1]}}</option>
    //                                 </select>
    //                                 <span id="tripPriceA">\${{morningtripPrice}}/人</span>
    //                             </div>
    //                             <p id="itineraryText">{{morningtriptext}}</p>
    //                         </div>
    //                     </div>
    //                     <img id="addItineraryM" @click="sync();countent='triplist'" src="./img/orderPage/sun/shopping-cart-add.png" alt="">
    //                 </div>
    //                 <!-- 下午行程 -->
    //                 <div class="noonItinerary">
    //                     <img src="./img/orderPage/sun/afternoon.png" alt="">
    //                     <div class="noonBlockA">
    //                         <img id="noonImg" :src="noontripImg" alt="">
    //                         <div class="noonBlockB">
    //                             <div class="optionBlockB">
    //                                 <select name="" @change="noonChange($event.target.value)">
    //                                     <option value="">開始選購您的行程</option>
    //                                     <option  v-for="(list,index) in activity_list" :value="index">{{list[1]}}</option>
    //                                 </select>
    //                                 <span id="tripPriceB">\${{noontripPrice}}/人</span>
    //                             </div>
    //                             <p id="itineraryTextB">{{noontriptext}}</p>
    //                         </div>
    //                     </div>
    //                     <img id="addItineraryN" src="./img/orderPage/sun/shopping-cart-add.png" alt="">
    //                 </div>
    //                 <!-- 晚上行程 -->
    //                 <div class="eveningItinerary">
    //                     <img src="./img/orderPage/sun/night.png" alt="">
    //                     <div class="eveningBlockA">
    //                         <img id="eveningImg" :src="eveningtripImg" alt="">
    //                         <div class="eveningBlockB">
    //                             <div class="optionBlockC">
    //                                 <select name="" @change="eveningChange($event.target.value)">
    //                                     <option value="">開始選購您的行程</option>
    //                                     <option v-for="(list,index) in activity_list" :value="index">{{list[1]}}</option>
    //                                 </select>
    //                                 <span id="tripPriceC">{{eveningtripPrice}}/人</span>
    //                             </div>
    //                             <p id="itineraryTextC">{{eveningtriptext}}</p>
    //                         </div>
    //                     </div>
    //                     <img id="addItineraryE" src="./img/orderPage/sun/shopping-cart-add.png" alt="">
    //                 </div>
                    
    //             </div>
    //             <!-- 餐廳選擇區 -->
    //             <div class="foodChooseBlock">
    //                 <div class="foodTitle">
    //                     <h4>食</h4>
    //                     <h4 class="chooseDate">{{day}}</h4>
    //                 </div>
    //                 <!-- 早餐 -->
    //                 <div class="morningFood">
    //                     <img src="./img/orderPage/sun/morningFood.png" alt="">
    //                     <div class="morningFoodA">
    //                         <img id="morningFoodImg" :src="morningFoodImg" alt="">
    //                         <div class="morningFoodB">
    //                             <div class="foodOptionBlockA">
    //                                 <select name="" @change="morningFoodChange($event.target.value)">
    //                                     <option value="">請選擇您的早餐</option>
    //                                     <option v-for="(list,index) in food_list" :value="index">{{list[0]}}</option>
    //                                 </select>
    //                                 <span id="foodPriceA">{{morningFoodPrice}}/人</span>
    //                             </div>
    //                             <p id="foodTextA">{{morningFoodtext}}</p>
    //                         </div>
    //                     </div>
    //                     <img id="addFoodM" src="./img/orderPage/sun/shopping-cart-add.png" alt="">
    //                 </div>
    //                 <!-- 午餐 -->
    //                 <div class="noonFood">
    //                     <img src="./img/orderPage/sun/noonFood.png" alt="">
    //                     <div class="noonFoodA">
    //                         <img id="noonFoodImg" :src="noonFoodImg" alt="">
    //                         <div class="noonFoodB">
    //                             <div class="foodoptionBlockB">
    //                                 <select name="" @change="noonFoodChange($event.target.value)">
    //                                     <option value="">請選擇您的午餐</option>
    //                                     <option v-for="(list,index) in food_list" :value="index">{{list[0]}}</option>
    //                                 </select>
    //                                 <span id="foodPriceB">{{noonFoodPrice}}/人</span>
    //                             </div>
    //                             <p id="foodTextB">{{noonFoodtext}}</p>
    //                         </div>
    //                     </div>
    //                     <img id="addFoodN" src="./img/orderPage/sun/shopping-cart-add.png" alt="">
    //                 </div>
    //                 <!-- 晚餐 -->
    //                 <div class="eveningFood">
    //                     <img src="./img/orderPage/sun/eveningFood.png" alt="">
    //                     <div class="eveningFoodA">
    //                         <img id="eveningFoodImg" :src="eveningFoodImg" alt="">
    //                         <div class="eveningFoodB">
    //                             <div class="foodoptionBlockC">
    //                                 <select name="" @change="eveningFoodChange($event.target.value)">
    //                                     <option value="">請選擇您的晚餐</option>
    //                                     <option v-for="(list,index) in food_list" :value="index">{{list[0]}}</option>
    //                                 </select>
    //                                 <span id="foodPriceC">{{eveningFoodPrice}}/人</span>
    //                             </div>
    //                             <p id="foodTextC">{{eveningFoodtext}}</p>
    //                         </div>
    //                     </div>
    //                     <img id="addFoodE" src="./img/orderPage/sun/shopping-cart-add.png" alt="">
    //                 </div>  
    //             </div>
    //             <!-- 住宿選擇區 -->
    //             <div class="stayChooseBlock">
    //                 <div class="stayTitle">
    //                     <h4>宿</h4>
    //                     <h4 class="chooseDate">{{day}}</h4>
    //                 </div>
    //                 <!-- 小木屋 -->
    //                 <div class="cabin">
    //                     <div class="cabinTitle">
    //                         <h4>森林木屋</h4>
    //                         <p>自由之丘</p>
    //                     </div>
    //                     <input type="radio" name="stayChoose" id="cabinButton">
    //                     <div class="cabinBlockA">
    //                         <img id="cabinImg" src="./img/orderPage/cabin.jpg" alt="">
    //                         <div class="cabinBlockB">
    //                             <div class="cabinOption">
    //                                 <select name="" id="cabinOption">
    //                                     <option value="1">日島</option>
    //                                     <option value="2">月島</option>
    //                                 </select>
    //                                 <span id="cabinPrice">$2999/人</span>
    //                             </div>
    //                             <p id="cabinText">循著山路走進這裡，就彷彿進入了童話故事之中，挑高的屋頂設計讓整體空間感相當舒適，一點也不壓迫，這麼大間的小木屋，入住一晚的價格卻相當實惠，CP值真的太高啦！。</p>
    //                         </div>
    //                     </div>
    //                     <img id="addcabin" src="./img/orderPage/sun/shopping-cart-add.png" alt="">
    //                 </div>
    //                 <!-- 露營 -->
    //                 <div class="camping">
    //                     <div class="campingTitle">
    //                         <h4>帳篷露營</h4>
    //                         <p>山巔之息</p>
    //                     </div>
    //                     <input type="radio" name="stayChoose" id="campingButton">
    //                     <div class="campingBlockA">
    //                         <img id="campingImg" :src="campingimg" alt="">
    //                         <div class="campingBlockB">
    //                             <div class="campingOption">
    //                                 <select name="" id="" @change="stayimgChange($event.target.value)">
    //                                     <option value="1">日島</option>
    //                                     <option value="2">月島</option>
    //                                 </select>
    //                                 <span id="campingPrice">$1999/人</span>
    //                             </div>
    //                             <p id="campingText">全包式懶人露營營區，不但有幫旅客搭好的超美帳篷，甚至提供餐點、陸上活動與生態導覽等等，讓您只要準備好衣物攜帶相機，及準備好拍美照的心情就可以出發。</p>
    //                         </div>
    //                     </div>
    //                     <img id="addCamping" src="./img/orderPage/sun/shopping-cart-add.png" alt="">
    //                 </div>
    //                 <!-- 海上度假村 -->
    //                 <div class="villa">
    //                     <div class="villaTitle">
    //                         <h4>海上Villa</h4>
    //                         <p>日月星</p>
    //                     </div>
    //                     <input type="radio" name="stayChoose" id="villaButton">
    //                     <div class="villaBlockA">
    //                         <img id="villaImg" src="./img/orderPage/villa.jpg" alt="">
    //                         <div class="villaBlockB">
    //                             <div class="villaOption">
    //                                 <select name="" id="villaChoose">
    //                                     <option value="1">日島</option>
    //                                     <option value="2">月島</option>
    //                                 </select>
    //                                 <span id="villaPrice">$3999/人</span>
    //                             </div>
    //                             <p id="villaText">每一間房間都有私人泳池，設施及活動應有盡有，有餐廳、酒吧、水上活動、沙灘活動應有盡有，吃喝玩樂一站全包，面對著壯闊的海洋美景，真的會覺得人生如此，夫復何求？</p>
    //                         </div>
    //                     </div>
    //                     <img id="addVilla" src="./img/orderPage/sun/shopping-cart-add.png" alt="">
    //                 </div>  
    //             </div>
    //     </div>
    //     `,
    // })
    let vm = new Vue({
        el:'#app',
        data:{
            triplist:'',
            countent:'',

            choosePrice:'',
            pepoleNums:0,
            newPrice: 0,

            selectedDate: null,
            //行程資料表
            activity_list:[],
            //餐廳資料表
            food_list:[],
            //套餐資料表
            set_list:[],
            //選擇日期
            newDay:'',
            dayindex:'',

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

            dateArray:[],

            chooseData:'',

            SetChooseAndDay:''
        },
        methods: { 
            day(val,index){
                this.newDay = val;
                this.dayindex = index;
                // console.log(this.dayindex);
                // this.countent='ChooseBlock[${i}]';
            },

            // chooseFunction(day){
            //     let chooseDate = document.getElementsByClassName('chooseDate')[0];
            //     // console.log(day);
                
            // },
            setChoose(val){
                let eg = event.target
                
                if($(eg).parent().text().substring(0,4) == this.newDay && val != -1 && val != '' ){
                    $(eg).parent().addClass('ChooseMove');

                }
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
                        campingChoose.value = 1;
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
                        cabinButton.checked = true;
                        cabinOption.value = 1;
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
                        villaChoose.value = 1;
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
                            villaChoose.value = 1;
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
                            villaChoose.value = 1;
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
                            campingButton.checked = true;
                            campingChoose.value = 1;
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
                            campingButton.checked = true;
                            campingChoose.value = 2;
                            this.campingimg = './img/orderPage/campingnight.jpg'
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
                            villaButton.checked = true;
                            villaChoose.value = 2;
                            villaImg.src = './img/orderPage/villanight.jpg'
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
                            campingButton.checked = true;
                            campingChoose.value = 2;
                            this.campingimg = './img/orderPage/campingnight.jpg'
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
                            villaButton.checked = true;
                            villaChoose.value = 2;
                            villaImg.src = './img/orderPage/villanight.jpg'
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
                            campingButton.checked = true;
                            campingChoose.value = 2;
                            this.campingimg = './img/orderPage/campingnight.jpg'
                        break;
                    default:
                        break;
                }
            },
            // dpnums(){
            //     if(this.pepoleNums > 1){
            //         this.pepoleNums -=1

            //     }
                
            // },
            // apnums(){
            //     if(this.pepoleNums < JSON.parse(localStorage.getItem('pepoleNums'))){
            //         this.pepoleNums +=1
            //     }
            // },
            //上午的行程選擇
            // addItineraryM(){
            //     let tripTitle = document.getElementsByClassName("tripTitle");
                
            //     for(let i = 0 ; i <= tripTitle.length ; i ++){
            //         if(tripTitle.length = i){
            //             this.tripMorningName[i] = this.morningtriptext

            //         }
            //     }

            // },
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

            dpnums(e){
                // console.log(typeof(eg.nextElementSibling.innerHTML));
                let eg = e.target;
                // console.log(eg);
                if(eg.nextElementSibling.innerText > 1){
                    let newNums= eg.nextElementSibling.innerText 
                    let oldPrice = (eg.parentElement.nextElementSibling.innerHTML / newNums)

                    eg.nextElementSibling.innerText--
                    newNums--
                    let newPrice = (oldPrice * newNums)
            
                    eg.parentElement.nextElementSibling.innerHTML = newPrice
                    // console.log(newNums, oldPrice, newPrice);
                }
            },
            apnums(e){
                // console.log(eg.parentElement.nextElementSibling.innerText);
                // console.log($('#ccc').innerHTML);
                let eg = e.target;
                if(eg.previousElementSibling.innerText < JSON.parse(localStorage.getItem('pepoleNums'))){
                    // for(let i = 0 ; i <= tripMorningPrice.length; i++){
                        //     if(eg.parentElement.nextElementSibling[i] = i){
                            //         console.log(eg.parentElement.nextElementSibling[i]);
                            //     }
                    let newNums= eg.previousElementSibling.innerText
                    let oldPrice = (eg.parentElement.nextElementSibling.innerHTML / newNums)

                    eg.previousElementSibling.innerText++
                    newNums++

                    let newPrice = (oldPrice * newNums)
            
                    eg.parentElement.nextElementSibling.innerHTML = newPrice
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

            
        },
        mounted() {
                // bus.$on('sync',nums => this.chooseData = nums)
                // bus.$on('sync1',nums => this.choosePrice = nums)


                
            //JS的方式寫入購物清單


                this.pepoleNums = JSON.parse(localStorage.getItem('pepoleNums'));
                
                let senDays = JSON.parse(localStorage.getItem('sendDays'))
                // console.log(senDays);
                
                howManyDays(senDays[0],senDays[1],this.dateArray);
                
                
                function howManyDays (startDate,days,array){
                    for(let i = 0; i <= days; i++){
                        let x = startDate + (i*1000*3600*24)
                        // console.log((new Date(x).getMonth()+1)+'/'+(new Date(x).getDate()));
                        
                        // let pickerBox = document.getElementsByClassName('pickerBox')[0];

                        // let day =((new Date(startDate).getMonth()+1)+'/'+(new Date(x).getDate()));
                        let y = ((new Date(x).getMonth()+1)+'/'+(new Date(x).getDate()));
                        array.push(y);
                        
                        // pickerBox.innerHTML += `<button class="daysbutton" @click="countent="'ChooseBlock'";date('${day}')"><img src="./img/orderPage/sun/island.png" alt="">${((new Date(startDate).getMonth()+1)+'/'+(new Date(x).getDate()))}</button>`
                    };

                };

                //上午行程選擇器
                let addItineraryM = document.getElementById('addItineraryM');
                let tripMorningName = document.getElementsByClassName('tripMorningName');
                let tripMorningPrice = document.getElementsByClassName('tripMorningPrice');

                addItineraryM.addEventListener('click',()=>{
                    console.log(this.newDay);
                    if(this.newDay !== ''){
                        for(let i = 0; i <= this.dateArray.length ;i++ ){
                            if(this.dayindex == i ){
                                tripMorningName[i].innerHTML = this.activity_list[this.tripMorningNameValue][1];
                                tripMorningPrice[i].innerHTML = (this.activity_list[this.tripMorningNameValue][3] * this.pepoleNums)
    
                                let tirpMorningChooseList = [];
                                tirpMorningChooseList.push(this.dateArray[i],this.activity_list[this.tripMorningNameValue][1],this.activity_list[this.tripMorningNameValue][3])
                                localStorage.setItem('tirpMorningChooseList'+[i],JSON.stringify(tirpMorningChooseList))
    
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(2000)
                                
                            }
                        }
                        $('#addItineraryM').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                    }else{
                        alert('請先選擇日期')
                        $('#addItineraryM').css({
                            opacity:'0.1',
                            cursor:'not-allowed',
                        })
                        tripMchoose.value = '-1'
                        this.morningtriptext ='請點選上方選單列，開始安排您的旅程吧!'
                        this.morningtripPrice='0'
                        this.morningtripImg='./img/orderPage/welcome.jpg'
                        $('html,body').animate({
                            scrollTop: 0
                        }, 1000);
                        
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
    
                                let tripNoonChooseList = [];
                                tripNoonChooseList.push(this.dateArray[i],this.activity_list[this.tripNoonNameValue][1],this.activity_list[this.tripNoonNameValue][3])
                                localStorage.setItem('tripNoonChooseList'+[i],JSON.stringify(tripNoonChooseList))
                                
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(2000)
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
                        $('html,body').animate({
                            scrollTop: 0
                        }, 1000);
                        
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
    
                                let tripEveningChooseList = [];
                                tripEveningChooseList.push(this.dateArray[i],this.activity_list[this.tripEveningNameValue][1],this.activity_list[this.tripEveningNameValue][3])
                                localStorage.setItem('tripEveningChooseList'+[i],JSON.stringify(tripEveningChooseList))
                                
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(2000)
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
                        this.eveningtriptext='請點選上方選單列，開始安排您的旅程吧!',
                        this.eveningtripPrice='0',
                        this.eveningtripImg='./img/orderPage/welcome.jpg',
                        $('html,body').animate({
                            scrollTop: 0
                        }, 1000);
                        
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
    
                                let FoodMorningChooseList = [];
                                FoodMorningChooseList.push(this.dateArray[i],this.food_list[this.FoodMorningNameValue][0],this.food_list[this.FoodMorningNameValue][1])
                                localStorage.setItem('FoodMorningChooseList'+[i],JSON.stringify(FoodMorningChooseList))
    
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(2000)
                                
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
                        this.morningFoodtext='請點選上方選單列，開始安排您的早餐!',
                        this.morningFoodPrice='0',
                        this.morningFoodImg='./img/orderPage/welcome.jpg',
                        $('html,body').animate({
                            scrollTop: 0
                        }, 1000);
                        
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
    
                                let FoodNoonChooseList = [];
                                FoodNoonChooseList.push(this.dateArray[i],this.food_list[this.FoodNoonNameValue][0],this.food_list[this.FoodNoonNameValue][1])
                                localStorage.setItem('FoodNoonChooseList'+[i],JSON.stringify(FoodNoonChooseList))
    
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(2000)
                                
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
                        this.noonFoodtext='請點選上方選單列，開始安排您的午餐!',
                        this.noonFoodPrice='0',
                        this.noonFoodImg='./img/orderPage/welcome.jpg',
                        $('html,body').animate({
                            scrollTop: 0
                        }, 1000);
                        
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
    
                                let FoodEveningChooseList = [];
                                FoodEveningChooseList.push(this.dateArray[i],this.food_list[this.FoodEveningNameValue][0],this.food_list[this.FoodEveningNameValue][1])
                                localStorage.setItem('FoodNoonChooseList'+[i],JSON.stringify(FoodEveningChooseList))
    
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(2000)
    
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
                            this.eveningFoodtext='請點選上方選單列，開始安排您的晚餐!',
                            this.eveningFoodPrice='0',
                            this.eveningFoodImg='./img/orderPage/welcome.jpg',
                            $('html,body').animate({
                                scrollTop: 0
                            }, 1000);
                            
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
                                if(this.dayindex == i && this.newDay != ''){
                                    let thisStayName = $(e.target).parent().find('h4').text()
                                    let thisPrice = $(e.target).prev().find('span').text().substring(1,5);
                                    console.log(cabinOption.value);
                                    if(cabinOption.value == 1){
                                       thisStayName = thisStayName + '(日)';
                                    }else{
                                        thisStayName = thisStayName + '(月)';
                                    }
                                    StayChooseName[i].innerHTML = thisStayName;
                                    StayChoosePrice[i].innerHTML = (this.pepoleNums * parseInt(thisPrice));
        
                                    let stayChooseList = [];
                                    stayChooseList.push(this.dateArray[i],thisStayName,thisPrice)
                                    localStorage.setItem('stayChooseList'+[i],JSON.stringify(stayChooseList))
        
                                    $('.addfadein').fadeTo(1,0.9)
                                    $('.addfadein').fadeOut(3000)
                                    
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
                        $('html,body').animate({
                            scrollTop: 0
                        }, 1000);
                        
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
    
                                let stayChooseList = [];
                                stayChooseList.push(this.dateArray[i],thisStayName,thisPrice)
                                localStorage.setItem('stayChooseList'+[i],JSON.stringify(stayChooseList))
    
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(3000)
                                
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
                        $('html,body').animate({
                            scrollTop: 0
                        }, 1000);
                        
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
    
                                let stayChooseList = [];
                                stayChooseList.push(this.dateArray[i],thisStayName,thisPrice)
                                localStorage.setItem('stayChooseList'+[i],JSON.stringify(stayChooseList))
    
                                $('.addfadein').fadeTo(1,0.9)
                                $('.addfadein').fadeOut(3000)
                                
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
                        $('html,body').animate({
                            scrollTop: 0
                        }, 1000);
                        
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
                    }
                });
                $('#cabinButton').click(()=>{
                    // console.log($('#villaButton').addClass('check'));
                    $('#cabinButton').addClass('check')
                    if( $('#cabinButton').hasClass('check')){
                        $('#addcabin').css({
                            opacity:'1',
                            cursor: 'pointer',
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
                    }
                })
                
                $(window).scroll(()=>{
                    console.log($(window).scrollTop());
                    if($(window).scrollTop() > 2000){
                        $('.ChooseMove').find('input').css('display','block')
                    }
                    if($(window).scrollTop() < 250){
                        $('.daysbutton').removeClass('ChooseMove')
                    }
                })


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

