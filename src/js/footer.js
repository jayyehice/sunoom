"use strict"

new Vue({
    el: '#footer',

    data: {     // 變數放這裡！           
        today:[],
        future:[],
    },
    methods: {},
    computed: {},
    watch: {},
    created() {
        const url = './php/weather_api.php';
        fetch(url)
            .then(response => response.json())
            .then(text => {
                this.today = text["today"];
                this.future = text["future"];

            });
    },
    mounted() {
        let footer = document.getElementById("footer");
        let footer_ul = document.getElementById("footer_ul");
        let footer_height = parseInt(getComputedStyle(footer_ul).height)+parseInt(getComputedStyle(footer_ul).width)/2;

        function horizontal_scroll(){

            if(window.innerWidth >= 576){
                footer.setAttribute("style", `height: ${footer_height}px;`);
                
                window.addEventListener("scroll", e => {
                    
                    if(window.scrollY >= footer.offsetTop){      
                        let scroll_move = window.scrollY-footer.offsetTop;
                        footer_ul.scrollLeft = scroll_move;
                        
                    }else{
                        footer_ul.scrollLeft = 0;
                    }
                })
            }
        };
        
        
        horizontal_scroll();

        window.addEventListener("resize", horizontal_scroll());

    },
    updated() {
    },

})