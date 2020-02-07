<template>
	<view class="body">
		<block v-for="(item, index) in list" :key="index">
            <home-list-item :item="item" :index="index"></home-list-item>
        </block>
        <button class="user-setting-logout-btn" type="primary">退出登录</button>
	</view>
</template>

<script>
    import homeListItem from "../../components/home/home-list-item.vue"
	export default {
        components:{
            homeListItem
        },
		data() {
			return {
				list:[
				    {name:"账号与安全", icon:"", clickType:"navigateTo"
                    ,url:"../../pages/user-set-password/user-set-password"},
				    {name:"绑定邮箱", icon:"", clickType:"navigateTo"
                    ,url:"../../pages/user-setting-email/user-setting-email"},
				    {name:"资料编辑", icon:"" ,clickType:"navigateTo"
                    ,url:"../../pages/user-setting-userinfo/user-setting-userinfo"},
				    {name:"消息"    , icon:""},
				    {name:"清除缓存", icon:""},
				    {name:"意见反馈", icon:"", clickType:"navigateTo"
                    ,url:"../../pages/user-setting-help/user-setting-help"},
				    {name:"关于", icon:"", clickType:"navigateTo"
                    ,url:"../../pages/user-set-about/user-set-about"},
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.body{
    padding:0 20upx;
}
.user-setting-logout-btn{
    position: fixed;
    bottom: 180upx;
    left: 20upx;
    right: 20upx;
    background: #009687;
}
</style>
