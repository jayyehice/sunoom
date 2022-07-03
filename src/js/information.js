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
        type: "all",

        //燈箱內容
        boxContent:[],
    },
    methods: {
        changeContent(e){
            // console.log(e.target.dataset.type);
            e.preventDefault();
            
            this.type=e.target.dataset.type;

            // ul on樣式
            $(e.target.closest('ul')).find('button.on').removeClass('on');
            $(e.target.closest('button')).addClass('on');
        },
        lightBox(idx){

            this.boxContent = this.map_list[idx];

            //燈箱function
            $(".iconBox").fadeIn();
            //燈箱開啟時的深色背景
            $(".backdrop").animate({"opacity" : "0.5"} , 300);
            $(".backdrop").css({"display": "block"});
            
        },
    },
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
        // //燈箱function
        // function boxShow(){
        //     $(".iconBox").fadeIn();
        //     //燈箱開啟時的深色背景
        //     $(".backdrop").animate({"opacity" : "0.5"} , 300);
        //     $(".backdrop").css({"display": "block"});
        // }

        // //hamberger
        // document.getElementsByClassName("hamberger")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[4];
        //     boxShow();
        // });

        // //juice
        // document.getElementsByClassName("juice")[0].addEventListener("click", e => {
        //     this.boxContent = this.map_list[6];
        //     boxShow();
        // });

        // //bbq
        // document.getElementsByClassName("bbq")[0].addEventListener("click", e => {
        //     this.boxContent = this.map_list[0];
        //     boxShow();
        // });

        // //juice
        // document.getElementsByClassName("lobster")[0].addEventListener("click", e => {
        //     this.boxContent = this.map_list[2];
        //     boxShow();
        // });

        // //住
        // //residential
        // document.getElementsByClassName("residential")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[8];
        //     boxShow();
        // });

        // //tent
        // document.getElementsByClassName("tent")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[9];
        //     boxShow();
        // });

        // //stilthouse
        // document.getElementsByClassName("stilthouse")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[10];
        //     boxShow();
        // });

        // // 遊(陸)
        // //chariot
        // document.getElementsByClassName("chariot")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[11];
        //     boxShow();
        // });

        // //horse_back_riding
        // document.getElementsByClassName("horse_back_riding")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[12];
        //     boxShow();
        // });

        // //stonehenge
        // document.getElementsByClassName("stonehenge")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[13];
        //     boxShow();
        // });

        // //mountaineering
        // document.getElementsByClassName("mountaineering")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[14];
        //     boxShow();
        // });

        // //rafting
        // document.getElementsByClassName("rafting")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[15];
        //     boxShow();
        // });

        // // 遊(海)
        // //diving
        // document.getElementsByClassName("diving")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[16];
        //     boxShow();
        // });

        // //yacht
        // document.getElementsByClassName("yacht")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[17];
        //     boxShow();
        // });

        // //fishing
        // document.getElementsByClassName("fishing")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[18];
        //     boxShow();
        // });

        // //snorkeling
        // document.getElementsByClassName("snorkeling")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[19];
        //     boxShow();
        // });

        // //stand_up_paddle
        // document.getElementsByClassName("stand_up_paddle")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[20];
        //     boxShow();
        // });

        // //agency
        // document.getElementsByClassName("agency")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[21];
        //     boxShow();
        // });

        // //turtle
        // document.getElementsByClassName("turtle")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[22];
        //     boxShow();
        // });


        // //------月島-------

        // //m_hamberger
        // document.getElementsByClassName("m_hamberger")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[4];
        //     boxShow();
        // });

        // //juice
        // document.getElementsByClassName("m_juice")[0].addEventListener("click", e => {
        //     this.boxContent = this.map_list[6];
        //     boxShow();
        // });

        // //bbq
        // document.getElementsByClassName("m_bbq")[0].addEventListener("click", e => {
        //     this.boxContent = this.map_list[0];
        //     boxShow();
        // });

        // //juice
        // document.getElementsByClassName("m_lobster")[0].addEventListener("click", e => {
        //     this.boxContent = this.map_list[2];
        //     boxShow();
        // });

        // //住
        // //residential
        // document.getElementsByClassName("m_residential")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[25];
        //     boxShow();
        // });

        // //tent
        // document.getElementsByClassName("m_tent")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[26];
        //     boxShow();
        // });

        // //stilthouse
        // document.getElementsByClassName("m_stilthouse")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[27];
        //     boxShow();
        // });

        // // 遊(陸)
        // //m_campfire
        // document.getElementsByClassName("m_campfire")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[28];
        //     boxShow();
        // });

        // //m_bar
        // document.getElementsByClassName("m_bar")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[29];
        //     boxShow();
        // });

        // //m_star
        // document.getElementsByClassName("m_star")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[30];
        //     boxShow();
        // });

        // //m_owl
        // document.getElementsByClassName("m_owl")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[31];
        //     boxShow();
        // });

        // //m_cave
        // document.getElementsByClassName("m_cave")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[32];
        //     boxShow();
        // });

        // // 遊(海)
        // //m_diving
        // document.getElementsByClassName("m_diving")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[33];
        //     boxShow();
        // });

        // //m_yacht
        // document.getElementsByClassName("m_yacht")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[34];
        //     boxShow();
        // });

        // //m_fishing
        // document.getElementsByClassName("m_fishing")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[35];
        //     boxShow();
        // });

        // //m_flying_fish
        // document.getElementsByClassName("m_flying_fish")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[36];
        //     boxShow();
        // });

        // //m_stand_up_paddle
        // document.getElementsByClassName("m_stand_up_paddle")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[37];
        //     boxShow();
        // });

        // //生態活動
        // //tear
        // document.getElementsByClassName("tear")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[38];
        //     boxShow();
        // });

        // //intertidal
        // document.getElementsByClassName("intertidal")[0].addEventListener("click", e => {
        //     // alert("tt");
        //     this.boxContent = this.map_list[39];
        //     boxShow();
        // });



        
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
    
});


$(function(){
    $("header .switch").click(function(){
        alert("tt");

        $('.polaroid').find("h5 .change01").text("AAAAAAA");
    
        
    })
  
  })
  
