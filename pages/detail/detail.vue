<template>
	<view>
        <view class="icon iconfont icon-gengduo tempShare" @tap="togle()"></view>
        <!-- 详情 -->
		<detail-info :item="detail" @changeevent="updateData"></detail-info>
        
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
       <more-share :isShareShow="isShareShow" @togle="togle" :sharedata="sharedata"></more-share>
        
        
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
                // 分享内容 
                sharedata:{
                    title:"",
                    url:"",
                    titlePic:"",
                    shareType:0
                },
                isShareShow : false ,//分享栏是否出现
                comment:{
                    commentCount:0,
                    list:[],
                },
				//图文样式 PicTextStyle:true,
				detail:{
				    userPic:"",
				    userName:"",
				    gender:0,//0:女 1:男
				    age:0,
                    content:'',
				    isFollow:false,
				    title:"",
				    titlePic:"",
                    morePic:[],
				    textStyle:false,
				    PicTextStyle:true,
				    videoStyle:false,
				    shareStyle:false,
				    location:"",
				    shareNum:0,
				    commentNum:0,
				    likeNum:0,
                    createTime:0
				},
			}
		},
		methods: {
            updateData(data){
               this.detail.isFollow = data.data;
            },
            // 初始化分享内容
            __initShare(obj){
                this.sharedata = {
                    title : obj.title,
                    content : obj.content,
                    url:"http://aaronfang.fun/",
                    titlePic:obj.titlePic?obj.titlePic:"",
                    shareType:0
                }
            },
			//初始化
            initdata(obj){
                // 获取登陆用户信息
               //1、修改标题
               uni.setNavigationBarTitle({
                   title:obj.title
               });
               uni.showLoading({
                   title:'加载中┃電柱┃',
                   mask:true
               });
               // 加载分享内容
               this.__initShare(obj);
                obj.morePic = [];
                obj.content = '';
                obj.likeNum = obj.likeInfo.likeNum;
                this.detail = obj;
                this.comment.commentCount = obj.commentNum
                // 获取文章详情
                console.log(obj)
                this.getDetail();
                if(this.comment.commentNum){
                    this.getComment();
                }
            },
            async getDetail(){
                let [err,res] = await this.$http.get('post/'+this.detail.id);
                let error = this.$http.errorCheck(err,res,()=>{
                    uni.hideLoading();
                },()=>{
                    uni.hideLoading();
                });
                if(!error) return;
                let data = res.data.data.detail;
                this.detail.content = data.content;
                let images = [];
                if(data.images.length != 0){
                    for (let i = 0; i < data.images.length; i++) {
                        images.push(data.images[i].url);
                    }
                    
                    this.detail.morePic = images;
                    this.detail.PicTextStyle = true
                }
                // this.detail.age = data.user.userinfo.age;
                // this.detail.gender = data.user.userinfo.sex;
                this.detail.createTime = data.creat_time;
                console.log(this.detail.morePic)
                return uni.hideLoading();
            },
            //获取评论
            async getComment(){
                let [err,res] = await this.$http.get('post/'+this.detail.id+'/comment');
                if (!this.$http.errorCheck(err,res)) return;
                let list = res.data.data.list;
                this.comment.list = this.comment.list.concat(this.__ArrSort(list));
            },
            __ArrSort(arr,id = 0){
            var temp = [],lev=0;
            var forFn = function(arr, id, lev){
                for (var i = 0; i < arr.length; i++) {
                    var item = arr[i];
                    if (item.fid==id) {
                        item.lev=lev;
                        temp.push({
                            id:item.id,
                            fid:item.fid,
                            userid:item.user.id,
                            userPic:item.user.userpic,
                            userName:item.user.username,
                            time:time.gettime.gettime(item.create_time),
                            content:item.data,
                        });
                        forFn(arr,item.id,lev+1);
                    }
                }
            };
            forFn(arr, id, lev);
            return temp;
            },
            //提交评论
            submit(data){
                if(!data || data.length == 0){
                    uni.showToast({
                        icon:'none',
                        position:'bottom',
                        title:'评论不能为空'
                    })
                }
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
