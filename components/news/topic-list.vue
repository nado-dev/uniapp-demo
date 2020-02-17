<template>
    <view class="topic-list u-f animated fadeIn faster" @tap="openTopicDetial">
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
            index:Number,
            ischange:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            openTopicDetial(){
                if(this.ischange){
                    uni.$emit('changeTopic',{id:this.item.id, title:this.item.title})
                    uni.navigateBack({
                        delta:1
                    })
                    return
                }
                uni.navigateTo({
                    url:"../../pages/topic-detail/topic-detail?detail="+JSON.stringify(this.item)
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
        box-shadow: 0 4upx 8upx rgba(0, 0, 0, .3);
    }
    .topic-list{
        border-bottom: 1upx solid #EEEEEE;
        box-shadow: 0 2upx 4upx rgba(0, 0, 0, .3);
        background-color: #FFFFFF !important;
        margin: 10upx 15upx;
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
