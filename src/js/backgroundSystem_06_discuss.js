Vue.component('discuss',{
    props:['list'],
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
                <h5>文章管理</h5>
                <h5>評論管理</h5>

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
                    <li class="col"><p>類別</p></li>
                    <li class="col"><p>標題</p></li>
                    <li class="col"><p>作者</p></li>
                    <li class="col"><p>日期</p></li>
                    
                    <li class="col"></li>
                </ul>
                
                <ul class="tableList" v-for="(item, index) in list">
                    <li class="col"><p>{{item[0]}}</p></li>
                    <li class="col"><p>{{item[0]}}</p></li>
                    <li class="col"><p>{{item[0]}}</p></li>
                    <li class="col"><p>{{item[0]}}</p></li>
                    <li class="col"><p>{{item[0]}}</p></li>
                    
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

