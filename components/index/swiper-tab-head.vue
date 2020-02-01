<template>
    <view class="uni-tab-bar">
        <!-- 允许X方向滚动 -->
        <scroll-view scroll-x class="uni-swiper-tab">
            <!-- 遍历构造 -->
            <block v-for="(tab,index) in tabBars" :key="tab.id">
                <view class="swiper-tab-list" 
                :class="{'active':tabIndex == index}"
                @tap="tabSwitch(index)">
                    {{tab.name}}
                    <view class="swiper-tab-underLine"> </view>
                </view>
            </block>
        </scroll-view>
    </view>
</template>

<script>
    export default {
        props:{
            tabBars:Array,
            tabIndex:Number,
        },
        methods:{
            //tabBar点击事件
            tabSwitch(index){
                //点击操作获取了当前的index，再将其写入tabIndex中，匹配的项目改变样式
                this.$emit('tabSwitch', index);
            },
        }
    }
</script>

<style>
    .swiper-tab-list{
        color: #969696;
        font-weight: bold;
    }
    .uni-tab-bar .active{
        color: #343434;
    }
    .active .swiper-tab-underLine{
        border: 1upx solid #EFDE33;
        width: 70upx;
        margin: auto;
        border-top: 6px solid #EFDE33;
        border-radius: 10upx;
    }
    .uni-swiper-tab{
        border-bottom: 1upx solid #EEEEEE;
    }
</style>
