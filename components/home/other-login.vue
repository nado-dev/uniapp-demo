<template>
    <view >
        <view class="u-f-ajc" style="padding: 10upx;">登录以查看更多内容</view>
        <!-- 第三方登录API -->
        <view class="other-login u-f-ac">
            <view class="u-f-ajc u-f1">
                <view class="icon iconfont icon-weixin u-f-ajc "></view>
            </view>
            <view class="u-f-ajc u-f1">
                <view class="icon iconfont icon-xinlangweibo u-f-ajc "></view>
            </view>
            <view class="u-f-ajc u-f1">
                <view class="icon iconfont icon-QQ u-f-ajc"></view>
            </view>
        </view>
       
    </view>
</template>

<script>
</script>

<style scoped>
    .other-login{
      
        padding: 20upx 80upx; 
    }
    .other-login>view{
       
       }
    .other-login>view>view{
        width: 100upx;
        height: 100upx;
       
        border-radius: 100%;
        font-size: 55upx;
        color: #FFFFFF;
    }
    .other-login .icon-weixin{
        background: #28DE98;
    }
    .other-login .icon-xinlangweibo{
        background: #FC7729;
    }
    .other-login .icon-QQ{
        background: #2CAEFC;
    }
    
</style>
