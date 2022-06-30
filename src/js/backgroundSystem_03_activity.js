Vue.component('activity',{
    props:['list'],
    data(){
        return{
            content:'進行中',
            page:0,
            show_pop_up:false,
            index:0,
            type:true,
            name:'',
            price:0,
            people:0,
            intro:'',
            s_img:'',
            l_img:'',
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
            this.name = this.list[this.content][this.page][this.index][1];
            this.price = this.list[this.content][this.page][this.index][3];
            this.people = this.list[this.content][this.page][this.index][9];
            this.intro = this.list[this.content][this.page][this.index][2];
            this.s_img = this.list[this.content][this.page][this.index][5];
            this.l_img = this.list[this.content][this.page][this.index][6];

            if(this.list[this.content][this.page][this.index][8] == '陸'){
                this.type = true;
            }else if(this.list[this.content][this.page][this.index][8] == '海'){
                this.type = false;
            }
        },
        comfirm(e){
            this.data_change = false;
            let id = this.list[this.content][this.page][this.index][0];
            let type = '';
            if(this.type){
                type = '陸';
            }else{
                type = '海';
            }
            let data = [['name', this.name],
                        ['price', this.price], 
                        ['people', this.people],
                        ['type', type],  
                        ['content', this.intro]];
    
            const url = './php/backgroundSystem_update.php';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    table: 'activity',
                    id: id,
                    data: data,
                })
            });
            this.show_pop_up=false;
        },
        cancle(e){
            this.show_pop_up=false;
        },
        close(e){

            this.show_pop_up=false;
            
            let id = this.list[this.content][this.page][this.index][0];
            let data = [['status', 0]];
    
            const url = './php/backgroundSystem_update.php';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    table: 'activity',
                    id: id,
                    data: data,
                })
            });
        },
        sImg(e){},
        lImg(e){},
        changeTypeLand(e){
            this.type = true;
        },
        changeTypeSea(e){
            this.type = false;
        },
    },
    watch: {},
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
            <h3>活動管理</h3>
            <!-- 
            <input type="text" name="" id="">
            <button>搜尋</button>
            -->
        </div>
        <!-- 表單細分類 -->
        <div class="checkList">
            <div class="col-4 select_button">
                <h5 @click="topButton" class="on">進行中</h5>
                <h5 @click="topButton">已結束</h5>

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
                    <li class="col"><p>屬性</p></li>
                    <li class="col"><p>名稱</p></li>
                    <li class="col"><p>價格</p></li>
                    <li class="col"><p>單場人數</p></li>
                    
                    <li class="col"></li>
                </ul>
                
                <ul class="tableList" v-for="(item, index) in list[content][page]">
                    <li class="col"><p>{{item[0]}}</p></li>
                    <li class="col"><p>{{item[8]}}</p></li>
                    <li class="col"><p>{{item[1]}}</p></li>
                    <li class="col"><p>{{item[3]}}</p></li>
                    <li class="col"><p>{{item[9]}}</p></li>
                    
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
            <div class="formBody_01">
                <h3>活動資訊</h3>
                <form class="Form_01 col" action="">
                    <div class="leftForm_01 col-6">
                        <ul>
                            <li>
                                <h4>編號:</h4>
                                <p>{{list[content][page][index][0]}}</p>
                            </li>
                            <li>
                                <h4>名稱:</h4>
                                <input type="text" v-model="name">
                            </li>
                            <li>
                                <h4>價格:</h4>
                                <input type="text" v-model="price">
                            </li>
                            <li>
                                <h4>人數:</h4>
                                <input type="text" v-model="people">
                            </li>
                            <li class="radio">
                                <h4>類別:</h4>
                                <input type="radio" name="island" value="land" :checked="type" @change="changeTypeLand">
                                <label for="food">陸</label>
                                <input type="radio" name="island" value="sea" :checked="!type" @change="changeTypeSea">
                                <label for="live">海</label>
                            </li>
                            <li>
                                <h4>簡介:</h4>
                            </li>
                            <li>
                                <textarea v-model="intro"></textarea>
                            </li>
                        </ul>
                        
                    </div>
                    
                    <div class="rightForm_01 col-6">
                        <ul>
                            <li>
                                <h4>縮圖:</h4>
                                <input type="file" @change="sImg">
                            </li>
                            <li>
                                <img :src="s_img" alt="">
                            </li>
                            <li>
                                <h4>大圖:</h4>
                                <input type="file" @change="lImg">
                            </li>
                            <li>
                                <img :src="l_img" alt="">
                            </li>
                        </ul>
                        <!-- <span class="col-1">活動</span> <textarea class="col-8" name="" id="" cols="23" rows="10"></textarea><br>
                        <span class="col-1"> 活動</span><input class="col-6" type="file" src="" alt=""><button class="col-2">上傳</button><br>
                            -->
                    </div>
                </form>            
                <div class="buttonBlock_01 row">
                    <button type="submit" class="b01 col-1 offset-3" @click="comfirm">確認</button>
                    <div class="col-1"></div>
                    <button class="b02 col-1" @click="cancle">取消</button>
                    <div class="col-1"></div>
                    <button class="b03 col-2" @click="close" v-if="list[content][page][index][10]">結束活動</button>
                </div>
            </div>
            
        </div>




    </div> 
    
    `
    ,
})

