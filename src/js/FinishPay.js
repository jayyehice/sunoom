window.addEventListener('load',function(){

    let backToIndex = document.getElementsByClassName('backToIndex')[0];
    let backToMember = document.getElementsByClassName('backToMember')[0];

    backToIndex.addEventListener('click',function(){
        window.location.href = './index.html'
    });
    backToMember.addEventListener('click',function(){
        window.location.href = './member.html#orderCheck'
    });


    let vm = new Vue ({
        el:'#app',
        data:{
            orderimg:[],
            // triplist:[],
            // foodlist:[],
            startday:'',
            endday:'',
            // trippepoleNumsList:[],
            // foodpepoleNumsList:[],
            totalPrice:'',
        },
        methods: {
            
        },
        computed:{
            
        },
        created() {
            let nt = JSON.parse(localStorage.getItem('sendToFinishPage')) 
            console.log(nt);

            // let url = './php/Finishpay.php'
            // fetch(url,{
            //     method:'POST', 
            //     headers:{ 'Content-Type': 'application/json' },
            //     body:JSON.stringify({
            //         ordernums:nt
            //     })
            // })
            // .then(response => response.json())
            // .then(text => this.orderList = text)
            let url = `./php/Finishpay.php?ordernums=${nt}`
            fetch(url)
            .then(response => response.json())
            .then(text => {this.orderimg = text})
            
        },
        mounted() {
            let senDays = JSON.parse(localStorage.getItem('sendDays'));
            console.log(senDays);
            this.startday = new Date(senDays[0]).toLocaleDateString();
            this.endday = new Date(senDays[2]).toLocaleDateString();

            // this.trippepoleNumsList = JSON.parse(localStorage.getItem('trippepoleNumsList'));
            // this.foodpepoleNumsList = JSON.parse(localStorage.getItem('foodpepoleNumsList'));
        },
    })
})
