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
        <view class="uni-tab-bar" style="background-color: #EEEEEE;">           
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
                                 <topic-list :item="item" :index="index1" :ischange="ischange"></topic-list>
                            </block>	
                                <!-- 上拉加载 -->
                            <load-more :loadText="items.loadText"></load-more> 
                       </template >
                        
                        <template v-else-if="!items.firstload">
                            <view class="u-f-ajc" style="font-size: 50upx; font-weight: bold;color: #CCCCCC;padding-top: 100upx;">
                                Loading...
                            </view>
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
				tabBars:[],
                newsList:[],
                ischange:false
			}
		},
        components:{
            swiperTabHead,
            emptyContent,
            loadMore,
            topicList
        },
        onLoad(e) {
            if (e.ischange) {
                this.ischange = true;
                // 修改页面标题
                uni.setNavigationBarTitle({
                    title:"选择所属话题"
                })
            }
            uni.getSystemInfo({
                success: (res) => {
                    let height= res.windowHeight - uni.upx2px(100);//tabBar的高度是100upx
                    this.swiperHeight = height;
                }
            })
            this.getNav();
        },
		methods: {
            async getList(){
                let currentIndex = this.tabIndex;
                let url = `topicclass/${this.tabBars[this.tabIndex].id}/topic/${this.newsList[this.tabIndex].page}`;
                let [err,res] = await this.$http.get(url,{});
                let error = this.$http.errorCheck(err,res,()=>{
                    this.newsList[currentIndex].loadText="上拉加载更多";
                },()=>{
                    this.newsList[currentIndex].loadText="上拉加载更多";
                });
                console.log(res)
                if (!error) return;
                let arr = [];
                let list = res.data.data.list;
                for (let i = 0; i < list.length; i++) {
                    arr.push({
                            id:list[i].id,
                            titlePic:list[i].titlepic,
                            title:list[i].title,
                            desc:list[i].desc,
                            totalPostNum:list[i].post_count,
                            todayPostNum:list[i].todaypost_count,
                    });
                }
                this.newsList[currentIndex].list = this.newsList[currentIndex].page > 1 
                    ? this.newsList[currentIndex].list.concat(arr) : arr;
                this.newsList[currentIndex].firstload = true;
                // 拿到最后一页
                if (list.length < 10) {
                    this.newsList[currentIndex].loadText="没有更多数据了(`ε´ )";
                }else{
                    this.newsList[currentIndex].loadText="上拉加载更多";
                }
                return;
            },
            async getNav(){
                let [err, res] = await this.$http.get('topicclass');
                if(err){
                    return  uni.showToast({
                        title: '加载失败',
                        icon:'none'
                    });
                }
                if(res.data.errorCode){
                    return  uni.showToast({
                        title: res.data.msg,
                        icon:'none'
                    });
                }
                console.log(res)
                let list = res.data.data.list;
                let arr = [];
                let arr2 = [];
                for (let i = 0; i < list.length; i++) {
                    arr.push({
                        id:list[i].id,
                        name:list[i].classname
                    })
                    
                    arr2.push({
                        loadText:"上拉加载更多",
                        list:[],
                        page:1,
                        firstload:false
                    })
                }
                this.tabBars = arr;
                this.newsList = arr2;
                this.tabBars.length > 0 && this.getList();
            },
            loadMore(index){
                if( this.newsList[index].loadText != "上拉加载更多"){
                    return;//如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
                }
                this.newsList[index].loadText = "加载中(＾o＾)ﾉ";
                //修改状态
                // 修改状态
                this.newsList[this.tabIndex].page++;
                this.getList();
                //this.newsList[index].loadText = "没有更多数据";
                
            },
			//tabBar点击事件
			tabSwitch(index){
			    //点击操作获取了当前的index，再将其写入tabIndex中，匹配的项目改变样式
			    this.tabIndex = index;
                this.getList()
			    //console.log(index)
			},
            //tabBar滑动事件
            tabChange(e){
                this.tabIndex = e.detail.current;
                this.getList()
                //console.log(index);
            }
		}
	}
</script>

<style>

</style>
