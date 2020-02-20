<template>
	<view class="animated fadeIn faster">
        <!-- #ifndef APP-PLUS -->
        		<view class="iconfont icon-gengduo" 
                style="position: absolute;right: 15upx;top: 15upx;z-index: 1000;color: #FFFFFF;background: rgba(51, 51, 51, 0.4);border-radius: 100%;padding: 20upx;font-size: 32upx;line-height: 1;" @tap="showPopup"></view>
        <!-- #endif -->
        
        <user-space-head :userInfo="userInfo" @update="updateGuanZhu"></user-space-head>   
	
        <!-- 用户信息 -->
        <view class="home-data user-space-data u-f-ac ">
            <block v-for="(item, index) in spaceData" :key="index">
                <home-data :item="item" :index="index"></home-data>
            </block>
        </view>
        
        <!-- 分割线 -->
        <view style="height: 20upx; background: #F4F4F4;">
       
         </view>
        <!-- tabBar -->
        <swiper-tab-head 
        :tabBars="tabBars" 
        :tabIndex="tabIndex"
        @tabSwitch="tabSwitch">
        </swiper-tab-head>
        
        <!--用户详细信息 -->
        <template v-if="tabIndex == 0">
            <!-- 首页 -->
             <user-space-userinfo :userInfo="this.userInfo"></user-space-userinfo>
        </template>
        
        <template v-if="tabIndex == 1">
            <template v-if="firstload">
                <template v-if="list.length > 0">
                    <!-- 列表 -->
                    <block v-for="(item, index) in list" :key="index">
                        <common-list :item="item" :index="index" noJump></common-list>          
                    </block>
                    <!-- 上拉加载 -->
                    <load-more :loadText="this.loadText"></load-more>
                </template>
                <template v-else>
                    <empty-content></empty-content>
                </template>
            </template>
           
            <template v-else>
                <view style="font-size: 50upx;font-weight: bold;color: #CCCCCC;
                padding-top: 100upx;" class="u-f-ajc">Loading ...</view>
            </template>
            
        </template>
        
        <!--操作菜单 -->
        <user-space-popup :isPopupShow="isPopupShow" :isblack="userInfo.isblack"
        @hidePopup='hidePopup' @addBlackList='addBlackList'  @chat='chat'></user-space-popup>
    </view>
</template>

