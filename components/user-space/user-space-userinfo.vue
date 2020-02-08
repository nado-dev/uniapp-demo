<template>
    <view class="user-space-detailedInfo">
        <view class="user-space-detailedInfo-item">
            <!-- 账号信息 -->
            <view class="">
                账号信息
            </view>
            <!-- 使用时间 -->
            <view class="">
                注册时间    {{userInfo.regtime}}
            </view>
            <!-- 账号信息 id -->
            <view class="">
                UID    {{userInfo.id}}
            </view>
        </view>
        
        <view class="user-space-detailedInfo-item">
            <view class="">
                个人信息
            </view>
            <view class="">
                星座    {{getStarSign}}
            </view>
            <view class="">
                职业    {{userInfo.job}}
            </view>
            <view class="">
                所在地    {{userInfo.location}}
            </view>
            <view class="">
                情感状况    {{userInfo.qinggan}}
            </view>
        </view>
    </view>
</template>

<script>
    import time from "../../common/time.js";
    export default {
        props:{
            userInfo:Object
        },
        computed:{
            getRegAge(){
                return time.gettime.sumAge(this.userInfo.regtime)
            },
            getStarSign(){
                return time.gettime.getHoroscope(this.userInfo.birthday)
            }
        },
    }
</script>

<style>
    .user-space-detailedInfo-item{
        padding: 20upx 0;
        border-bottom: 1upx solid #EEEEEE;
    }
    .user-space-detailedInfo{
        padding: 0 30upx;
    }
    .user-space-detailedInfo-item>view{
        color: #AAAAAA;
    }  
    .user-space-detailedInfo-item>view:first-child{
        color: #333333;
        font-size: 35upx;
        padding: 15upx 0;
    }  
</style>
