"use strict"

let footer = document.getElementsByTagName("footer")[0];
let footer_li_right = document.getElementById("footer_li_right");
let footer_li_left = document.getElementById("footer_li_left");

let footer_height = parseInt(getComputedStyle(footer).height) + parseInt(getComputedStyle(footer_li_right).width);
let footer_li_left_width = parseInt(getComputedStyle(footer_li_left).width);
let footer_li_right_width = parseInt(getComputedStyle(footer_li_right).width);
console.log(parseInt(getComputedStyle(footer).height));
console.log(footer_li_left_width);
console.log(footer_li_right_width);
console.log(footer_height);
// footer.style.height = 1000;
footer.setAttribute("style", `height: ${footer_height}px;`);
// style.height = 1000;

//console.log(footer.offsetTop);


window.addEventListener("scroll", e => {
    //console.log(window.scrollY);
    if(window.scrollY >= footer.offsetTop){
        
        let scroll_move = footer_li_left_width - (window.scrollY-footer.offsetTop);
        console.log(window.scrollY-footer.offsetTop);
        footer_li_left.setAttribute("style", `width: ${scroll_move}px;`);
    }else{
        footer_li_left.removeAttribute("style");
    }
    
})
