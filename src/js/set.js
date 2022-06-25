
new Vue({
    el: '#set',

    data: {     // 變數放這裡！           
        set_list: [],
    },
    methods: {},
    computed: {},
    watch: {},

    beforeCreate() {

        //fetch

        const url = './php/set.php';
        //期中報告用information_tmp.php
        // const url = './php/information_tmp.php';
        fetch(url)
            .then(response => response.json())
            // .then(text => console.log(text));
            .then(text => this.set_list = text);

    },

    created() {},

    beforeMount() {},

    mounted() {},

    beforeUpdate() {},
    // updated() {
    //     set_click();
    // },
    beforeDestroy() {},
    destroyed() {},
})
