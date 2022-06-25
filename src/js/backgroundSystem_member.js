Vue.component('membermangement',{
    props:['list'],
    template:
    `

    <div class="listTitle col-10">
        <!-- 表單抬頭 -->
        <div class="Title">
            <h3>會員管理</h3>
            <input type="text" name="" id="">
            <button>搜尋</button>
        </div>
        <!-- 表單細分類 -->
        <div class="checkList">
            <div class="col-3 select_button">
                <h5>正常</h5>
                <h5>已停權</h5>

            </div>
            <div class="addNew col-9">
                <i class="fa-solid fa-circle-plus"></i>
                <span>新增</span>
            </div>
        </div>
        <!-- 表身 -->
        <div class="tableBox container-fluid">
            <div class="row">
                <ul class="tableTitle">
                    <li class="col"><p>編號</p></li>
                    <li class="col"><p>姓氏</p></li>
                    <li class="col"><p>名字</p></li>
                    <li class="col"><p>信箱</p></li>
                    <li class="col"><p>違規次數</p></li>
                    <li class="col"><p>會員狀態</p></li>
                    <li class="col"></li>
                </ul>
                
                <ul class="tableList">
                    <li class="col"><p>1</p></li>
                    <li class="col"><p>林</p></li>
                    <li class="col"><p>隆哥</p></li>
                    <li class="col"><p>xxxx@gmail.com</p></li>
                    <li class="col"><p>0</p></li>
                    <li class="col"><p>一般會員</p></li>
                    <li class="col button"><button onclick="showEdit(6)">編輯/查看</button></li>
                </ul>

                <ul class="tableList">
                    <li class="col"><p>1</p></li>
                    <li class="col"><p>林</p></li>
                    <li class="col"><p>隆哥</p></li>
                    <li class="col"><p>xxxx@gmail.com</p></li>
                    <li class="col"><p>0</p></li>
                    <li class="col"><p>一般會員</p></li>
                    <li class="col button"><button onclick="showEdit(6)">編輯/查看</button></li>
                </ul>

                <ul class="tableList">
                    <li class="col"><p>1</p></li>
                    <li class="col"><p>林</p></li>
                    <li class="col"><p>隆哥</p></li>
                    <li class="col"><p>xxxx@gmail.com</p></li>
                    <li class="col"><p>0</p></li>
                    <li class="col"><p>一般會員</p></li>
                    <li class="col button"><button onclick="showEdit(6)">編輯/查看</button></li>
                </ul>

                <ul class="tableList">
                    <li class="col"><p>1</p></li>
                    <li class="col"><p>林</p></li>
                    <li class="col"><p>隆哥</p></li>
                    <li class="col"><p>xxxx@gmail.com</p></li>
                    <li class="col"><p>0</p></li>
                    <li class="col"><p>一般會員</p></li>
                    <li class="col button"><button onclick="showEdit(6)">編輯/查看</button></li>
                </ul>

                <ul class="tableList">
                    <li class="col"><p>1</p></li>
                    <li class="col"><p>林</p></li>
                    <li class="col"><p>隆哥</p></li>
                    <li class="col"><p>xxxx@gmail.com</p></li>
                    <li class="col"><p>0</p></li>
                    <li class="col"><p>一般會員</p></li>
                    <li class="col button"><button onclick="showEdit(6)">編輯/查看</button></li>
                </ul>

                <ul class="tableList">
                    <li class="col"><p>1</p></li>
                    <li class="col"><p>林</p></li>
                    <li class="col"><p>隆哥</p></li>
                    <li class="col"><p>xxxx@gmail.com</p></li>
                    <li class="col"><p>0</p></li>
                    <li class="col"><p>一般會員</p></li>
                    <li class="col button"><button onclick="showEdit(6)">編輯/查看</button></li>
                </ul>

                <ul class="tableList">
                    <li class="col"><p>1</p></li>
                    <li class="col"><p>林</p></li>
                    <li class="col"><p>隆哥</p></li>
                    <li class="col"><p>xxxx@gmail.com</p></li>
                    <li class="col"><p>0</p></li>
                    <li class="col"><p>一般會員</p></li>
                    <li class="col button"><button onclick="showEdit(6)">編輯/查看</button></li>
                </ul>

                <ul class="tableList">
                    <li class="col"><p>1</p></li>
                    <li class="col"><p>林</p></li>
                    <li class="col"><p>隆哥</p></li>
                    <li class="col"><p>xxxx@gmail.com</p></li>
                    <li class="col"><p>0</p></li>
                    <li class="col"><p>一般會員</p></li>
                    <li class="col button"><button onclick="showEdit(6)">編輯/查看</button></li>
                </ul>

                <ul class="tableList">
                    <li class="col"><p>1</p></li>
                    <li class="col"><p>林</p></li>
                    <li class="col"><p>隆哥</p></li>
                    <li class="col"><p>xxxx@gmail.com</p></li>
                    <li class="col"><p>0</p></li>
                    <li class="col"><p>一般會員</p></li>
                    <li class="col button"><button onclick="showEdit(6)">編輯/查看</button></li>
                </ul>

                <ul class="tableList">
                    <li class="col"><p>1</p></li>
                    <li class="col"><p>林</p></li>
                    <li class="col"><p>隆哥</p></li>
                    <li class="col"><p>xxxx@gmail.com</p></li>
                    <li class="col"><p>0</p></li>
                    <li class="col"><p>一般會員</p></li>
                    <li class="col button"><button onclick="showEdit(6)">編輯/查看</button></li>
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

