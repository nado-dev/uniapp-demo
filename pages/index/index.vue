<template>
	<view>
        <swiper-tab-head 
        :tabBars="tabBars" 
        :tabIndex="tabIndex"
        @tabSwitch="tabSwitch">
        </swiper-tab-head>
 
        <!-- 这里的高度是可用高度减去tarBar高度 -->
        <!-- 点击事件：current随tabIndex的改变
             滑动事件：@change事件改变了tabindex的值，选中了相应的tab
         -->
        <view class="uni-tab-bar">           
            <swiper class="swiper-box" 
            :style="{height:swiperHeight+'px'}" 
            :current="tabIndex"
            @change="tabChange"> 
                <swiper-item v-for="(items,index) in newsList" :key="index">
                    <scroll-view scroll-y="true" class="list">
                        <block v-for="(item,index1) in items.list" :key="index1">
                            <!-- 传入item和index的值 -->
                            <index-list :item="item" :index="index1"></index-list>
                        </block>		
                    </scroll-view>
                </swiper-item>         
            </swiper>
        </view>
 
      <!-- 传入item和index的值 -->
       <!-- <block v-for="(item,index) in list" :key="index">            
            <index-list :item="item" :index="index"></index-list>
        </block>	 -->	
	</view>
</template>

<script>
    // 引入组件
    import indexList from "../../components/index/index-list.vue";
    import swiperTabHead from '../../components/index/swiper-tab-head.vue';
	export default {
        // components 包含 Vue 实例可用组件的哈希表
        components:{
            indexList,  // 添加组件
            swiperTabHead
        },
		data() {
			return {
                swiperHeight:500,
                tabIndex:0,//默认id
                tabBars:[
                    {name:"关注",id:"focus"    },
                    {name:"推荐",id:"feed"     },
                    {name:"体育",id:"sport"    },
                    {name:"热点",id:"hot"      },
                    {name:"时政",id:"policy"   },
                    {name:"娱乐",id:"entertain"},
                   
                ],
                newsList:[
                    {list:[
                        {
                            userPic:"../../static/demo/userpic/1.jpg",
                            userName:"昵称",
                            isFollow:false,
                            title:"标题",
                            type:"img",//image 图文 ，video 视频
                            titlePic:"../../static/demo/datapic/1.jpg",
                            likeInfo:{
                                index:2,//0：未操作，1：已顶，2：已踩
                                likeNum:11,
                                dislikeNum:11,
                                
                            },                     
                            commentNum:10,
                            shareNum:10,
                        },
                        {
                            userPic:"../../static/demo/userpic/1.jpg",
                            userName:"昵称",
                            isFollow:true,
                            title:"标题",
                            type:"video",//image 图文 ，video 视频
                            titlePic:"../../static/demo/datapic/1.jpg",
                            playNum:"20w",
                            length:"2:47",
                            likeInfo:{
                                index:1,//0：未操作，1：已顶，2：已踩
                                likeNum:11,
                                dislikeNum:11,
                                
                            },                     
                            commentNum:10,
                            shareNum:10,
                        }
                    ]},
                    {list:[
                    {
                        userPic:"../../static/demo/userpic/1.jpg",
                        userName:"昵称",
                        isFollow:false,
                        title:"标题",
                        type:"img",//image 图文 ，video 视频
                        titlePic:"../../static/demo/datapic/1.jpg",
                        likeInfo:{
                            index:2,//0：未操作，1：已顶，2：已踩
                            likeNum:11,
                            dislikeNum:11,
                            
                        },                     
                        commentNum:10,
                        shareNum:10,
                    },
                    {
                        userPic:"../../static/demo/userpic/1.jpg",
                        userName:"昵称",
                        isFollow:true,
                        title:"标题",
                        type:"video",//image 图文 ，video 视频
                        titlePic:"../../static/demo/datapic/1.jpg",
                        playNum:"20w",
                        length:"2:47",
                        likeInfo:{
                            index:1,//0：未操作，1：已顶，2：已踩
                            likeNum:11,
                            dislikeNum:11,
                            
                        },                     
                        commentNum:10,
                        shareNum:10,
                    }
                    ]},
                    {list:[ {
                        userPic:"../../static/demo/userpic/1.jpg",
                        userName:"昵称",
                        isFollow:false,
                        title:"标题",
                        type:"img",//image 图文 ，video 视频
                        titlePic:"../../static/demo/datapic/1.jpg",
                        likeInfo:{
                            index:2,//0：未操作，1：已顶，2：已踩
                            likeNum:11,
                            dislikeNum:11,
                            
                        },                     
                        commentNum:10,
                        shareNum:10,
                    },
                    {
                        userPic:"../../static/demo/userpic/1.jpg",
                        userName:"昵称",
                        isFollow:true,
                        title:"标题",
                        type:"video",//image 图文 ，video 视频
                        titlePic:"../../static/demo/datapic/1.jpg",
                        playNum:"20w",
                        length:"2:47",
                        likeInfo:{
                            index:1,//0：未操作，1：已顶，2：已踩
                            likeNum:11,
                            dislikeNum:11,
                            
                        },                     
                        commentNum:10,
                        shareNum:10,
                    }]},
                    {list:[ {
                        userPic:"../../static/demo/userpic/1.jpg",
                        userName:"昵称",
                        isFollow:false,
                        title:"标题",
                        type:"img",//image 图文 ，video 视频
                        titlePic:"../../static/demo/datapic/1.jpg",
                        likeInfo:{
                            index:2,//0：未操作，1：已顶，2：已踩
                            likeNum:11,
                            dislikeNum:11,
                            
                        },                     
                        commentNum:10,
                        shareNum:10,
                    },
                    {
                        userPic:"../../static/demo/userpic/1.jpg",
                        userName:"昵称",
                        isFollow:true,
                        title:"标题",
                        type:"video",//image 图文 ，video 视频
                        titlePic:"../../static/demo/datapic/1.jpg",
                        playNum:"20w",
                        length:"2:47",
                        likeInfo:{
                            index:1,//0：未操作，1：已顶，2：已踩
                            likeNum:11,
                            dislikeNum:11,
                            
                        },                     
                        commentNum:10,
                        shareNum:10,
                    }]},
                    {list:[ {
                        userPic:"../../static/demo/userpic/1.jpg",
                        userName:"昵称",
                        isFollow:false,
                        title:"标题",
                        type:"img",//image 图文 ，video 视频
                        titlePic:"../../static/demo/datapic/1.jpg",
                        likeInfo:{
                            index:2,//0：未操作，1：已顶，2：已踩
                            likeNum:11,
                            dislikeNum:11,
                            
                        },                     
                        commentNum:10,
                        shareNum:10,
                    },
                    {
                        userPic:"../../static/demo/userpic/1.jpg",
                        userName:"昵称",
                        isFollow:true,
                        title:"标题",
                        type:"video",//image 图文 ，video 视频
                        titlePic:"../../static/demo/datapic/1.jpg",
                        playNum:"20w",
                        length:"2:47",
                        likeInfo:{
                            index:1,//0：未操作，1：已顶，2：已踩
                            likeNum:11,
                            dislikeNum:11,
                            
                        },                     
                        commentNum:10,
                        shareNum:10,
                    }]},
                    {list:[ {
                        userPic:"../../static/demo/userpic/1.jpg",
                        userName:"昵称",
                        isFollow:false,
                        title:"标题",
                        type:"img",//image 图文 ，video 视频
                        titlePic:"../../static/demo/datapic/1.jpg",
                        likeInfo:{
                            index:2,//0：未操作，1：已顶，2：已踩
                            likeNum:11,
                            dislikeNum:11,
                            
                        },                     
                        commentNum:10,
                        shareNum:10,
                    },
                    {
                        userPic:"../../static/demo/userpic/1.jpg",
                        userName:"昵称",
                        isFollow:true,
                        title:"标题",
                        type:"video",//image 图文 ，video 视频
                        titlePic:"../../static/demo/datapic/1.jpg",
                        playNum:"20w",
                        length:"2:47",
                        likeInfo:{
                            index:1,//0：未操作，1：已顶，2：已踩
                            likeNum:11,
                            dislikeNum:11,
                            
                        },                     
                        commentNum:10,
                        shareNum:10,
                    }]},
                ]
			}
		},
		methods: {
            //tabBar点击事件
			tabSwitch(index){
                //点击操作获取了当前的index，再将其写入tabIndex中，匹配的项目改变样式
                this.tabIndex = index;
                //alert(index)
            },
            //tabBar滑动事件
            tabChange(e){
                this.tabIndex = e.detail.current;
                //alert(index);
            }
		},
        onLoad() {
            uni.getSystemInfo({
                success: (res) => {
                    let height= res.windowHeight - uni.upx2px(100);//tabBar的高度是100upx
                    this.swiperHeight = height;
                }
            })
        },
	}
</script>

<style>
</style>
