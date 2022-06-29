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

