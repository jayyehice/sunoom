Vue.component('discount_code',{
    props:['list'],
    data(){
        return{
            content:'進行中',
            page:0,
            show_pop_up:false,
            index:0,
            discount:0,
            keyword:'',
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
            $(e.target.closest('ul')).find('li.on').removeClass('on');
            $(e.target).addClass('on');
        },
        showEdit(e){
            this.index = e.target.dataset.index;
            this.show_pop_up = true;
            this.keyword = this.list[this.content][this.page][this.index][1];
            this.discount = this.list[this.content][this.page][this.index][5];
            // console.log(this.list[this.page]);
        },
        comfirm(e){
            let id = this.list[this.content][this.page][this.index][0];
            let data = [['keyword', this.keyword],
                        ['discount_quantity', this.discount]];
    
            const url = './php/backgroundSystem_update.php';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    table: 'discount_code',
                    id: id,
                    data: data,
                })
            });
            this.show_pop_up=false;
        },
        cancle(e){
            this.show_pop_up=false;
        },
        stop(e){
            let id = this.list[this.content][this.page][this.index][0];
            let data = [['status', 0]];
    
            const url = './php/backgroundSystem_update.php';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    table: 'discount_code',
                    id: id,
                    data: data,
                })
            });
            this.show_pop_up=false;
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
            <h3>優惠劵管理</h3>
            <!-- 
            <input type="text" name="" id="">
            <button>搜尋</button>
            -->
        </div>
        <!-- 表單細分類 -->
        <div class="checkList">
            <div class="col-4 select_button">
                <h5 @click="topButton" class="on">進行中</h5>
                <h5 @click="topButton">已結束</h5>

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
                    <li class="col-3"><p>關鍵字</p></li>
                    <li class="col-3"><p>開始時間</p></li>
                    <li class="col-3"><p>結束時間</p></li>
                    <li class="col"><p>已使用次數</p></li>
                    
                    <li class="col"></li>
                </ul>
                
                <ul class="tableList" v-for="(item, index) in list[content][page]">
                    <li class="col"><p>{{item[0]}}</p></li>
                    <li class="col-3"><p>{{item[1]}}</p></li>
                    <li class="col-3"><p>{{item[2]}}</p></li>
                    <li class="col-3"><p>{{item[3]}}</p></li>
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

            <div class="formBody_05">
                <h3>優惠券管理</h3>
                <form class="Form_05 col" action="">
                    <ul>
                        <li>
                            <h4>編號:</h4>
                            <p>{{list[content][page][index][0]}}</p>
                        </li>
                        <li>
                            <h4>折扣:</h4>
                            <div class="discount_num">
                                <input  type="text" v-model="discount">
                                <p>折</p>
                            </div>
                        </li>
                        <li>
                            <h4>關鍵字:</h4>
                            <input  type="text" v-model="keyword">
                        </li>
                        <li>
                            <h4>使用次數:</h4>
                            <p>{{list[content][page][index][4]}}</p>
                        </li>
                    </ul>
                        
                </form>            
                <div class="buttonBlock_05 row">
                    <button type="submit" class="b01 col-2 offset-1" @click="comfirm">確認</button>
                    <div class="col-1"></div>
                    <button class="b02 col-2" onclick="closeBlock(5)" @click="cancle">取消</button>
                    <div class="col-1"></div>
                    <button class="b02 col-4" @click="stop" v-if="list[content][page][index][6]">結束優惠卷</button>
                </div>
            </div>
        </div>


        
    </div> 
    
    `
    ,
})

