<template>
	<view class="animated fadeIn faster">
        <!-- 未登录 -->
        <template v-if="!isLogin">
            <!-- 第三方登录 -->
            <other-login></other-login>
            <!-- 账号密码登录 -->
            <view class="u-f-ajc" @tap="openLogin">
                <view class="icon iconfont icon-jinru"> </view>账号密码登录
            </view>
           
        </template >
        
        <!-- 已登录 -->
        <template v-else>
              <home-info :homeInfo="homeInfo"></home-info>          
            <!-- 动态 评论 收藏数量 -->
            <view class="home-data u-f-ac ">
                <block v-for="(item, index) in homeData" :key="index">
                    <home-data :item="item" :index="index"></home-data>
                </block>
            </view>
         </template>
        <!-- 广告banner -->
        <view class="home-ad-pic u-f-ajc">
            <image  src="../../static/demo/demo20.jpg" mode="widthFix" lazy-load></image>
        </view>
        
        <!-- 选项列表*2 -->
        <view class="home-list">
            <block v-for="(item, index) in list" :key="index">
                <home-list-item :item="item" :index="index"></home-list-item>
            </block>
            
        </view>
    </view>
</template>

<script>
    import homeListItem from "../../components/home/home-list-item.vue";
    import homeInfo from "../../components/home/home-info.vue";
    import otherLogin from "../../components/home/other-login.vue";
    import homeData from "../../components/home/home-data.vue"
	
    export default {
        components:{
            homeListItem,
            homeInfo,
            otherLogin,
            homeData
        },
        methods:{
            openLogin(){
                uni.navigateTo({
                    url:"../login/login"
                })
            }
        },
        data(){
            return{
                isLogin:false,
                list:[
                    {name:"浏览历史", icon:"liulan", clickType:"", url:""},
                    {name:"实名认证", icon:"huiyuanvip", clickType:"", url:""},
                ],
                homeInfo:{
                    userPic:"../../static/ATMpic.jpg",
                    userName:"ATM",
                    totalVistor:123,
                    todayVistor:12
                },
                homeData:[
                    {name:"动态", num:12},
                    {name:"评论", num:12},
                    {name:"收藏", num:12},
                    {name:"点赞", num:12}
                ]
            }
        },
        onNavigationBarButtonTap(e){
           if(e.index == 0){
                uni.navigateTo({
                    url:"../user-setting/user-setting"
                })
           }
       }
	}
</script>
    
<style>
.home-ad-pic{
   
   padding: 20upx 20upx;
   
}
.home-ad-pic>image{
    width: 100%;
    border-radius: 20upx;
}
.home-list{
    padding: 20upx 20upx ;
   
}
</style>
