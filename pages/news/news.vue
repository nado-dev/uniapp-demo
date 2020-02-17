<template>
    <view  style="background-color: #EEEEEE;">
        <!-- 自定义导航栏 -->
        <news-nav-bar 
        :tabBar="tabBar" 
        :tabIndex="tabIndex" 
        @changeTab="changeTab">
        </news-nav-bar>
      
        <view class="uni-tab-bar">
            <swiper class="swiper-box" 
            :style="{height:swiperHeight+'px'}" 
            :current="tabIndex"
            @change="tabChange"> 
            <!-- 关注 -->
                <swiper-item>
                    <scroll-view scroll-y="true" 
                    class="list" @scrolltolower="loadMore()">          
                        <!-- 列表 -->
                        <template v-if="followList.list.length > 0">
                            <block v-for="(item, index) in followList.list" :key="index">
                                <common-list :item="item" :index="index"></common-list>
                            </block>
                            <!-- 上拉加载 -->
                        <load-more :loadText="followList.loadText"></load-more>
                        </template>
                        
                        <template v-else-if="!followList.firstload">
                            <view style="font-size: 50upx;font-weight: bold;color: #CCCCCC;
                            padding-top: 100upx;" class="u-f-ajc">Loading ...</view>
                        </template>
                        
                        <template v-else>
                            <empty-content></empty-content>
                        </template>
                    </scroll-view>
                </swiper-item>      
            
            
            <!-- 话题 -->
                <swiper-item>
                    <scroll-view scroll-y="true" 
                    class="list">          
                        <!-- 搜索框 -->
                        <view class="search-input">
                            <input placeholder="( ﾟ∀。)" class="uni-input" 
                            disabled @tap="openSearch"
                            placeholder-class="icon iconfont icon-sousuo topic-search"/>
                        </view>
                        
                        <!-- 轮播图 -->
                        <swiper class="topic-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
                            <block v-for="(item, index) in topicBanner.swiper" :key="index">
                                <swiper-item>
                                    <image :src="item.src" mode="widthFix" lazy-load></image>
                                </swiper-item>
                            </block>
                        </swiper>
                        <!-- 热门分类 -->
                        <topic-nav :nav="topicBanner.nav"></topic-nav>
                        <!-- 最近更新 -->
                        <view class="topic-new">
                            <view class="">最近更新 </view>
                            <block v-for="(item,index) in topicBanner.list" :key="index">
                                <topic-list :item="item" :index="index"></topic-list>
                            </block>
                        </view>
                    </scroll-view>
                </swiper-item>         
            </swiper>
        </view>
    </view>
</template>

