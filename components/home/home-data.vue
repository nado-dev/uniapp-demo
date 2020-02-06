<template>
    <view class="u-f1 u-f-ajc u-f-column">
        <view >{{item.name}}</view>{{item.num}}
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

<style scoped>
    .home-data{
        
        padding: 20upx 80upx; 
    }
    .home-data>view{
       
        color: #989898;
    }
    .home-data>view>view{
      
        font-size: 36upx;
        color: #000000 !important;
        font-weight: bold;
    }
</style>
