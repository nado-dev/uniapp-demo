<template>
	<view>
        <!-- 自定义导航 -->
        <!-- #ifndef APP-PLUS || H5 -->
        <view style="display: flex;
        		align-items: center;
        		padding:0 20upx;height: 88upx;
        		position: fixed;z-index: 9999;
        		left: 0;
        		top: 0;
        		right: 0;
        		background: #FFFFFF;">
        			<view class="iconfont icon-sousuo" 
        			style="position: absolute;left: 30upx;color: #CCCCCC;"></view>
        			<input style="flex: 1;padding: 5upx 0 5upx 50upx;border-radius: 4px;background: #F7F7F7;" 
        			type="text" v-model="keyword" @confirm="getData"
        			placeholder="搜索(=ﾟωﾟ)=" 
        			placeholder-style="color: #CCCCCC;"/>
        			<text style="padding-left:20upx;"
        			@click="goBack">取消</text>
        		</view>
        		<view style="height: 88upx;"></view>
        <!-- #endif -->
        
        
        <template v-if="list.length > 0">
            <block v-for="(item, index) in list" :key="index">
                <!-- 搜文章 -->
                <template v-if="searchType == 'post'">
                    <index-list :item="item" :index="index"  @changeevent="updateData"></index-list>
                </template>
                <!-- 搜话题 -->
                <template v-if="searchType == 'topic'">
                    <topic-list :item="item" :index="index"></topic-list>
                </template>
                <!-- 搜po -->
                <template v-else>
                    <user-list :item="item" :index="index" hidden></user-list>
                </template>
                
            </block>
            <load-more :loadText="loadText"></load-more>
        </template>
        <template v-else-if="list.length < 1 && isSearch">
            <empty-content ></empty-content>
        </template>
        <template v-else >
            <view class="blank"></view>
        </template>
        
	</view>
</template>

