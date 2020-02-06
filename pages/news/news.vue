<template>
    <view>
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
                        <block v-for="(item, index) in followList.list" :key="index">
                            <common-list :item="item" :index="index"></common-list>
                        </block>
                        <!-- 上拉加载 -->
                        <load-more :loadText="followList.loadText"></load-more>
                    </scroll-view>
                </swiper-item>      
            
            
            <!-- 话题 -->
                <swiper-item>
                    <scroll-view scroll-y="true" 
                    class="list">          
                        <!-- 搜索框 -->
                        <view class="search-input">
                            <input placeholder="( ﾟ∀。)" class="uni-input" 
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
    export default {
        data() {
            return {
                tabIndex: 0,//当前选中的tab的索引值 默认为1
                tabBar: [
                    {name: "关注",id: "follow"},
                    {name: "话题",id: "topic"}
                ],
                topicBanner:{
                    swiper:[
                        {src:"../../static/demo/banner1.jpg"},
                        {src:"../../static/demo/banner1.jpg"},
                        {src:"../../static/demo/banner1.jpg"}
                    ],
                    nav:[
                        {name:"技术"},
                        {name:"社畜"},
                        {name:"动画"},
                        {name:"小说"},
                        {name:"手游"},
                        {name:"摄影"}
                    ],
                    list:[
                        {
                            titlePic:"../../static/common/zheshiluwei.jpg",
                            title:"这是芦苇",
                            desc:"想歪的自重",
                            totalPostNum:148,
                            todayPostNum:7
                        },
                        {
                            titlePic:"../../static/common/zheshiluwei.jpg",
                            title:"这是芦苇",
                            desc:"想歪的自重",
                            totalPostNum:148,
                            todayPostNum:7
                        }
                    ]
                },
                swiperHeight:500,
                followList:{
                   loadText:"上拉加载更多",
                    list:[
                        // 纯文字样式 textStyle
                        {
                            userPic:"../../static/demo/userpic/10.jpg",
                            userName:"ATM",
                            gender:0,//0:女 1:男
                            age:25,
                            isFollow:false,
                            title:"透明质酸钠",
                            textStyle:true,
                            PicTextStyle:false,
                            videoStyle:false,
                            shareStyle:false,
                            shareNum:3498,
                            commentNum:3456,
                            likeNum:345,
                            location:"PekingU",
                        },
                        //图文样式 PicTextStyle:true,
                        {
                            userPic:"../../static/demo/userpic/10.jpg",
                            userName:"31K473k",
                            gender:1,//0:女 1:男
                            age:25,
                            isFollow:false,
                            title:"...轻轻呼唤你的名字",
                            titlePic:"../../static/demo/datapic/13.jpg",
                            textStyle:false,
                            PicTextStyle:true,
                            videoStyle:false,
                            shareStyle:false,
                            location:"PekingU",
                            shareNum:3498,
                            commentNum:3456,
                            likeNum:345,
                        },
                        //视频样式
                        {
                            userPic:"../../static/demo/userpic/10.jpg",
                            userName:"momo",
                            gender:0,//0:女 1:男
                            age:25,
                            isFollow:false,
                            title:"欢乐恶搞不是法外之地",
                            titlePic:"../../static/demo/datapic/2.jpg",
                            textStyle:false,
                            PicTextStyle:false,
                            videoStyle:{
                                playNum:"34W",
                                length:"3:51"
                            },
                            shareStyle:false,
                            location:"PekingU",
                            shareNum:3498,
                            commentNum:3456,
                            likeNum:345,
                        },
                        //分享样式
                        {
                            userPic:"../../static/demo/userpic/10.jpg",
                            userName:"ATM",
                            gender:0,//0:女 1:男
                            age:25,
                            isFollow:false,
                            title:"透明质酸钠",
                            titlePic:"",
                            textStyle:false,
                            PicTextStyle:false,
                            videoStyle:false,
                            shareStyle:{
                                shareTitle:"长笛",
                                sharePic:"../../static/demo/datapic/2.jpg"
                            },
                            location:"PekingU",
                            shareNum:3498,
                            commentNum:3456,
                            likeNum:345,
                        }
                    ]
                }              
            };
        },
        methods: {
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
                //修改状态
                setTimeout(()=> {                  
                    //示例:加载2000ms后从服务端获取了新的数据
                    let obj = {                       
                        //视频样式          
                            userPic:"../../static/demo/userpic/10.jpg",
                            userName:"ATM",
                            gender:"0",//0:女 1:男
                            age:25,
                            isFollow:false,
                            title:"透明质酸钠",
                            titlePic:"../../static/demo/datapic/2.jpg",
                            textStyle:false,
                            PicTextStyle:false,
                            videoStyle:{
                                playNum:"34W",
                                length:"3:51"
                            },
                            shareStyle:false,
                            location:"PekingU",
                            shareNum:3498,
                            commentNum:3456,
                            likeNum:345,
                        
                    };
                    this.followList.list.push(obj);//追加
                    
                    this.followList.loadText = "上拉加载更多";     //复原状态              
                }, 2000);
                
                //this.followList.loadText = "没有更多数据";
                
            }
        },
        components: {
            commonList,
            newsNavBar,
            loadMore,
            topicNav,
            topicList
        },
        onLoad() {
            uni.getSystemInfo({
                success: (res) => {
                    let height= res.windowHeight - uni.upx2px(100);//tabBar的高度是100upx
                    this.swiperHeight = height;
                }
            })
        },
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
    border-radius: 10upx;
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
    border-radius: 20upx;   
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
