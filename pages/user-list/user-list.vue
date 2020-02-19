<template>

	<view style="background-color: #EEEEEE;height: 100%;">
        
    <!-- 好友列表 -->
        <!-- tab切换 -->
        <swiper-tab-head
        :tabBars="tabBars" 
        :tabIndex="tabIndex"
        @tabSwitch="tabSwitch">
        </swiper-tab-head>
        <view class="uni-tab-bar">
            
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
                    
                    <template v-else-if="!items.firstload">
                        <view style="font-size: 50upx;font-weight: bold;color: #CCCCCC;
                        padding-top: 100upx;" class="u-f-ajc">Loading ...</view>
                    </template>
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
       <!-- <block v-for="(item, index) in list" :key="index">
            <user-list :item="item" :index="index"></user-list>
        </block> -->
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
				    {name:"互关",id:"huguan" },
				    {name:"关注",id:"guanzhu"  },
				    {name:"粉丝",id:"fensi"  },              
				],
                tabList:[
                    {
                        loadText:"上拉加载更多",
                        list:[],
                        page:1,
                        firstload:false
                    },
                    {                        
                        loadText:"上拉加载更多",
                        list:[],
                        page:1,
                        firstload:false
                                       
                    },
                    {
                        loadText:"上拉加载更多",
                        list:[]  ,
                        page:1,
                        firstload:false
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
        onShow() {
            this.__init();
        },
		methods: {
            __init(){
                this.getList();
            },
            
			tabSwitch(index){
			    //点击操作获取了当前的index，再将其写入tabIndex中，匹配的项目改变样式
			    this.tabIndex = index;
			    //console.log(index)
                if (!this.tabList[this.tabIndex].firstload) {
                    this.getList();
                }
			},
            
            follow(){
                this.item.isFollow !=this.item.isFollow;
            },
            
            //tabBar滑动事件
            tabChange(e){
                this.tabIndex = e.detail.current;
                //console.log(index);
                if (!this.tabList[this.tabIndex].firstload) {
                    this.getList();
                }
            },
            getUrl(){
                let arr = ['friends/','follows/','fens/'];
                return arr[this.tabIndex]+this.tabList[this.tabIndex].page;
            },
            // 获取列表
            async getList(){
                try{
                    let currentIndex = this.tabIndex;
                    let [err,res] = await this.$http.get(this.getUrl(),{},{
                        token:true,
                        checkToken:true
                    });
                    // 错误处理
                    if (!this.$http.errorCheck(err,res)) {
                        this.tabList[currentIndex].loadText="上拉加载更多";
                        return;
                    }
                    // 获取成功
                    let arr = [];
                    
                    let list = res.data.data.list;
                    for (let i = 0; i < list.length; i++) {
                        arr.push(this.__format(list[i],currentIndex));
                    }
                    console.log(res)
                    console.log(list)
                    
                    
                    this.tabList[currentIndex].list = this.tabList[currentIndex].page > 1 ? this.tabList[currentIndex].list.concat(arr) : arr;
                    this.tabList[currentIndex].firstload = true;
                    this.tabList[currentIndex].loadText= list.length < 10 ? "没有更多数据了" : "上拉加载更多";
                    return;
                }catch(e){
                    return;
                }
            },
            __format(item,currentIndex){
                return {
                    id:item.userinfo.user_id,
                    userpic:item.userpic,
                    name:item.username,
                    age:item.userinfo.age,
                    gender:item.userinfo.sex,
                    isFollow:currentIndex !== 2 
                }
            },
            loadMore(index){
                if( this.tabList[index].loadText != "上拉加载更多"){
                    return;//如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
                }
                this.tabList[index].loadText = "加载中(＾o＾)ﾉ";
                //修改状态
                this.tabList[index].page++;
                this.getList();
                
            }
		},
        onNavigationBarSearchInputClicked(e){
            uni.navigateTo({
                url:"../search/search?searchType=user"
            })
        }
	}
</script>

<style>

</style>
