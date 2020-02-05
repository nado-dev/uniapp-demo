<template>
    <view class="common-list u-f animated fadeInLeft fast">
        <!-- 左侧：用户头像 -->
        <view class="common-list-l">
            <image :src="item.userPic" mode="widthFix" lazy-load></image>
        </view>
        <!-- 右侧： -->
        <view class="common-list-r">
            <!-- 右侧第一层 -->
            <view class="u-f-ac u-f-jsb">
                <!-- 右一左边 昵称 性别+年龄 -->
                <view class="u-f-ac">{{item.userName}}
                    <tag-gender-age :gender="item.gender" :age="item.age"></tag-gender-age>
                </view>
                <!-- 右一右边 关注按钮-->
                <view v-if="!isFollow" 
                class="icon iconfont icon-zengjia" @tap="follow()">关注</view>
                <view @tap="follow()" v-else>已关注</view>
            </view>
            <!-- 右侧第二层 标题 -->
            <view class="">{{item.title}}</view>
            <!-- 右侧第三层 图片/视频-->
            <view class="u-f-ajc">
                <!-- 图片 -->
                <image v-if="item.PicTextStyle"  :src="item.titlePic" mode="widthFix" lazy-load></image>
                <!-- 视频 -->
                <template v-if="item.videoStyle">
                    <image :src="item.titlePic" mode="widthFix" lazy-load></image>
                    <view class="common-list-play icon iconfont icon-bofang"></view>
                    <view class="common-list-playinfo">{{item.videoStyle.playNum}} 次播放 {{item.videoStyle.length}}</view>
                </template>
                
                <!-- 分享样式 -->
                <view v-if="item.shareStyle" class="common-list-share u-f-ac" >
                    <image :src="item.shareStyle.sharePic" mode="widthFix" lazy-load></image>
                    <view>{{item.shareStyle.shareTitle}}</view>
                </view>
            </view>
            <!-- 右侧第四层 -->
            <view class="u-f-ac u-f-jsb">
                <!-- 右四左边 地址 -->
                <view>{{item.location}}</view>
                <!-- 右四右边 转发 评论 点赞 -->
                <view class="u-f-ac">
                    <view class="icon iconfont icon-zhuanfa">{{item.shareNum}}</view>
                    <view class="icon iconfont icon-pinglun">{{item.commentNum}}</view>
                    <view class="icon iconfont icon-dianzan">{{item.likeNum}}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import tagGenderAge from './tag-gender-age.vue';
    export default {
        props:{           
            item:Object,
            index:Number           
        },
        components:{
            tagGenderAge
        },
        data() {
            return {
                isFollow: this.item.isFollow
            }
        },
        methods:{
            follow(){
                this.isFollow = !this.isFollow;
                if(!this.isFollow){
                    uni.showToast({
                        title:"取消关注成功",
                    })
                }
                else{
                    uni.showToast({
                        title:"关注成功",
                    })
                }
            }
        }
    }
</script>

<style scoped>
@import "../../common/list.css";
</style>
