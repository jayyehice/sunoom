// const { cleanData } = require("jquery");

window.addEventListener("load", function(){
    


    new Vue({
        el: '#article',
    
        data: {     // 變數放這裡！           
            // articleList: [],
            offical:[],
            live:[],
            food:[],
            tour:[],
            all:[],
            render_list:[],
        },
        methods: {
            render_li(list){
                this.render_list = list;
            },
        },
        computed: {},
        watch: {},
        created() {
            const url = './php/discuss.php';
            fetch(url)
                .then(response => response.json())
                .then(text => {
                    this.offical = text["offical"];
                    this.live = text["live"];
                    this.food = text["food"];
                    this.tour = text["tour"];
                    let temp = text["live"].concat(text["food"]);
                    temp = temp.concat(text["tour"]);
                    this.all = temp;
                    this.render_list = temp;
                })

                

            
        },
        mounted() {
            // 取消所有a的預設行為
            $('a').click(function(e){
                e.preventDefault();
                
            });
        },
        updated() {
            
            // ------------------------------開啟pop-up-out彈窗------------------------------

            $('.official_article_a').click(function(e){
                e.preventDefault();
                $('.pop-up-out').css('display','block')
                $('.discuss-region').children('div').children('img').attr("src", $(this).children('img').attr("src"));
                $('.pop-up').find('.span1')[0].innerText=$(this).find('p')[0].innerText;
                $('.pop-up').find('.span2')[0].innerText=$(this).find('p')[1].innerText;
                $('.pop-up > h3')[0].innerText=$(this).find('h3')[0].innerText;
                $('.pop-up').find('.span3')[0].innerText='Sunoom';//作者
                $('.pop-up').find('.icons2 img').attr("src","img/discuss/sunoomlogo_author.png")//作者頭像
                $('html').attr("style","overflow: hidden");
            });

            // 討論區文章內容更換(開啟)
            $('.article1').click(function(e){
                // console.log('article1')
                e.preventDefault();
                $('.discuss-region').children('div').children('img').attr("src", $(this).children('.img_1').children('img').attr("src"))
                $('.pop-up').find('.span1')[0].innerText = $(this).find('.span2')[0].innerText;//觀看次數
                $('.pop-up').find('.span2')[0].innerText = $(this).find('.span3')[0].innerText;//評論次數
                $('.pop-up > h3')[0].innerText=$(this).find('.title > h5')[0].innerText;//標題
                $('.pop-up').find('.comment-region > p')[0].innerText=$(this).find('.comment > p')[0].innerText;//內文
                $('.pop-up').find('.span3')[0].innerText=$(this).find('.span1')[0].innerText;//作者
                $('.pop-up').find('.icons2 img').attr("src",$(this).find('.icon-1 img').attr("src"))//作者頭像
                // console.log($(this).find('.comment > p')[0].innerText);
                $('.pop-up-out').css('display','block')
                // console.log($(this).children('.img_1').children('img').attr("src"))
                $('html').attr("style","overflow: hidden");
            });

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



            // ------------------------------發表新文章------------------------------
            // 開啟
            $('#post_new_article').click(function(){
                // console.log('discussion')
                // e.preventDefault();
                $('.form_region').css('display','block')
                $('html').attr("style","overflow: hidden");
            });

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
                //預覽圖
                let reader = new FileReader();
                reader.readAsDataURL(this.files[0]);
                reader.addEventListener("load", function(){
                    $('#upload_img').prev().find('img').attr('src',this.result);
                });
            });

            // 發表文章按鈕
            $('#new_article_btn').click(function(){
                let r = confirm('確認是否送出文章?');
                if(r){
                    document.getElementById('new_article_submit_btn').click();
                }
            });
        },
    })
});








