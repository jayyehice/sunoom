new Vue({
    el: '#live',

    data: {     // 變數放這裡！           
        live_list: [],
    },
    methods: {
        h3Mouseenter(e){
            // let box = document.getElementsByClassName('wood');
            let boxclass = e.target.dataset.boxclass;
            let box = e.target.closest('div.siteLayout').querySelector(`div.${boxclass}`);
            box.setAttribute("style","display:block;");
            // console.log();
            // console.log(e.target.closest('div.siteLayout').querySelector(`div.${boxclass}`));
            // box.setAttribute("style","display:block;");
        },

        h3Mouseleave(e){
            // let box = document.getElementsByClassName('wood');
            let boxclass = e.target.dataset.boxclass;
            let box = e.target.closest('div.siteLayout').querySelector(`div.${boxclass}`);
            box.removeAttribute("style");
            // console.log();
            // console.log(e.target.closest('div.siteLayout').querySelector(`div.${boxclass}`));
            // box.setAttribute("style","display:block;");
        },
    },
    computed: {},
    watch: {},

    
    created() {

        //fetch
    
        const url = './php/live.php';
        fetch(url)
            .then(response => response.json())
            // .then(text => console.log(text))
            .then(text => this.live_list = text);
        
    },

    mounted() {},

    updated() {
        // faq_click();
    },
    beforeDestroy() {},
    destroyed() {},
})



