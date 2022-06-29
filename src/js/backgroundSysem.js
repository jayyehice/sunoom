window.addEventListener("load",function(){

    let vm = new Vue({  // vue instance (實例)
        el: '#app',
        data: { 
            id:0,
            account:'',
            authority:0,
            image:'',
            // content:'overview',
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
            
            
        },
        mounted() {
            // console.log(this.memberID);
            // console.log(sessionStorage);
            if(sessionStorage.length === 0){
                this.content = '';
                alert('請重新登入');
                window.location.href = './backgroundSystem_login.html';
                // open('./backgroundSystem_login.html');
            }else{

                
                this.id = sessionStorage['id'];
                this.account = sessionStorage['account'];
                this.authority = sessionStorage['authority'];
                this.image = sessionStorage['image'];

                if(this.authority > 5){
                    this.content = 'overview';
                }
                const url = './php/backgroundSystem.php';
                fetch(url)
                    .then(response => response.json())
                    // .then(text => console.log(text))
                    .then(text => this.data_list = text)
            }
        },
        
                
    });


    document.getElementById('logOut').addEventListener('click', e => {
        sessionStorage.clear();
        window.location.href = './backgroundSystem_login.html';
    })



   
})
//彈窗事件綁定
// function showEdit(nums){
//     console.log(nums);
//     $(`.formBody_0${nums}`).css('display','block')
// }
// function closeBlock(nums){
//     $(`.formBody_0${nums}`).css('display','none')
// }