"use strict"

// let juice = document.getElementsByClassName('juice');


$(document).ready(function(){
    //資料庫渲染到前端
    new Vue({
        el: '#map',
        data: {     // 變數放這裡！ 

            //地圖          
            map_list: [],

            //地圖燈箱內容
            boxContent:[],

            //預定資料
            name:"",
            people:"",
            phone:"",
            date:"",
            time:"",

        },
        methods: {},
        computed: {},
        watch: {},
        beforeCreate() {
            const url = './php/map.php';
            fetch(url)
                .then(response => response.json())
                .then(text => this.map_list = text);
        },
        created() {
        },
        mounted() {   
        },
        updated() {
            //燈箱function
            function boxShow(){
                $(".iconBox").fadeIn();
                //燈箱開啟時的深色背景
                $(".backdrop").animate({"opacity" : "0.5"} , 300);
                $(".backdrop").css({"display": "block"});
            }

            //hamberger
            document.getElementsByClassName("hamberger")[0].addEventListener("click", e => {
                this.boxContent = this.map_list[4];
                boxShow();
            });

            //juice
            document.getElementsByClassName("juice")[0].addEventListener("click", e => {
                this.boxContent = this.map_list[6];
                boxShow();
            });

            //bbq
            document.getElementsByClassName("bbq")[0].addEventListener("click", e => {
                this.boxContent = this.map_list[0];
                boxShow();
            });

            //juice
            document.getElementsByClassName("lobster")[0].addEventListener("click", e => {
                this.boxContent = this.map_list[2];
                boxShow();
            });
            
            // //點擊icon打開燈箱e
            // $(".hamberger").click(function(){
            //     $(".iconBox").fadeIn();
            //     //燈箱開啟時的深色背景
            //     $(".backdrop").animate({"opacity" : "0.5"} , 300);
            //     $(".backdrop").css({"display": "block"});
            // });
    
    
            //點擊 X 或 其他地方 關閉燈箱
            $(".close , .backdrop" ).click(function(){
                $(".iconBox").fadeOut();
                //燈箱開啟時的深色背景
                $(".backdrop").animate({"opacity" : "0"} , 300);
                $(".backdrop").css({"display": "none"});
            });


            // 餐廳一預訂(燈箱點擊事件)
                $(".booknow").click(function(e){
                    e.preventDefault();
                    // console.log($(e.target.closest('section')).find('h3').text());
                    
                    //燈箱店家圖片和店名替換
                    $("#bookingBox1").find('img').attr('src', $(e.target.closest('section')).find('img').attr('src'));
                    $("#bookingBox1").find('h4').text($(e.target.closest('section')).find('h3').text());

                    //燈箱開啟時的深色背景
                    $("#bookingBox1").fadeIn();
                    $("#bookingBox1").css("display","block")
                    $(".bookingBoxDrop").css("display","block").animate({"opacity" : "0.5"} , 300);
                })

            //點擊 X 或 其他地方 關閉 餐廳一燈箱
                $(".bookingBoxClose , .bookingBoxDrop" ).click(function(bookingBoxClose){
                    $("#bookingBox1").fadeOut();
                    //燈箱開啟時的深色背景
                    $(".bookingBoxDrop").animate({"opacity" : "0"} , 300);
                    $(".bookingBoxDrop").css({"display": "none"});

                    //關閉後初始
                    let number = 1;
                    $(".table_number").html(number);
                    $("#name").val("");
                    $("#phone").val("");
                    $("#time").val("");
                    $("#date").val("");
                });
            


            //餐廳預訂(燈箱內人數加減)
            function plusAndMinus(){
                let number = 1;
                $(".table_number").html(number);

                // 加法
                $(".plus").click(function(){
                    number = $(".table_number").text();
                    number = parseInt(number) + 1;
                    $(".table_number").html(number);
                });

                // 減法
                $(".minus").click(function(){
                    number = $(".table_number").text();
                    number = parseInt(number) - 1;
                    /* if(number == 2){
                        $(".table.minus").css("button:disabled");
                    } */
                    if(number >= 1){
                        $(".table_number").html(number);
                    }
                });
            };

            plusAndMinus();

            //餐廳訂位送出(傳送資料到資料庫)
            
            $("#confirm").on("click",function(){
                let shopname = $("#shopname").text();
                let people = $("#people").text();
                let name = $("#name").val();
                let date = $("#date").val();
                let time = $("#time").val();
                let phone = $("#phone").val();
                let islandid = 1;
                // let inputValue = $("input").val();
                if (name == "" || date == "" || time == "" | phone == "") {
                    // input IS empty
                    // $("input").css("border", "red 1px solid");
                    alert("no");
                } else {
                    // input is NOT empty
                    //判斷body標籤是在日島還是月島
                    if($('body')[0].classList.contains('moon')){
                        islandid = 2;
                    }
                    // console.log(shopname, name, phone, people, date, time);
                    
                    //傳送資料到資料庫
                    const url = `./php/foodBooking.php?shopname=${shopname}&people=${people}&name=${name}&date=${date}&time=${time}&phone=${phone}&islandid=${islandid}`;
                    fetch(url);
    
                    //confirm點擊後，換成訂位完成燈箱
                    $("#bookingBox1").fadeOut(200);
                    $("#completeBox1").delay(200).fadeIn(800);
    
                    //Step2 燈箱開啟時的深色背景
                    $("#completeBox1").css("display","block")
                    $(".bookingBoxDrop").css("display","block").animate({"opacity" : "0.5"} , 300);
    
                    //點擊 X 或 其他地方 關閉 餐廳一燈箱
                    $(".bookingBoxClose , .bookingBoxDrop" ).click(function(){
                        $("#completeBox1").fadeOut();
                        //燈箱開啟時的深色背景
                        $(".bookingBoxDrop").animate({"opacity" : "0"} , 300);
                        $(".bookingBoxDrop").css({"display": "none"});
                    });
                    
                }


            });
            
        },
        
    })

})







 