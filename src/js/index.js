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
    let value = window.scrollY - 100;
    // console.log(value);
    text.style.top =  value * .07 + '%';
    muntain02.style.top =  value * -.02 + '%';
    muntain03.style.top =  value * -.008 + '%';
    bird.style.top =  value * -.06+ '%';
    tree01.style.top =  value * -.01+ '%';
    tree02.style.top =  value * .01+ '%';
    sun.style.top =  value * -.08 + '%';
    cloud01.style.left =  value * -.03+ '%';
    cloud02.style.left =  value * .03+ '%';
    grass.style.top =  value * -.008+ '%';
});


var tl = new TimelineMax({onUpdate:updatePercentage});
var t2 = new TimelineMax();
var t3 = new TimelineMax();
var t4 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('.animation01', 1.2, { width: 0}, "=-.7");
tl.from('.animation02', .9, { height: 0}, "=-.5");
tl.from('.animation03', 1.2, { width: 0}, "=-.7");
tl.from('.animation04', .9, { height: 0}, "=-.7");
tl.from('.animation05', .9, { width: 0}, "=-.5");
const scenet1 = new ScrollMagic.Scene({
  triggerElement: ".animation01",
})
.setTween(tl)
.addTo(controller);

t2.from('.animation06', 1.2, { width: 0}, "=-.7");
t2.from('.animation07', .9, { height: 0}, "=-.5");
t2.from('.animation08', 1.2, { width: 0}, "=-.7");
t2.from('.animation09', .9, { height: 0}, "=-.7");
t2.from('.animation10', .9, { width: 0}, "=-.5");
const scenet2 = new ScrollMagic.Scene({
  triggerElement: ".animation06",
})
.setTween(t2)
.addTo(controller);

t3.from('.animation11', 1.2, { width: 0}, "=-.7");
t3.from('.animation12', .9, { height: 0}, "=-.5");
t3.from('.animation13', 1.2, { width: 0}, "=-.7");
t3.from('.animation14', .9, { height: 0}, "=-.7");
t3.from('.animation15', .9, { width: 0}, "=-.5");
const scenet3 = new ScrollMagic.Scene({
  triggerElement: ".animation11",
})
.setTween(t3)
.addTo(controller);

t4.from('.animation16', 1.2, { width: 0}, "=-.7");
t4.from('.animation17', .9, { height: 0}, "=-.5");
t4.from('.animation18', 1.2, { width: 0}, "=-.7");
t4.from('.animation19', .9, { height: 0}, "=-.7");
t4.from('.animation20', .9, { width: 0}, "=-.5");
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







