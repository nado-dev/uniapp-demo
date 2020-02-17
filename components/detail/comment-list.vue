<template>
   
        <!-- 主体 -->
   <view class="uni-comment-list " :class="{'u-comment-list-child':item.fid != 0}">
        <!--左 头像 -->
        <view class="uni-comment-face"><image :src="item.userPic" mode="widthFix"></image></view>
        <!--右   -->
        <view class="uni-comment-body" hover-class="uni-comment-body-hover" @tap.stop="reply">
            <!-- 用户名 -->
            <view class="uni-comment-top">
                <text>{{item.userName}}</text>
            </view>
            <!-- 内容 -->
            <view class="uni-comment-content">{{item.content}}</view>
            <!-- 时间 -->
            <view class="uni-comment-date">
                <view>{{item.time}}</view>
            </view>
        </view>
        <!-- 回复 -->
        <view class="u-comment-reply icon iconfont icon-fanhui" @tap="reply"></view>
    </view>      

</template>

<script>
    export default {
        props:{
            item:Object,
            index:Number
        },
        methods:{
            reply() {
                this.$emit('reply',this.item)
            },
        }
    }
</script>

<style scoped>
   
    .u-comment-list-child{
        padding: 20upx;
        background: #F4F4F4;
        border-bottom: 1upx solid #EEEEEE;
        /* 属性不会向外扩张，向内挤压 */
        box-sizing: border-box;
        /* 留出头像的距离 */
        margin-left: 70upx;
        width: auto;
    }
    .uni-comment-body-hover{
        background: #EEEEEE;
    }
</style>
