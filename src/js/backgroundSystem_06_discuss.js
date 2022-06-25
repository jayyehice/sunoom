Vue.component('discuss',{
    props:['list'],
    data(){
        return{
            content:'article',
        }
    },
    methods:{
        changeContent(e){
            // console.log(e.target.dataset.type);
            this.content = e.target.dataset.type;
            $(e.target.closest('div')).find('h5').removeClass('on');
            $(e.target).addClass('on'); 
        },
    },
    template:
    `

    <div class="listTitle col-10">
        <!-- 表單抬頭 -->
        <div class="Title">
            <h3>討論區管理</h3>
            <!-- 
            <input type="text" name="" id="">
            <button>搜尋</button>
            -->
        </div>
        <!-- 表單細分類 -->
        <div class="checkList">
            <div class="col-4 select_button">
                <h5 data-type="article" @click="changeContent" class="on">文章管理</h5>
                <h5 data-type="comment" @click="changeContent">評論管理</h5>

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
            <div class="row" v-if="content == 'article'">
                <ul class="tableTitle">
                    <li class="col"><p>編號</p></li>
                    <li class="col"><p>類別</p></li>
                    <li class="col-2"><p>標題</p></li>
                    <li class="col"><p>作者</p></li>
                    <li class="col"><p>日期</p></li>
                    
                    <li class="col"></li>
                </ul>
                
                <ul class="tableList" v-for="(item, index) in list[content]">
                    <li class="col"><p>{{item[0]}}</p></li>
                    <li class="col"><p>{{item[2]}}</p></li>
                    <li class="col-2"><p>{{item[3]}}</p></li>
                    <li class="col"><p>{{item[5]}}</p></li>
                    <li class="col"><p>{{item[9]}}</p></li>
                    
                    <li class="col button" :data-index="index"><button onclick="showEdit(6)">編輯/查看</button></li>
                </ul>

            </div>

            <div class="row"  v-if="content == 'comment'">
                <ul class="tableTitle">
                    <li class="col"><p>編號</p></li>
                    <li class="col"><p>對應文章</p></li>
                    <li class="col"><p>內容</p></li>
                    <li class="col"><p>作者</p></li>
                    <li class="col"><p>日期</p></li>
                    
                    <li class="col"></li>
                </ul>
                
                <ul class="tableList" v-for="(item, index) in list[content]">
                    <li class="col"><p>{{item[0]}}</p></li>
                    <li class="col"><p>{{item[1]}}</p></li>
                    <li class="col"><p>{{item[3]}}</p></li>
                    <li class="col"><p>{{item[2]}}</p></li>
                    <li class="col"><p>{{item[4]}}</p></li>
                    
                    <li class="col button" :data-index="index"><button onclick="showEdit(6)">編輯/查看</button></li>
                </ul>

            </div>
        </div>
    
        <div class="container-fluid">
            <div class="row pages">
                <ul class="pageList col-2 offset-7">
                    <li class=""><</li>
                    <li class="nowPage">1</li>
                    <li>></li>
                </ul>
            </div>
        </div>
    </div> 
    
    `
    ,
})

