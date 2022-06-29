// gsap.to('.animation01', {width: '65%', duration: 1});

// gsap.from('.draw01', {duration: 1, width: '0%'});
// gsap.to('.draw01', {duration: 1, width: '65%'});


// window.addEventListener("load", e => {
//     if(window.innerWidth>=576){
        
//         gsap.registerPlugin(ScrollTrigger);
        
//         gsap.to("#animation01", {
//             x: 300,
//             duration: .5,
//             scrollTrigger: {
//                 trigger: "#animation01", 
//                 start: "-500", 
//                 end: "+=400", 
//                 scrub: true, 
//             }
//         });
//     } 
// });


var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();


tl.from('.animation01', 1, { width: 0}, "=-.5");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".foodSeaText")
  .setTween(tl)
		.addTo(controller);

// const scene2 = new ScrollMagic.Scene({
//   triggerElement: "blockquote"
// })
//   .setTween(tl2)
// 		.addTo(controller);


function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}






