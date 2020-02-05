<!-- 聊天页面消息列表 使用大量v-if区分：1、是否为自己发送，2、消息类型（图片、文字） -->
<template>
    <view class="user-chat-item">
        <!-- 时间 -->
        <view class="user-chat-time u-f-ajc" v-if="item.formatedTime">
             {{item.formatedTime }}
        </view>
        <view class="user-chat-list u-f " :class="{'user-chat-me':item.isMyMsg}">
            <!-- 左边头像 好友-->
            <image v-if="!item.isMyMsg" :src="item.userPic" mode="widthFix" lazy-load></image> 
            <!-- 聊天气泡+内容-->
            <view class="user-chat-list-body">
                <!-- 文字 -->
                <text v-if="item.type =='text' ">{{item.data}}</text>
                <!-- 图片 -->
                <image v-if="item.type =='img' " :src="item.data" mode="widthFix" lazy-load></image>
            </view>
            <!-- 右边头像 自己-->
            <image v-if="item.isMyMsg" :src="item.userPic" mode="widthFix" lazy-load></image>
        </view>
    </view>
</template>

<script>
    export default {
        props:{
            item:Object,
            index:Number
        }
    }
</script>

<style>
    .user-chat-list{
    /*    border: 1upx solid; */
        margin: 10upx ;
        padding: 20upx 0;
    }
    .user-chat-list>image{
        width: 100upx;
        height: 100upx;
        border-radius: 100%;
        flex-shrink: 0;
    }
    .user-chat-list-body{
        /* border: 1upx solid; */
        position: relative;
        background: #F4F4F4;
        padding: 25upx;
        margin-left: 25upx;
        margin-right: 100upx;
        border-radius: 50upx;
        }
        /* 聊天消息图片样式 */
    .user-chat-list-body>image{
        max-width: 150upx;
        max-height: 200upx;
    }
        
        /* after:可用于在元素内容之前或之后插入生成的内容。 */
    .user-chat-list-body:after{
        /* absolute:相对于 static 定位以外的第一个父元素进行定位。 */
        position: absolute;
        left: -30upx;
        right: 0;
        top: 20upx;
        content: "";
        width: 0;
        height: 0;
        border: 20upx  solid #F4F4F4;
        /* 右边框颜色显示，其余边框颜色透明，自动做收缩处理 */
        border-color: transparent #F4F4F4 transparent transparent;
    }
    .user-chat-me{      
      /*  border: 1upx solid; */
    	justify-content: flex-end;
    }
    .user-chat-me .user-chat-list-body{
    	margin-right: 20upx;
    	margin-left: 100upx;
        /* border: 1upx solid; */
    }
    /* 用来表示层级关系 */
    .user-chat-me .user-chat-list-body:after {
    	left: auto;
    	right: -30upx;
    	border-color: transparent transparent transparent #F4F4F4;
    },
    .user-chat-time{
        padding: 50upx 0;
        color: #a2a2a2;
        font-size: 24upx;
    }
</style>
