"use strict"

let faq_li = document.getElementsByClassName('faq_li');
let faq_h5 = document.getElementsByClassName('faq_h5');
let faq_p = document.getElementsByClassName('faq_p');
// console.log(faq_h5);

for(let i=0; i<faq_h5.length; i++){
    faq_h5[i].addEventListener("click", function(){
        // console.log(window.getComputedStyle(faq_p[i]).height);

        let open_height = parseInt(window.getComputedStyle(faq_p[i]).height) + parseInt(window.getComputedStyle(faq_h5[i]).height);

        if(faq_li[i].classList.contains("faq_li-on")){
            faq_li[i].classList.remove("faq_li-on");
            faq_li[i].removeAttribute("style");
        }else{
            faq_li[i].classList.add("faq_li-on");
            faq_li[i].setAttribute("style",`height:${open_height}px;`);
        }
    });
}