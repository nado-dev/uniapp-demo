<template>
	<view style="background-color: #EEEEEE;" >
        
       
        <!-- #ifndef APP-PLUS || H5 -->
            <view style="display: flex;
                align-items: center;
                padding:0 20upx;height: 88upx;
                position: fixed;z-index: 9999;
                left: 0;
                top: 0;
                right: 0;
                background: #FFFFFF;">
                    <view class="iconfont icon-sousuo " 
                    style="position: absolute;left: 30upx;color: #CCCCCC;"></view>
                    <input style="flex: 1;padding: 5upx 0 5upx 50upx;border-radius: 4px;background: #F7F7F7;" 
                    placeholder="搜索" disabled=true @tap="search"
                    placeholder-style="color: #CCCCCC;"/>
                    <!-- <text style="padding-left:20upx;"
                     @click="post">发布</text> -->
                     <view class="icon iconfont icon-fabu" style="margin-left:100upx;font-size: 30upx; 
                     color: #000000; background-color: #F7F7F7 !important; padding: 10upx 10upx;
                     box-shadow: 0 2upx 4upx rgba(0, 0, 0, .3);" @click="post">
                         发布文章
                     </view>
            </view>
            <view style="height: 88upx;"></view>
       
        <!-- #endif -->
        	
          
        <swiper-tab-head 
       
        :tabBars="tabBars" 
        :tabIndex="tabIndex"
        @tabSwitch="tabSwitch">
        </swiper-tab-head>
 
        <!-- 这里的高度是可用高度减去tarBar高度 -->
        <!-- 点击事件：current随tabIndex的改变
             滑动事件：@change事件更新了tabIndex的值，选中了相应的tab
         -->
         <view class="uni-tab-bar">
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
                                <index-list :item="item" :index="index1" @changeevent="updateData"></index-list>
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
 
      <!-- 传入item和index的值 -->
       <!-- <block v-for="(item,index) in list" :key="index">            
            <index-list :item="item" :index="index"></index-list>
        </block>	 -->	
	</view>
    </view>
</template>

<script>
    // 引入组件
    // #ifndef APP-PLUS
            import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
    // #endif
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
            emptyContent,
            // #ifndef APP-PLUS
                uniNavBar
            //  #endif
        },
		data() {
			return {
                swiperHeight:500,
                tabIndex:0,//默认id
                tabBars:[],
                newsList:[]
			}
		},
		methods: {
            search(){
                uni.navigateTo({
                    url:"../search/search"
                })
            },
            post(){
                this.User.navigate({
                    url:"../addINput/addINput?postClass="+JSON.stringify(this.tabBars)
                });
            },
            updateData(data){
                switch (data.type){
                    case 'guanzhu':
                        this.updateGuanZhu(data);
                        break;
                        
                    case 'support':
                        this.updateSupport(data);
                        break;
                    
                    case 'updateList':
                        this.updateList(data);
                        break;
                    case 'updateComment':
                        this.updateComment(data);
                        break;
                }
            },
            // 更新评论
            updateComment(data){
            // 拿到当前对象
                let obj = this.newsList[this.tabIndex].list.find(value =>{
                    return value.id === data.post_id;
                });
                if (!obj) return;
                obj.commentNum++; // 评论数+1
            },
            // 更新顶踩
            updateSupport(data){
            // 拿到当前对象
                let obj = this.newsList[this.tabIndex].list.find(value =>{
                    return value.id === data.post_id;
                });
                if (!obj) return;
                let oldindex = obj.likeInfo.index; // 操作前的状态
                obj.likeInfo.index = data.do // 操作后的状态
                if (oldindex !== 0) { //之前操作过
                    oldindex == 1 ? obj.likeInfo.likeNum-- : obj.likeInfo.dislikeNum--;
                }
                if (obj.likeInfo.index !== 0) {  // 当前操作
                    obj.likeInfo.index == 1 
                        ? obj.likeInfo.likeNum++ : obj.likeInfo.dislikeNum++;
                }    
            },
            // 更新关注信息
            updateGuanZhu(data){
                this.newsList[this.tabIndex].list.forEach((item,index)=>{
                    if (item.userid === data.userid) {
                        item.isFollow = data.data;
                    }
                })
            },
            // 更新列表
            updateList(data){
                // 第一种，直接追加
                let index = this.tabBars.findIndex((val)=>{
                    return val.id === data.post_class_id;
                })
                if (index > -1) {
                    this.newsList[index].list.push(this.__format(data));
                }
            },
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
                    this.newsList[currentIndex].loadText="没有更多数据了(`ε´ )";
                }else{
                    this.newsList[currentIndex].loadText="上拉加载更多";
                }
                return;
            },
            // 格式转化
            __format(item){
                return {
                    userid:item.user.id,
                    userPic:item.user.userpic || this.User.defaultUserPic,
                    userName:item.user.username,
                    // isFollow:!!item.user.fens.length,
                    isFollow:!!item.user.fens.length,
                    id:item.id,
                    title:item.title,
                    type:"img", // img:图文,video:视频
                    titlePic:!!item.images[0]? item.images[0].url : '',
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
                this.getList();
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
                // 修改状态/
                this.newsList[this.tabIndex].page++;
                this.getList();
                //this.newsList[index].loadText = "没有更多数据";
                
            },
           //#ifdef MP
                clickLeft(){
                    uni.navigateTo({
                        url:"../search/search"
                    })
                },
                clickRight(){
                    this.User.navigate({
                        url:"../addINput/addINput?postClass="+JSON.stringify(this.tabBars)
                    });
                },
               
            //#endif
            
		},
        onLoad() {
            uni.getSystemInfo({
                success: (res) => {
                    let height= res.windowHeight - uni.upx2px(100);//tabBar的高度是100upx
                    this.swiperHeight = height;
                }
            })
            this.getNav();
            // 监听监听自定义事件。事件可以由 uni.$emit 触发。
            // 回调函数会接收 uni.$emit 传递的参数
            uni.$on('updateData',this.updateData)
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
            if(e.index == 1 ){
                this.User.navigate({
                    url:"../addINput/addINput?postClass="+JSON.stringify(this.tabBars)
                });
            }          
            if(e.index == 0 ){
                 uni.showLoading({ title: '刷新中...', mask: true });
                 this.tabIndex = 0;
                 for(let i = 0;i < this.newsList.length ;i++){
                     this.newsList[this.tabIndex].page = 1
                 }
                 this.getList()
                 uni.hideLoading();
            }          
        },
        onPullDownRefresh() {
            this.tabIndex = 0;
            for(let i = 0;i < this.newsList.length ;i++){
                this.newsList[this.tabIndex].page = 1
            }
            this.getList()
            uni.stopPullDownRefresh()
        },
        // shauxin
        onTabItemTap(e){
            if(e.index == 0){
                uni.showLoading({ title: '刷新中...', mask: true });
                this.tabIndex = 0;
                for(let i = 0;i < this.newsList.length ;i++){
                    this.newsList[this.tabIndex].page = 1
                }
                this.getList()
                uni.hideLoading();
                uni.pageScrollTo({
                    scrollTop: 0,
                    duration: 300
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
