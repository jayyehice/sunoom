"use strict"

$(document).ready(function(){
    //資料庫渲染到前端
    new Vue({
        el: '#seaActivity',
        data: {     // 變數放這裡！               
            seaActivity_list: [],
        },
        methods: {},
        computed: {},
        watch: {},
        beforeCreate() {
            const url = './php/sea.php';
            fetch(url)
                .then(response => response.json())
                .then(text => this.map_list = text);
        },
        created() {
        },
        mounted() {   
        },
        updated() {           
        },
        
    })

})
