Vue.component('discount_code',{
    props:['list'],
    data(){
        return{
            content:'',
            page:0,
        }
    },
    methods: {
        addClass(e){
            $(e.target.closest('div')).find('h5').removeClass('on');
            $(e.target).addClass('on'); 
        },
        changePage(e){
            this.page = e.target.dataset.page;
            // console.log(e.target.dataset.page);
            $(e.target.closest('ul')).find('li.on').removeClass('on');
            $(e.target).addClass('on');
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
                <h5 @click="addClass" class="on">進行中</h5>
                <h5 @click="addClass">已結束</h5>

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
                
                <ul class="tableList" v-for="(item, index) in list[page]">
                    <li class="col"><p>{{item[0]}}</p></li>
                    <li class="col-3"><p>{{item[1]}}</p></li>
                    <li class="col-3"><p>{{item[2]}}</p></li>
                    <li class="col-3"><p>{{item[3]}}</p></li>
                    <li class="col"><p>{{item[4]}}</p></li>
                    
                    <li class="col button" :data-index="index"><button onclick="showEdit(6)">編輯/查看</button></li>
                </ul>

                

            </div>
        </div>
    
        <div class="container-fluid">
            <div class="row pages">
                <ul class="pageList col-2 offset-7" id="pageList">
                    <li class=""><</li>
                    <li class="nowPage" :data-page="i" @click="changePage" v-for="(p,i) in list.length">{{p}}</li>
                    <li>></li>
                </ul>
            </div>
        </div>
    </div> 
    
    `
    ,
})
