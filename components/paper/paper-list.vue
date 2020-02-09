<template>
   
        <!-- u-f-ac 套用flex布局 使得各个组件左右排列  -->
        <view class="paper-list u-f-ac animated fadeIn faster" @tap="openChattingPage">
            <!-- 左边 头像 -->
            <image :src="item.userPic" mode="widthFix" lazy-load></image>
            <!-- 右边 消息详情 -->
            <view class="">
                <!-- 右上 昵称 时间 -->
                <view class="u-f-ac u-f-jsb">{{item.userName}}<view class="">{{item.time}}</view></view>
                <!-- 右下 信息 角标 -->
                <view class="u-f-ac u-f-jsb" style="font-size: 22upx;">{{item.msg}}
                    <template v-if="item.unreadNum > 0">
                        <uni-badge :text="item.unreadNum" type="error"></uni-badge>
                    </template>
                </view>
            </view>          
        </view>
        
</template>

<script>
    import uniBadge from '../uni-badge/uni-badge.vue';
    export default {
        components:{
            uniBadge
        },
        props:{
            item:Object,
            index:Number
        },
        methods:{
            openChattingPage(){
                uni.navigateTo({
                    url:"../../pages/user-chat/user-chat?chatData="+JSON.stringify(this.item)
                });
                
            }
        }
    }
</script>

<style scoped>

    .paper-list{
        border-bottom: 1upx solid #EEEEEE;
        padding: 20upx 0;
    }
    .paper-list>image{
        width: 80upx;
        height: 80upx;
        border-radius: 100%;
        margin-right: 20upx;
        flex-shrink: 0;
    }
    .paper-list>view{
        flex: 1;/*右边填充所有空间*/
    }
    /* 昵称样式 */
    .paper-list>view>view:first-child{
        font-size: 28upx;
    }
    /* 时间样式 */
    .paper-list>view>view:first-child>view{
        color: #CBCBCB;
        }
    /* 描述样式 */
    .paper-list>view>view:last-child{
        color: #999999;
    }
</style>
