const text = document.querySelector('#textSunoom');
const muntain02 = document.querySelector('.muntain02');
const muntain03 = document.querySelector('.muntain03');
const tree01 = document.querySelector('.tree01');
const tree02 = document.querySelector('.tree02');
const sun = document.querySelector('.sun');
const cloud01 = document.querySelector('#cloud01');
const cloud02 = document.querySelector('#cloud02');
const bird = document.querySelector('.bird');
const grass = document.querySelector('.grass');


window.addEventListener('scroll', function(){
    let value = window.scrollY - 120;
    // console.log(value);
    text.style.top =  value * .07 + '%';
    muntain02.style.top =  value * -.02 + '%';
    muntain03.style.top =  value * -.008 + '%';
    bird.style.top =  value * -.06 + '%';
    tree01.style.top =  value * -.01+ '%';
    tree02.style.top =  value * .02+ '%';
    sun.style.top =  value * -.08 + '%';
    cloud01.style.left =  value * -.03+ '%';
    cloud02.style.left =  value * .03+ '%';
    // grass.style.top =  value * -.005+ '%';
});


var tl = new TimelineMax({onUpdate:updatePercentage});
var t2 = new TimelineMax();
var t3 = new TimelineMax();
var t4 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('.animation01', .6, { width: 0, opacity: .2});
tl.from('.animation02', .6, { height: 0, opacity: .2});
tl.from('.animation03', .6, { width: 0, opacity: .2});
tl.from('.animation04', .6, { height: 0, opacity: .2});
tl.from('.animation05', .4, { width: 0, opacity: .2});
const scenet1 = new ScrollMagic.Scene({
  triggerElement: ".animation01",
})
.setTween(tl)
.addTo(controller);

t2.from('.animation06', .6, { width: 0, opacity: .2});
t2.from('.animation07', .6, { width: 0, opacity: .2});
t2.from('.animation08', .6, { width: 0, opacity: .2});
t2.from('.animation09', .6, { width: 0, opacity: .2});
t2.from('.animation10', .4, { width: 0, opacity: .2});
const scenet2 = new ScrollMagic.Scene({
  triggerElement: ".animation06",
})
.setTween(t2)
.addTo(controller);

t3.from('.animation11', .6, { width: 0, opacity: .2});
t3.from('.animation12', .6, { width: 0, opacity: .2});
t3.from('.animation13', .6, { width: 0, opacity: .2});
t3.from('.animation14', .6, { width: 0, opacity: .2});
t3.from('.animation15', .4, { width: 0, opacity: .2});
const scenet3 = new ScrollMagic.Scene({
  triggerElement: ".animation11",
})
.setTween(t3)
.addTo(controller);

t4.from('.animation16', .6, { width: 0, opacity: .2});
t4.from('.animation17', .6, { width: 0, opacity: .2});
t4.from('.animation18', .6, { width: 0, opacity: .2});
t4.from('.animation19', .6, { width: 0, opacity: .2});
t4.from('.animation20', .4, { width: 0, opacity: .2});
const scenet4 = new ScrollMagic.Scene({
  triggerElement: ".animation16",
})
.setTween(t4)
.addTo(controller);


function updatePercentage() {
  tl.progress();
  t2.progress();
  t3.progress();
  t4.progress();
  // console.log(tl.progress());
  // console.log("ttt");
}

// gsap.from('.draw01', {duration: 1, width: '0px'});
// gsap.to('.draw01', {duration: 1, width: '65px'});


// button animation
// var animateButton = function(e) {

//   e.preventDefault;
//   //reset animation
//   e.target.classList.remove('animate');
//       // e.target.mousemove.remove('animate');

  
//   e.target.classList.add('animate');
//   setTimeout(function(){
//     e.target.classList.remove('animate');
//   },700);
// };

// var bubblyButtons = document.getElementsByClassName("bubbly-button");

// //   for (var i = 0; i < bubblyButtons.length; i++) {
// //     bubblyButtons[i].addEventListener('click', animateButton, false);
  
// // }
// $(".bubbly-button").click(function(){
//   // alert("tt");
//   setTimeout("location.href='./food.html'",1000); // 3秒後跳轉頁面
// });
// for (var i = 0; i < bubblyButtons.length; i++) {
//   bubblyButtons[i].addEventListener('click', animateButton, false);
// }




