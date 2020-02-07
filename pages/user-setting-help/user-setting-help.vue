<template>
    <view class="">
        <uni-collapse>
            <block v-for="(item,index) in list" :key="index">
                <uni-collapse-item :title="item.title" :show-animation="true" :contentdata="item.content"></uni-collapse-item>
            </block>
        </uni-collapse>
        <view class="body">
                <button class="user-setting-logout-btn "
                type="primary" @tap="submit" >意见反馈</button>
        </view>
    </view>
</template>

<script>
    import uniCollapse from "../../components/uni-collapse/uni-collapse.vue"
    import uniCollapseItem  from "../../components/uni-collapse-item/uni-collapse-item.vue"
 	export default {
        components:{
            uniCollapseItem,
            uniCollapse
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
			submit(){
			    
			},
		}
	}
</script>

<style>
@import "../../common/form.css";
.user-setting-logout-btn{
    position: fixed;
    bottom: 400upx;
    left: 20upx;
    right: 20upx;
    background: #009687;
}
</style>
