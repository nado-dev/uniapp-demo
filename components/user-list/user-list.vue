<template>
    <view class="user-list u-f-ac u-f-jsb" @tap.stop="openSpace" >
        <!-- 左边 头像 -->
        <view class="u-f-jsb u-f-ac">
            <view class="user-list-userpic">
                <image :src="item.userpic" mode="widthFix" lazy-load ></image>
            </view>
            <!-- 中间 -->
            <view class="u-f-ac">
                <!-- 中间上 昵称+性别年龄-->
                <view >
                    {{item.name}}
                </view>
                <!-- 中间下 -->
            </view>
        </view>
        <!-- 右边 选择图标 -->
        <view v-show="!hidden">
             <template v-if="item.isFollow " >
             <view class="icon  iconfont icon-xuanze-yixuan" ></view>
            </template> 
            <template v-else>
                <view class="icon  iconfont icon-zengjia1" ></view>
            </template>  
        </view>
                   
    </view>
</template>

<script>
    import tagGenderAge from '../common/tag-gender-age.vue';
    export default {
        components:{
            tagGenderAge
        },
        props:{
            item:Object,
            index:Number,
            hidden:{
                type:Boolean,
                default:false
            }
        },
        methods:{
             openSpace(){
               uni.navigateTo({
                   url:'../../pages/user-space/user-space?userid='+this.item.id
               })
           }
        }
    }
</script>

<style scoped>
    .user-list{
      /*  border: 1upx solid; */
        margin: 0 20upx;
        border-bottom: 1upx #EEEEEE solid;
        padding: 10upx 10upx;
        height: 150upx;
        background-color: #FFFFFF !important; 
        margin: 10upx 15upx;
        box-shadow: 0 2upx 4upx rgba(0, 0, 0, .3);
    }
    .user-list-userpic>image{
        width: 100upx;
        height: 100upx;
        border-radius: 100%;
        /* border: 1upx solid; */
        margin-right: 20upx;
        box-shadow: 0 4upx 8upx rgba(0, 0, 0, .3);
    }
    .user-list>view:last-child{
        color: #CCCCCC;
        font-size: 42upx;
    }
    .icon-zengjia1{
        color: #F87918 !important;
    }
</style>
