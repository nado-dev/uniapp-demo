<template>
    <!-- 背景 + 用户基本信息 -->
    <view class='user-space-head u-f-ajc'>
        <!-- 背景图 -->
        <image :src='getBgImg' mode='widthFix' lazy-load @tap='switchBg'></image>
            <view class='user-space-head-info u-f-ajc u-f-column'>
                <!-- 头像 -->
            <image :src='userInfo.userPic' mode='widthFix' lazy-load></image>
            <!-- 昵称 + 性别年龄 -->
            <view class='user-space-margin u-f-ac'>{{userInfo.userName}} </view>
            <!-- 关注按钮 -->
           <view v-if="!userInfo.isme">
               <view v-if='!userInfo.isFollow' @tap.stop='follow' >
                   <view  class='icon iconfont icon-zengjia user-space-head-btn user-space-margin active'>关注</view>
               </view>
               <view v-else class='animated bounceIn faster' @tap.stop='follow'>
                   <view  class='user-space-head-btn user-space-margin'>已关注</view>
               </view>
           </view>
        </view>
    </view>
</template>

<script>
     import tagGenderAge from '../common/tag-gender-age.vue';
     export default {
         data() {
             return {
                 bgimg:1,
                 isFollow : this.userInfo.isFollow
             }
         },
         props:{
             userInfo:Object
         },
         components:{
             tagGenderAge
         },
         computed:{
             getBgImg(){
                 // 计算属性 属性的值由变量改变而实时计算
                 return '../../static/bgimg/'+this.bgimg+'.jpg'
             }
         },
         methods: {
             //切换背景
             switchBg(){
                 let num = parseInt(this.bgimg)
                 num++
                 this.bgimg = (num) % 5;
             },
         	async follow(){
                try{
                    let url = this.userInfo.isFollow ? 'unfollow' : 'follow';
                    uni.showLoading({ title: 'loading...', mask: false });
                    let [err,res] = await this.$http.post(url,{
                        follow_id:this.userInfo.id
                    },{
                        token:true,
                        checkToken:true,
                        checkAuth:true
                    });
                    // 错误处理
                    if (!this.$http.errorCheck(err,res)){
                        return uni.hideLoading();
                    }
                    // 成功
                    uni.hideLoading();
                    uni.showToast({ 
                        title: this.userInfo.isFollow ? '取消关注成功' : '关注成功' ,
                        icon:"none"
                    });
                    // 通知父组件修改状态
                    this.$emit('update',!this.userInfo.isFollow);
                }catch(e){
                    console.log(e)
                    return;
                }
            },
         }
     }
</script>

<style scoped>
    .user-space-margin{
            margin: 20upx 0;
        }
    .user-space-head{
        position: relative;
        height: 600upx;
        overflow: hidden;
        box-shadow:2upx 2upx 10upx #333333 ;
    }
    .user-space-head>image{
        width: 100%;
    }
    .user-space-head-info{
        position: absolute;
        top: 180upx;
    }
    .user-space-head-info>image{
        border-radius: 100%;
        height: 150upx;
        width: 150upx;
    }
    .user-space-head-info>view:first-of-type{
        color: #FFFFFF;
        font-size: 35upx;
        font-weight: bold;
        /* 阴影 */
        text-shadow: 2upx 2upx 10upx #333333 ;
    }
    .user-space-head-btn{
       /* background: #009687; */
        color: #FFFFFF;
       /* border: 1upx solid #FFFFFF; */
        padding: 0 15upx;
        border-radius: 10upx;
        font-size: 35upx;
    }
    .active{
        background:none;
        color: #FFFFFF;
       border: 1upx solid #FFFFFF;
    }
</style>
