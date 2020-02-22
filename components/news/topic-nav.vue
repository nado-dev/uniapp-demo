<template>
    <view class="topic-nav">
        <view class="u-f-ac u-f-jsb">
            <view>
                热门分类
            </view>
            <view class="u-f-ac " @tap="openTopicNav()">
                更多<view class="icon iconfont icon-jinru"></view>
            </view>
        </view>
        
        <view class="u-f-ac">
            <block v-for="(item, index) in nav" :key="index">
                <view class="u-f-ajc" @tap="openDetail(item.id)">{{item.name}}</view>
            </block>
        </view>
    </view>

</template>

<script>
    export default {
        props:{
            nav:Array
        },
        methods:{
            openTopicNav(){
                uni.navigateTo({
                    url:"../../pages/topic-nav/topic-nav"
                })
            },
            openDetail(index){
                console.log(index)
                uni.navigateTo({
                    url:"../../pages/topic-nav/topic-nav?page="+index
                })
            }
        }
    }
</script>

<style scoped>

.topic-nav{
    /* border: 1upx solid; */
    border-bottom: 1upx solid #eeeeee;
    border-top: 1upx solid #eeeeee;
    padding: 20upx;
    background-color: #FFFFFF;
    margin: 10upx 15upx;
    box-shadow: 0 1upx 2upx rgba(0, 0, 0, .3);
} 
/* 热门第一行 */
.topic-nav>view:first-child{
    margin-bottom: 10upx;
}
.topic-nav>view:first-child>view:first-child{
    color: #333333;
    font-size: 32upx;
}
.topic-nav>view:first-child>view:last-child{
    color: #9E9E9E;
}
/* 热门第二行 */
.topic-nav>view:last-child{
    
} 
.topic-nav>view:last-child>view{
    flex: 1;
    background-color: #EEEEEE;
    color: #6E6E6E;
    margin: 0 10upx;
    box-shadow: 0 4upx 8upx rgba(0, 0, 0, .3);
}  
</style>
