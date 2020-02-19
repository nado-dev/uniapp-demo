<script>
	export default {
		onLaunch: function() {
            // 网络监听
			console.log('App Launch')
            this.lib.NetWork.On();
            // 初始化用户状态
            this.User.__init();
            // 检查更新
            this.lib.Update();
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
        
	}
</script>

<style>
	/*每个页面公共css */
    @import "./common/animate.css";
    @import "./common/icon.css";
    @import "./common/uni.css";
    /* 公共样式 */
    @import "./common/common.css";
   /* page{
        background: #FFFFFF;
        height: 100%;
    } */
    ::-webkit-scrollbar{
        display: none;
    }
</style>
