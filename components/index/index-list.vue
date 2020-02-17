<template>
    <view class="index-list animated fadeIn faster" >
        <!-- 第一层 -->
        <view class="index-list1">
            <!-- 左边 头像 昵称 -->
            <view >
                <image :src="item.userPic" 
                mode="widthFix" lazy-load></image>
                {{item.userName}}
            </view>
            <!-- 右边 关注按钮 -->
            <view v-if="!item.isFollow" @tap="follow()">
                <view class="icon iconfont icon-zengjia" :class="{'mk1':(!item.isFollow)}">
                    关注
                </view>
            </view>
            <view v-else>
                <view class="mk1">
                    已关注
                </view>
            </view>
        </view>
        <view class="index-list2" @tap="openDetail">{{item.title}}</view>
        <view class="index-list3 u-f-ajc" @tap="openDetail" v-if="item.titlePic !=''">
            <!-- 图片 -->
            <image :src="item.titlePic" 
            mode="widthFix" lazy-load></image>
            <template  v-if="item.type=='video'">
                <!-- 视频播放按钮 -->
                <view class="index-list-play icon iconfont icon-bofang"></view>
                 <!-- 视频基本信息 --> 
                <view class="index-list-vinfo">
                    {{item.playNum}}次播放 {{item.length}}     
                </view >
            </template>
            
          
        </view>
        <view class="index-list4">
            <!-- 左侧 顶踩 -->
            <view class="u-f-ac">
                <view :class="{'active':(item.likeInfo.index == 1)}"
                @tap="likeOpration('like')">
                    <view class="icon iconfont icon-icon_xiaolian-mian"></view>
                    {{item.likeInfo.likeNum}}
                </view>
                <view :class="{'active':(item.likeInfo.index == 2)}"
                 @tap="likeOpration('dislike')">
                    <view class="icon iconfont icon-kulian"></view>
                    {{item.likeInfo.dislikeNum}}
                </view>               
            </view>
            <!-- 右侧 评论转发 -->
            <view>
                <view><view class="icon iconfont icon-pinglun"></view>{{item.commentNum}}</view>
                <view><view class="icon iconfont icon-zhuanfa"></view>{{item.shareNum}}</view>               
            </view>
            
        </view>
    </view>
</template>

<script>
	export default {
        // 用于接收来自父组件的数据 
        props:{
            item:Object,
            index:Number
        },
        // data() {
        //     return {
        //         // 来自父组件的值如要修改要在子组件内创建副本再进行修改
        //         isFollow: this.item.isFollow,
        //         likeInfo:this.item.likeInfo
        //     }
        // },
        methods:{
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
            //顶踩操作
            async likeOpration(likeStat){
                console.log("likeop")
                // if(likeStat == "like"){
                //     if(this.item.likeInfo.index == 2){
                //         this.item.likeInfo.dislikeNum--;
                //         this.item.likeInfo.likeNum++;
                //         this.item.likeInfo.index = 1;
                //     }                     
                //     if(this.item.likeInfo.index == 0){
                //         this.item.likeInfo.likeNum++;
                //         this.item.likeInfo.index = 1;
                //     }
                // }
                // else{
                //     if(this.item.likeInfo.index == 1){
                //         this.item.likeInfo.likeNum--;
                //        this.item.likeInfo.dislikeNum++;
                //         this.item.likeInfo.index=2;
                //     }
                //     if(this.item.likeInfo.index == 0){
                //         this.item.likeInfo.dislikeNum++;
                //         this.likeInfo.index=2;
                //     }
                // }
                // 1是顶  2是踩
                
                    let index = (likeStat === 'like') ? 1 : 2; // 操作后的状态
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
                
            },
            //进入详情页
            openDetail(){
                console.log("进入详情页");
                uni.navigateTo({
                    url:"../../pages/detail/detail?detailData="+JSON.stringify(this.item),
                })
            }
        }
	}
</script>

<style scoped>
    /* scoped 声明该CSS样式只能被组件使用 */
.mk1{
    font-size: 25upx;
    padding: 0 10upx;
}
.u-f, .u-f-ac,.u-f-jac{
    display: flex;
}
.u-f-ac{
    align-items: center;
}
.u-f-jac{
    justify-content: center;
}
.index-list{
    /* 内边距 */
    padding: 20upx; 
    border-bottom: 1upx solid #EFEFEF;
    margin:15upx 20upx;
    background-color: #FFFFFF !important; 
    box-shadow: 0 2upx 4upx rgba(0, 0, 0, .3);
}
.index-list1{
    display: flex;
    justify-content: space-between; /* 靠边 */
    align-items: center;
    
}
.index-list1>view>image{
    width: 100%;
    border-radius: 100%;
    margin: 10upx;
    width: 90upx;
    height: 90upx;
    box-shadow: 0 2upx 4upx rgba(0, 0, 0, .3);
}
.index-list1>view:first-child{
    display: flex;
    align-items: center;
    color: #999999;
}

.index-list1>view:last-child{
    display: flex;
    align-items: center;
    background: #F4F4F4;
    border-radius: 5upx;
    box-shadow: 0 2upx 4upx rgba(0, 0, 0, .3);
}

.index-list2{
    padding-top: 15upx;
    font-size: 32upx;
}
.index-list3{
    padding-top: 15upx;
    position: relative;/* 相对定位 */
     box-shadow: 0 4upx 8upx rgba(0, 0, 0, .3);
}
.index-list3>image{
    width: 100%;
    /* border-radius: 20upx; */
    
}
.index-list4{
    display: flex;
    justify-content: space-between; /* 靠边 */
    align-items: center;
    padding: 15upx 0;
    font-size: 34upx;
}
.index-list4>view:first-child{ 
    display: flex;
    align-items: center;
}
.index-list4>view:last-child{
    display: flex;
    align-items: center;
}
.index-list4>view{
    color: #999999;
}
/* 第四层 所有的图标和数字的组合 */
.index-list4>view>view{
    
    display: flex;
    align-items: center;
}
.index-list4>view>view:first-child{
    margin-right: 10upx;
}
/* 点赞图标和踩图标 */
.index-list4>view>view>view{
    margin-right:10upx ;
}
.index-list-play{
    position: absolute;
    font-size: 120upx;
    color: #FFFFFF;
    
}
.index-list-vinfo{
    position: absolute;
    background: rgba(51,51,51,0.72);
    color: #FFFFFF;
    /* 距离下边界的距离 */
    bottom: 5upx;
    /* 距右边界的距离 */
    right: 8upx;
    border-radius: 40upx;
    font-size: 25upx;
    padding: 0 10upx;
}
.index-list4 .active,.index-list4 .active>view{
    color: #009687;
    font-size: 38upx;
}
</style>
