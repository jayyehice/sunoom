Vue.component('shop',{
    props:['list'],
    data(){
        return{
            content:'營運中',
            page:0,
            show_pop_up:false,
            index:0,
            island:true,
            name:'',
            price:0,
            principal:'',
            phone:'',
            status:true,
            table_name: 'shop',
        }
    },
    methods: {
        topButton(e){
            $(e.target.closest('div')).find('h5').removeClass('on');
            $(e.target).addClass('on'); 
            this.content = e.target.innerText; 
            this.page = 0;
        },
        changePage(e){
            this.page = e.target.dataset.page;
            // console.log(e.target.dataset.page);
            $(e.target.closest('ul')).find('li.on').removeClass('on');
            $(e.target).addClass('on');
        },
        showEdit(e){
            this.index = e.target.dataset.index;
            this.show_pop_up = true;
            this.name = this.list[this.content][this.page][this.index][2];
            this.price = this.list[this.content][this.page][this.index][9];
            this.principal = this.list[this.content][this.page][this.index][4];
            this.phone = this.list[this.content][this.page][this.index][5];

            if(this.list[this.content][this.page][this.index][8] == 1){
                this.island = true;
            }else if(this.list[this.content][this.page][this.index][8] == 2){
                this.island = false;
            }

            if(this.list[this.content][this.page][this.index][6] == 1){
                this.status = true;
            }else{
                this.status = false;
            }
        },
        comfirm(e){
            let id = this.list[this.content][this.page][this.index][0];
            let island = 1;
            let status = 1;
            if(this.island){
                island = 1;
            }else{
                island = 2;
            }

            if(this.status){
                status = 1;
            }else{
                status = 0;
            }
            let data = [['name', this.name],
                        ['price', this.price], 
                        ['principal', this.principal],
                        ['islandid', island], 
                        ['status', status], 
                        ['phone', this.phone]];
    
            const url = './php/backgroundSystem_update.php';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    table: 'shop',
                    id: id,
                    data: data,
                })
            });
            this.$emit('my-emit', this.table_name);
            this.show_pop_up=false;
        },
        cancle(e){
            this.show_pop_up=false;
        },
        changeSun(e){
            this.island = true;
        },
        changeMoon(e){
            this.island = false;
        },
        changeOpen(e){
            this.status = true;
        },
        changeClose(e){
            this.status = false;
        },
    },
    mounted() {
        $('#pageList > li:nth-child(2)').addClass('on');
    },
    template:
    `

    <div class="listTitle col-10">
        <!-- 表單抬頭 -->
        <div class="Title">
            <h3>餐廳管理</h3>
            <!-- 
            <input type="text" name="" id="">
            <button>搜尋</button>
            -->
        </div>
        <!-- 表單細分類 -->
        <div class="checkList">
            <div class="col-4 select_button">
                <h5 @click="topButton" class="on">營運中</h5>
                <h5 @click="topButton">未營運</h5>

            </div>
            <!-- 
            <div class="addNew col-9">
                <i class="fa-solid fa-circle-plus"></i>
                <span>新增</span>
            </div>
            -->
        </div>
        <!-- 表身 -->
        <div class="tableBox container-fluid">
            <div class="row">
                <ul class="tableTitle">
                    <li class="col"><p>編號</p></li>
                    <li class="col"><p>種類</p></li>
                    <li class="col"><p>價格</p></li>
                    <li class="col"><p>位置</p></li>
                    <li class="col"><p>負責人</p></li>
                    
                    <li class="col"></li>
                </ul>
                
                <ul class="tableList" v-for="(item, index) in list[content][page]">
                    <li class="col"><p>{{item[0]}}</p></li>
                    <li class="col"><p>{{item[2]}}</p></li>
                    <li class="col"><p>{{item[9]}}</p></li>
                    <li class="col"><p>{{item[3]}}</p></li>
                    <li class="col"><p>{{item[4]}}</p></li>
                    
                    <li class="col button"><button :data-index="index" @click="showEdit">編輯/查看</button></li>
                </ul>

                

            </div>
        </div>
    
        <div class="container-fluid">
            <div class="row pages">
                <ul class="pageList col-2 offset-7" id="pageList">
                    <li class=""><</li>
                    <li class="nowPage" :data-page="i" @click="changePage" v-for="(p,i) in list[content].length">{{p}}</li>
                    <li>></li>
                </ul>
            </div>
        </div>




        <div class="pop_up" v-if="show_pop_up">
            <div class="formBody_02">
                <h3>店家資訊</h3>
                <form class="Form_02 col" action="">
                    <ul>
                        <li>
                            <h4>編號:</h4>
                            <p>{{list[content][page][index][0]}}</p>
                        </li>
                        <li>
                            <h4>店名:</h4>
                            <input type="text" v-model="name">
                        </li>
                        <li>
                            <h4>價格:</h4>
                            <input type="text" v-model="price">
                        </li>
                        <li>
                            <h4>負責人:</h4>
                            <input type="text" v-model="principal">
                        </li>
                        <li>
                            <h4>電話:</h4>
                            <input type="text" v-model="phone">
                        </li>
                        <li class="radio">
                            <h4>位置:</h4>
                            <input type="radio" name="island" :checked="island" @change="changeSun">
                            <label for="food">日島</label>
                            <input type="radio" name="island" :checked="!island" @change="changeMoon">
                            <label for="live">月島</label>
                        </li>
                        <li class="radio">
                            <h4>狀態:</h4>
                            <input type="radio" name="article_type" :checked="status" @change="changeOpen">
                            <label for="food">營運中</label>
                            <input type="radio" name="article_type" :checked="!status" @change="changeClose">
                            <label for="live">未營運</label>
                        </li>
                    </ul>
                        
                </form>            
                <div class="buttonBlock_02 row">
                    <button type="submit" class="b01 col-2 offset-3" @click="comfirm">確認</button>
                    <div class="col-2"></div>
                    <button class="b02 col-2" @click="cancle">取消</button>
                </div>
            </div>
            
        </div>




    </div> 
    
    `
    ,
})

