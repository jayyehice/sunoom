"use strict"

// let juice = document.getElementsByClassName('juice');


$(document).ready(function(){
    //資料庫渲染到前端
    new Vue({
        el: '#map',
        data: {     // 變數放這裡！           
            map_list: [],
            test:"123",
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
            //點擊icon打開燈箱e
            $(".hamberger").click(function(){
                $(".iconBox").fadeIn();
                //燈箱開啟時的深色背景
                $(".backdrop").animate({"opacity" : "0.5"} , 300);
                $(".backdrop").css({"display": "block"});
            });
    
    
            //點擊 X 或 其他地方 關閉燈箱
            $(".close , .backdrop" ).click(function(){
                $(".iconBox").fadeOut();
                //燈箱開啟時的深色背景
                $(".backdrop").animate({"opacity" : "0"} , 300);
                $(".backdrop").css({"display": "none"});
            });
            
        },
        updated() {
        },
        
    })

})







 