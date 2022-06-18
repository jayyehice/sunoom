
window.addEventListener("load", e => {
    if(window.innerWidth>=576){
        
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
})
