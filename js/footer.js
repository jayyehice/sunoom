"use strict"

let footer = document.getElementById("footer");
let footer_ul = document.getElementById("footer_ul");
console.log(getComputedStyle(footer_ul).width);

let footer_height = parseInt(getComputedStyle(footer).height)+parseInt(getComputedStyle(footer_ul).width)/2;

// let footer_li_right = document.getElementById("footer_li_right");
// let footer_li_left = document.getElementById("footer_li_left");

// let footer_height = parseInt(getComputedStyle(footer).height) + parseInt(getComputedStyle(footer_li_right).width);
// let footer_li_left_width = parseInt(getComputedStyle(footer_li_left).width);
// let footer_li_right_width = parseInt(getComputedStyle(footer_li_right).width);


footer.setAttribute("style", `height: ${footer_height}px;`);



window.addEventListener("scroll", e => {
    
    if(window.scrollY >= footer.offsetTop){
        
        let scroll_move = window.scrollY-footer.offsetTop;

        footer_ul.scrollLeft = scroll_move;
        
        // console.log(footer_ul.scrollLeft);
    }
    
})
