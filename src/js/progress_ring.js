let vm = new Vue({
    el: '#top_banner',

    data: {     // 變數放這裡！           
        width:450,
        radius:200,
        offset:0,
        li_data:[],
        // full:width*width*2*Math.PI,
    },
    methods: {},
    computed: {
        half_width(){
            return this.width/2;
        },
        full_circle(){
            return this.radius*0.4*Math.PI+" "+this.radius*2*Math.PI;
        },
        full_circle_bg(){
            return this.radius*2*Math.PI+" "+this.radius*2*Math.PI;
        },
        
    },
    watch: {},
    created() {

        
    },
    mounted() {

        // ---------------RWD size----------------

        if(window.innerWidth<576){
            this.width = 260;
            this.radius = 100;
        }


        // ---------------li 位置---------------
        let top_banner = document.getElementById("top_banner");
        let content = ['遠古探險', '健行登山', '騎馬遊島', '沙灘越野車', '海灘派對'];
        
        let temp = [];
        let r = this.radius;
        
        function li_array(){
            // console.log(vm.li_data);
            let center_x = parseFloat(getComputedStyle(top_banner).width)/2;
            let center_y = parseFloat(getComputedStyle(top_banner).height)*(0.6);
            temp = [];
            for(let i=0; i<5; i++){
                let x=Math.cos(Math.PI*(1/2-2*i/5));
                let y=Math.sin(Math.PI*(1/2-2*i/5));
    
                x = center_x - x*r - 10;
                y = center_y - y*r - 12;
    
                let data = `top:${y}px;left:${x}px;`;
                temp.push([content[i],data]);
            }
        }
    
        li_array();
    
        this.li_data = temp;
    
        window.addEventListener("resize", e => {
            // console.log(this);
            li_array();
            this.li_data = temp;
            // console.log(temp);
        });
        


        // ---------------旋轉Progress----------------
        let offset_i = 1;

        setInterval(()=>{
            if(offset_i === 5){
                offset_i = 0;
            }
            // console.log(this);
            this.offset = this.radius*(-0.4)*Math.PI*offset_i;
            // console.log(this.offset);
            offset_i++;
        }, 3500);

        
        
    },
    updated() {
        let progress_ring_circle = document.getElementsByClassName("progress-ring_circle")[1];
        progress_ring_circle.setAttribute("style", "transform: rotate(-90deg);");
        
    },

})