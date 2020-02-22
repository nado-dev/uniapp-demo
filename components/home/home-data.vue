<template>
    <view class="u-f1 u-f-ajc u-f-column" @tap="openDetail">
        <view >{{item.name}}</view>{{item.num}}
    </view> 
</template>

<script>
    export default {
        props:{
            item:Object,
            index:Number,
            userid:Number
        },
        methods:{
            openDetail(){
                switch (this.item.type){
                    case "latest":
                        uni.navigateTo({
                            url:"../../pages/user-space/user-space?index=1&userid="+this.userid,
                            
                        })
                        break;
                    case "comment":
                        break;
                    case "fans":
                        uni.navigateTo({
                            url:"../../pages/user-list/user-list?index=2"
                        })
                        break;
                    case "follow":
                        uni.navigateTo({
                            url:"../../pages/user-list/user-list?index=1"
                        })
                        break;
                }
            }
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
