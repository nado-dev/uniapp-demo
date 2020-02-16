<template>
	<view>
        <!-- 话题介绍 -->
		<topic-info :topicInfo="topicInfo"></topic-info>
        <!-- tab切换  -->
        <swiper-tab-head
        :tabBars="tabBars" 
        :tabIndex="tabIndex"
        @tabSwitch="tabSwitch">
        </swiper-tab-head>
        <!-- 列表 -->
        <view class="topic-detail-list" style="background-color: #EEEEEE;">
            <!-- 循环出默认和最新 -->
            <block v-for="(item, index) in tablist" :key="index">
                <template v-if="tabIndex == index">
                    <!-- 列表 -->
                    <view class="">
                        {{tabBars[index].name}}
                    </view>
                    <block v-for="(list, listIndex) in item.list" :key="listIndex">
                        <common-list :item="list" :index="listIndex" @changeevent="updateData"></common-list>          
                    </block>
                    <!-- 上拉加载 -->
                    <load-more :loadText="item.loadText"></load-more>
                </template>
            </block>
        </view>
	</view>
</template>

<script>
    import loadMore from '../../components/common/load-more.vue';
    import topicInfo from "../../components/topic/topic-info.vue";
    import swiperTabHead from '../../components/index/swiper-tab-head.vue';
    import commonList from "../../components/common/common-list.vue";
	export default {
        components:{
            topicInfo,
            loadMore,
            swiperTabHead,
            commonList
        },
		data() {
			return {
                tabIndex:0,
                tabBars:[
                    {name:"默认",id:"default"      },
                    {name:"最新",id:"lastest"      },              
                ],
                tablist:[
                    //默认tab
                    {
                        loadText:"上拉加载更多",
                        firstload:false,
                        page:1,
                        list:[]
                    },
                    //最新tab
                    {
                        loadText:"上拉加载更多",
                        firstload:false,
                        page:1,
                        list:[]
                    },
                    
                ],
				topicInfo:{}
			}
		},
        //监听上拉触底
        onReachBottom() {
            //上拉加载
            this.loadMore();  
        },
        //监听下拉刷新
        onPullDownRefresh() {
            
            this.getData();
        },
        onLoad(e) {
            this.__init(JSON.parse(e.detail))
            uni.$once('updateData',this.updateData)
        },
		methods: {
        __init(obj){
            this.topicInfo = obj;
            uni.setNavigationBarTitle({
                title:obj.title
            });
            // 获取列表数据
            this.getList();
        },
            // 获取数据
        async getList(){
            let url = `topic/${this.topicInfo.id}/post/${this.tablist[this.tabIndex].page}`;
            let [err,res] = await this.$http.get(url,{},{token:true});
            // 错误处理
            if (!this.$http.errorCheck(err,res)) {
                return this.tablist[this.tabIndex].loadText="上拉加载更多";
            }
            let arr = [];
            let list = res.data.data.list;
            for (let i = 0; i < list.length; i++) {
                arr.push(this.__format(list[i]));
            }
            this.tablist[this.tabIndex].list = this.tablist[this.tabIndex].page > 1 ? 
                this.tablist[this.tabIndex].list.concat(arr) : arr;
            this.tablist[this.tabIndex].firstload = true;
            uni.stopPullDownRefresh();
            return	this.tablist[this.tabIndex].loadText=(list.length < 10) ?"没有更多数据了" : "上拉加载更多";
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
			        titlePic:!!item.images[0].url ? item.images[0].url : '',
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
            
            //上拉加载
            loadMore(){
                if(this.tablist[this.tabIndex].loadText != "上拉加载更多"){
                    return;//如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
                }
                console.log("running1")
                this.tablist[this.tabIndex].loadText = "加载中(＾o＾)ﾉ";
                // 页数++ 获取数据
                this.tablist[this.tabIndex].page++;
                this.getList();
            },
			//tabBar点击事件
			tabSwitch(index){
			    //点击操作获取了当前的index，再将其写入tabIndex中，匹配的项目改变样式
			    this.tabIndex = index;
                this.tablist[this.tabIndex].page = 1;
			    this.getList();
			},
            updateData(data){
                switch (data.type){
                    case 'guanzhu':
                        this.updateGuanZhu(data)
                        break;
                    case value:
                        break;
                }
            },
            // 更新关注信息
            updateGuanZhu(data){
                this.tablist[this.tabIndex].list.forEach((item,index)=>{
                    if (item.userid === data.userid) {
                        item.isFollow = data.data;
                    }
                })
            },
		}
	}
</script>

<style>

</style>
