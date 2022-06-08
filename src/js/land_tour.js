"use strict"

let ig_img = document.getElementsByClassName("ig_img");
let ig_pop_up = document.getElementById("ig_pop_up");
let ig_pop_up_img = document.getElementById("ig_pop_up_img");
let ig_pop_up_content = document.getElementById("ig_pop_up_content");

for(let i=0; i<ig_img.length; i++){
    ig_img[i].addEventListener("click", function(){
        console.log(this.getAttribute("src"));
        ig_pop_up.setAttribute("style", "display:block;");
        ig_pop_up_img.src = this.getAttribute("src");
    });
}

ig_pop_up.addEventListener("click", function(){
    this.removeAttribute("style");
});

ig_pop_up_content.addEventListener("click", function(e){
    e.stopPropagation();
});