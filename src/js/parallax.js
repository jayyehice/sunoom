const text = document.querySelector('#textSunoom');
const muntain01 = document.querySelector('.muntain01');
const muntain02 = document.querySelector('.muntain02');
const tree01 = document.querySelector('.tree01');
// const tree02 = document.querySelector('.tree02');
// const tree03 = document.querySelector('.tree03');
const sun = document.querySelector('.sun');
const cloud01 = document.querySelector('#cloud01');
const cloud02 = document.querySelector('#cloud02');
const bird = document.querySelector('.bird');
const grass = document.querySelector('.grass');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    text.style.top =  value * 0.03 + '%';
    muntain01.style.top =  value * -0.01 + '%';
    muntain02.style.top =  value * -0.02 + '%';
    bird.style.top =  value * -0.01+ '%';
    tree01.style.top =  value * -0.01+ '%';
    sun.style.right =  value * -0.05+ '%';
    cloud01.style.top =  value * -0.05+ '%';
    cloud02.style.top =  value * -0.05+ '%';
});





