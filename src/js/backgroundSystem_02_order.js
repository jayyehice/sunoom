Vue.component('order_table',{
    props:['list'],
    data(){
        return{
            content:'待付款',
            page:0,
            show_pop_up:false,
            index:0,
            table_name: 'order_table',
        }
    },
    methods: {
        topButton(e){
            $(e.target.closest('div')).find('h5').removeClass('on');
            $(e.target).addClass('on'); 
            this.content = e.target.innerText;
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
            console.log(this.list[this.content][this.page][this.index]);


        },
        changePayStatus(status){
            switch(status){
                case 0:
                    return '未付款';
                    break;
            
                case 1:
                    return '已付款';
                    break;

                default:
                    return '未知';
            }
        },
        comfirm(e){
            this.show_pop_up=false;
        },
        cancle(e){
            this.show_pop_up=false;
        },
        unfinish(e){
            
            let id = this.list[this.content][this.page][this.index][0];
            let data = [['orderstatus', 2]];
            
            const url = './php/backgroundSystem_update.php';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    table: 'order_table',
                    id: id,
                    data: data,
                })
            });
            this.$emit('my-emit', this.table_name);
            this.show_pop_up=false;
        },
    },
    mounted() {
        //右下選單
        $('#pageList > li:nth-child(2)').addClass('on');
        $('#pageList > li:last-child').removeClass('on');
    },
    template:
    `

    <div class="listTitle col-10">
        <!-- 表單抬頭 -->
        <div class="Title">
            <h3>訂單管理</h3>
            <!-- 
            <input type="text" name="" id="">
            <button>搜尋</button>
            -->
        </div>
        <!-- 表單細分類 -->
        <div class="checkList">
            <div class="col-6 select_button">
                <h5 @click="topButton" class="on">待付款</h5>
                <h5 @click="topButton">已付款</h5>
                <h5 @click="topButton">已完成</h5>
                <h5 @click="topButton">已取消</h5>

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
                    <li class="col"><p>訂購人</p></li>
                    <li class="col"><p>總金額</p></li>
                    <li class="col"><p>付款狀態</p></li>
                    <li class="col"><p>付款期限</p></li>
                    
                    <li class="col"></li>
                </ul>
                
                <ul class="tableList" v-for="(item, index) in list[content][page]">
                    <li class="col"><p>{{item[0]}}</p></li>
                    <li class="col"><p>{{item[8]+item[9]}}</p></li>
                    <li class="col"><p>{{item[4]}}</p></li>
                    <li class="col"><p>{{changePayStatus(item[6])}}</p></li>
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
            <div class="formBody_00">
                <h3>訂單資訊</h3>
                <form class="Form col" action="">
                    <div class="leftForm col-6">
                        <ul>
                            <li>
                                <h4>編號:</h4>
                                <p>{{list[content][page][index][0]}}</p>
                            </li>
                            <li>
                                <h4>訂購人:</h4>
                                <p>{{list[content][page][index][8]+list[content][page][index][9]}}</p>
                            </li>
                            <li>
                                <h4>電話:</h4>
                                <p>{{list[content][page][index][11]}}</p>
                            </li>
                            <li>
                                <h4>信箱:</h4>
                                <p id="order_email">{{list[content][page][index][10]}}</p>
                            </li>
                            <li>
                                <h4>付款狀態:</h4>
                                <p>{{changePayStatus(list[content][page][index][6])}}</p>
                            </li>
                            <li>
                                <h4>付款方式:</h4>
                                <p>{{list[content][page][index][3]}}</p>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="rightForm col-6">
                        <ul>
                            <li>
                                <h4>旅遊日期:</h4>
                                <p>1</p>
                            </li>
                            <li>
                                <h4>訂購人數:</h4>
                                <p>1</p>
                            </li>
                            <li id="order_content">
                                <h4>訂購內容:</h4>
                                <p>1</p>
                            </li>
                            <li>
                                <h4>折扣碼:</h4>
                                <p>1</p>
                            </li>
                            <li>
                                <h4>總金額:</h4>
                                <p>{{list[content][page][index][4]}}</p>
                            </li>
                            
                        </ul>
                    </div>
                </form>            
                <div class="buttonBlock row">
                    <button type="submit" class="b1 col-1 offset-3" @click="comfirm">確認</button>
                    <div class="col-1"></div>
                    <button class="b2 col-1" @click="cancle">取消</button>
                    <div class="col-1"></div>
                    <button class="b3 col-2" @click="unfinish" v-if="content=='待付款' || content=='已付款'">不成立訂單</button>
                </div>
                </div>
            
        </div>





    </div> 
    
    `
    ,
})

