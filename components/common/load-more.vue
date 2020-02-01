<template>
    <view class="load-more">
       {{loadText}} 
    </view>
</template>

<script>
    export default {
        props:{
            loadText:String
        }
    }
</script>

<style scoped>
.load-more{
    text-align: center;
    color: #AAAAAA;
    padding: 15upx;
}
</style>
