new Vue({
    el: '#live',

    data: {     // 變數放這裡！           
        live_list: [],
    },
    methods: {},
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



