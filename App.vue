<script>
	export default {
		onLaunch: function() {
            // 网络监听
			console.log('App Launch')
            this.lib.NetWork.On()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
    @import "./common/animate.css";
    @import "./common/icon.css";
    @import "./common/uni.css";
    /* 公共样式 */
    @import "./common/common.css";
</style>
