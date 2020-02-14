<template>
	<view>
        <swiper-tab-head 
        :tabBars="tabBars" 
        :tabIndex="tabIndex"
        @tabSwitch="tabSwitch">
        </swiper-tab-head>
 
        <!-- 这里的高度是可用高度减去tarBar高度 -->
        <!-- 点击事件：current随tabIndex的改变
             滑动事件：@change事件更新了tabIndex的值，选中了相应的tab
         -->
        <view class="uni-tab-bar" style="background-color: #EEEEEE;">           
            <swiper class="swiper-box" 
            :style="{height:swiperHeight+'px'}" 
            :current="tabIndex"
            @change="tabChange"> 
                <swiper-item v-for="(items,index) in newsList" :key="index">
                    <scroll-view scroll-y="true" 
                    class="list" 
                    @scrolltolower="loadMore(index)">          
                    <!-- 有内容 图文列表和加载框-->
                        <template  v-if="items.list.length != 0">
                            <block v-for="(item,index1) in items.list" :key="index1">
                                <!-- 图文列表 传入item和index的值 -->
                                <index-list :item="item" :index="index1"></index-list>
                            </block>	
                                <!-- 上拉加载 -->
                            <load-more :loadText="items.loadText"></load-more> 
                       </template >
                        <template v-else-if="!items.firstload">
                            <view class="u-f-ajc" style="font-size: 50upx; font-weight: bold;color: #CCCCCC;padding-top: 100upx;">
                                Loading...
                            </view>
                        </template>
                    <!-- 无内容 展示图片-->  
                    <!-- 无内容默认 -->
                       <template v-else>
                          
                            <empty-content></empty-content>
                        </template>
                           
                        
                    </scroll-view>
                </swiper-item>         
            </swiper>
        </view>
 
      <!-- 传入item和index的值 -->
       <!-- <block v-for="(item,index) in list" :key="index">            
            <index-list :item="item" :index="index"></index-list>
        </block>	 -->	
	</view>
</template>

