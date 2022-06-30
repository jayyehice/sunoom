Vue.component('live',{
    props:['list'],
    data(){
        return{
            content:'',
            page:0,
            show_pop_up:false,
            index:0,
            title1:'',
            title2:'',
            title3:'',
            title4:'',
            intro1:'',
            intro2:'',
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
        showEdit(e){
            this.index = e.target.dataset.index;
            this.show_pop_up = true;
            this.title1 = this.list[this.page][this.index][1];
            this.title2 = this.list[this.page][this.index][2];
            this.title3 = this.list[this.page][this.index][3];
            this.title4 = this.list[this.page][this.index][4];
            this.intro1 = this.list[this.page][this.index][7];
            this.intro2 = this.list[this.page][this.index][8];    
        },
        comfirm(e){
            this.show_pop_up=false;
        },
        cancle(e){
            this.show_pop_up=false;
        },
        close(e){
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
            <h3>住宿介紹</h3>
            <!-- 
            <input type="text" name="" id="">
            <button>搜尋</button>
            -->
        </div>
        <!-- 表單細分類 -->
        <div class="checkList">
            <div class="col-4 select_button">
                <h5 @click="addClass" class="on">營運中</h5>
                <h5 @click="addClass">已下架</h5>

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
                
                <ul class="tableList" v-for="(item, index) in list[page]">
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
                    <li class="nowPage" :data-page="i" @click="changePage" v-for="(p,i) in list.length">{{p}}</li>
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
                                <img :src="list[this.page][this.index][5]" alt="">
                            </div>
                            <div class="img7 col-6">
                                <input type="file">
                                <img :src="list[this.page][this.index][6]" alt="">
                            </div>
                        </div>
                    </div>
                    
                    
                </form>
                
                <div class="buttonBlock_03 row">
                    <button type="submit" class="b01 col-1 offset-3" @click="comfirm">確認</button>
                    <div class="col-1"></div>
                    <button class="b02 col-1" @click="cancle">取消</button>
                    <div class="col-1"></div>
                    <button class="b03 col-1" @click="close">下架</button>
                </div>
            </div>
            
        </div>



    </div> 
    
    `
    ,
})

