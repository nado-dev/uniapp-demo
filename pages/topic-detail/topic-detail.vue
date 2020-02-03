<template>
	<view>
        <!-- 话题介绍 -->
		<topic-info :topicInfo="topicInfo"></topic-info>
        <!-- tab切换  -->
        <swiper-tab-head
        :tabBars="tabBars" 
        :tabIndex="tabIndex"
        @tabSwitch="tabSwitch">
        </swiper-tab-head>
        <!-- 列表 -->
        <view class="topic-detail-list">
            <!-- 循环出默认和最新 -->
            <block v-for="(item, index) in tablist" :key="index">
                <template v-if="tabIndex == index">
                    <!-- 列表 -->
                    <block v-for="(list, listIndex) in item.list" :key="listIndex">
                        <common-list :item="list" :index="listIndex"></common-list>          
                    </block>
                    <!-- 上拉加载 -->
                    <load-more :loadText="item.loadText"></load-more>
                </template>
               
            </block>
        </view>
	</view>
</template>

<script>
    import loadMore from '../../components/common/load-more.vue';
    import topicInfo from "../../components/topic/topic-info.vue";
    import swiperTabHead from '../../components/index/swiper-tab-head.vue';
    import commonList from "../../components/common/common-list.vue";
	export default {
        components:{
            topicInfo,
            loadMore,
            swiperTabHead,
            commonList
        },
		data() {
			return {
                tabIndex:0,
                tabBars:[
                    {name:"默认",id:"default"      },
                    {name:"最新",id:"lastest"      },              
                ],
                tablist:[
                    //默认tab
                    {
                        loadText:"上拉加载更多",
                        list:[
                                // 纯文字样式 textStyle
                                {
                                    userPic:"../../static/demo/userpic/10.jpg",
                                    userName:"ATM",
                                    gender:"0",//0:女 1:男
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
                                    gender:"1",//0:女 1:男
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
                                    gender:"0",//0:女 1:男
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
                                    gender:"0",//0:女 1:男
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
                    },
                    //最新tab
                    {
                        loadText:"上拉加载更多",
                        list:[
                            
                                // 纯文字样式 textStyle
                                {
                                    userPic:"../../static/demo/userpic/10.jpg",
                                    userName:"ATM",
                                    gender:"0",//0:女 1:男
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
                                    gender:"1",//0:女 1:男
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
                                    gender:"0",//0:女 1:男
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
                                    gender:"0",//0:女 1:男
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
                    },
                    
                ],
				topicInfo:{
                    titlePic:"../../static/common/zheshiluwei.jpg",
                    title:"这是芦苇",
                    desc:"想歪的自重！",
                    totalPostNum:148,
                    todayPostNum:7
                }
			}
		},
        //监听上拉触底
        onReachBottom() {
            //上拉加载
            this.loadMore();  
        },
        //监听下拉刷新
        onPullDownRefresh() {
            
            this.getData();
        },
		methods: {
            //上拉刷新
        getData(){
            setTimeout(()=> {
            //1.获取数据
            let arr=[
                //图文样式 PicTextStyle:true,
                {
                    userPic:"../../static/demo/userpic/10.jpg",
                    userName:"31K473k",
                    gender:"1",//0:女 1:男
                    age:25,
                    isFollow:false,
                    title:"刷新后数据...轻轻呼唤你的名字",
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
                    gender:"0",//0:女 1:男
                    age:25,
                    isFollow:false,
                    title:"刷新后数据 欢乐恶搞不是法外之地",
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
                    gender:"0",//0:女 1:男
                    age:25,
                    isFollow:false,
                    title:"刷新后数据 透明质酸钠",
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
                },
              
            ];
                //2.赋值
                this.tablist[this.tabIndex].list=arr;
                //3.关闭下拉刷新
                uni.stopPullDownRefresh();}, 2000);
            },
            //点击切换
            changeTab(index) {
                this.tabIndex = index;
            },
            
            //上拉加载
            loadMore(){
                if(this.tablist[this.tabIndex].loadText != "上拉加载更多"){
                    return;//如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
                }
                console.log("running1")
                this.tablist[this.tabIndex].loadText = "加载中(＾o＾)ﾉ";
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
                    this.tablist[this.tabIndex].list.push(obj);//追加
                    
                    this.tablist[this.tabIndex].loadText = "上拉加载更多";     //复原状态              
                }, 2000);
                
                //this.tablist[this.tabIndex] .loadText = "没有更多数据";
                
            },
			//tabBar点击事件
			tabSwitch(index){
			    //点击操作获取了当前的index，再将其写入tabIndex中，匹配的项目改变样式
			    this.tabIndex = index;
			    //alert(index)
			},
		}
	}
</script>

<style>

</style>
