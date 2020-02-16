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
        <view class="uni-textarea">
            <!-- v-mode 将文本输入框内容实时绑定 指定变量 内 -->
            <textarea placeholder="期待您的宝贵意见,我们会及时与您取得联络" v-model="text"/>
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
                text:"",
				list:[
                    {title:"开发者", content:"Af"},
                    {title:"课程链接[官方]", 
                    content:"https://study.163.com/course/introduction.htm?courseId=1209188809#/courseDetail?tab=1"},
                    {title:"项目地址", content:"https://github.com/AaronFang123/uniapp-demo"},
                ]
			}
		},
		 methods: {
			async submit(){
                uni.showLoading();
                let data = {
                    data:this.text
                }
			    let [err,res] = await this.$http.post('feedback',data,{
			        token:true,
			        checkToken:true
			    });
                // 请求失败处理
                if (!this.$http.errorCheck(err,res)) return;
                // 成功
                uni.hideLoading();
                uni.showToast({ title: '提交成功，感谢您的宝贵意见！' });
                this.text = ""
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
