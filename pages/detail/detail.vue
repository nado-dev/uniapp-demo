<template>
	<view>
        <view class="icon iconfont icon-gengduo tempShare" @tap="togle()"></view>
        <!-- 详情 -->
		<detail-info :item="detail"></detail-info>
        
        <!-- 评论 -->
        <view class="u-comment-title">最新评论 {{comment.commentCount}}</view>
        <view class="uni-comment u-comment">
            <block v-for="(item,index) in comment.list" :key="index">
                <comment-list :item="item" :index="index" ></comment-list>
            </block>
        </view>
        
        <!-- 为输入框占位 -->
        <view style="height: 120upx;"></view>
        <!-- 输入框 -->
        <user-chat-bottom @submit="submit"></user-chat-bottom>
        
        <!-- 分享 -->
       <more-share :isShareShow="isShareShow" @togle="togle"></more-share>
        
        
	</view>
</template>

<script>
    import detailInfo from "../../components/detail/detail-info.vue";
    import time from "../../common/time.js";
    import commentList from "../../components/detail/comment-list.vue";
    import userChatBottom from '../../components/user-chat/user-chat-bottom.vue';
    import moreShare from "../../components/common/more-share.vue"
	export default {
        components:{
            detailInfo,
            commentList,
            userChatBottom,
            moreShare
        },
		data() {
			return {
                isShareShow : false ,//分享栏是否出现
                comment:{
                    commentCount:23,
                    list:[],
                    loginUserInfo:{}
                },
				//图文样式 PicTextStyle:true,
				detail:{
				    userPic:"../../static/demo/userpic/10.jpg",
				    userName:"31K4t3k",
				    gender:1,//0:女 1:男
				    age:25,
				    isFollow:false,
				    title:"...轻轻呼唤你的名字",
				    titlePic:"../../static/demo/datapic/13.jpg",
                    morePic:["../../static/demo/datapic/13.jpg",
                             "../../static/demo/datapic/15.jpg",
                             "../../static/demo/datapic/12.jpg"],
				    textStyle:false,
				    PicTextStyle:true,
				    videoStyle:false,
				    shareStyle:false,
				    location:"PekingU",
				    shareNum:3498,
				    commentNum:3456,
				    likeNum:345,
				},
			}
		},
		methods: {
			//初始化
            initdata(obj){
                // 获取登陆用户信息
                this.loginUserInfo = obj
               //1、修改标题
               uni.setNavigationBarTitle({
                   title:obj.title
               });
            },
            //获取评论
            getComment(){
                let arr = [
                        //fatherReplyId：指示评论父级id
                        //commentId:评论标识号
                        
                        //一级评论
                        {
                            commentId:1,
                            fatherReplyId:0,
                            userPic:"../../static/demo/userpic/1.jpg",
                            userName:"ATM",
                            time:"1580908445",
                            content:"我已经。没有办法相信红名了。",
                            
                        },
                        //二级评论
                        {
                            commentId:2,
                            fatherReplyId:1,
                            userPic:"../../static/demo/userpic/1.jpg",
                            userName:"ATM",
                            time:"1580908445",
                            content:"我已经。没有办法相信红名了。",
                            
                        },
                        //三级评论
                        {
                            commentId:3,
                            fatherReplyId:2,
                            userPic:"../../static/demo/userpic/1.jpg",
                            userName:"ATM",
                            time:"1580908445",
                            content:"我已经。没有办法相信红名了。",
                            
                        },
                    ];
                    
                    for (let i=0 ;i<arr.length; i++) {
                        arr[i].time = time.gettime.gettime(arr[i].time);
                    }
                    // alert("go")
                    this.comment.list = arr;
            },
            //提交评论
            submit(data){
                let obj ={
                    commentId:1,
                    fatherReplyId:0,
                    userPic:this.loginUserInfo.userPic,
                    userName:"new"+this.loginUserInfo.userName,
                    time:time.gettime.gettime(new Date().getTime()),
                    content:data,
                }
                this.comment.list.push(obj)
                console.log(data)
            },
            //分享
            togle(){
                this.isShareShow = !this.isShareShow ;
            },
           
		},
        onLoad(e) {
            this.initdata(JSON.parse(e.detailData));
            //加载评论
            this.getComment();
        },
        //监听导航栏右边按钮
        onNavigationBarButtonTap(e) {
            if(e.index == 0){
                this.togle();
            }
        }
	}
</script>

<style>
    /* 评论 */
    .u-comment{
        padding: 0 20upx;
    }
    .u-comment-title{
        padding: 20upx;
        font-size: 30upx;
        font-weight: bold;
        }
    .tempShare{
        color: #009687;
        padding-left: 50upx;
    }
</style>
