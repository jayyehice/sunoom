window.addEventListener("load", e => {
    
    let v_landactivity = new Vue({
        el: '#land_tour',

        data: {     //變數放這裡
            land_tour_list: [],
            activity1: [],
            activity2: [],
            activity3: [],
            activity4: [],
            activity5: [],
        },
        method: {
            changeText() {
                // console.log(this.activity1[4]);

                if (this.activity1[4] == 1) {
                    this.activity1 = this.land_tour_list[6];
                    this.activity2 = this.land_tour_list[7];
                    this.activity3 = this.land_tour_list[8];
                    this.activity4 = this.land_tour_list[9];
                    this.activity5 = this.land_tour_list[10];
                } else {
                    this.activity1 = this.land_tour_list[0];
                    this.activity2 = this.land_tour_list[1];
                    this.activity3 = this.land_tour_list[2];
                    this.activity4 = this.land_tour_list[3];
                    this.activity5 = this.land_tour_list[4];
                }
            }
        },
        compute: {},
        watch: {},
        beforeCreate() {

            let url = './php/land_tour.php';
            fetch(url)
                .then(response => response.json())
                .then(text => {
                    this.land_tour_list = text;
                    this.activity1 = this.land_tour_list[0];
                    this.activity2 = this.land_tour_list[1];
                    this.activity3 = this.land_tour_list[2];
                    this.activity4 = this.land_tour_list[3];
                    this.activity5 = this.land_tour_list[4];
                });
        },
        
        created() {

        },

        mounted() {},

        updated() {
            if (window.innerWidth >= 576) {

                gsap.registerPlugin(ScrollTrigger);

                gsap.to("#deer", {
                    x: 300,
                    // y: 0,
                    duration: .5,
                    // rotation: 360,
                    scrollTrigger: {
                        trigger: "#deer", //觸發得物件
                        // (物件開始位置, 卷軸開始位置) top center bottom px
                        start: "-500",
                        //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
                        end: "+=400",
                        // pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
                        scrub: true, // 物件動畫根據卷軸捲動程度跑
                        // toggleClass: "active", // 增加移除的class，class名稱須為字串
                        // markers: true, // 顯示標記
                    }
                });

                gsap.to("#cloud_01", {
                    x: 200,
                    yoyo: true,
                    duration: 10,
                    repeat: -1,
                    ease: 'none',
                });

                gsap.to("#bird_01", {
                    x: -600,
                    y: 100,
                    duration: .5,
                    // rotation: 360,
                    scrollTrigger: {
                        trigger: "#bird_01", //觸發得物件
                        start: "-300",
                        end: "+=400",
                        scrub: true, // 物件動畫根據卷軸捲動程度跑
                        // toggleClass: "active", // 增加移除的class，class名稱須為字串
                        // markers: true, // 顯示標記
                    }
                });

                gsap.to("#cloud_02", {
                    x: -200,
                    yoyo: true,
                    duration: 10,
                    repeat: -1,
                    ease: 'none',
                });

                gsap.to("#butterfly_01", {
                    x: 300,
                    y: 80,
                    duration: .5,
                    // rotation: 360,
                    scrollTrigger: {
                        trigger: "#butterfly_01", //觸發得物件
                        start: "-430",
                        end: "+=450",
                        scrub: true, // 物件動畫根據卷軸捲動程度跑
                        // toggleClass: "active", // 增加移除的class，class名稱須為字串
                        // markers: true, // 顯示標記
                    }
                });

                gsap.fromTo("#bear_01",
                    {
                        x: -1000,
                        // y: 80,
                    },
                    {
                        x: 0,
                        // y: 80,
                        duration: 1,
                        // rotation: 360,
                        scrollTrigger: {
                            trigger: "#bear_01", //觸發得物件
                            start: "-500",
                            // end: "+=100", 
                            // scrub: true, // 物件動畫根據卷軸捲動程度跑
                            // toggleClass: "active", // 增加移除的class，class名稱須為字串
                            // markers: true, // 顯示標記
                        }
                    });
            }
        },

        beforeDestroy() { },
        destroyed() { },
    })
    
    
    new Vue({
        el: '#ig',
        
        data: {     //變數放這裡
            ig_list: [],
        },
        method: {},
        compute: {},
        watch: {},
        
        //fetch
        created() {
            let url = './php/land_tour_ig.php';
            fetch(url)
            .then(response => response.json())
            .then(text => this.ig_list = text);
            
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
                    console.log(this.getAttribute("src"));
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
        
        // beforeDestroy() {},
        
        
        destroyed() { },
    })
    

    $('#changeButton').click(function () {
        v_landactivity.changeText();
        // console('test');
        alert('ttt');
    });
})






