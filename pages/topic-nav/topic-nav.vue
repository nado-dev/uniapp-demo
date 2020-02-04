<template>
	<view>
		<swiper-tab-head
		:tabBars="tabBars" 
		:tabIndex="tabIndex"
		@tabSwitch="tabSwitch">
		</swiper-tab-head>
        
        <!-- 这里的高度是可用高度减去tarBar高度 -->
        <!-- 点击事件：current随tabIndex的改变
             滑动事件：@change事件更新了tabIndex的值，选中了相应的tab
         -->
        <view class="uni-tab-bar">           
            <swiper class="swiper-box" 
            :style="{height:swiperHeight+'px'}" 
            :current="tabIndex"
            @change="tabChange"> 
                <swiper-item v-for="(items,index) in newsList" :key="index">
                    <scroll-view scroll-y="true" 
                    class="list" 
                    @scrolltolower="loadMore(index)">          
                    <!-- 有内容 图文列表和加载框-->
                        <template  v-if="items.list.length != 0">
                            <block v-for="(item,index1) in items.list" :key="index1">
                                <!-- 话题列表 传入item和index的值 -->
                                 <topic-list :item="item" :index="index1"></topic-list>
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
	</view>
</template>

<script>
    import swiperTabHead from '../../components/index/swiper-tab-head.vue';
    import emptyContent from "../../components/common/empty-content.vue";
    import loadMore from '../../components/common/load-more.vue';
    import topicList from "../../components/news/topic-list.vue"
	export default {
		data() {
			return {
                swiperHeight:500,
				tabIndex:0,//默认id
				tabBars:[
				    {name:"时间线",id:"timeline"      },
				    {name:"综合1",id:"sundry"         },
				    {name:"速报2",id:"news"           },
				    {name:"欢乐恶搞",id:"dontComeHere"},
				    {name:"跑团",id:"paotuan"         },
				    {name:"圈内",id:"inside"          },
				   
				],
                newsList:[
                    {
                        loadText:"上拉加载更多",
                        list:[
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            },
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            },
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            },
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            },
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            },
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            },
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            },
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            }
                        ]},
                    {
                        loadText:"上拉加载更多",
                        list:[
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            },
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            }
                        ]
                    },
                    {
                        loadText:"上拉加载更多",
                        list:[
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            },
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            }
                        ]
                    },
                    {
                        loadText:"上拉加载更多",
                        list:[
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            },
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            }
                        ]
                    },
                    {
                        loadText:"上拉加载更多",
                        list:[
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            },
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            }
                        ]
                    },
                    {
                        loadText:"上拉加载更多",
                        list:[
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            },
                            {
                                titlePic:"../../static/common/zheshiluwei.jpg",
                                title:"这是芦苇",
                                desc:"想歪的自重",
                                totalPostNum:148,
                                todayPostNum:7
                            }
                        ]
                    },
                ]
			}
		},
        components:{
            swiperTabHead,
            emptyContent,
            loadMore,
            topicList
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
            loadMore(index){
                if( this.newsList[index].loadText != "上拉加载更多"){
                    return;//如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
                }
                this.newsList[index].loadText = "加载中(＾o＾)ﾉ";
                //修改状态
                setTimeout(()=> {                  
                    //示例:加载2000ms后从服务端获取了新的数据
                    let obj = {                       
                       titlePic:"../../static/common/zheshiluwei.jpg",
                       title:"这是芦苇",
                       desc:"想歪的自重",
                       totalPostNum:148,
                       todayPostNum:7
                    };
                    this.newsList[index].list.push(obj);//追加
                    
                    this.newsList[index].loadText = "上拉加载更多";     //复原状态              
                }, 2000);
                
                //this.newsList[index].loadText = "没有更多数据";
                
            },
			//tabBar点击事件
			tabSwitch(index){
			    //点击操作获取了当前的index，再将其写入tabIndex中，匹配的项目改变样式
			    this.tabIndex = index;
			    //console.log(index)
			},
            //tabBar滑动事件
            tabChange(e){
                this.tabIndex = e.detail.current;
                //console.log(index);
            }
		}
	}
</script>

<style>

</style>
