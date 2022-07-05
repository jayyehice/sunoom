Vue.component('live',{
    props:['list'],
    data(){
        return{
            content:'營運中',
            page:0,
            show_pop_up:false,
            index:0,
            title1:'',
            title2:'',
            title3:'',
            title4:'',
            intro1:'',
            intro2:'',
            table_name: 'live',
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
            this.title1 = this.list[this.content][this.page][this.index][1];
            this.title2 = this.list[this.content][this.page][this.index][2];
            this.title3 = this.list[this.content][this.page][this.index][3];
            this.title4 = this.list[this.content][this.page][this.index][4];
            this.intro1 = this.list[this.content][this.page][this.index][7];
            this.intro2 = this.list[this.content][this.page][this.index][8];    
        },
        comfirm(e){
            let id = this.list[this.content][this.page][this.index][0];
            let data = [['titile_zh01', this.title1],
                        ['titile_zh02', this.title2], 
                        ['big_title', this.title3],
                        ['title_en', this.title4], 
                        ['list_title', this.intro1], 
                        ['list_content', this.intro2]];
    
            const url = './php/backgroundSystem_update.php';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    table: 'live',
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
        close(e){
            let id = this.list[this.content][this.page][this.index][0];
            let data = [['status', 0]];
    
            const url = './php/backgroundSystem_update.php';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    table: 'live',
                    id: id,
                    data: data,
                })
            });
            this.$emit('my-emit', this.table_name);
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
            <h3>房型管理</h3>
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
                    <li class="col"><p>分類</p></li>
                    <li class="col"><p>名稱</p></li>
                    <li class="col"><p>價格</p></li>
                    <li class="col"><p>人數上限</p></li>
                    
                    <li class="col"></li>
                </ul>
                
                <ul class="tableList" v-for="(item, index) in list[content][page]">
                    <li class="col"><p>{{item[0]}}</p></li>
                    <li class="col"><p>{{item[3]}}</p></li>
                    <li class="col"><p>{{item[2]}}</p></li>
                    <li class="col"><p>{{item[27]}}</p></li>
                    <li class="col"><p>{{item[28]}}</p></li>
                    
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
            <div class="formBody_03">
                <h3>住宿介紹</h3>
                <form class="Form_03" action="">
                    <div class="row title">
                        <h4 class="col-2">標題</h4>
                        <div class="col-10 title_content">
                            <input type="text" v-model="title1">
                            <input type="text" v-model="title2">
                            <input type="text" v-model="title3">
                            <input type="text" v-model="title4">
                        </div>
                    </div>

                    <div class="row intro">
                        <h4 class="col-2">介紹</h4>
                        <div class="col-10 intro_content">
                            <input type="text"  v-model="intro1">
                            <textarea name="" id="" cols="30" rows="10" v-model="intro2"></textarea>
                        </div>
                    </div>

                    <div class="row img">
                        <h4 class="col-2">圖片</h4>
                        <div class="col-10 img_content">
                            <div class="img1 col-6">
                                <input type="file">
                                <img :src="list[content][this.page][this.index][5]" alt="">
                            </div>
                            <div class="img7 col-6">
                                <input type="file">
                                <img :src="list[content][this.page][this.index][6]" alt="">
                            </div>
                        </div>
                    </div>
                    
                    
                </form>
                
                <div class="buttonBlock_03 row">
                    <button type="submit" class="b01 col-1 offset-3" @click="comfirm">確認</button>
                    <div class="col-1"></div>
                    <button class="b02 col-1" @click="cancle">取消</button>
                    <div class="col-1"></div>
                    <button class="b03 col-1" @click="close" v-if="list[content][page][index][29]">下架</button>
                </div>
            </div>
            
        </div>



    </div> 
    
    `
    ,
})

