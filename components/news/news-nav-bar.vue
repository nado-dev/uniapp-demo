<template>
    <view>
        <uni-nav-bar  :fixed="true" :statusBar="true" @clickRight="naviPost" backgroundColor="#009687">
            <!-- 左边 -->
            <block slot="left">
                <view class="nav-left">
                    <view class="icon iconfont icon-qiandao" ></view>
                </view>
            </block>
            <!-- 中间 -->
            <!-- index:数组索引 -->
            <view class="nav-tab-bar u-f-ajc">
                <!-- block生成了两个子组件，索引值分别未0，1 -->
                <block v-for="(tab, index) in tabBar" :key="tab.id">
                    <view class="u-f-ajc" :class="{'active':tabIndex == index}" @tap="changeTab(index)">
                        {{tab.name}}
                        <view class="nav-tab-bar-underLine" v-if="tabIndex == index"></view>
                    </view>
                </block>
            </view>
            <!-- 右边 -->
            <block slot="right">
                <view class="nav-right ">
                    <view class="icon iconfont icon-bianji1"></view>
                </view>
            </block>
        </uni-nav-bar>
    </view>
</template>

<script>
    import uniNavBar from "../uni-nav-bar/uni-nav-bar.vue";
    
    export default {
        components:{
            uniNavBar
        },
        props:{
            tabBar:Array,
            tabIndex:Number
        },
        methods:{
            naviPost() {
                uni.navigateTo({
                    url:"../../pages/addINput/addINput"
                })
            },
            changeTab(index) {
                this.$emit("changeTab", index)
            }
        }
    }
</script>

<style scoped>
    .nav-left>view,
    .nav-right>view {
        font-size: 32upx;
    }
    
    .nav-left {
        width: 100%;
    }
    
    .nav-left>view {
        display: 1;
        text-align: left;
        font-size: 57upx;
        color: #FFFFFF;
    
    }
    
    .nav-right {
        width: 100%;
    
    }
    
    .nav-right>view {
        display: 1;
        text-align: right;
        font-size: 57upx;
        color: #FFFFFF;
    
    }
    
    .nav-tab-bar {
        width: 100%;
        margin: -10upx;
        position: relative;
    }
    
    .nav-tab-bar>view {
        /*  border: 1upx solid; */
        /*  width: 50%; */
        margin: -60upx;
        font-size: medium;
        padding: 0 90upx;
        font-weight: bold;
        color: #555500;
    }
    
    .nav-tab-bar-underLine {
        border-bottom: 5upx solid #FFFFFF;
        border-top: 5upx solid #FFFFFF;
        width: 75upx;
        border-radius: 20upx;
        position: absolute;
        top: 30upx;
    }
    
    .active {
        font-size: 80upx;
        color: #FFFFFF !important;
    }
</style>
