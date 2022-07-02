let login=document.getElementById('login');
let register=document.getElementById('register');
let form_box=document.getElementsByClassName('form-box')[0];
let register_box=document.getElementsByClassName('register-box')[0];
let login_box=document.getElementsByClassName('login-box')[0];

register.addEventListener('click',()=>{
    form_box.style.transform='translateX(105%)';
    login_box.classList.add('hidden');
    register_box.classList.remove('hidden');
})

login.addEventListener('click',()=>{
    form_box.style.transform='translateX(-5%)';
    register_box.classList.add('hidden');
    login_box.classList.remove('hidden');
})


function validate(){
    var pw1 = document.getElementById("pw1").value;
    var pw2 = document.getElementById("pw2").value;
    if(pw1==pw2){
        document.getElementById("tishi").innerHTML="<font color='green'>兩次密碼相同</font>";
        document.getElementById("submit").disabled = false;
    }else{
        document.getElementById("tishi").innerHTML="<font color='red'>兩次密碼不相同</font>";
        document.getElementById("submit").disabled = true;
    }
}

//以下是註冊頁的js
new Vue({
    el:'#register_region',

    data:{
        register_region_list:[],
        last_name:"",
        first_name:"",
        phone:"",
        email:"",
        password:"",
        email_class:"",
        phone_class:"",
    },

    methods:{
        ftdregister(e){
            e.preventDefault();



            if(this.last_name.value ==="" || this.first_name ==="" || this.phone ==="" ||this.email ==="" ||this.password ===""){
                alert('請填入姓名、電話、信箱、密碼')
            }else{
                let pattern = /^09\d{8}$/;

                if(is.email(this.email)){
                    
                    if(pattern.test(this.phone)){

                        const url=`./php/register.php?last_name=${this.last_name}&first_name=${this.first_name}&phone=${this.phone}&email=${this.email}&password=${this.password}`;
                        fetch(url)
                        .then(response => response.json())
                        .then(text =>{
                            if(text === 'same'){
                                alert('帳號已經註冊，請重新登入');
                                // window.location.href = 'new-login.html';
                                document.getElementById('login').click();
                            }else{
                                sessionStorage.setItem('id', text[0]['id']);
                                sessionStorage.setItem('last_name', text[0]['last_name']);
                                sessionStorage.setItem('first_name', text[0]['first_name']);
                                sessionStorage.setItem('phone', text[0]['phone']);
                                sessionStorage.setItem('email', text[0]['email']);
        
                                window.location.href = 'member.html';
                            }
                        })
                    }else{
                        alert('請填入正確的手機號碼');
                        this.phone_class = '-error';
                    }

                }else{
                    if(pattern.test(this.phone)){

                        alert('請填入正確的信箱');
                        this.email_class = '-error';
                    }else{
                        alert('請填入正確的信箱和手機');
                        this.email_class = '-error';
                        this.phone_class = '-error';
                    }
                }

            }
            // let url = `./php/new-login.php?last_name=${this.last_name}&first_name=${this.first_name}&phone=${this.phone}&email=${this.email}&password=${this.password}`;
            // fetch(url)
            //     .then(response => response.json())
            //     .then(text => {})
        },
        removeErr(e){
            let pattern = /^09\d{8}$/;
            if(pattern.test(this.phone)){
                this.phone_class = '';
            }

            if(is.email(this.email)){
                this.email_class = '';
            }
        }
    }
})


//以下是登錄頁的js函式
new Vue({
    el:'#login_region',

    data:{
        login_region_list:[],
        account:"",
        password:"",
        hint:"請輸入帳號密碼",
        error:'hint',
    },

    methods:{
        submit(e){
            e.preventDefault();

            if(this.account =='' || this.password == ''){
                // console.log('pptt');
                alert('請輸入帳號密碼');
            }else{
                const url = `./php/new-login.php?account=${this.account}&password=${this.password}`;
                fetch(url)
                    .then(response => response.json())
                    .then(text =>{
                        // console.log(text);

                        if(text === 'false'){
                            alert('帳號或密碼錯誤');
                            this.hint = '帳號或密碼錯誤';
                            this.error = 'hint error';
                            
                        }else{
                            sessionStorage.setItem('account',text[0]['account']);
                            sessionStorage.setItem('id',text[0]['id']);
                            sessionStorage.setItem('last_name',text[0]['last_name']);
                            sessionStorage.setItem('first_name',text[0]['first_name']);
                            sessionStorage.setItem('photo',text[0]['photo']);
                            sessionStorage.setItem('phone',text[0]['phone']);
                            window.location.href = 'member.html';
                        }
                    })
            }
                
        },
    },
    compute:{},
    watch:{},
    create(){
   
    },
})