<script>
    import loadMore from '../../components/common/load-more.vue';
    import swiperTabHead from '../../components/index/swiper-tab-head.vue'; 
    import userSpaceHead from '../../components/user-space/user-space-head.vue'
	import userSpaceUserinfo from '../../components/user-space/user-space-userinfo.vue'
    import commonList from "../../components/common/common-list.vue";
    import homeData from "../../components/home/home-data.vue";
    import userSpacePopup from '../../components/user-space/user-space-popup.vue'
    import Time from "../../common/time.js"
    import emptyContent from '../../components/common/empty-content.vue'
    
    export default {
        components:{
            userSpaceHead,
            homeData,
            swiperTabHead,
            userSpaceUserinfo,
            commonList,
            loadMore,
            userSpacePopup,
            emptyContent
        },
        data(){
            return {
                isPopupShow:false,
                tabIndex:0,
                userInfo:{},
                spaceData:[
                    {name:"动态", num:""},
                    {name:"关注", num:''},
                    {name:"粉丝", num:''},
                ],
                tabBars:[
                    {name:"主页",id:"zhuye" },
                    {name:"动态",id:"dongtai"},
                 
                ],
                loadText:"上拉加载更多",
                page:1,
                firstload:false,
                list:[]
            }
        },
       
        methods:{
            __init(userid){
                // 初始化用户信息
                this.getUserInfo(userid)
                // 初始化统计数据
                this.getCounts(userid)
            },
            // 初始化用户信息
            async getUserInfo(userid){
                let sexArr=['未知','男','女'];
                let qgArr=['秘密','未婚','已婚'];
                // 用户本人
                let isme,info,isguanzhu,isblack;
                if (userid == this.User.userinfo.id) {
                    info = this.User.userinfo;
                    isme = true;
                    isguanzhu = false;
                    isblack = false;
                }else{
                    // 非本人，获取用户信息
                    let [err,res] = await this.$http.post('getuserinfo',{
                        user_id:userid
                    },{
                        token:true
                    })
                    // 错误处理
                    if (!this.$http.errorCheck(err,res)) return;
                    info = res.data.data;
                    isme = false;
                    isguanzhu = !!res.data.data.fens.length;
                    isblack = !!res.data.data.blacklist.length;
                }
                let regtime = info.create_time ? Time.gettime.dateFormat(new Date(info.create_time*1000),'{Y}-{MM}-{DD}') : "未知";
                this.userInfo = {
                    isme:isme,
                    bgimg:1,
                    userPic:info.userpic || this.User.defaultUserPic,
                    userName:info.username,
                    gender:sexArr[info.userinfo.sex] || "不限",
                    age:info.userinfo.age,
                    isFollow:isguanzhu,
                    isblack:isblack,
                    regtime:regtime,
                    id:info.id,
                    birthday:info.userinfo.birthday || "未知",
                    job:info.userinfo.job || "未知",
                    location:info.userinfo.path || "未知",
                    qinggan:qgArr[info.userinfo.qg] || '秘密'
                }
                console.log("用户信息")
                console.log(this.userInfo)
            },
            // 初始化统计数据
            async getCounts(id){
                let counts;
                if (id == this.User.userinfo.id) {
                    counts = this.User.counts;
                }else{
                    let [err,res] =await this.$http.get('user/getcounts/'+id);
                    if (!this.$http.errorCheck(err,res)) return;
                    counts = res.data.data;
                }
                if (counts) {
                    this.spaceData[0].num = counts.post_count;
                    this.spaceData[1].num = counts.withfollow_count;
                    this.spaceData[2].num = counts.withfen_count;
                }
                
            },
            hidePopup(){
                this.isPopupShow = false
            },
            // 拉黑
            async addBlackList(){
                console.log("拉黑")
              
                uni.showLoading({ title: 'Loading...', mask: false });
                let url = this.userInfo.isblack ? '/removeblack' : '/addblack';
                let msg = this.userInfo.isblack ? '移除黑名单' : '加入黑名单';
                let [err,res] = await this.$http.post(url,{
                    id:this.userInfo.id
                },{
                    token:true,
                    checkToken:true,
                    checkAuth:true
                });
                // 错误处理
                if (!this.$http.errorCheck(err,res)) {
                    uni.hideLoading();
                    return this.hidePopup();
                }
                // 成功
                uni.hideLoading();
                uni.showToast({ title: msg+'成功' });
                this.userInfo.isblack = !this.userInfo.isblack;
                this.hidePopup();
            },
            // 备注
            chat(){
                uni.navigateTo({
                    url:"../user-chat/user-chat?userinfo="+JSON.stringify(this.userInfo)
                })
            },
            
            follow()
            {
                this.userInfo.isFollow != this.userInfo.isFollow;
            },
            tabSwitch(index){
                this.tabIndex = index
                if (this.firstload || index === 0) return;
                this.getList();
            },
            //上拉加载
            loadMore(){
                if(this.loadText != "上拉加载更多"){
                    return;//如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
                }
                this.loadText = "加载中(＾o＾)ﾉ";
                this.page++;
                this.getList();
                
            },
            updateGuanZhu(val){
                this.userInfo.isFollow = val;
                let resdata = {
                    type:"guanzhu",
                    userid:this.userInfo.id,
                    data:val
                };
                uni.$emit('updateData',resdata);
            },
            // 获取列表
            async getList(){
                let page =this.page;
                let url = this.userInfo.isme ? `user/post/${page}` : `user/${this.userinfo.id}/post/${page}`;
                let index = this.tabIndex;
                let [err,res] = await this.$http.get(url,{},{ token:true });
                if (!this.$http.errorCheck(err,res)) {
                    return this.loadText="上拉加载更多";
                }
                let arr = [];
                let list = res.data.data.list;
                for (let i = 0; i < list.length; i++) {
                    arr.push(this.__format(list[i]));
                }
                this.list = page > 1 ? this.tablist[index].list.concat(arr) : arr;
                this.firstload = true;
                this.loadText= list.length < 10 ? "没有更多数据了" : "上拉加载更多";
                console.log("发帖信息")
                console.log(this.list)
                return;
            },
            // 转换格式
            __format(item){
                return {
                    userid:item.user.id,
                    userPic:item.user.userpic,
                    userName:item.user.username,
                    isFollow:!!item.user.fens.length,
                    id:item.id,
                    title:item.title,
                    type:"img", // img:图文,video:视频
                    titlePic:!!item.images[0] ? item.images[0].url : '',
                    video:false,
                    path:item.path,
                    share:!!item.share,
                    likeInfo:{
                        // index:!!item.support? (item.support[0].type+1) : 0,//0:没有操作，1:顶,2:踩；
                        index: 0,//0:没有操作，1:顶,2:踩；
                        likeNum:item.ding_count,
                        dislikeNum:item.cai_count,
                    },
                    commentNum:item.comment_count,
                    shareNum:item.sharenum,
                    likeNum:item.ding_count
                }
            },
            showPopup(){
                this.isPopupShow = true
            }
        },
        onReachBottom() {
            //上拉加载
            this.loadMore();  
        },
        onNavigationBarButtonTap() {
            this.isPopupShow = true
        },
        onLoad(e) {
            console.log(e.userid)
            this.__init(e.userid)
        },
        // #ifdef MP
            onShareAppMessage(res) {
                return{
                    title:this.detail.title,
                    path:'/pages/user-space/user-space?userid='+JSON.stringify(this.userInfo)
                }
            }
        // #endif
    }

	
</script>

<style>
.user-space-margin{
        margin: 20upx 0;
    }
.user-space-data{
    background:#FFFFFF;
    position: relative;
    z-index: 10;
    border-top-left-radius: 20upx;
    border-top-right-radius: 20upx;
    margin-top: -15upx;
}


</style>
