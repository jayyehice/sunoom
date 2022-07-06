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
            current_pwd:'',
            new_pwd1:'',
            new_pwd2:'',
            img_base64:'',
        },
        methods:{
            logout(){
                sessionStorage.clear();
                
                window.location.href = './new-login.html';
            },
            imgChange(e){
                // console.log('object');
                // let new_img = '';
                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.addEventListener("load", e => {
                    $('.memberPic').attr('src',e.target.result);
                    // new_img = this.result;
                    // console.log(e.target.result);
                    this.img_base64 = e.target.result;
                });
            },
            submit_b(e){
                e.preventDefault();
                let r = confirm('確認修改');
                if(r){
                    // sessionStorage.setItem('phone', this.phone);
                    // $('#submit_btn')[0].click();
                    let url = './php/member_update_data.php';
                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: this.id,
                            image: this.img_base64,
                            phone: this.phone
                        })
                    });
                }
            },
            changePwdBtn(e){
                e.preventDefault();
                let r = confirm('確認變更');
                if(r){
                    if(this.new_pwd1 == this.new_pwd2){
                        let url = `./php/member_new_pwd.php?id=${this.id}&current=${this.current_pwd}&new=${this.new_pwd1}`;
                        fetch(url)
                            .then(response => response.json())
                            // .then(text => console.log(text))
                            .then(text => {
                                if(text == 'success'){
                                    confirm('變更成功');
                                    this.current_pwd = '';
                                    this.new_pwd1 = '';
                                    this.new_pwd2 = '';
                                    $('#changePwda')[0].click();
                                }else{
                                    alert('原有密碼輸入有誤')
                                }
                            })
                    }else{
                        alert('新密碼輸入有誤');
                    }
                }
            },
            pwdInput(e){
                e.stopPropagation();
                $('#changePwda')[0].click();
                // console.log('object');
                e.target.focus();
                
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
                        // console.log(text);
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