<script>
    import newsNavBar from "../../components/news/news-nav-bar.vue";
    import commonList from "../../components/common/common-list.vue";
    import loadMore from '../../components/common/load-more.vue';
    import topicNav from "../../components/news/topic-nav.vue";
    import topicList from "../../components/news/topic-list.vue"
    import emptyContent from "../../components/common/empty-content.vue"
    export default {
        data() {
            return {
                tabIndex: 0,//当前选中的tab的索引值 默认为1
                tabBar: [
                    {name: "关注",id: "follow"},
                    {name: "话题",id: "topic"}
                ],
                topicBanner:{
                    swiper:[],
                    nav:[],
                    list:[]
                },
                swiperHeight:500,
                followList:{
                   loadText:"上拉加载更多",
                   firstload:false,
                   pages:1,
                   list:[]
                }              
            };
        },
        methods: {
            __init(){
                this.getSwiper();
                this.getHot();
                this.getNav();
            },
            // 获取广告
            async getSwiper(){
                let [err,res] = await this.$http.get('adsense/0');
                if (!this.$http.errorCheck(err,res)) return;
                let arr = [];
                let list = res.data.data.list;
                for (let i = 0; i < list.length; i++) {
                    arr.push({
                        src:list[i].src,
                        url:list[i].url
                    })
                }
                this.topicBanner.swiper = arr;
            },
            // 获取热门分类
            async getNav(){
                let [err,res] = await this.$http.get('topicclass');
                if (!this.$http.errorCheck(err,res)) return;
                let arr = [];
                let list = res.data.data.list;
                for (let i = 0; i < list.length; i++) {
                    arr.push({
                        id:list[i].id,
                        name:list[i].classname
                    })
                }
                this.topicBanner.nav = arr;
            },
            // 获取热门话题
            async getHot(){
                let [err,res] = await this.$http.get('hottopic');
                if (!this.$http.errorCheck(err,res)) return;
                let arr = [];
                let list = res.data.data.list;
                for (let i = 0; i < list.length; i++) {
                    arr.push({
                        id:list[i].id,
                        titlePic:list[i].titlepic,
                        title:list[i].title,
                        desc:list[i].desc,
                        totalPostNum:list[i].post_count,
                        todayPostNum:list[i].todaypost_count,
                    })
                }
                this.topicBanner.list = arr;
            },
            //点击切换
            changeTab(index) {
                this.tabIndex = index;
            },
            //tabBar滑动事件
            tabChange(e){
                this.tabIndex = e.detail.current;
            },
            //上拉加载
            loadMore(){
                if( this.followList.loadText != "上拉加载更多"){
                    return;//如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
                }
                this.followList.loadText = "加载中(＾o＾)ﾉ";
                this.followList.pages++;
                this.getFollowPostList();
            },
            // 打开搜索页
            openSearch(){
                uni.navigateTo({
                    url:'../search/search?searchType=topic'
                });
            },
            // 转换格式
            __format(item){
                return {
                    userid:item.user.id,
                    userPic:item.user.userpic,
                    userName:item.user.username,
                    isFollow:!!item.user.fens.length,
                    id:item.id,
                    title:item.title,
                    type:"img", // img:图文,video:视频
                    titlePic:!!item.images[0] ? item.images[0].url : '',
                    video:false,
                    path:item.path,
                    share:!!item.share,
                    likeInfo:{
                        // index:!!item.support? (item.support[0].type+1) : 0,//0:没有操作，1:顶,2:踩；
                        index: 0,//0:没有操作，1:顶,2:踩；
                        likeNum:item.ding_count,
                        dislikeNum:item.cai_count,
                    },
                    commentNum:item.comment_count,
                    shareNum:item.sharenum,
                    likeNum:item.ding_count
                }
            },
            // 获取动态列表
            async getFollowPostList(){
                let url = `followpost/${this.followList.pages}`;
                let [err,res] = await this.$http.get(url,{},{
                    token:true
                });
                if (!this.$http.errorCheck(err,res)) {
                    this.followList.firstload = true;
                    return this.followList.loadText="上拉加载更多";
                }
                let arr = [];
                console.log(res)
                console.log(this.followList.pages)
                let list = res.data.data.list;
                for (let i = 0; i < list.length; i++) {
                    arr.push(this.__format(list[i]));
                }
                this.followList.list = this.followList.pages > 1 
                                    ? this.followList.list.concat(arr) : arr;
                this.followList.firstload = true;
                this.followList.loadText=list.length < 10 ? "没有更多数据了" : "上拉加载更多";
                return;
            },
        },
        components: {
            commonList,
            newsNavBar,
            loadMore,
            topicNav,
            topicList,
            emptyContent
        },
        onLoad() {
            uni.getSystemInfo({
                success: (res) => {
                    let height= res.windowHeight - uni.upx2px(100);//tabBar的高度是100upx
                    this.swiperHeight = height;
                }
            })
            this.__init();
        },
        onShow() {
            this.getFollowPostList();
        }
    }
</script>

<style>
/* 搜索框外层view组件 */
.search-input{
    /* 内边距 */
    padding: 20upx;
}
.search-input>input{ 
    background: #F4F4F4;
    box-shadow: 0 4upx 8upx rgba(0, 0, 0, .3);
}
.topic-search{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: medium;
}
.topic-swiper{
/*    border: 1upx solid; */
    padding: 0 20upx 20upx 20upx;
    /* height: 100% !important; */
}
.topic-swiper image{
    width: 100%;
    box-shadow: 0 4upx 8upx rgba(0, 0, 0, .3);
}
.topic-new{
    padding: 20upx;
    
}
.topic-new>view:first-child{
    padding-bottom: 10upx;
    font-size: 32upx;
}
.topic-new>view:last-child{
    padding: 10upx 0;
    }

</style>