<script>
    import indexList from "../../components/index/index-list.vue";
    import emptyContent from "../../components/common/empty-content.vue";
    import loadMore from '../../components/common/load-more.vue';
    import topicList from '../../components/news/topic-list.vue';
    import userList from '../../components/user-list/user-list.vue';
	export default {
        components:{
            indexList,
            emptyContent,
            loadMore,
            topicList,
            userList
        },
		data() {
			return {
                isSearch:false,
                loadText:"上拉加载更多",
				list:[],
                keyword:"",
                page:1,
                searchType:"post"
			}
		},
		methods: {
            updateData(data){
                switch (data.type){
                    case 'guanzhu':
                        this.updateGuanZhu(data)
                        break;
                    case 'support':
                        this.updateSupport(data);
                        break;
                    case 'updateComment':
                        this.updateComment(data);
                        break;
                }
            },
            updateComment(data){
                // 拿到当前对象
                let obj = this.list.find(value =>{
                    return value.id === data.post_id;
                });
                if (!obj) return;
                obj.commentNum++; // 评论数+1
            },
            // 更新顶踩
            updateSupport(data){
            // 拿到当前对象
                let obj = this.list.find(value =>{
                    return value.id === data.post_id;
                });
                if (!obj) return;
                let oldindex = obj.likeInfo.index; // 操作前的状态
                obj.likeInfo.index = data.do // 操作后的状态
                if (oldindex !== 0) { //之前操作过
                    oldindex == 1 ? obj.likeInfo.likeNum-- : obj.likeInfo.dislikeNum--;
                }
                if (obj.likeInfo.index !== 0) {  // 当前操作
                    obj.likeInfo.index == 1 
                        ? obj.likeInfo.likeNum++ : obj.likeInfo.dislikeNum++;
                }    
            },
            // 更新关注信息
            updateGuanZhu(data){
                this.list.forEach((item,index)=>{
                    if (item.userid === data.userid) {
                        item.isFollow = data.data;
                    }
                })
            },
            //搜索事件
            async getData(){
                uni.showLoading({
                    isSearch:false,
                    title: '搜索中(｀･ω･)',
                    mask: false
                });
                //请求服务端 post keyword:value
                let url = '';
                switch (this.searchType){
                    case "topic":
                        url = 'search/topic';
                        break;
                    case "post":
                        url = 'search/post';
                        break;
                    case "user":
                        url = 'search/user';
                        break;
                }
                
                let [err,res] =await this.$http.post(url,{
                    keyword:this.keyword,
                    page:this.page
                },{token:true, checkToken:false});
                let error = this.$http.errorCheck(err,res,()=>{
                    uni.hideLoading();
                    this.isSearch=true;
                },()=>{
                    uni.hideLoading();
                    this.isSearch=true;
                });
                console.log(res)
                if (!error) return;
                let arr = [];
                let list = res.data.data.list;
                for (let i = 0; i < list.length; i++) {
                    arr.push(this.__format(list[i]));
                }
                console.log(arr)
                this.list = this.page > 1
                    ? this.list.concat(arr) : arr;
                this.isSearch = true;
                // 拿到最后一页
                if (list.length < 10) {
                    this.loadText="没有更多数据了(`ε´ )";
                }else{
                    this.loadText="上拉加载更多";
                }
                uni.hideLoading();
            },
             //上拉加载更多
			loadMore(){
			    if( this.loadText != "上拉加载更多"){
			        return;//如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
			    }
			    this.loadText = "加载中(＾o＾)ﾉ";
			    //修改状态
                this.loadText = "加载中(＾o＾)ﾉ";
                this.page++;
                this.getData();
            },
            __format(item){
                switch (this.searchType){
                    case "post":
                        return {
                            userid:item.user.id,
                            userPic:item.user.userpic,
                            userName:item.user.username,
                            // isFollow:!!item.user.fens.length,
                            isFollow:!!item.user.fens.length,
                            // isFollow:!!item.user.fens ? !!item.user.fens.length :false,
                            id:item.id,
                            title:item.title,
                            type:"img", // img:图文,video:视频
                            titlePic:!!item.images[0]? item.images[0].url : '',
                            video:false,
                            path:item.path,
                            share:!!item.share,
                            likeInfo:{
                                index:(item.support.length>0) ? (item.support[0].type+1) : 0,//0:没有操作，1:顶,2:踩；
                                likeNum:item.ding_count,
                                dislikeNum:item.cai_count,
                            },
                            commentNum:item.comment_count,
                            shareNum:item.sharenum,
                        }
                        break;
                    case "topic":
                        return {
                            id:item.id,
                            titlePic:item.titlepic,
                            title:item.title,
                            desc:item.desc,
                            totalPostNum:item.post_count,
                            todayPostNum:item.todaypost_count
                        }
                        break;
                    case "user":
                        return {
                            id:item.id,
                            userpic:item.userpic,
                            name:item.username,
                            // age:item.userinfo.age,
                            // gender:item.userinfo.sex,
                            isFollow:false 
                        }
                        break;
                }
            },
            goBack(){
                uni.navigateBack({
                    delta:1
                })
            }
		},
        //监听搜索框文本变化
        onNavigationBarSearchInputChanged(e) {
        },
        //监听搜索框文本确认
        onNavigationBarSearchInputConfirmed(e) {
           console.log(JSON.stringify(e.text));
           if(e.text){
               this.keyword = e.text;
               this.getData()
           }
        },
        onReachBottom() {
            this.loadMore()
        },
        onPullDownRefresh() {
            this.getData(this.keyword);
            uni.stopPullDownRefresh();
        },
        onLoad(e){
            if (!e) return;
            this.searchType = e.searchType || 'post';
            // #ifdef APP-PLUS
            let pageTitle = '搜索文章';
            if (this.searchType == 'topic') {
                pageTitle = '搜索话题';
            } else if(this.searchType == 'user'){
                pageTitle = '搜索用户';
            }
            let currentWebview = this.$mp.page.$getAppWebview();  
            let tn = currentWebview.getStyle().titleNView;  
            tn.searchInput.placeholder = pageTitle; 
            currentWebview.setStyle({  
                titleNView: tn  
            });
            // #endif
            // 开启监听
            uni.$on('updateData',this.updateData);
        }
	}
</script>

<style>

</style>
