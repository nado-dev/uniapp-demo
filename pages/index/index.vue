<template>
	<view>
        <block v-for="(item,index) in list" :key="index">
            <!-- 传入item和index的值 -->
            <index-list :item="item" :index="index"></index-list>
        </block>		
	</view>
</template>

<script>
    // 引入组件
    import indexList from "../../components/index/index-list.vue";
	export default {
        // components 包含 Vue 实例可用组件的哈希表
        components:{
            indexList  // 添加组件
        },
		data() {
			return {
				list:[
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
                ]
			}
		},
		methods: {
			
		},
        
	}
</script>

<style>

</style>
