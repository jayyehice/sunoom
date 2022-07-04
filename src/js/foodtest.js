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



            //餐廳預訂(人數加減)
            $(document).ready(function(){
                var number = 2;
                $(".table_number").html(number);
            });
            
            $(".plus").click(function(){
                number = $(".table_number").text();
                number = parseInt(number) + 1;
                $(".table_number").html(number);
            });
            
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

        },
        
    })

})







 