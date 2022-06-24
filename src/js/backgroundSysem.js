


Vue.component('membermangement',{
    props:['list'],
    template:
    `<div>
            <div class="listTitle col-10">
            <!-- 表單抬頭 -->
            <div class="Title">
                <h3>會員管理</h3>
                <input type="text" name="" id="">
                <button>搜尋</button>
            </div>
            <!-- 表單細分類 -->
            <div class="checkList">
                <h4 class="col-2">正常</h4>
                <h4 class="col-2">已停權</h4>
                <div class="addNew col-2 offset-5">
                <i class="fa-solid fa-circle-plus"></i>
                <span>新增</span>
            </div>
            </div>
            <!-- 表身 -->
            <div class="tableBox container-fluid">
                <div class="row">
                    <ul class="tableTitle">
                        <li class="col">編號</li>
                        <li class="col">姓名</li>
                        <li class="col-2">信箱</li>
                        <li class="col">違規次數</li>
                        <li class="col">會員狀態</li>
                        <li class="col"></li>
                    </ul>
                    <ul class="tableList" v-for="member in list">
                        <li class="col">{{member[0]}}</li>
                        <li class="col">{{member[1]}}</li>
                        <li class="col-2">{{member[2]}}</li>
                        <li class="col">{{member[7]}}</li>
                        <li class="col">{{member[6]}}</li>
                        <li class="col"><button onclick="showEdit(6)">編輯/查看</button></li>
                    </ul>
                    <ul class="tableList">
                        <li class="col">1</li>
                        <li class="col">隆哥</li>
                        <li class="col">xxxx@gmail.com</li>
                        <li class="col">0</li>
                        <li class="col">一般會員</li>
                        <li class="col"><button onclick="showEdit(6)">編輯/查看</button></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <ul class="pageList col-2 offset-7">
                    <li class=""><</li>
                    <li class="nowPage">1</li>
                    <li>></li>
                </ul>
            </div>
        </div> 
    </div>`
    ,
})

let vm = new Vue({  // vue instance (實例)
    el: '#app',
    data: { 
        countent:'membermangement',
        member_list:[],
        content:'',
    },
    methods: {
        navClick(e){
            // console.log('object');
            // this.content='membermangement'; 
            // console.log(e.target.closest('nav').querySelectorAll('a'));
            $(e.target.closest('nav')).find('a.on').removeClass('on');
            e.target.classList.add("on");
        },
    },
    created() {
        const url = './php/backgroundSystem.php';
        fetch(url)
            .then(response => response.json())
            .then(member => this.member_list = member);
    },
              
});

