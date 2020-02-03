<template>
    <view class="">
        <!-- 模糊背景 -->
        <view class="topic-bg">
            <!-- 只保证图片的短边能完全显示出来 另一个方向将会发生截取  -->
            <image :src="topicInfo.titlePic" mode="aspectFill" lazy-load></image>
        </view>
        <!-- 话题信息 -->
        <view class="topic-info">
            <!-- 第一层 -->
            <view class="topic-info-t u-f-ac">
                <!-- 缩略图 -->
                <image :src="topicInfo.titlePic" mode="widthFix" lazy-load></image>
                <!-- 话题 -->
                <view class="">#{{topicInfo.title}}#</view>
            </view>
            <!-- 第二层 -->
            <view class="topic-info-c u-f-ac">
                <!-- 动态 -->
                <view class="">动态 {{topicInfo.totalPostNum}}</view>
                <!-- 今日 -->
                <view class="">今日 {{topicInfo.todayPostNum}}</view>
            </view>
            <!-- 第三层 描述-->
            <view class="topic-info-b">{{topicInfo.desc}}</view>
        </view>
    </view>
</template>

<script>
    export default {
        props:{
            topicInfo:Object
        }
    }
</script>

<style scoped>
    .topic-bg{
        width: 100%;
        height: 300upx;
        position: relative;
        overflow: hidden;/*超出部分隐藏*/
    }
    .topic-bg>image{
        position: absolute;
        width: 100%;
        filter: blur(5px);/*滤镜*/
    }
    .topic-info{
        padding: 0 25upx;
    }
    .topic-info-t{
        position: relative;
    }
    .topic-info-t>view{
        margin-left: 170upx;
        font-size: 35upx;
        font-weight: bold;  
        flex: 1;
        padding-left: 20upx;
    }
    .topic-info-t>image{
        width: 150upx;
        height: 150upx;
        border-radius: 20upx ;
        position: absolute;/*绝对定位上一层要相对定位*/
        top: -75upx;/*穿到上一组件 用负值*/
    }
    .topic-info-c{
        
        margin-top: 20upx;
        padding: 10upx 0 10upx 0;
    }
    .topic-info-c>view{
        color: #CDCDCD;
        margin-right: 15upx;
    }
    .topic-info-b{
          
        color: #A3A3A3;
        font-size: 32upx;
        padding-bottom: 10upx;
    }
</style>
