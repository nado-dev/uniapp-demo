<template>
    <view class="common-list u-f animated fadeIn faster">
        <!-- 左侧：用户头像 -->
        <view class="common-list-l">
            <image :src="item.userPic" mode="widthFix" lazy-load @tap.stop="openSpace"></image>
        </view>
        <!-- 右侧： -->
        <view class="common-list-r">
            <!-- 右侧第一层 -->
            <view class="u-f-ac u-f-jsb">
                <!-- 右一左边 昵称 性别+年龄 -->
                <view class="u-f-ac">{{item.userName}}
                </view>
                <!-- 右一右边 关注按钮-->
                <view v-if="!item.isFollow" 
                class="icon iconfont icon-zengjia" @tap="follow()">关注</view>
                <view @tap="follow()" v-else>已关注</view>
            </view>
            <!-- 右侧第二层 标题 -->
            <view class="" @tap.stop="openDetail" >{{item.title}}</view>
            <!-- 右侧第三层 图片/视频-->
            <view class="u-f-ajc" @tap.stop="openDetail">
                <!-- 图片 -->
                <image v-if="item.titlePic"  :src="item.titlePic" mode="widthFix" lazy-load></image>
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
                    <view class="icon iconfont icon-dianzan" >{{item.likeNum}}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import tagGenderAge from './tag-gender-age.vue';
    export default {
        props:{
            noJump:{
                type:Boolean,
                default:false
            },
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
            openDetail(){
                uni.navigateTo({
                    url:'../../pages/detail/detail?detailData='+JSON.stringify(this.item)
                })
            },
           //关注
           async follow(){
               try{
                   let [err,res] = await this.$http.post('follow',{
                       follow_id:this.item.userid
                   },{
                       token:true,
                       checkToken:true,
                       checkAuth:true
                   });
               // 错误处理
                   if (!this.$http.errorCheck(err,res)){
                       return;
                   }
               // 通知首页修改数据
                   uni.showToast({ title: '关注成功' });
                   let resdata = {
                       type:"guanzhu",
                       userid:this.item.userid,
                       data:true
                   };
               // 通知父组件
                   this.$emit('changeevent',resdata);
               // 通知首页
                   uni.$emit('updateData',resdata);    
               }catch(e){
                   //TODO handle the exception
               }
           },
           async likeOpration(likeStat){
               let index = 1 ; // 操作后的状态
               if(this.item.likeInfo.index === index) return; // 状态相同不修改
               let [err,res] = await this.$http.post('support',{
                   post_id:this.item.id,
                   type:index-1
               },{
                   token:true,
                   checkToken:true,
                   checkAuth:true
               });
               // 错误处理
               if (!this.$http.errorCheck(err,res)) return;
               uni.showToast({
                   title: index == 1 ? "顶+1" : "踩+1"
               });
               let resdata = {
                   type:"support",
                   post_id:this.item.id,
                   do:index
               };
               // 通知父组件
               this.$emit('changeevent',resdata);
               // 通知全局
               uni.$emit("updateData",resdata);
               return;
           },
           openSpace(){
               if(this.noJump)  return;
               uni.navigateTo({
                   url:'../../pages/user-space/user-space?userid='+this.item.userid
               })
           }
        }
    }
</script>

<style scoped>
.common-list{
       padding: 20upx;
       margin:15upx 20upx;
       background-color: #FFFFFF !important; 
       box-shadow: 0 2upx 4upx rgba(0, 0, 0, .3);
    }
    .common-list-l image{
        width: 70upx;
        height: 70upx;
        border-radius: 100%;
    }
    .common-list-l{
        /* 不会被压缩 */
        flex-shrink: 0;
    } 
    .common-list-l>image{
        box-shadow: 0 2upx 4upx rgba(0, 0, 0, .3);
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
        font-size: 28upx;
        line-height: 0;
    }

    /* 关注按钮样式 */
    .common-list-r>view:nth-child(1)>view:last-child{
        background: #EEEEEE;
        padding: 0 10upx;
        font-size: 28upx;
        box-shadow: 0 2upx 4upx rgba(0, 0, 0, .3);
    }
    .common-list-r>view:nth-child(2){
        font-size: 26upx;
        padding: 12upx 0;
    }
    .common-list-r>view:nth-child(3){
        position: relative;
        font-size: 24upx;
        box-shadow: 0 2upx 4upx rgba(0, 0, 0, .3);
    }
    .common-list-r>view:nth-child(3)>image{
        width:100%;
        margin-bottom: 10upx;
        box-shadow: 0 2upx 4upx rgba(0, 0, 0, .3);
        
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
        background: rgba(51,51,51,0.5);
        padding: 0 20upx;
        font-size: 25upx;
    }
    /* 分享样式 */
    .common-list-share{
        background: #EEEEEE;
       /* 宽度全部填充 */
        width: 100%;
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
    .common-list-r>view:nth-child(4)>view:first-child{
        color: #AAAAAA;
        font-size: 20upx !important;
        
    }
    /* 点赞、评论、转发样式 */
    .common-list-r>view:nth-child(4)>view:nth-child(2)>view{
        margin-left: 10upx;
        padding: 5upx;
        font-size: 25upx !important;
    }
    .active{
        color: #009687 !important;
        font-size: 32upx;
    }
</style>