window.addEventListener("load",function(){
    
    let table = this.document.getElementsByClassName("table")[0];

    // $("#orderManagement").on("click",function(){
    //     table.innerHTML = 
    //     `<div class="listTitle col-8">
    //                 <!-- 表單抬頭 -->
    //                 <div class="Title">
    //                     <h3>訂單管理</h3>
    //                     <input type="text" name="" id="">
    //                     <button>搜尋</button>
    //                 </div>
    //                 <!-- 表單細分類 -->
    //                 <div class="checkList">
    //                     <h4>未完成</h4>
    //                     <h4>已完成</h4>
    //                     <h4>已取消</h4>
    //                 </div>
    //                 <!-- 表身 -->
    //                 <div class="tableBox container-fluid">
    //                     <div class="row">
    //                         <ul class="tableTitle">
    //                             <li class="col">編號</li>
    //                             <li class="col">訂購人</li>
    //                             <li class="col">總金額</li>
    //                             <li class="col">付款狀態</li>
    //                             <li class="col">付款期限</li>
    //                             <li class="col"></li>
    //                         </ul>
    //                         <ul class="tableList">
    //                             <li class="col">1</li>
    //                             <li class="col">隆隆哥</li>
    //                             <li class="col">30000</li>
    //                             <li class="col">未付款</li>
    //                             <li class="col">2022.06.20</li>
    //                             <li class="col"><button class="edit_Check" onclick="showEdit(0)";>編輯/查看</button></li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //     </div>
    //     <div class="container-fluid">              
    //         <div class="row">
    //             <ul class="pageList col-2 offset-7">
    //                 <li class=""><</li>
    //                 <li class="nowPage">1</li>
    //                 <li>></li>
    //             </ul>
    //         </div>
    //     </div>`
    // })
    // $("#eventManagement").on("click",function(){
    //     table.innerHTML = 
    //     `<div class="listTitle col-8">
    //                 <!-- 表單抬頭 -->
    //                 <div class="Title">
    //                     <h3>活動管理</h3>
    //                     <input type="text" name="" id="">
    //                     <button>搜尋</button>
    //                 </div>
    //                 <!-- 表單細分類 -->
    //                 <div class="checkList">
    //                     <h4 class="col-2">進行中</h4>
    //                     <h4 class="col-2">已結束</h4>
    //                     <div class="addNew col-2 offset-5">
    //                     <i class="fa-solid fa-circle-plus"></i>
    //                     <span>新增</span>
    //                 </div>
    //                 </div>
    //                 <!-- 表身 -->
    //                 <div class="tableBox container-fluid">
    //                     <!-- <div class="container-fluid"> -->
    //                         <div class="row">
    //                             <ul class="tableTitle">
    //                                 <li class="col">編號</li>
    //                                 <li class="col">屬性</li>
    //                                 <li class="col">名稱</li>
    //                                 <li class="col">價格</li>
    //                                 <li class="col">單場人數</li>
    //                                 <li class="col"></li>
    //                             </ul>
    //                             <ul class="tableList">
    //                                 <li class="col">1</li>
    //                                 <li class="col">陸</li>
    //                                 <li class="col">生態導覽</li>
    //                                 <li class="col">9527</li>
    //                                 <li class="col">100人</li>
    //                                 <li class="col"><button onclick="showEdit(1)">編輯/查看</button></li>
    //                             </ul>
    //                             <ul class="tableList">
    //                                 <li class="col">1</li>
    //                                 <li class="col">陸</li>
    //                                 <li class="col">生態導覽</li>
    //                                 <li class="col">9527</li>
    //                                 <li class="col">100人</li>
    //                                 <li class="col"><button onclick="showEdit(1)">編輯/查看</button></li>
    //                             </ul>
    //                         </div>
    //                     <!-- </div> -->
    //                 </div>
    //             </div>
    //             <div class="container-fluid">
    //                 <div class="row">
    //                     <ul class="pageList col-2 offset-7">
    //                         <li class=""><</li>
    //                         <li class="nowPage">1</li>
    //                         <li>></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //          </div>`
    // })
    // $("#StoreManagement").on("click",function(){
    //     table.innerHTML = 
    //     `<div class="listTitle col-8">
    //                 <!-- 表單抬頭 -->
    //                 <div class="Title">
    //                     <h3>店家管理</h3>
    //                     <input type="text" name="" id="">
    //                     <button>搜尋</button>
    //                 </div>
    //                 <!-- 表單細分類 -->
    //                 <div class="checkList">
    //                     <h4 class="col-2">營運中</h4>
    //                     <h4 class="col-2">未營運</h4>
    //                     <div class="addNew col-2 offset-5">
    //                     <i class="fa-solid fa-circle-plus"></i>
    //                     <span>新增</span>
    //                 </div>
    //                 </div>
    //                 <!-- 表身 -->
    //                 <div class="tableBox container-fluid">
    //                     <div class="row">
    //                         <ul class="tableTitle">
    //                             <li class="col">編號</li>
    //                             <li class="col">店名</li>
    //                             <li class="col">位置</li>
    //                             <li class="col">負責人</li>
    //                             <li class="col"></li>
    //                         </ul>
    //                         <ul class="tableList">
    //                             <li class="col">1</li>
    //                             <li class="col">鼎泰豐</li>
    //                             <li class="col">45°N, 20°E</li>
    //                             <li class="col">杰哥</li>
    //                             <li class="col"><button onclick="showEdit(2)">編輯/查看</button></li>
    //                         </ul>
    //                         <ul class="tableList">
    //                             <li class="col">1</li>
    //                             <li class="col">鼎泰豐</li>
    //                             <li class="col">45°N, 20°E</li>
    //                             <li class="col">杰哥</li>
    //                             <li class="col"><button onclick="showEdit(2)">編輯/查看</button></li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="container-fluid">
    //                 <div class="row">
    //                     <ul class="pageList col-2 offset-7">
    //                         <li class=""><</li>
    //                         <li class="nowPage">1</li>
    //                         <li>></li>
    //                     </ul>
    //                 </div>
    //             </div>`
    // })
    // $("#productManagement").on("click",function(){
    //     table.innerHTML = 
    //     `<div class="listTitle col-8">
    //                 <!-- 表單抬頭 -->
    //                 <div class="Title">
    //                     <h3>食宿管理</h3>
    //                     <input type="text" name="" id="">
    //                     <button>搜尋</button>
    //                 </div>
    //                 <!-- 表單細分類 -->
    //                 <div class="checkList">
    //                     <h4 class="col-1">食</h4>
    //                     <h4 class="col-1">宿</h4>
    //                     <h4 class="col-2">已下架</h4>
    //                     <div class="addNew col-2 offset-4">
    //                     <i class="fa-solid fa-circle-plus "></i>
    //                     <span>新增</span>
    //                 </div>
    //                 </div>
    //                 <!-- 表身 -->
    //                 <div class="tableBox container-fluid">
    //                     <div class="row">
    //                         <ul class="tableTitle">
    //                             <li class="col">編號</li>
    //                             <li class="col">屬性</li>
    //                             <li class="col">名稱</li>
    //                             <li class="col">價格</li>
    //                             <li class="col">單場人數</li>
    //                             <li class="col"></li>
    //                         </ul>
    //                         <ul class="tableList">
    //                             <li class="col">1</li>
    //                             <li class="col">陸</li>
    //                             <li class="col">BBQ</li>
    //                             <li class="col">1500</li>
    //                             <li class="col">100人</li>
    //                             <li class="col"><button onclick="showEdit(3)">編輯/查看</button></li>
    //                         </ul>
    //                         <ul class="tableList">
    //                             <li class="col">1</li>
    //                             <li class="col">陸</li>
    //                             <li class="col">BBQ</li>
    //                             <li class="col">1500</li>
    //                             <li class="col">100人</li>
    //                             <li class="col"><button onclick="showEdit(3)">編輯/查看</button></li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="container-fluid">
    //                 <div class="row">
    //                     <ul class="pageList col-2 offset-7">
    //                         <li class=""><</li>
    //                         <li class="nowPage">1</li>
    //                         <li>></li>
    //                     </ul>
    //                 </div>
    //             </div>`
    // })
    // $("#communityMangement").on("click",function(){
    //     table.innerHTML = 
    //     `<div class="listTitle col-8">
    //                 <!-- 表單抬頭 -->
    //                 <div class="Title">
    //                     <h3>討論區管理</h3>
    //                     <input type="text" name="" id="">
    //                     <button>搜尋</button>
    //                 </div>
    //                 <!-- 表單細分類 -->
    //                 <div class="checkList">
    //                     <h4 class="col-2">文章管理</h4>
    //                     <h4 class="col-2">評論管理</h4>
    //                     <h4 class="col-1">FAQ</h4>
    //                     <div class="addNew col-2 offset-3">
    //                     <i class="fa-solid fa-circle-plus"></i>
    //                     <span>新增</span>
    //                 </div>
    //                 </div>
    //                 <!-- 表身 -->
    //                 <div class="tableBox container-fluid">
    //                     <div class="row">
    //                         <ul class="tableTitle">
    //                             <li class="col">編號</li>
    //                             <li class="col">類別</li>
    //                             <li class="col">標題</li>
    //                             <li class="col">作者</li>
    //                             <li class="col">日期</li>
    //                             <li class="col"></li>
    //                         </ul>
    //                         <ul class="tableList">
    //                             <li class="col">1</li>
    //                             <li class="col">遊</li>
    //                             <li class="col">巨石陣</li>
    //                             <li class="col">隆哥</li>
    //                             <li class="col">20220524</li>
    //                             <li class="col"><button onclick="showEdit(4)">編輯/查看</button></li>
    //                         </ul>
    //                         <ul class="tableList">
    //                             <li class="col">2</li>
    //                             <li class="col">套裝行程</li>
    //                             <li class="col">親子套裝行程</li>
    //                             <li class="col">明島管理團隊</li>
    //                             <li class="col">20220524</li>
    //                             <li class="col"><button onclick="showEdit(4)">編輯/查看</button></li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="container-fluid">
    //                 <div class="row">
    //                     <ul class="pageList col-2 offset-7">
    //                         <li class=""><</li>
    //                         <li class="nowPage">1</li>
    //                         <li>></li>
    //                     </ul>
    //                 </div>
    //             </div>`
    // })
    // $("#CouponMangement").on("click",function(){
    //     table.innerHTML = 
    //     `<div class="listTitle col-8">
    //                 <!-- 表單抬頭 -->
    //                 <div class="Title">
    //                     <h3>優惠劵管理</h3>
    //                     <input type="text" name="" id="">
    //                     <button>搜尋</button>
    //                 </div>
    //                 <!-- 表單細分類 -->
    //                 <div class="checkList">
    //                     <h4 class="col-2">進行中</h4>
    //                     <h4 class="col-2">已結束</h4>
    //                     <div class="addNew col-2 offset-5">
    //                     <i class="fa-solid fa-circle-plus"></i>
    //                     <span>新增</span>
    //                 </div>
    //                 </div>
    //                 <!-- 表身 -->
    //                 <div class="tableBox container-fluid">
    //                     <div class="row">
    //                         <ul class="tableTitle">
    //                             <li class="col">編號</li>
    //                             <li class="col">關鍵字</li>
    //                             <li class="col">開始時間</li>
    //                             <li class="col">結束時間</li>
    //                             <li class="col">已使用次數</li>
    //                             <li class="col"></li>
    //                         </ul>
    //                         <ul class="tableList">
    //                             <li class="col">1</li>
    //                             <li class="col">Long_9453</li>
    //                             <li class="col">20220524</li>
    //                             <li class="col">20220624</li>
    //                             <li class="col">1000</li>
    //                             <li class="col"><button onclick="showEdit(5)">編輯/查看</button></li>
    //                         </ul>
    //                         <ul class="tableList">
    //                             <li class="col">1</li>
    //                             <li class="col">Long_9453</li>
    //                             <li class="col">20220524</li>
    //                             <li class="col">20220624</li>
    //                             <li class="col">1000</li>
    //                             <li class="col"><button onclick="showEdit(5)">編輯/查看</button></li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="container-fluid">
    //                 <div class="row">
    //                     <ul class="pageList col-2 offset-7">
    //                         <li class=""><</li>
    //                         <li class="nowPage">1</li>
    //                         <li>></li>
    //                     </ul>
    //                 </div>
    //             </div>`
    // })
    // $("#MemberMangement").on("click",function(){
    //     table.innerHTML = 
    //     `<div class="listTitle col-8">
    //                 <!-- 表單抬頭 -->
    //                 <div class="Title">
    //                     <h3>會員管理</h3>
    //                     <input type="text" name="" id="">
    //                     <button>搜尋</button>
    //                 </div>
    //                 <!-- 表單細分類 -->
    //                 <div class="checkList">
    //                     <h4 class="col-2">正常</h4>
    //                     <h4 class="col-2">已停權</h4>
    //                     <div class="addNew col-2 offset-5">
    //                     <i class="fa-solid fa-circle-plus"></i>
    //                     <span>新增</span>
    //                 </div>
    //                 </div>
    //                 <!-- 表身 -->
    //                 <div class="tableBox container-fluid">
    //                     <div class="row">
    //                         <ul class="tableTitle">
    //                             <li class="col">編號</li>
    //                             <li class="col">姓名</li>
    //                             <li class="col-2">信箱</li>
    //                             <li class="col">違規次數</li>
    //                             <li class="col">會員狀態</li>
    //                             <li class="col"></li>
    //                         </ul>
    //                         <ul class="tableList" v-for="member in member_lst">
    //                             <li class="col">{{member[0]}}</li>
    //                             <li class="col">隆哥</li>
    //                             <li class="col-2">xxxx@gmail.com</li>
    //                             <li class="col">0</li>
    //                             <li class="col">一般會員</li>
    //                             <li class="col"><button onclick="showEdit(6)">編輯/查看</button></li>
    //                         </ul>
    //                         <ul class="tableList">
    //                             <li class="col">1</li>
    //                             <li class="col">隆哥</li>
    //                             <li class="col">xxxx@gmail.com</li>
    //                             <li class="col">0</li>
    //                             <li class="col">一般會員</li>
    //                             <li class="col"><button onclick="showEdit(6)">編輯/查看</button></li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="container-fluid">
    //                 <div class="row">
    //                     <ul class="pageList col-2 offset-7">
    //                         <li class=""><</li>
    //                         <li class="nowPage">1</li>
    //                         <li>></li>
    //                     </ul>
    //                 </div>
    //             </div>`
    // })
   
})
//彈窗事件綁定
// function showEdit(nums){
//     console.log(nums);
//     $(`.formBody_0${nums}`).css('display','block')
// }
// function closeBlock(nums){
//     $(`.formBody_0${nums}`).css('display','none')
// }