<template>
    <view class="">
        <!-- 蒙版 菜单显示而显示 点击蒙版区域隐藏菜单 -->
        <view class="paper-left-popup-mask" v-show="isPopupShow" @tap="hidePopup()"> 
        <!-- 菜单的优先级在蒙版之上 显示 -->
            <view class="paper-left-popup " v-show="isPopupShow">
                <!-- 第一层 添加好友 -->
                <view class="u-f-ac" hover-class="paper-left-popup-hover" @tap="addBlackList()">
                    <view class="icon iconfont icon-sousuo u-f-ac"><view>拉黑</view></view>
                </view>
                <!-- 第二层 清空未读提示-->
                <view class="u-f-ac" hover-class="paper-left-popup-hover" @tap="remark()">
                    <view class="icon iconfont icon-qingchu u-f-ac"><view>备注</view></view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        props:{
            isPopupShow:Boolean
        },
        methods:{
            //触发父组件以下事件
            hidePopup(){
                this.$emit('hidePopup')
            },
            addBlackList(){
                this.$emit('addBlackList')
            },
            remark(){
                this.$emit('remark')
            }
        }
    }
</script>

<style>
    .paper-left-popup-mask{
        position: fixed;
        /* 铺满整个窗口 */
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(55,55,55,0.5);
        /* 层级关系小于菜单 */
        z-index: 1999;
      
    }
    .paper-left-popup{
        position: fixed;
        right: 0;
        top: 90upx;
        background: #FFFFFF;
        font-size: 35upx !important;
        /* 
        z-index 属性设置元素的堆叠顺序。
        拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。
        Z-index 仅能在定位元素上奏效（
        例如 position:absolute;）！ */
        z-index: 2000;
        width: 55%;
       /* height: 10%; */
        box-shadow: 1upx 1upx 20upx 2upx #CCCCCC;/*四边阴影*/
    }
    .paper-left-popup>view{
        /* border: 1upx solid; */
        padding: 20upx;
        
    }
    .paper-left-popup>view:first-child{
        border-bottom: 1upx solid #EEEEEE;
    }
     .paper-left-popup>view>view{
         /* font-weight: bold; */
     }
     /* 文字效果 */
     .paper-left-popup>view>view>view{
       /*  border: 1upx solid; */
         padding-left: 40upx;
         /* font-size: 28upx; */
     }
     .paper-left-popup-hover{
         background-color: #EEEEEE;
     }
</style>
