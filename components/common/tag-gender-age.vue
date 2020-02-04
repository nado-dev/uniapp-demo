<template>
    <view class="tag-age-gender"
    :class="[gender==1?'icon iconfont icon-nan male':'icon iconfont icon-nv female']">
        {{age}}
    </view>
</template>

<script>
    export default {
        props:{
            gender:Number,
            age:Number
        }
    }
</script>

<style scoped>
    .tag-age-gender{
        background: #009687;
        color: #FFFFFF;
        font-size: 20upx;
        padding: -5upx 0upx;
        margin-left: 10upx;
        border-radius: 15upx;
      
    }
    .male{
        background: blue;
    }
    .female{
        background: pink;
    }
</style>