<script>
    // 引入组件
    import indexList from "../../components/index/index-list.vue";
    import swiperTabHead from '../../components/index/swiper-tab-head.vue';
    import loadMore from '../../components/common/load-more.vue';
    import emptyContent from "../../components/common/empty-content.vue";
	export default {
        // components 包含 Vue 实例可用组件的哈希表
        components:{
            indexList,  // 添加组件
            swiperTabHead,
            loadMore,
            emptyContent
        },
		data() {
			return {
                swiperHeight:500,
                tabIndex:0,//默认id
                tabBars:[],
                newsList:[
                    {
                        loadText:"上拉加载更多",
                        list:[
                        {
                            userPic:"../../static/demo/userpic/1.jpg",
                            userName:"昵称",
                            isFollow:false,
                            title:"标题",
                            type:"img",//image 图文 ，video 视频
                            titlePic:"../../static/demo/datapic/1.jpg",
                            likeInfo:{
                                index:2,//0：未操作，1：已顶，2：已踩
                                likeNum:11,
                                dislikeNum:11,
                                
                            },                     
                            commentNum:10,
                            shareNum:10,
                        },
                        {
                            userPic:"../../static/demo/userpic/1.jpg",
                            userName:"昵称",
                            isFollow:true,
                            title:"标题",
                            type:"video",//image 图文 ，video 视频
                            titlePic:"../../static/demo/datapic/1.jpg",
                            playNum:"20w",
                            length:"2:47",
                            likeInfo:{
                                index:1,//0：未操作，1：已顶，2：已踩
                                likeNum:11,
                                dislikeNum:11,
                                
                            },                     
                            commentNum:10,
                            shareNum:10,
                        }
                    ]},
                    {
                        loadText:"上拉加载更多",
                        list:[]
                    },
                    {
                        loadText:"上拉加载更多",
                        list:[]
                    },
                    {
                        loadText:"上拉加载更多",
                        list:[]
                    },
                    {
                        loadText:"上拉加载更多",
                        list:[]
                    },
                    {
                        loadText:"上拉加载更多",
                        list:[]
                    },
                ]
			}
		},
		methods: {
            // 获取文章分类
            async getNav(){
                let [err, res] = await this.$http.get('postclass');
                if(err){
                    return  uni.showToast({
                        title: '加载失败',
                        icon:'none'
                    });
                }
                if(res.data.errorCode){
                    return  uni.showToast({
                        title: res.data.msg,
                        icon:'none'
                    });
                }
                console.log(res)
                let list = res.data.data.list;
                let arr = [];
                let arr2 = [];
                for (let i = 0; i < list.length; i++) {
                    arr.push({
                        id:list[i].id,
                        name:list[i].classname
                    })
                    
                    arr2.push({
                        loadText:"上拉加载更多",
                        list:[],
                        page:1,
                        firstload:false
                    })
                }
                this.tabBars = arr;
                this.newsList = arr2;
                this.tabBars.length > 0 && this.getList();
            },
            
            async getList(){
                let currentIndex = this.tabIndex;
                let url = `postclass/${this.tabBars[this.tabIndex].id}/post/${this.newsList[this.tabIndex].page}`;
                let [err,res] = await this.$http.get(url,{},{token:true});
                let error = this.$http.errorCheck(err,res,()=>{
                    this.newsList[currentIndex].loadText="上拉加载更多";
                },()=>{
                    this.newsList[currentIndex].loadText="上拉加载更多";
                });
                console.log(res)
                if (!error) return;
                let arr = [];
                let list = res.data.data.list;
                for (let i = 0; i < list.length; i++) {
                    arr.push(this.__format(list[i]));
                }
                this.newsList[currentIndex].list = this.newsList[currentIndex].page > 1 
                    ? this.newsList[currentIndex].list.concat(arr) : arr;
                this.newsList[currentIndex].firstload = true;
                // 拿到最后一页
                if (list.length < 10) {
                    this.newsList[currentIndex].loadText="没有更多数据了";
                }else{
                    this.newsList[currentIndex].loadText="上拉加载更多";
                }
                return;
            },
            // 格式转化
            __format(item){
                return {
                    userid:item.user.id,
                    userPic:item.user.userpic,
                    userName:item.user.username,
                    // isFollow:!!item.user.fens.length,
                    isFollow:item.user.fens.length,
                    id:item.id,
                    title:item.title,
                    type:"img", // img:图文,video:视频
                    titlepic:item.titlepic,
                    video:false,
                    path:item.path,
                    share:!!item.share,
                    likeInfo:{
                        index:(item.support.length>0) ? (item.support[0].type+1) : 0,//0:没有操作，1:顶,2:踩；
                        likeNum:item.ding_count,
                        dislikeNum:item.cai_count,
                    },
                    commentNum:item.comment_count,
                    shareNum:item.sharenum,
                }
            },
            //tabBar点击事件
			tabSwitch(index){
                //点击操作获取了当前的index，再将其写入tabIndex中，匹配的项目改变样式
                this.tabIndex = index;
                //console.log(index)
            },
            //tabBar滑动事件
            tabChange(e){
                this.tabIndex = e.detail.current;
                this.getList();
                //console.log(index);
            },
            //上拉加载更多
            loadMore(index){
                if( this.newsList[index].loadText != "上拉加载更多"){
                    return;//如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
                }
                this.newsList[index].loadText = "加载中(＾o＾)ﾉ";
                //修改状态
                // 修改状态
                this.newsList[this.tabIndex].page++;
                this.getList();
                //this.newsList[index].loadText = "没有更多数据";
                
            }
		},
        onLoad() {
            uni.getSystemInfo({
                success: (res) => {
                    let height= res.windowHeight - uni.upx2px(100);//tabBar的高度是100upx
                    this.swiperHeight = height;
                }
            })
            this.getNav();
        },
        //监听原生标题栏搜索输入框点击事件
        onNavigationBarSearchInputClicked(){
            //保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面
            uni.navigateTo({
                url:"../search/search"
            })
        },
        //监听原生标题栏按钮点击事件
        //监听第二个按钮 转跳到发布页面
        onNavigationBarButtonTap(e) {
            // console.log(JSON.stringify(e));
            if(e.index == 1 || e.index == 0){
                this.User.navigate({
                    url:"../addINput/addINput"
                });
            }          
        }
	}
</script>

<style>
.empty-content{
    background: #FFFFFF;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.empty-content image{
    width: 60%;
}
</style>
