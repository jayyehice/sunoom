"use strict"

let footer = document.getElementById("footer");
let footer_ul = document.getElementById("footer_ul");
let footer_height = parseInt(getComputedStyle(footer_ul).height)+parseInt(getComputedStyle(footer_ul).width)/2;

console.log(window.innerWidth);

if(window.innerWidth >= 576){
    
    footer.setAttribute("style", `height: ${footer_height}px;`);
    
    window.addEventListener("scroll", e => {
        
        if(window.scrollY >= footer.offsetTop){      
            let scroll_move = window.scrollY-footer.offsetTop;
            footer_ul.scrollLeft = scroll_move;
            
        }else{
            footer_ul.scrollLeft = 0;
        }
        
    })
}