/*
window.addEventListener("load", function () {
    let active = this.document.getElementsByClassName("article_text")[0];
    let active2 = this.document.getElementsByClassName("article_text2")[0];
    let active3 = this.document.getElementsByClassName("article_text3")[0];
    let active4 = this.document.getElementsByClassName("article_text4")[0];
    let active5 = this.document.getElementsByClassName("article_text5")[0];

    $("#active").on("click", function () {
        active.innerHTML =
            `
                <div class="article_text" >
                    <a href="#"  class="article1">
                        <div class="img_1">
                            <img src="img/pexels-matt-hill-9910577 1.jpg" alt="">
                        </div>
                        <div class="content">
                            <div class="title">明島旅遊景點 - 壯觀巨石陣</div>
                            <div class="comment">聽說日島有巨石陣，身為遺跡迷怎麼能錯過呢，立刻飛來明島一日遊。巨石陣的臉..........</div>
                            <div class="icons">
                                <div class="icon-1">
                                    <div>
                                        <img src="img/user.png" alt="">
                                    </div>
                                    <span class="span1">慶記</span>
                                </div>
                                <div class="icon-2">
                                    <div>
                                        <img src="img/cartoon-eyes.png" alt="">
                                    </div>
                                    <span class="span2">16800</span>
                                </div>
                                <div class="icon-3">
                                    <div>
                                        <img src="img/speech-bubble.png" alt="">
                                    </div>
                                    <span class="span3">5</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `
        active2.innerHTML =
            ` <div class="article_text article_text4">
        <a href="#"  class="article1">
            <div class="img_1">
                <img src="img/pexels-le-vampire-2651903 1.jpg" alt="">
            </div>
            <div class="content">
                <div class="title">明島旅遊景點 - 超靈月老神社</div>
                <div class="comment">來明島旅遊之前，小弟有先上官網做功課，對月老神社也只是「哦~是哦」的感想...........</div>
                <div class="icons">
                    <div class="icon-1">
                        <div>
                            <img src="img/user.png" alt="">
                        </div>
                        <span class="span1">慶記</span>
                    </div>
                    <div class="icon-2">
                        <div>
                            <img src="img/cartoon-eyes.png" alt="">
                        </div>
                        <span class="span2">16800</span>
                    </div>
                    <div class="icon-3">
                        <div>
                            <img src="img/speech-bubble.png" alt="">
                        </div>
                        <span class="span3">5</span>
                    </div>
                </div>
            </div>
        </a>
        </div>`

        active3.innerHTML = ""
        active4.innerHTML = ""
        active5.innerHTML = ""


    })

    $("#active2").on("click", function () {
        active.innerHTML =
            `                            
            <div class="article_text">
            <a href="#">
                <div class="img_1">
                    <img src="img/pexels-matt-hill-9910577 1.jpg" alt="">
                </div>
                <div class="content">
                    <div class="title">明島旅遊景點 - 壯觀巨石陣</div>
                    <div class="comment">聽說日島有巨石陣，身為遺跡迷怎麼能錯過呢，立刻飛來明島一日遊。巨石陣的臉..........</div>
                    <div class="icons">
                        <div class="icon-1">
                            <div>
                                <img src="img/user.png" alt="">
                            </div>
                            <span class="span1">慶記</span>
                        </div>
                        <div class="icon-2">
                            <div>
                                <img src="img/cartoon-eyes.png" alt="">
                            </div>
                            <span class="span2">16800</span>
                        </div>
                        <div class="icon-3">
                            <div>
                                <img src="img/speech-bubble.png" alt="">
                            </div>
                            <span class="span3">5</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `
        active2.innerHTML =
            `
    <div class="article_text article_text5">
                                <a href="#">
                                    <div class="img_1">
                                        <img src="img/pexels-oliver-sjöström-1001780 1.jpg" alt="">
                                    </div>
                                    <div class="content">
                                        <div class="title">明島旅遊景點 - 激推！香蕉船的小林教練</div>
                                        <div class="comment">前言說明 ，鄙人是屬於超怕刺激又超愛的那種人，會選擇香蕉船瀑布也是心在作...........</div>
                                        <div class="icons">
                                            <div class="icon-1">
                                                <div>
                                                    <img src="img/user.png" alt="">
                                                </div>
                                                <span class="span1">慶記</span>
                                            </div>
                                            <div class="icon-2">
                                                <div>
                                                    <img src="img/cartoon-eyes.png" alt="">
                                                </div>
                                                <span class="span2">16800</span>
                                            </div>
                                            <div class="icon-3">
                                                <div>
                                                    <img src="img/speech-bubble.png" alt="">
                                                </div>
                                                <span class="span3">5</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
    `
        active3.innerHTML =
            `
            <div class="article_text3">
                                <a href="#">
                                    <div class="img_1">
                                        <img src="img/pexels-aleksandr-neplokhov-2495411 1.jpg" alt="">
                                    </div>
                                    <div class="content">
                                        <div class="title">明島旅遊景點 - 適合全家大小的日島海洋行程</div>
                                        <div class="comment">這次去明島已經是第二次了，純海洋行程豐富卻還蠻慢節奏的，確實有顧到對海...........</div>
                                        <div class="icons">
                                            <div class="icon-1">
                                                <div>
                                                    <img src="img/user.png" alt="">
                                                </div>
                                                <span class="span1">慶記</span>
                                            </div>
                                            <div class="icon-2">
                                                <div>
                                                    <img src="img/cartoon-eyes.png" alt="">
                                                </div>
                                                <span class="span2">16800</span>
                                            </div>
                                            <div class="icon-3">
                                                <div>
                                                    <img src="img/speech-bubble.png" alt="">
                                                </div>
                                                <span class="span3">5</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
    `

    });

    $("#active3").on("click", function () {
        active.innerHTML =
            `
        <div class="article_text">
            <a href="https://www.bing.com/">
                <div class="img_1">
                    <img src="img/pexels-etkin-celep-11728983 1.jpg" alt="">
                </div>
                <div class="content">
                <div class="title">明島旅遊景點 - 獨角獸森林奇遇！？</div>
                <div class="comment">雖然依照時間變化，黑黑的月島會變亮一點，但唯獨獨角獸森林外圍始終漆黑一...........</div>
                    <div class="icons">
                        <div class="icon-1">
                            <div>
                                <img src="img/user.png" alt="">
                            </div>
                        <span class="span1">慶記</span>
                        </div>
                        <div class="icon-2">
                        <div>
                            <img src="img/cartoon-eyes.png" alt="">
                        </div>
                            <span class="span2">16800</span>
                        </div>
                        <div class="icon-3">
                            <div>
                                <img src="img/speech-bubble.png" alt="">
                            </div>
                            <span class="span3">5</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        `

        active2.innerHTML = 
        `
        <div class="article_text3">
        <a href="#">
            <div class="img_1">
                <img src="img/pexels-aleksandr-neplokhov-2495411 1.jpg" alt="">
            </div>
            <div class="content">
                <div class="title">明島旅遊景點 - 適合全家大小的日島海洋行程</div>
                <div class="comment">這次去明島已經是第二次了，純海洋行程豐富卻還蠻慢節奏的，確實有顧到對海...........</div>
                <div class="icons">
                    <div class="icon-1">
                        <div>
                            <img src="img/user.png" alt="">
                        </div>
                        <span class="span1">慶記</span>
                    </div>
                    <div class="icon-2">
                        <div>
                            <img src="img/cartoon-eyes.png" alt="">
                        </div>
                        <span class="span2">16800</span>
                    </div>
                    <div class="icon-3">
                        <div>
                            <img src="img/speech-bubble.png" alt="">
                        </div>
                        <span class="span3">5</span>
                    </div>
                </div>
            </div>
        </a>
    </div>
        `
    
    active3.innerHTML = 
    `
    <div class="article_text article_text4">
                                <a href="#">
                                    <div class="img_1">
                                        <img src="img/pexels-le-vampire-2651903 1.jpg" alt="">
                                    </div>
                                    <div class="content">
                                        <div class="title">明島旅遊景點 - 超靈月老神社</div>
                                        <div class="comment">來明島旅遊之前，小弟有先上官網做功課，對月老神社也只是「哦~是哦」的感想...........</div>
                                        <div class="icons">
                                            <div class="icon-1">
                                                <div>
                                                    <img src="img/user.png" alt="">
                                                </div>
                                                <span class="span1">慶記</span>
                                            </div>
                                            <div class="icon-2">
                                                <div>
                                                    <img src="img/cartoon-eyes.png" alt="">
                                                </div>
                                                <span class="span2">16800</span>
                                            </div>
                                            <div class="icon-3">
                                                <div>
                                                    <img src="img/speech-bubble.png" alt="">
                                                </div>
                                                <span class="span3">5</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
    `

    });

    $("#active4").on("click", function () {
        active.innerHTML =
            `
            <div class="article_text">
            <a href="#">
                <div class="img_1">
                    <img src="img/pexels-le-vampire-2651903 1.jpg" alt="">
                </div>
                <div class="content">
                    <div class="title">明島旅遊景點 - 超靈月老神社</div>
                    <div class="comment">來明島旅遊之前，小弟有先上官網做功課，對月老神社也只是「哦~是哦」的感想...........</div>
                    <div class="icons">
                        <div class="icon-1">
                            <div>
                                <img src="img/user.png" alt="">
                            </div>
                            <span class="span1">慶記</span>
                        </div>
                        <div class="icon-2">
                            <div>
                                <img src="img/cartoon-eyes.png" alt="">
                            </div>
                            <span class="span2">16800</span>
                        </div>
                        <div class="icon-3">
                            <div>
                                <img src="img/speech-bubble.png" alt="">
                            </div>
                            <span class="span3">5</span>
                        </div>
                    </div>
                </div>
            </a>
            </div>
        `
        active2.innerHTML = 
        ` <div class="article_text3">
        <a href="#">
            <div class="img_1">
                <img src="img/pexels-aleksandr-neplokhov-2495411 1.jpg" alt="">
            </div>
            <div class="content">
                <div class="title">明島旅遊景點 - 適合全家大小的日島海洋行程</div>
                <div class="comment">這次去明島已經是第二次了，純海洋行程豐富卻還蠻慢節奏的，確實有顧到對海...........</div>
                <div class="icons">
                    <div class="icon-1">
                        <div>
                            <img src="img/user.png" alt="">
                        </div>
                        <span class="span1">慶記</span>
                    </div>
                    <div class="icon-2">
                        <div>
                            <img src="img/cartoon-eyes.png" alt="">
                        </div>
                        <span class="span2">16800</span>
                    </div>
                    <div class="icon-3">
                        <div>
                            <img src="img/speech-bubble.png" alt="">
                        </div>
                        <span class="span3">5</span>
                    </div>
                </div>
            </div>
        </a>
    </div>`
        active3.innerHTML =
        `
        <div class="article_text article_text5">
        <a href="#">
            <div class="img_1">
                <img src="img/pexels-oliver-sjöström-1001780 1.jpg" alt="">
            </div>
            <div class="content">
                <div class="title">明島旅遊景點 - 激推！香蕉船的小林教練</div>
                <div class="comment">前言說明 ，鄙人是屬於超怕刺激又超愛的那種人，會選擇香蕉船瀑布也是心在作...........</div>
                <div class="icons">
                    <div class="icon-1">
                        <div>
                            <img src="img/user.png" alt="">
                        </div>
                        <span class="span1">慶記</span>
                    </div>
                    <div class="icon-2">
                        <div>
                            <img src="img/cartoon-eyes.png" alt="">
                        </div>
                        <span class="span2">16800</span>
                    </div>
                    <div class="icon-3">
                        <div>
                            <img src="img/speech-bubble.png" alt="">
                        </div>
                        <span class="span3">5</span>
                    </div>
                </div>
            </div>
        </a>
    </div>
    `
        active4.innerHTML = 
        `
        <div class="article_text">
        <a href="#">
            <div class="img_1">
                <img src="img/pexels-matt-hill-9910577 1.jpg" alt="">
            </div>
            <div class="content">
                <div class="title" style="color:red;">明島旅遊景點 - 壯觀巨石陣</div>
                <div class="comment">聽說日島有巨石陣，身為遺跡迷怎麼能錯過呢，立刻飛來明島一日遊。巨石陣的臉..........</div>
                <div class="icons">
                    <div class="icon-1">
                        <div>
                            <img src="img/user.png" alt="">
                        </div>
                        <span class="span1">慶記</span>
                    </div>
                    <div class="icon-2">
                        <div>
                            <img src="img/cartoon-eyes.png" alt="">
                        </div>
                        <span class="span2">16800</span>
                    </div>
                    <div class="icon-3">
                        <div>
                            <img src="img/speech-bubble.png" alt="">
                        </div>
                        <span class="span3">5</span>
                    </div>
                </div>
            </div>
        </a>
    </div>
    `
    });

    $("#active5").on("click", function () {
        active.innerHTML =
            `
            <div class="article_text">
            <a href="#">
                <div class="img_1">
                    <img src="img/pexels-oliver-sjöström-1001780 1.jpg" alt="">
                </div>
                <div class="content">
                    <div class="title">明島旅遊景點 - 激推！香蕉船的小林教練</div>
                    <div class="comment">前言說明 ，鄙人是屬於超怕刺激又超愛的那種人，會選擇香蕉船瀑布也是心在作...........</div>
                    <div class="icons">
                        <div class="icon-1">
                            <div>
                                <img src="img/user.png" alt="">
                            </div>
                            <span class="span1">慶記</span>
                        </div>
                        <div class="icon-2">
                            <div>
                                <img src="img/cartoon-eyes.png" alt="">
                            </div>
                            <span class="span2">16800</span>
                        </div>
                        <div class="icon-3">
                            <div>
                                <img src="img/speech-bubble.png" alt="">
                            </div>
                            <span class="span3">5</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        `
        active2.innerHTML = ""
        active3.innerHTML = ""
        active4.innerHTML = ""
        active5.innerHTML = ""
    });

});
*/


//頁籤點擊的顏色變換
$(".active").click(function(){
    $(this).css("background-color","#ebca56");
    // $(this).parent().find('.active').css("background-color","#33CC33");

    $(this).siblings('.active').css("background-color",'#F5F0DD');
});

// $("#active2").click(function(){
//     $("#active2").css("background-color","#33CC33");
// })

// $("#active3").click(function(){
//     $("#active3").css("background-color","#33CC33");
// })

// $("#active4").click(function(){
//     $("#active4").css("background-color","#33CC33");
// })

// $("#active5").click(function(){
//     $("#active5").css("background-color","#33CC33");
// })


//
