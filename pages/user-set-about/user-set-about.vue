<template>
	<view class="">
        <view class="user-set-about-img ">
            <image src="../../static/luwei-about.jpg" mode="widthFix" lazy-load></image>
            <view class="">这是芦苇，想歪的自重！</view>
        </view>
	    <uni-collapse>
	        <block v-for="(item,index) in list" :key="index">
	            <uni-collapse-item :title="item.title" :show-animation="true" :contentdata="item.content"></uni-collapse-item>
	        </block>
	    </uni-collapse>
        
	</view>
</template>

<script>
    import uniCollapse from "../../components/uni-collapse/uni-collapse.vue"
    import uniCollapseItem  from "../../components/uni-collapse-item/uni-collapse-item.vue"
	export default {
        components:{
            uniCollapse,
            uniCollapseItem
        },
		data() {
			return {
				list:[
				    {title:"开发者", content:"Af"},
				    {title:"课程链接[官方]", 
				    content:"https://study.163.com/course/introduction.htm?courseId=1209188809#/courseDetail?tab=1"},
				    {title:"项目地址", content:"https://github.com/AaronFang123/uniapp-demo"},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.user-set-about-img>image{
   
    width: 400upx;
    height: 400upx;
    margin-left: 180upx;
    
}

.user-set-about-img>view{
    text-align: center;
    color: #009687;
}
</style>
