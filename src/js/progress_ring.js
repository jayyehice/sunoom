new Vue({
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
        let top_banner = document.getElementById("top_banner");

        // console.log(parseFloat(getComputedStyle(top_banner).height));
        // console.log(parseFloat(getComputedStyle(top_banner).width));

        let center_x = parseFloat(getComputedStyle(top_banner).width)/2;
        let center_y = parseFloat(getComputedStyle(top_banner).height)/2;

        let content = ['遠古探險', '健行登山', '騎馬遊島', '沙灘越野車', '海灘派對']
        let temp = [];

        for(let i=0; i<5; i++){
            let x=Math.cos(Math.PI*(1/2-2*i/5));
            let y=Math.sin(Math.PI*(1/2-2*i/5));
            

            x = center_x - x*this.radius - 10;
            y = center_y - y*this.radius - 12;
            // console.log(x, y);

            let data = `top:${y}px;left:${x}px;`;
            temp.push([content[i],data]);
        }

        console.log(temp);

        this.li_data = temp;

    },
    mounted() {

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
    updated() {},

})