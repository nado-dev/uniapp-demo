<template>
	<view>
        
    <!-- 好友列表 -->
        <!-- tab切换 -->
        <swiper-tab-head
        :tabBars="tabBars" 
        :tabIndex="tabIndex"
        @tabSwitch="tabSwitch">
        </swiper-tab-head>
        
        <view class="uni-tab-bar" style="background-color: #EEEEEE;">
            <swiper class="swiper-box" 
            :style="{height:swiperHeight+'px'}" 
            :current="tabIndex"
            @change="tabChange"> 
                <swiper-item v-for="(items,index) in tabList" :key="index">
                    <scroll-view scroll-y="true" 
                    class="list"
                    @scrolltolower="loadMore(index)">          
                    <!-- 有内容 图文列表和加载框-->
                        <template  v-if="items.list.length != 0">
                            <block v-for="(item,index1) in items.list" :key="index1">
                                <!-- 好友列表 -->
                                    <user-list :item="item" :index="index1"></user-list>
                            </block>	
                                <!-- 上拉加载 -->
                            <load-more :loadText="items.loadText"></load-more> 
                       </template >
                            
                    <!-- 无内容 展示图片-->  
                    <!-- 无内容默认 -->
                       <template v-else>
                          
                            <empty-content></empty-content>
                        </template>
                           
                        
                    </scroll-view>
                </swiper-item>         
            </swiper>
        </view>
        
        <!-- 好友列表 -->
        <block v-for="(item, index) in list" :key="index">
            <user-list :item="item" :index="index"></user-list>
        </block>
	</view>
</template>

<script>
    import swiperTabHead from '../../components/index/swiper-tab-head.vue';
    import tagGenderAge from '../../components/common/tag-gender-age.vue';
    import userList from '../../components/user-list/user-list.vue';
    import loadMore from '../../components/common/load-more.vue';
    import emptyContent from "../../components/common/empty-content.vue";
    
	export default {
        components:{
            swiperTabHead,
            tagGenderAge,
            userList,
            loadMore,
            emptyContent
        },
		data() {
			return {
                swiperHeight:500,
                tabIndex:0,
				tabBars:[
				    {name:"互关",id:"huguan", num:10   },
				    {name:"关注",id:"guanzhu",num:20   },
				    {name:"粉丝",id:"fensi",  num:23   },              
				],
                tabList:[
                    {
                        loadText:"上拉加载更多",
                        list:[                    
                            {
                                userpic:"../../static/demo/userpic/2.jpg",
                                name:"1ATM",
                                gender:1,
                                age:28,
                                isFollow:true
                            },
                            {
                                userpic:"../../static/demo/userpic/2.jpg",
                                name:"ATM",
                                gender:0,
                                age:28,
                                isFollow:false
                            }, {
                                userpic:"../../static/demo/userpic/2.jpg",
                                name:"ATM",
                                gender:0,
                                age:28,
                                isFollow:false
                            }, {
                                userpic:"../../static/demo/userpic/2.jpg",
                                name:"ATM",
                                gender:0,
                                age:28,
                                isFollow:false
                            }, {
                                userpic:"../../static/demo/userpic/2.jpg",
                                name:"ATM",
                                gender:0,
                                age:28,
                                isFollow:false
                            }, {
                                userpic:"../../static/demo/userpic/2.jpg",
                                name:"ATM",
                                gender:0,
                                age:28,
                                isFollow:false
                            }, {
                                userpic:"../../static/demo/userpic/2.jpg",
                                name:"ATM",
                                gender:0,
                                age:28,
                                isFollow:false
                            }, {
                                userpic:"../../static/demo/userpic/2.jpg",
                                name:"ATM",
                                gender:0,
                                age:28,
                                isFollow:false
                            }, {
                                userpic:"../../static/demo/userpic/2.jpg",
                                name:"ATM",
                                gender:0,
                                age:28,
                                isFollow:false
                            }, {
                                userpic:"../../static/demo/userpic/2.jpg",
                                name:"ATM",
                                gender:0,
                                age:28,
                                isFollow:false
                            }
                        ]
                    },
                    {                        
                        loadText:"上拉加载更多",
                        list:[                    
                            {
                                userpic:"../../static/demo/userpic/2.jpg",
                                name:"2ATM",
                                gender:1,
                                age:28,
                                isFollow:true
                            },
                            {
                                userpic:"../../static/demo/userpic/2.jpg",
                                name:"ATM",
                                gender:0,
                                age:28,
                                isFollow:false
                            }
                        ]                       
                    },
                    {
                        loadText:"上拉加载更多",
                        list:[                    
                            {
                                userpic:"../../static/demo/userpic/2.jpg",
                                name:"3ATM",
                                gender:1,
                                age:28,
                                isFollow:true
                            },
                            {
                                userpic:"../../static/demo/userpic/2.jpg",
                                name:"ATM",
                                gender:0,
                                age:28,
                                isFollow:false
                            }
                        ]                       
                    }
                ]
                
                
               
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
		methods: {
			tabSwitch(index){
			    //点击操作获取了当前的index，再将其写入tabIndex中，匹配的项目改变样式
			    this.tabIndex = index;
			    //console.log(index)
			},
            follow(){
                this.item.isFollow !=this.item.isFollow;
            },
            //tabBar滑动事件
            tabChange(e){
                this.tabIndex = e.detail.current;
                //console.log(index);
            },
            loadMore(index){
                if( this.tabList[index].loadText != "上拉加载更多"){
                    return;//如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
                }
                this.tabList[index].loadText = "加载中(＾o＾)ﾉ";
                //修改状态
                setTimeout(()=> {                  
                    //示例:加载2000ms后从服务端获取了新的数据
                    let obj = {                       
                       userpic:"../../static/demo/userpic/2.jpg",
                       name:"reATM",
                       gender:1,
                       age:28,
                       isFollow:true
                    };
                    this.tabList[index].list.push(obj);//追加
                    
                    this.tabList[index].loadText = "上拉加载更多";     //复原状态              
                }, 2000);
                
                //this.tabList[index].loadText = "没有更多数据";
                
            }
		}
	}
</script>

<style>

</style>
