<template>
	<view class="body">
		<input type="number" v-model="phone"
		class="uni-input common-input"
		placeholder="输入手机号" :disabled="isbind"/>
		
		<view class="login-input-box" v-if="!isbind">
			<input type="text" v-model="checknum"
			class="uni-input common-input forget-input"
			placeholder="请输入验证码" />
			<view class="forget u-f-ajc login-font-color yanzhengma"
			@tap="getCheckNum">
				<view class="u-f-ajc">{{!codetime?'获取验证码':codetime+' s'}}</view>
			</view>
		</view>
		
		<button class="user-set-btn" 
		:loading="loading" :class="{'user-set-btn-disable':disabled}" 
		type="primary" @tap="submit" :disabled="disabled || isbind">{{isbind?"已绑定":"立即绑定"}}</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isbind:false,
				disabled:true,
				loading:false,
				phone:"",
				checknum:"",
				codetime:0
			}
		},
		onLoad(e) {
			if (e.phone !== "false" && e.phone && e.phone !== 'null') {
                // 已绑定
				this.isbind = true;
				this.phone = e.phone;
			}
		},
		watch:{
			phone(val){
				this.OnBtnChange();
			},
			checknum(val){
				this.OnBtnChange();
			}
		},
		methods: {
			// 验证手机号码
			isPhone(){
				let mPattern = /^1[34578]\d{9}$/; 
				return mPattern.test(this.phone);
			},
			// 改变按钮状态
			OnBtnChange(){
				if( this.phone && this.checknum ){
					this.disabled=false; return;
				}
				this.disabled=true;
			},
			async getCheckNum(){
				if(this.codetime > 0) return;
				// 验证手机号合法性
				if(!this.isPhone()){
					return uni.showToast({ title: '请输入正确的手机号码',icon:"none" });
				}
				// 请求服务器，发送验证码
				let [err,res] = await this.$http.post('/user/sendcode',{
					phone:this.phone
				});
				// 请求失败处理
				this.$http.errorCheck(err,res);
				if (res.data.errorCode === 30001) return;
				// 发送成功，开启倒计时
				this.codetime=60;
				let timer=setInterval(()=>{
					this.codetime--;
					if(this.codetime < 1){
						clearInterval(timer);
						this.codetime=0;
					}
				},1000);
			},
			async submit(){
				let [err,res] = await this.$http.post('/user/bindphone',{
					phone:this.phone,
					code:this.checknum
				},{
					token:true,
					checkToken:true,
				});
				console.log(res)
				// 请求失败处理
				if (!this.$http.errorCheck(err,res)) return;
				// 成功
				this.isbind = true;
				this.disabled = false;
				uni.showToast({ title: '绑定成功！'});
				// 修改状态，保存缓存
				let data = res.data.data;
				if (typeof data === 'boolean') {
					this.User.userinfo.phone = this.phone;
				}else{
					this.User.userinfo = this.User.__formatUserinfo(data);
				}
				uni.setStorageSync("userinfo",this.User.userinfo);
			}
		}
	}
</script>

<style>
@import "../../common/form.css";
.login-input-box{
	position: relative;
}
.login-input-box .forget-input{
	padding-right: 150upx;
}
.login-input-box .forget{
	position: absolute;
	top: 0;
	height: 100%;
	z-index: 100;
}
.login-input-box .forget{
	width: 150upx;
	right: 0;
}
.login-input-box .phone{
	width:100upx;
	left: 0;
	font-weight: bold;
}
.login-input-box .phone-input{
	padding-left: 100upx;
}
.yanzhengma view{
	background: #009687;
	border-radius: 10upx;
	font-size: 25upx;
	width: 150upx;
	padding: 10upx 0;
    color: #FFFFFF;
}
</style>
