"use strict"

$(document).ready(function(){
    //資料庫渲染到前端
    let v_activity = new Vue({
        el: '#seaActivity',
        data: {     // 變數放這裡！               
            seaActivity_list: [],
            activity1:[],
            activity2:[],
            activity3:[],
            activity4:[],
            activity5:[],
        },
        methods: {
            testChange(){
                // console.log(this.activity1[4]);

                if( this.activity1[4] == 1){
                    this.activity1=this.seaActivity_list[19];
                    this.activity2=this.seaActivity_list[20];
                    this.activity3=this.seaActivity_list[21];
                    this.activity4=this.seaActivity_list[22];
                    this.activity5=this.seaActivity_list[23];
                }else{
                    this.activity1=this.seaActivity_list[12];
                    this.activity2=this.seaActivity_list[13];
                    this.activity3=this.seaActivity_list[14];
                    this.activity4=this.seaActivity_list[15];
                    this.activity5=this.seaActivity_list[16];
                }
            }
        },
        computed: {},
        watch: {},
        beforeCreate() {
            const url = './php/sea.php';
            fetch(url)
                .then(response => response.json())
                .then(text => {
                    this.seaActivity_list = text;
                    this.activity1=this.seaActivity_list[12];
                    this.activity2=this.seaActivity_list[13];
                    this.activity3=this.seaActivity_list[14];
                    this.activity4=this.seaActivity_list[15];
                    this.activity5=this.seaActivity_list[16];
                });
        },
        created() {
        },
        mounted() {
        },
        updated() {
                
        },   
    })

    //生態活動資料串接
    let v_echo = new Vue({
        el: '#echoTitle',
        data: {     // 變數放這裡！               
            seaActivity_list: [],
            echo1:[],
            echo2:[],
        },
        methods: {
            testChange(){
                console.log(this.echo1[4]);

    
                if( this.echo1[4] == 1){
                    this.echo1=this.seaActivity_list[24];
                    this.echo2=this.seaActivity_list[25];
                }else{
                    this.echo1=this.seaActivity_list[17];
                    this.echo2=this.seaActivity_list[18];
                }
            }
        },
        computed: {},
        watch: {},
        beforeCreate() {
            const url = './php/sea.php';
            fetch(url)
                .then(response => response.json())
                .then(text => {
                    this.seaActivity_list = text;
                    this.echo1=this.seaActivity_list[17];
                    this.echo2=this.seaActivity_list[18];
                });
        },
        created() {
        },
        mounted() {
        },
        updated() {          
        },   
    })

    $('#changeButton').click(function(){
        v_activity.testChange();
        v_echo.testChange();
        console('test')
    });
})


// setTimeout(function(){
//     $('#testButton')[0].click();
//     console.log('點擊完成')
// }, 5000)
