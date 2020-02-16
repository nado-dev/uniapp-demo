<template>
	<view class="body">
		<block v-for="(item, index) in list" :key="index">
            <home-list-item :item="item" :index="index"></home-list-item>
        </block>
	</view>
</template>

<script>
    import homeListItem from '../../components/home/home-list-item.vue'
	export default {
        components:{
            homeListItem
        },
		data() {
			return {
                list:[]
			}
		},
        onShow() {
            this.__init()
        },
		methods: {
			async __init(){
                this.list = [
                    { icon:"",name:"手机号",clickType:"navigateTo"
                    ,url:"../../pages/user-bind-phone/user-bind-phone?phone="+this.User.userinfo.phone || false 
                    ,data:this.User.userinfo.phone || "未绑定" },
                    { icon:"",name:"登录密码"
                    ,clickType:"navigateTo",url:"../../pages/user-set-password/user-set-password"
                    ,data:"修改密码" },
                    { icon:"",name:"邮箱绑定",clickType:"navigateTo",
                    url:"../../pages/user-setting-email/user-setting-email" ,
                    data:this.User.userinfo.email || "未绑定"},
                     ]
                    // #ifdef H5||APP-PLUS
                    let arr = [
                         { icon:"",name:"微信账号",clickType:"bind",url:"" 
                        ,data:"开发中" ,provider:"weixin"},
                        { icon:"",name:"微博账号",clickType:"bind",url:"" 
                        ,data:"开发中",provider:"sinaweibo"},
                        { icon:"",name:"QQ账号",clickType:"bind",url:"" 
                        ,data:"开发中",provider:"qq"},
                    ]
                    this.list = [...this.list,...arr];
                    // #endif
                   
               
            }
		}
	}
</script>

<style>
@import "../../common/form.css"
</style>
