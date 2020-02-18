<template>
    <view class="home-list-item u-f-jsb u-f-ac"  
    hover-class="home-list-hover" @tap="clickEven">
        <view class="icon iconfont" v-if="item.icon"
        :class="['icon-'+item.icon]"></view>{{item.name}}
        <!-- <view class="icon iconfont icon-jinru"></view> -->
        <view class="icon iconfont" :class="{'icon-jinru':!item.data}">{{item.data || ''}}</view>
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
                    let option = {url: this.item.url};
                        if(this.item.url){
                             if(this.item.auth){
                                 return this.User.navigate(option)
                             }
                             uni.navigateTo(option);
                        }
                        break;
                    case "switchTab":
                        if(this.item.url){
                             uni.switchTab({url: this.item.url});
                        }
                        break;
                    case "clear":
                        uni.showModal({
                            title:"提示",
                            content:"是否清除缓存？确定将清除您的登录状态",
                            confirmText:"立即清除",
                            success: (res) => {
                                if(res.confirm){
                                    // 清除缓存
                                    uni.User.logout(false);
                                    uni.clearStorage();
                                    uni.showToast({
                                        title:"清除成功！",
                                        duration:1000
                                    });
                                }
                            }
                        });
                        case "nothing":
                            uni.showToast({
                                title:"更新中",
                                icon:'none'
                            });
                            uni.navigateTo({url: this.item.url});
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
