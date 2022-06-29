Vue.component('discuss',{
    props:['list'],
    data(){
        return{
            content:'article',
            page:0,
            show_pop_up:false,
            index:0,
            title:'',
            content_article:'',
        }
    },
    methods:{
        changeContent(e){
            // console.log(e.target.dataset.type);
            this.content = e.target.dataset.type;
            this.page = 0;
            $(e.target.closest('div')).find('h5.on').removeClass('on');
            $(e.target).addClass('on'); 
        },
        changeCatagory(catagory){
            switch(catagory){
                case 'tour':
                    return '遊';
                    break;
            
                case 'live':
                    return '宿';
                    break;

                case 'food':
                    return '食';
                    break;
                
                case 'offical':
                    return '官方';
                    break;

                default:
                    return '未知';
            }
        },
        changePage(e){
            this.page = e.target.dataset.page;
            // console.log(e.target.dataset.page);
            $(e.target.closest('ul')).find('li.on').removeClass('on');
            $(e.target).addClass('on');

            // console.log($('#pageList li:nth-child(2)'));
        },
        showEdit(e){
            // console.log(e.target.dataset.index);
            // let index = e.target.dataset.index;
            // console.log(this.list[this.page][this.index]);
            this.index = e.target.dataset.index;
            this.show_pop_up = true; 
            this.title = this.list[this.content][this.page][this.index][3];
            this.content_article = this.list[this.content][this.page][this.index][4];
            
        },
        comfirm(e){
            this.show_pop_up=false;
        },
        cancle(e){
            this.show_pop_up=false;
        },
        removeArticle(e){
            this.show_pop_up=false;
        },
    },
    computed:{},
    mounted() {
        $('#pageList > li:nth-child(2)').addClass('on');
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
                    <li class="col-4"><p>標題</p></li>
                    <li class="col"><p>作者</p></li>
                    <li class="col-2"><p>日期</p></li>
                    
                    <li class="col"></li>
                </ul>
                
                <ul class="tableList" v-for="(item, index) in list[content][page]">
                    <li class="col"><p>{{item[0]}}</p></li>
                    <li class="col"><p>{{changeCatagory(item[2])}}</p></li>
                    <li class="col-4"><p>{{item[3]}}</p></li>
                    <li class="col"><p>{{item[5]}}</p></li>
                    <li class="col-2"><p>{{item[9]}}</p></li>
                    
                    <li class="col button"><button :data-index="index" @click="showEdit">編輯/查看</button></li>
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
                
                <ul class="tableList" v-for="(item, index) in list[content][page]">
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
                <ul class="pageList col-2 offset-7" id="pageList">
                    <li class=""><</li>
                    <li class="nowPage" :data-page="i" @click="changePage" v-for="(p,i) in list[content].length">{{p}}</li>
                    
                    <li>></li>
                </ul>
            </div>
        </div>


        <div class="pop_up" v-if="show_pop_up">
            <div class="formBody_04">
                <h3>文章資訊</h3>
                <form class="Form_04 row">
                    <div class="leftForm_04 col-6">
                        <ul>
                            <li>
                                <h4>編號:</h4>
                                <p>{{list[content][page][index][0]}}</p>
                            </li>
                            <li>
                                <h4>作者:</h4>
                                <p>{{list[content][page][index][10]+list[content][page][index][11]}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="rightForm_04 col-6">
                        <ul>
                            <li>
                                <h4>發佈:</h4>
                                <p>{{list[content][page][index][9]}}</p>
                            </li>
                            <li>
                                <h4>類別:</h4>
                                <p>{{changeCatagory(list[content][page][index][2])}}</p>
                            </li>
                        </ul>
                    </div>
                </form>
                <div class="content_04 row">
                    <div class="col-12">
                        <ul>
                            <li>
                                <h4>標題:</h4>
                                <input type="text" v-if="list[content][page][index][1]==1" v-model="title">
                                <p v-if="list[content][page][index][1]==2">{{title}}</p>
                            </li>
                            <li>
                                <h4>內容:</h4>
                                <textarea class="col" name="" id="" cols="80" rows="11" v-if="list[content][page][index][1]==1" v-model="content_article"></textarea>
                                <p v-if="list[content][page][index][1]==2">{{content_article}}</p>
                            </li>
                        </ul>

                    </div>
                    
                </div>            
                <div class="buttonBlock_04 row">
                    <button type="submit" class="b01 col-1 offset-3" @click="comfirm">確認</button>
                    <div class="col-1"></div>
                    <button class="b02 col-1" @click="cancle">取消</button>
                    <div class="col-1"></div>
                    <button class="b03 col-2" @click="removeArticle">移除文章</button>
                </div>
            </div>
            
        </div>
    </div> 
    
    `
    ,
})

