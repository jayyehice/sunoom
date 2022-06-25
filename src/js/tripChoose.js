
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
            //選擇日期
            newDay:'',
            dayindex:'',

            //訂單明細總表
            //上午
            tripMorningNameValue:'',
            // tirpMorning:'',
            // tirpMorningPrice:0,
            
            
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

        },
        methods: { 
            day(val,index){
                this.newDay = val;
                this.dayindex = index;
                console.log(this.dayindex);
                // this.countent='ChooseBlock[${i}]';
            },

            chooseFunction(day){
                let chooseDate = document.getElementsByClassName('chooseDate')[0];
                // console.log(day);
                
            },
            dpnums(){
                if(this.pepoleNums > 1){
                    this.pepoleNums -=1

                }
                
            },
            apnums(){
                if(this.pepoleNums < JSON.parse(localStorage.getItem('pepoleNums'))){
                    this.pepoleNums +=1
                }
            },
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


                let addItineraryM = document.getElementById('addItineraryM');
                let tripMorningName = document.getElementsByClassName('tripMorningName');
                let tripMorningPrice = document.getElementsByClassName('tripMorningPrice');

                
                addItineraryM.addEventListener('click',()=>{
                    for(let i = 0; i <= this.dateArray.length ;i++ ){
                        if(this.dayindex == i){
                            tripMorningName[i].innerHTML = this.activity_list[this.tripMorningNameValue][1];
                            tripMorningPrice[i].innerHTML = (this.activity_list[this.tripMorningNameValue][3] * this.pepoleNums)

                            let tirpMorningChooseList = [];
                            tirpMorningChooseList.push(this.dateArray[i],this.activity_list[this.tripMorningNameValue][1],this.activity_list[this.tripMorningNameValue][3])
                            localStorage.setItem('tirpMorningChooseList'+[i],JSON.stringify(tirpMorningChooseList))
                            
                        }  
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

        },
        
    });
})
let tripMorningPrice = document.getElementsByClassName('tripMorningPrice');
function apnums(eg){
    // console.log(eg.parentElement.nextElementSibling.innerText);
    // console.log($('#ccc').innerHTML);
    if(eg.previousElementSibling.innerText < JSON.parse(localStorage.getItem('pepoleNums'))){
        eg.previousElementSibling.innerText ++
        // for(let i = 0 ; i <= tripMorningPrice.length; i++){
        //     if(eg.parentElement.nextElementSibling[i] = i){
        //         console.log(eg.parentElement.nextElementSibling[i]);
        //     }
        let newNums= eg.previousElementSibling.innerText
        let oldPrice = (eg.parentElement.nextElementSibling.innerHTML / JSON.parse(localStorage.getItem('pepoleNums')))
        

        eg.parentElement.nextElementSibling.innerHTML += oldPrice
        }

        // console.log(newPrice);
    
}
// function dpnums(eg){
//     // console.log(typeof(eg.nextElementSibling.innerHTML));
//     if(eg.nextElementSibling.innerText > 1){
//         eg.nextElementSibling.innerHTML --
//         let newNums= eg.nextElementSibling.innerText
//         let oldPrice = (eg.parentElement.nextElementSibling.innerHTML / JSON.parse(localStorage.getItem('pepoleNums')))
//         // let newPrice = parseInt(newNums * oldPrice)
//         console.log(oldPrice);
//         eg.parentElement.nextElementSibling.innerHTML  -= oldPrice
//         // console.log(newPrice);
//     }
// }