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
    },

    methods:{
        ftdregister(e){
            e.preventDefault();

            if(this.last_name.value ==="" || this.first_name ==="" || this.phone ==="" ||this.email ==="" ||this.password ===""){
                alert('請填入姓名、電話、信箱、密碼')
            }else{
                const url=`./php/new-login.php?last_name=${this.last_name}&first_name=${this.first_name}&phone=${this.phone}&email=${this.email}&password=${this.password}`;
                fetch(url)
                .then(response => response.json())
                .then(text =>{
                    if(text === 'same'){
                        alert('帳號已經註冊');
                        this.hint='帳號已經註冊';
                        this.error='error';
                    }else{
                        sessionStorage.setItem('id', text[0]['id']);
                        sessionStorage.setItem('last_name', text[0]['last_name']);
                        sessionStorage.setItem('first_name', text[0]['first_name']);
                        sessionStorage.setItem('phone', text[0]['phone']);
                        sessionStorage.setItem('email', text[0]['email']);

                        window.location.href = 'member.html';
                    }
                })
            }
            // let url = `./php/new-login.php?last_name=${this.last_name}&first_name=${this.first_name}&phone=${this.phone}&email=${this.email}&password=${this.password}`;
            // fetch(url)
            //     .then(response => response.json())
            //     .then(text => {})
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
    },

    methods:{
        submit(e){
            e.preventDefault();
            let url = `./php/new-login_2.php?account=${this.account}&password=${this.password}`;
            fetch(url)
                .then(response => response.json())
                // .then(response => console.log(response.json()))
                // .then(text => this.login_region_list = text);
                .then(text => {
                    if(this.account =='' || this.password == ''){
                        // console.log('pptt');
                        alert('請輸入帳號密碼');
                    }else{
                        const url = `./php/new-login_2.php?account=${this.account}&password=${this.password}`;
                        fetch(url)
                            .then(response => response.json())
                            .then(text =>{
                                console.log(text);

                                if(text === 'false'){
                                    alert('帳號或密碼錯誤');
                                    this.hint='帳號或密碼錯誤';
                                    this.error='error';
                                }else{
                                    sessionStorage.setItem('account',text[0]['account']);
                                    sessionStorage.setItem('password',text[0]['password']);

                                    window.location.href = 'member.html';
                                }
                            })
                    }
                });
                // console.log(this.login_region)
                
        },
    },
    compute:{},
    watch:{},
    create(){
   
    },

 
})

