<template>
    <view class="topic-list u-f animated fadeInLeft fast" @tap="openTopicDetial">
       <!-- 左边 图片-->
        <image :src="item.titlePic" mode="widthFix"  lazy-load></image>
       <!-- 右边 -->
       <view class="">
           <view class="">#{{item.title}}#</view>
           <view class="">{{item.desc}}</view>
           <view class="">动态 {{item.totalPostNum}} 今日 {{item.todayPostNum}}</view>
       </view>
    </view>
</template>

<script>
    export default {
        props:{
            item:Object,
            index:Number
        },
        methods:{
            openTopicDetial(){
                uni.navigateTo({
                    url:"../../pages/topic-detail/topic-detail"
                })
            }
        }
    }
</script>

<style>
    .topic-list>image{
        width: 150upx;
        height: 150upx;
        border: 10upx;
        margin: 10upx 20upx;
        border-radius: 10upx;
    }
    .topic-list{
        border-bottom: 1upx solid #EEEEEE;
        
    }
    .topic-list>view>view{
        color: #A4A4A4;
    }
    /* 话题名称 */
    .topic-list>view>view:first-child{
        color: #333333;
        font-size: 32upx;
    }
</style>
