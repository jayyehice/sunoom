Vue.component('member',{
    props:['list'],
    data(){
        return{
            content:'正常',
            page:0,
            show_pop_up:false,
            index:0,
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
        },
        comfirm(e){
            this.show_pop_up=false;
        },
        cancle(e){
            this.show_pop_up=false;
        },
        suspend(e){
            let id = this.list[this.content][this.page][this.index][0];
            let data = [['status', 0]];
    
            const url = './php/backgroundSystem_update.php';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    table: 'member',
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
            <h3>會員管理</h3>
            <!-- 
            <input type="text" name="" id="">
            <button>搜尋</button>
            -->
        </div>
        <!-- 表單細分類 -->
        <div class="checkList">
            <div class="col-4 select_button">
                <h5 @click="topButton" class="on">正常</h5>
                <h5 @click="topButton">已停權</h5>

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
                    <li class="col"><p>姓氏</p></li>
                    <li class="col-2"><p>名字</p></li>
                    <li class="col-3"><p>信箱</p></li>
                    <li class="col"><p>違規次數</p></li>
                    <li class="col"><p>會員狀態</p></li>
                    <li class="col"></li>
                </ul>
                
                <ul class="tableList" v-for="(item, index) in list[content][page]">
                    <li class="col"><p>{{item[0]}}</p></li>
                    <li class="col"><p>{{item[7]}}</p></li>
                    <li class="col-2"><p>{{item[8]}}</p></li>
                    <li class="col-3"><p>{{item[1]}}</p></li>
                    <li class="col"><p>{{item[6]}}</p></li>
                    <li class="col"><p>{{item[5]}}</p></li>
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

            <div class="formBody_06">
                <h3>會員資訊</h3>
                <form class="Form_06 col" action="">
                    <div class="leftForm_06 col-5">
                        <ul>
                            <li>
                                <h4>編號:</h4>
                                <h4>{{list[content][page][index][0]}}</h4>
                            </li>
                            <li>
                                <h4>姓名:</h4>
                                <h4>{{list[content][page][index][7]+list[content][page][index][8]}}</h4>
                            </li>
                            <li>
                                <h4>電話:</h4>
                                <h4>{{list[content][page][index][3]}}</h4>
                            </li>
                            <li>
                                <h4>Email:</h4>
                                <h4>{{list[content][page][index][1]}}</h4>
                            </li>
                        </ul>

                    </div>
                    <div class="centerForm_06 col-1">
                        <div></div>
                    </div>
                    <div class="rightForm_06 col-5">
                        <ul>
                            <li>
                                <h4>建立日期:</h4>
                                <h4>{{list[content][page][index][4]}}</h4>
                            </li>
                            <li>
                                <h4>會員狀態:</h4>
                                <h4>{{list[content][page][index][5]}}</h4>
                            </li>
                            <li>
                                <h4>違規紀錄:</h4>
                                <h4>{{list[content][page][index][6]}}</h4>
                            </li>
                        </ul>

                    </div>
                </form>            
                <div class="buttonBlock_06 row">
                    <button class="b1 col-1 offset-3" @click="comfirm">確認</button>
                    <div class="col-1"></div>
                    <button class="b2 col-1" @click="cancle">取消</button>
                    <div class="col-1"></div>
                    <button class="b3 col-2" @click="suspend" v-if="list[content][page][index][9]">停權該會員</button>
                </div>
            </div>
        </div>
    </div> 
    `
    ,
})

