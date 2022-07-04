new Vue({
    el:'#ig',

    data: {
        ig_list: [],
        ig_imgtext:[],
    },

    methods: {ig_img(e){
        let igimg = e.target.dataset.ig;
        this.ig_imgtext = this.ig_list[igimg];
    }},
    compute: {},
    watch: {},

    // fetch
    created(){
        let url = './php/index_ig.php';
        fetch(url)
        .then(response => response.json())
        .then(text => this.ig_list = text);
        // .then(text => console.log(text));

    },

    // beforeMount() {},

    mounted() { },

    // beforeUpdate() {},

    updated() {
        // land_tour();
         let ig_img = document.getElementsByClassName("ig_img");
         let ig_pop_up = document.getElementById("ig_pop_up");
         let ig_pop_up_img = document.getElementById("ig_pop_up_img");
         let ig_pop_up_content = document.getElementById("ig_pop_up_content");
        
         for (let i = 0; i < ig_img.length; i++) {
             ig_img[i].addEventListener("click", function () {
                 // console.log(this);
                 ig_pop_up.setAttribute("style", "display:block;");
                 ig_pop_up_img.src = this.getAttribute("src");
             });
         }
        
         ig_pop_up.addEventListener("click", function () {
             this.removeAttribute("style");
         });
        
         ig_pop_up_content.addEventListener("click", function (e) {
             e.stopPropagation();
        });
    },

    //beforeDestory(){},

    destroyed(){}
})