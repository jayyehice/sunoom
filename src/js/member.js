$(document).ready(function(){
    
    
    
    new Vue({
        el:'#member',
        
        data:{
            account:'',
            id:'',
            last_name:'',
            first_name:'',
            photo:'',
            phone:'',
        },
        methods:{
            logout(){
                sessionStorage.clear();
                
                window.location.href = './new-login.html';
            },
            imgChange(e){
                // console.log('object');
                let new_img = '';
                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.addEventListener("load", function(){
                    $('.memberPic').attr('src',this.result);
                });
                
            },
            submit_b(e){
                let r = confirm('確認修改');
                if(r){
                    sessionStorage.setItem('phone', this.phone);
                    $('#submit_btn')[0].click();
                }
            }
        },
        mounted() {
            if(sessionStorage.getItem('account')){
                this.account = sessionStorage.getItem('account');
                this.id = sessionStorage.getItem('id');
                this.last_name = sessionStorage.getItem('last_name');
                this.first_name = sessionStorage.getItem('first_name');

                let url = `./php/member_data.php?id=${this.id}`;
                fetch(url)
                    .then(resp => resp.json())
                    .then(text => {
                        console.log(text);
                        this.photo = text[0][10];
                        this.phone = text[0][3];
                    })
            }else{
                alert('請重新登入');
                window.location.href = './new-login.html';
            }
        },
        updated() {
            // 分頁
            var $li = $("ul.memberPage li");
            $($li.eq(0).addClass('active').find('a').attr('href')).siblings('.memberInner').hide();
            
            $li.click(function(e){
                // alert("t");
                $($li).toggleClass("-on");
                $($(this).find('a').attr('href')).show().siblings('.memberInner').hide();
                $(this).addClass('active').siblings('.active').removeClass('active');
                e.preventDefault();
            });
            
            
            // 明細伸縮
            $("#checkOrder").click(function(){
                // alert("t")
                // 出現明細
                // $(".orderDetail").show();
                $(".orderDetailRwd").show();
            });
            
            $("#i").click(function(){
                // alert("t")
                $(".orderDetail").hide();
                $(".orderDetailRwd").hide();
            });
            
            $("#i2").click(function(){
                // alert("t")
                $(".orderDetailRwd").hide();
            });
            
            
            $("#cancel").click(function(){
                confirm("您確定要取消訂單嗎？")
            })
            
        },
    })
    
});
