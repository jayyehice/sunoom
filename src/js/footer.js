"use strict"

let footer = document.getElementById("footer");
let footer_ul = document.getElementById("footer_ul");
// console.log(getComputedStyle(footer_ul).width);

let footer_height = parseInt(getComputedStyle(footer_ul).height)+parseInt(getComputedStyle(footer_ul).width)/2;


footer.setAttribute("style", `height: ${footer_height}px;`);



window.addEventListener("scroll", e => {
    
    if(window.scrollY >= footer.offsetTop){
        
        let scroll_move = window.scrollY-footer.offsetTop;

        footer_ul.scrollLeft = scroll_move;
        // footer_ul.setAttribute("style", `left: -${scroll_move}px;`);

        // console.log(scroll_move);
        // console.log(footer_ul.scrollLeft);
        
    }else{
        footer_ul.scrollLeft = 0;
        // footer_ul.removeAttribute('style');
    }
    
})
