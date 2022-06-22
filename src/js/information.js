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


