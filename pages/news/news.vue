<template>
    <view>
        <!-- 自定义导航栏 -->
        <uni-nav-bar :statusBar="true" @clickRight="naviPost" backgroundColor="#009687">
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
                    <view class="u-f-ajc" :class="{'active':tabIndex == index}" @tap="changTab(index)">
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
        
        <!-- 列表 -->
        <view class="common-list u-f">
            <!-- 左侧：用户头像 -->
            <view class="common-list-l">
                <image src="../../static/demo/userpic/10.jpg" mode="widthFix" lazy-load></image>
            </view>
            <!-- 右侧： -->
            <view class="common-list-r">
                <!-- 右侧第一层 -->
                <view class="u-f-ac u-f-jsb">
                    <!-- 右一左边 昵称 性别+年龄 -->
                    <view class="u-f-ac">昵称
                    <view class="icon iconfont icon-nan tag-age-gender" >25</view></view>
                    <!-- 右一右边 关注按钮-->
                    <view class="icon iconfont icon-zengjia">关注</view>
                </view>
                <!-- 右侧第二层 标题 -->
                <view class="">标题</view>
                <!-- 右侧第三层 图片/视频-->
                <view class="u-f-ajc">
                    <!-- 图片 -->
                    <!-- <image src="../../static/demo/datapic/13.jpg" mode="widthFix" lazy-load></image> -->
                    <!-- 视频 -->
                    <!-- <view class="common-list-play icon iconfont icon-bofang"></view> -->
                    <!-- <view class="common-list-playinfo">20w 次播放 2:45</view> -->
                    <!-- 分享样式 -->
                    <view class="common-list-share u-f-ac">
                        <image src="../../static/demo/datapic/2.jpg" mode="widthFix" lazy-load></image>
                        <view class="">标题</view>
                    </view>
                </view>
                <!-- 右侧第四层 -->
                <view class="u-f-ac u-f-jsb">
                    <!-- 右四左边 地址 -->
                    <view class="">Zhanjiang,Guangdong</view>
                    <!-- 右四右边 转发 评论 点赞 -->
                    <view class="u-f-ac">
                        <view class="icon iconfont icon-zhuanfa">12</view>
                        <view class="icon iconfont icon-pinglun">12</view>
                        <view class="icon iconfont icon-dianzan">12</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";

    export default {
        data() {
            return {
                tabIndex: 0,//当前选中的tab的索引值
                tabBar: [{
                        name: "关注",
                        id: "follow"
                    },
                    {
                        name: "话题",
                        id: "topic"
                    }
                ]
            }
        },
        methods: {
            naviPost() {
                uni.navigateTo({
                    url:"../addINput/addINput"
                })
            },
            changTab(index) {
                this.tabIndex = index;
            }
        },
        components: {
            uniNavBar
        }
    }
</script>

<style>
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
    .common-list{
       padding: 20upx;
    }
    .common-list-l image{
        width: 90upx;
        height: 90upx;
        border-radius: 100%;
    }
    .common-list-l{
        /* 不会被压缩 */
        flex-shrink: 0;
    }
    .common-list-r{
        /* 右边拉满 */
        flex: 1;
        margin-left: 15upx;
        padding-bottom: 10upx;
        border-bottom: 1upx solid #EEEEEE;
    }
    .common-list-r>view:nth-child(1){
        
    }
    /* 昵称 年龄+性别样式 */
    .common-list-r>view:nth-child(1)>view:first-child{
        color: #999999;
        font-size: 30upx;
        line-height: 0;
    }
    .tag-age-gender{
        background: #009687;
        color: #FFFFFF;
        font-size: 23upx;
        padding: 0 5upx;
        margin-left: 10upx;
        border-radius: 15upx;
    }
    /* 关注按钮样式 */
    .common-list-r>view:nth-child(1)>view:last-child{
        background: #EEEEEE;
        padding: 0 10upx;
        font-size: small;
    }
    .common-list-r>view:nth-child(2){
        font-size: large;
        padding: 12upx 0;
    }
    .common-list-r>view:nth-child(3){
        position: relative;
    }
    .common-list-r>view:nth-child(3)>image{
        width:100%;
        border-radius: 10upx;
    }
    .common-list-play,.common-list-playinfo{
        position: absolute;
        color: #FFFFFF;
    }
    .common-list-play{
        font-size: 100upx;
    }
    .common-list-playinfo{
        right: 10upx;
        bottom: 10upx;
        background: rgba(51,51,51,0.73);
        border-radius: 20upx;
        padding: 0 20upx;
        font-size: 25upx;
    }
    /* 分享样式 */
    .common-list-share{
        background: #EEEEEE;
       /* 宽度全部填充 */
        width: 100%;
        border-radius: 10upx;
        padding: 10upx;
    }
    .common-list-share>image{
        width: 200upx;
        height: 150upx;
        margin-right: 10upx;
    }
    .common-list-r>view:nth-child(4){
        
    }
    
    .common-list-r>view:nth-child(4)>view{
        color: #AAAAAA;
    }
    /* 点赞、评论、转发样式 */
    .common-list-r>view:nth-child(4)>view:nth-child(2)>view{
        margin-left: 10upx;
        padding: 5upx;
    }
</style>
