<template>
    <view class="u-f-ac home-info" hover-class="home-info-hover" @tap="toUserSpace">
        <!-- 左边头像 -->
        <image :src="homeInfo.userPic" mode="widthFix" lazy-load></image>
        <!-- 中间信息 -->
        <view class="u-f1">
            <!-- 中间第一层 昵称 -->
            <view class="" style="font-size: 37upx;">{{homeInfo.userName}}</view>
            <!-- 中间第二层 访客信息 -->
            <view class="" style="color: #C0C0C0;"> 今日访客{{homeInfo.todayVistor}}  总访客{{homeInfo.totalVistor}}  </view>
        </view>
        <!-- 右边进入图标 -->
        <view class="icon iconfont icon-jinru"></view>
    </view>
</template>

<script>
    export default {
        props:{
            homeInfo:Object
        },
        methods:{
            toUserSpace(){
                this.User.navigate({
                     url:"../../pages/user-space/user-space?userid="+this.homeInfo.id
                })
              
            }
        }
    }
</script>

<style scoped>
    .home-info{
        padding: 20upx;
        border-bottom: 1upx solid #CCCCCC;
    }
    .home-info-hover{
        background: #CCCCCC;
    }
    .home-info>view:last-of-type{
        height: 100%;
        width: 70upx;
        color: #CCCCCC;
    }
    .home-info>view:first-child>view:first-child{
        font-size: 40upx !important;
    }
    .home-info>image{
        flex-shrink: 0;
        width: 100upx;
        height: 100upx;
        border-radius: 100%;
        margin-right: 20upx;
    }
</style>
