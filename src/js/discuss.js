// const { cleanData } = require("jquery");

window.addEventListener("load", function(){
    


    new Vue({
        el: '#discuss',
    
        data: {
            origin_article:[],
            offical:[],
            render_list:[],
            articleid:0,
            comment_list:[],
            memberid:0,
            memberphoto:'./img/common/member/default_big.jpg',
            membername:'訪客',
        },
        methods: {
            render_li(e){
                // console.log(e.target.closest('ul').querySelectorAll('li'));
                $(e.target.closest('ul')).find('li.on').removeClass('on');
                $(e.target.closest('li')).addClass('on');
                this.render_list = this.origin_article[e.target.closest('li').dataset.category];

            },
            add_new_comment(e){
                let input_task_name = document.getElementsByClassName("task_name")[0];

                // 新增評論至DB
                let url = `./php/discuss_new_comment.php?articleid=${this.articleid}&authorid=${this.memberid}&content=${input_task_name.value}`;
                fetch(url)

                //重新抓評論list
                this.update_comment_list(this.articleid)
                    

                input_task_name.value = "";
            },
            update_comment_list(id){
                setTimeout(e => {
                    let url = `./php/discuss_get_comment.php?articleid=${id}`;
                    fetch(url)
                        .then(response => response.json())
                        // .then(text => console.log(text))
                        .then(text => this.comment_list = text)
                },500)
            },
            delete_comment(id){
                // console.log(id);
                let r = confirm("確認移除？");
                if (r) {
                    let url = `./php/discuss_delete_comment.php?commentid=${id}`;
                    fetch(url)
                    
                    this.update_comment_list(this.articleid)  
                }
            },
            update_comment(e){
                // console.log(e.target);

                if (e.target.classList.contains("btn_update")) {
                    if (e.target.getAttribute("data-edit") == undefined) { // 進入編輯狀態
            
                        e.target.setAttribute("data-edit", true);
                        let li_el = e.target.closest("li");
                        li_el.querySelector("p.para").classList.toggle("-none");
                        li_el.querySelector("input.task_name_update").classList.toggle("-none");
                        li_el.querySelector("button.btn_delete").disabled = true;
            
                    } else {
                        let update_task_name = (e.target.closest("li").querySelector("input.task_name_update").value).trim();
            
                        if (update_task_name == "") {
                            alert("請輸入評論");
                        } else {

                            let url = `./php/discuss_update_comment.php?commentid=${e.target.closest("li").dataset.commentid}&content=${update_task_name}`;
                            fetch(url)
                            
                            
                            //恢復原狀
                            let p_el = e.target.closest("li").querySelector("p.para");
                            p_el.innerHTML = update_task_name;
                            p_el.classList.toggle("-none");
                            
                            let input_update_el = e.target.closest("li").querySelector("input.task_name_update");
                            input_update_el.value = update_task_name;
                            input_update_el.classList.toggle("-none");
                            e.target.closest("li").querySelector("button.btn_delete").disabled = false;
                            e.target.removeAttribute("data-edit");
            
                        }
                    }

                }

            },
            newArticleBtn(){
                // 發表文章按鈕
                let r = confirm('確認是否送出文章?');
                if(r){
                    document.getElementById('new_article_submit_btn').click();
                }
                
            },
            contentSlice(content){
                return content
            },
        },
        computed: {},
        watch: {
            articleid: function(newValue){
                this.update_comment_list(newValue);
            }
        },
        created() {
            const url = './php/discuss.php';
            fetch(url)
                .then(response => response.json())
                .then(text => {
                    this.origin_article = text;
                    this.offical = text["offical"];
                    this.render_list = text["all"];
                })
        },
        mounted() {
            //帶入會員ID
            if(sessionStorage.getItem('id')){
                this.memberid = sessionStorage.getItem('id');
                this.memberphoto = sessionStorage.getItem('photo');
                this.membername = sessionStorage.getItem('first_name');
            }else{
                this.memberid = 0;
                this.memberphoto = './img/common/member/default_big.jpg';
                this.membername = '訪客';
            }
        },
        updated() {

            // ----------------------------------切換頁籤------------------------------------
            let search_obj = new URLSearchParams(location.search);
            let type = search_obj.get("type");
            if(type == 'food'){
                $('#active2')[0].click();
            }else if(type == 'live'){
                $('#active3')[0].click();
            }else if(type == 'tour'){
                $('#active4')[0].click();
            }
            
            // ------------------------------開啟pop-up-out彈窗------------------------------
            //官方文章開啟
            let official_article_a = document.getElementsByClassName('official_article_a');
            for(let i=0; i<official_article_a.length; i++){
                official_article_a[i].addEventListener("click", e => {
                    e.preventDefault();
                    // console.log(official_article_a[i].dataset.articleid);
                    this.articleid = official_article_a[i].dataset.articleid;

                    
                    $('.pop-up-out').css('display','block')
                    $('.discuss-region').children('div').children('img').attr("src", $(official_article_a[i]).children('img').attr("src"));
                    $('.pop-up').find('.span1')[0].innerText=$(official_article_a[i]).find('p')[0].innerText;//觀看次數
                    $('.pop-up').find('.span2')[0].innerText=$(official_article_a[i]).find('p')[1].innerText;//評論次數
                    $('.pop-up > h3')[0].innerText=$(official_article_a[i]).find('h3')[0].innerText;//標題

                    for(let j=0; j<this.offical.length; j++){
                        if(this.offical[j][0] == official_article_a[i].dataset.articleid){

                            $('.pop-up').find('.comment-region > p')[0].innerText=this.offical[j][4];//內文
                        }
                    }
                    
                    $('.pop-up').find('.span3')[0].innerText='Sunoom';//作者
                    $('.pop-up').find('.icons2 img').attr("src","./img/common/member/sunoomlogo_author.png")//作者頭像
                    $('html').attr("style","overflow: hidden");
                })
            }

            // 討論區文章內容更換(開啟)

            let article1 = document.getElementsByClassName('article1');
            for(let i=0; i<article1.length; i++){
                article1[i].addEventListener("click", e => {
                    e.preventDefault();
                    let renderid = e.target.closest('li').querySelector('a').dataset.index;
                    this.articleid = $(article1[i]).data("articleid");
                    $('.discuss-region').children('div').children('img').attr("src", $(article1[i]).children('.img_1').children('img').attr("src"))
                    $('.pop-up').find('.span1')[0].innerText = $(article1[i]).find('.span2')[0].innerText;//觀看次數
                    $('.pop-up').find('.span2')[0].innerText = $(article1[i]).find('.span3')[0].innerText;//評論次數
                    $('.pop-up > h3')[0].innerText=$(article1[i]).find('.title > h5')[0].innerText;//標題
                    // $('.pop-up').find('.comment-region > p')[0].innerText=$(article1[i]).find('.comment > p')[0].innerText;//內文
                    $('.pop-up').find('.comment-region > p')[0].innerText = this.render_list[renderid][4];//內文
                    $('.pop-up').find('.span3')[0].innerText=$(article1[i]).find('.span1')[0].innerText;//作者
                    $('.pop-up').find('.icons2 img').attr("src",$(article1[i]).find('.icon-1 img').attr("src"))//作者頭像
                    $('.pop-up-out').css('display','block')
                    $('html').attr("style","overflow: hidden");

                    

                })
            }

            
            // ------------------------------關閉pop-up-out彈窗------------------------------
            // 叉叉按鈕
            $('.img10').click(function(e){
                // console.log('img10')
                e.preventDefault();
                $('.pop-up-out').removeAttr("style");
                $('html').removeAttr("style");
            });

            $('.pop-up-out').click(function(){
                $(this).removeAttr("style");
                $('html').removeAttr("style");
            })

            $('.pop-up').click(function(e){
                e.stopPropagation();
            })

            //------------------------------- 評論區 -------------------------------

            //新增評論CSS，改變class
            
            var input_task_name = document.getElementsByClassName("task_name")[0];

            input_task_name.addEventListener("focus", function () {
                this.closest("div.task_add_block").classList.add("-on");
            });
            input_task_name.addEventListener("blur", function () {
                this.closest("div.task_add_block").classList.remove("-on");
            });


            // ------------------------------發表新文章------------------------------
            // 開啟
            document.getElementById('post_new_article').addEventListener('click', e => {
                if(this.memberid == 0){
                    let r = confirm('請先登入，或註冊會員');
                    if(r){
                        window.location.href = './new-login.html';
                    }
                }else{
                    $('.form_region').css('display','block')
                    $('html').attr("style","overflow: hidden");

                }

            })
            // $('#post_new_article').click(function(){
            //     // console.log('discussion')
            //     // e.preventDefault();
            // });

            // 關閉
            $('.png1').click(function(e){
                // console.log('png1')
                e.preventDefault();
                $('.form_region').removeAttr("style");
                $('html').removeAttr("style");
            });

            $('.form_region').click(function(){
                $(this).removeAttr("style");
                $('html').removeAttr("style");
            })

            $('.absolute').click(function(e){
                e.stopPropagation();
            })

            //上傳圖片，顯示縮圖
            $('#upload_img').change(function(){
                // console.log($(this).prev().find('img')[0]);
                // console.log(this);
                //預覽圖
                let reader = new FileReader();
                reader.readAsDataURL(this.files[0]);
                reader.addEventListener("load", function(){
                    $('#upload_img').prev().find('img').attr('src',this.result);
                });
            });

            // 發表文章按鈕
            // $('#new_article_btn').click(function(){
            //     let r = confirm('確認是否送出文章?');
            //     if(r){
            //         document.getElementById('new_article_submit_btn').click();
            //     }
            // });
        },
    })
});


//頁籤點擊的顏色變換
// $(".active").click(function(){
//     $(this).css("background-color","#ebca56");
//     // $(this).parent().find('.active').css("background-color","#33CC33");

//     $(this).siblings('.active').css("background-color",'#F5F0DD');
// });


