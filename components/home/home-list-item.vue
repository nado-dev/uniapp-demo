<template>
    <view class="home-list-item u-f-jsb u-f-ac"  
    hover-class="home-list-hover" @tap="clickEven">
        <view class="icon iconfont" v-if="item.icon"
        :class="['icon-'+item.icon]"></view>{{item.name}}
        <view class="icon iconfont icon-jinru"></view>
    </view>
</template>

<script>
    export default {
        props:{
            item:Object,
            index:Number
        },
        methods:{
            clickEven(){
                switch (this.item.clickType){
                    case "navigateTo":
                        if(this.item.url){
                             uni.navigateTo({url: this.item.url});
                        }
                        break;
                    case "switchTab":
                        if(this.item.url){
                             uni.switchTab({url: this.item.url});
                        }
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    .home-list-item{
        padding: 10upx 10upx ;
        border-top: 1upx solid #CCCCCC;
        border-bottom: 1upx solid #CCCCCC;
    }
    .home-list-hover{
        background: #EEEEEE;
    }
    .home-list-item>view:last-child{
       
        color: #CCCCCC;
    }
    .home-list-item>view:first-child{
        font-size: 32upx;
         
    }
</style>
