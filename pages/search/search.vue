<template>
	<view>
        <template v-if="list.length > 0">
            <block v-for="(item, index) in list" :key="index">
                <index-list :item="item" :index="index"></index-list>
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
	export default {
        components:{
            indexList,
            emptyContent,
            loadMore
        },
		data() {
			return {
                isSearch:false,
                loadText:"上拉加载更多",
				list:[],
                keyword:""
			}
		},
		methods: {
            //搜索事件
            getData(val){
                uni.showLoading({
                    isSearch:false,
                    title: '搜索中',
                    mask: false
                });
                //请求服务端 post keyword:value
                setTimeout(()=> {
                    this.isSearch = true;
                    let arr = [
                        
                            {
                                userPic:"../../static/demo/userpic/1.jpg",
                                userName:"new昵称",
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
                                userName:"new昵称",
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
                    
                    ];
                    this.list = arr;
                    uni.hideLoading();
                }, 1000);
               
            },
             //上拉加载更多
			loadMore(){
			    if( this.loadText != "上拉加载更多"){
			        return;//如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
			    }
			    this.loadText = "加载中(＾o＾)ﾉ";
			    //修改状态
			    setTimeout(()=> {                  
			        //示例:加载2000ms后从服务端获取了新的数据
			        let obj = {                       
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
			        };
			        this.list.push(obj);//追加
			        
			        this.loadText = "上拉加载更多";     //复原状态              
			    }, 2000);
			    
			    //this.loadText = "没有更多数据";
			    
			}
		},
        //监听搜索框文本变化
        onNavigationBarSearchInputChanged(e) {
            console.log(JSON.stringify(e.text));
             // if(e.text){
             //     this.getData(e.text)
             // }
        },
        //监听搜索框文本确认
        onNavigationBarSearchInputConfirmed(e) {
           
           console.log(JSON.stringify(e.text));
           if(e.text){
               this.getData(e.text)
           }
           this.keyword = e.text;
        },
        onReachBottom() {
            this.loadMore()
        },
        onPullDownRefresh() {
            this.getData(this.keyword);
            uni.stopPullDownRefresh();
        }

	}
</script>

<style>

</style>
