
let v_set = new Vue({
    el: '#set',

    data: {     // 變數放這裡！           
        set_list: [],
        set1: [],
        set2: [],
        set3: [],
        set4: [],
        set5: [],
        set6: [],
    },
    methods: {
        testChange(){
            // console.log(this.set1[2]);

            if( this.set1[2] == 1){
                this.set1=this.set_list[6];
                this.set2=this.set_list[7];
                this.set3=this.set_list[8];
                this.set4=this.set_list[9];
                this.set5=this.set_list[10];
                this.set6=this.set_list[11];
            }else{
                this.set1=this.set_list[0];
                this.set2=this.set_list[1];
                this.set3=this.set_list[2];
                this.set4=this.set_list[3];
                this.set5=this.set_list[4];
                this.set6=this.set_list[5];

            }
        }

    },
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
            // .then(text => this.set_list = text);
            .then(text => {
                this.set_list = text;
                this.set1=this.set_list[0];
                this.set2=this.set_list[1];
                this.set3=this.set_list[2];
                this.set4=this.set_list[3];
                this.set5=this.set_list[4];
                this.set6=this.set_list[5];


            });


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

$(document).ready(function(){

    $('#changeButton').click(function(){
        // alert("tt");
        v_set.testChange();
    });

})
