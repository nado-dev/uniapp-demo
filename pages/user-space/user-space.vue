<template>
	<view>
        <user-space-head :userInfo="userInfo" ></user-space-head>   
	
        <!-- 用户信息 -->
        <view class="home-data user-space-data u-f-ac ">
            <block v-for="(item, index) in spaceData" :key="index">
                <home-data :item="item" :index="index"></home-data>
            </block>
        </view>
        <!-- 分割线 -->
        <view style="height: 20upx; background: #F4F4F4;"> </view>
        <!-- tabBar -->
        <swiper-tab-head 
        :tabBars="tabBars" 
        :tabIndex="tabIndex"
        @tabSwitch="tabSwitch">
        </swiper-tab-head>
        
        <!--用户详细信息 -->
        <template v-if="tabIndex == 0">
            <!-- 首页 -->
             <user-space-userinfo :userInfo="this.userInfo"></user-space-userinfo>
        </template>
        <template v-else>
            <!-- 列表 -->
            <block v-for="(item, index) in list" :key="index">
                <common-list :item="item" :index="index"></common-list>          
            </block>
            <!-- 上拉加载 -->
            <load-more :loadText="this.loadText"></load-more>
        </template>
    </view>
</template>

<script>
    import loadMore from '../../components/common/load-more.vue';
    import swiperTabHead from '../../components/index/swiper-tab-head.vue'; 
    import userSpaceHead from '../../components/user-space/user-space-head.vue'
	import userSpaceUserinfo from '../../components/user-space/user-space-userinfo.vue'
    import commonList from "../../components/common/common-list.vue";
    import homeData from "../../components/home/home-data.vue";
    export default {
        components:{
            userSpaceHead,
            homeData,
            swiperTabHead,
            userSpaceUserinfo,
            commonList,
            loadMore
        },
        data(){
            return {
                tabIndex:1,
                userInfo:{
                    userPic:"../../static/ATMpic.jpg",
                    userName:"ATM",
                    gender:0,
                    age:28,
                    regtime:"2019-12-11",
                    id:12344,
                    birthday:"1988-12-3",
                    qinggan:"未设置",
                    job:"未设置",
                    location:"未设置",
                    isFollow:true
                },
                spaceData:[
                    {name:"获赞", num:"10k"},
                    {name:"关注", num:'345'},
                    {name:"粉丝", num:'5623'},
                ],
                tabBars:[
                    {name:"主页",id:"zhuye" },
                    {name:"动态",id:"dongtai"},
                 
                ],
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
                        gender:1,//0:女 1:男
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
        },
       
        methods:{
            follow()
            {
                this.userInfo.isFollow != this.userInfo.isFollow;
            },
            tabSwitch(index){
                this.tabIndex = index
            },
            //上拉加载
            loadMore(){
                if(this.loadText != "上拉加载更多"){
                    return;//如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
                }
                this.loadText = "加载中(＾o＾)ﾉ";
                //修改状态
                setTimeout(()=> {                  
                    //示例:加载2000ms后从服务端获取了新的数据
                    let obj = {                       
                        //视频样式          
                            userPic:"../../static/demo/userpic/10.jpg",
                            userName:"ATM",
                            gender:0,//0:女 1:男
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
                    this.list.push(obj);//追加
                    
                    this.loadText = "上拉加载更多";     //复原状态              
                }, 1000);
                
                //this.tablist[this.tabIndex] .loadText = "没有更多数据";
                
            },
        },
        onReachBottom() {
            //上拉加载
            this.loadMore();  
        },
    }

	
</script>

<style>
.user-space-margin{
        margin: 20upx 0;
    }
.user-space-data{
    background:#FFFFFF;
    position: relative;
    z-index: 10;
    border-top-left-radius: 20upx;
    border-top-right-radius: 20upx;
    margin-top: -15upx;
}


</style>
