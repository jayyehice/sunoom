"use strict"

function faq_click(){

    // console.log('test');
    let faq_li = document.getElementsByClassName('faq_li');
    let faq_h5 = document.getElementsByClassName('faq_h5');
    let faq_p = document.getElementsByClassName('faq_p');
    // console.log(faq_h5);

    for(let i=0; i<faq_h5.length; i++){
        faq_h5[i].addEventListener("click", function(){
            // console.log(window.getComputedStyle(faq_p[i]).height);

            let open_height = parseInt(window.getComputedStyle(faq_p[i]).height) + parseInt(window.getComputedStyle(faq_h5[i]).height);

            if(faq_li[i].classList.contains("faq_li-on")){
                faq_li[i].classList.remove("faq_li-on");
                faq_li[i].removeAttribute("style");
            }else{
                faq_li[i].classList.add("faq_li-on");
                faq_li[i].setAttribute("style",`height:${open_height}px;`);
            }
        });
    }

}



new Vue({
    el: '#faq',

    data: {     // 變數放這裡！           
        faq_list: [],
        office_list: [],    // office的
    },
    methods: {},
    computed: {},
    watch: {},

    beforeCreate() {

        //fetch

        const url = './php/information.php';
        //期中報告用information_tmp.php
        // const url = './php/information_tmp.php';
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    const { status, statusText } = response;
                 throw Error(`${status}: ${statusText}`);
                }
            })
            .then(text => this.faq_list = text);
        

        //fetch

        const url2 = './php/information_contact.php';
        //期中報告用information_tmp.php
        // const url = './php/information_tmp.php';
        fetch(url2)
            .then(response => response.json())
            .then(text => this.office_list = text);
        

    },

    created() {},

    beforeMount() {},

    mounted() {},

    beforeUpdate() {},
    updated() {
        faq_click();
    },
    beforeDestroy() {},
    destroyed() {},
})

new Vue({
    el: '#office',

    data: {     // 變數放這裡！           
        office_list: [],    // office的
    },
    methods: {},
    computed: {},
    watch: {},

    beforeCreate() {

        //fetch

        const url2 = './php/information_contact.php';
        //期中報告用information_tmp.php
        // const url = './php/information_tmp.php';
        fetch(url2)
            .then(response => response.json())
            .then(text => this.office_list = text);
        

    },

    created() {},

    beforeMount() {},

    mounted() {},

    beforeUpdate() {},
    updated() {
        // faq_click();
    },
    beforeDestroy() {},
    destroyed() {},
})

new Vue({
    el: '#map',
    data: {     // 變數放這裡！           
        map_list: [],

        //燈箱內容
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
    },
    
})

