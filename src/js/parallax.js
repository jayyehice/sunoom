const text = document.querySelector('.text');
const muntain01 = document.querySelector('.muntain01');
const muntain02 = document.querySelector('.muntain02');
const tree01 = document.querySelector('.tree01');
const tree02 = document.querySelector('.tree02');
const tree03 = document.querySelector('.tree03');
const sun = document.querySelector('.sun');
const cloud01 = document.querySelector('.cloud01');
const cloud02 = document.querySelector('.cloud02');
const bird = document.querySelector('.bird');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    muntain01.style.top =  value * -0.01 + '%';
});


const draw01 = document.querySelector('draw01');
const draw02 = document.querySelector('draw02');
const draw03 = document.querySelector('draw03');
const draw04 = document.querySelector('draw04');
const draw05 = document.querySelector('draw05');




