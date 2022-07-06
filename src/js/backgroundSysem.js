window.addEventListener("load",function(){

    let vm = new Vue({
        el: '#app',
        data: { 
            id:0,
            account:'',
            authority:0,
            image:'',
            content:'',
            data_list:[],
            render_list:[],
        },
        methods: {
            navClick(e){
                let nav_name = e.target.dataset.type;
                this.content = nav_name;
                $(e.target.closest('nav')).find('a.on').removeClass('on');
                e.target.classList.add("on");

                if(nav_name === 'discuss'){
                    let temp = {};
                    temp['article']=this.data_list['article'];
                    temp['comment']=this.data_list['comment'];
                    this.render_list = temp;
                }else{
                    this.render_list = this.data_list[nav_name];
                }
            },
            makeSync(table_name){
                setTimeout(e => {
                    const url = `./php/backgroundSystem.php?table=${table_name}`;
                    fetch(url)
                        .then(response => response.json())
                        // .then(text => console.log(text))
                        .then(text => {
                            this.data_list[table_name] = text[table_name];
                            this.render_list = text[table_name];
                        })
                },500);
            },
            position(auth){
                switch(auth){
                    case '1' :
                        return 'Manager';
                        break;
                    case '10' :
                        return 'Admin';
                        break;
                    default:
                        return 'Undefined';
                }
            },
            
        },
        mounted() {
            if(sessionStorage.length === 0){
                this.content = '';
                alert('請重新登入');
                window.location.href = './backgroundSystem_login.html';
            }else{
                if(sessionStorage['authority']){

                    this.id = sessionStorage['id'];
                    this.account = sessionStorage['account'];
                    this.authority = sessionStorage['authority'];
                    this.image = sessionStorage['image'];
    
                    if(this.authority > 5){
                        this.content = 'overview';
                    }
                    const url = './php/backgroundSystem.php?table=all';
                    fetch(url)
                        .then(response => response.json())
                        // .then(text => console.log(text))
                        .then(text => this.data_list = text)
                }else{
                    this.content = '';
                    alert('請重新登入');
                    window.location.href = './backgroundSystem_login.html';
                }
            }
        },
        
                
    });


    //登出按鈕
    document.getElementById('logOut').addEventListener('click', e => {
        sessionStorage.clear();
        window.location.href = './backgroundSystem_login.html';
    }) 
})
