<template>
	<view>
        <!-- 状态条占位 -->
		<uni-status-bar backgroundColor="#009687"></uni-status-bar>
        <!-- 关闭按钮 -->
        <view class="icon iconfont icon-guanbi" @tap="back"> </view>
        <!-- 纯色 -->
        <view class="pureColor"></view>
        <!-- 登录框 按钮 --> 
        <!-- 1 账号密码登录 -->
       <view class="body" v-if="isLoginById">
            <input type="text"  v-model="userName"
            class="uni-input common-input" 
            placeholder="昵称/手机号/邮箱"/>
            
            <view class="login-input-box">
                <input type="password"  v-model="pw"
                class="uni-input common-input forget-input" 
                placeholder="密码"/>
                <view class="forget u-f-ajc">忘记密码？</view>
            </view>
        </view>
        <!-- 2 手机验证码 -->
        <view class="body" v-else>
            <view class="login-input-box">
                <view class="phone-verify u-f-ajc">+86</view>
                <input type="text"  v-model="phoneNum"
                class="uni-input common-input phone-verify-input" 
                placeholder="手机号码(仅限中国大陆)"/>
            </view>
            <view class="login-input-box">
                <input type="text"  v-model="vericode"
                class="uni-input common-input vericode-input" 
                placeholder="验证码"/>
                <view class="vericode u-f-ajc" @tap="getVericode"
                :class="{'vericode-active':vericodeAble}">
                    {{!countDown?'获取验证码':countDown+'s'}}
                </view>
            </view>
        </view>
              
       <button class="user-setting-logout-btn "
        :class="{'user-set-btn-disable':disable}"
        type="primary" @tap="submit" :disabled="disable"
        :loading="loading">登录</button>
        
        <!-- 登录状态切换 -->
        <view class="login-status u-f-ajc " @tap="loginSwitch" v-if="isLoginById">
            验证码登陆<view class="icon iconfont icon-jinru"></view>
        </view>
        <view class="login-status u-f-ajc " @tap="loginSwitch" v-else>
            账号密码登陆<view class="icon iconfont icon-jinru"></view>
        </view>
        <!-- 第三方登录 -->
        <view class="other-login-title u-f-ajc">
            第三方登录
        </view>
        <other-login></other-login>
        <!-- 协议 -->
        <view class="login-agreement u-f-ajc login-color">
            注册即代表您同意<view class="">《xxx》协议</view>
        </view>
	</view>
</template>

<script>
    import uniStatusBar from "../../components/uni-status-bar/uni-status-bar.vue"
	import otherLogin from "../../components/home/other-login.vue";
    export default {
        components:{
            uniStatusBar,
            otherLogin
        },
		data() {
			return {
                vericodeAble:true,
                isLoginById:true,
				disable:true ,//是否禁用按钮
				loading:false,
                userName:"",
                pw:"",
                phoneNum:"",
                vericode:"",
                countDown:0
			}
		},
		methods: {
            //初始化表单
            initInput(){
                this.userName = "";
                this.pw = "";
                this.phoneNum = "";
                this.vericode = "";
            },
			back(){
                uni.navigateBack({
                    delta:1
                });
            },
            submit(){
                //账号密码登录
                if(this.isLoginById){
                    console.log("login: id:"+this.userName+" pw:"+this.pw)
                }
                else{
                    console.log("login: phonenum:"+this.phoneNum+" verify code:"+this.vericode)
                }
            },
            // 切换登陆方式
            loginSwitch(){
                this.initInput();
                this.isLoginById = !this.isLoginById
            },
            // 改变按钮状态
            OnBtnChange(){
                if((this.userName && this.pw) || (this.phoneNum && this.vericode 
                && this.isPhoneNumVaild(this.phoneNum)) 
               ){
                    this.disable = false
                }
                else{
                    this.disable = true
                }
            },
            //手机号码合法性
            isPhoneNumVaild(phoneNum){
                //手机号正则
                let mPattern = /^1[34578]\d{9}$/; 
                if(mPattern.test(this.phoneNum)){
                    return true;
                }
                else{
                    return false;
                }
            },
            //获取验证码
            getVericode(){
                this.vericodeAble = false
                if(this.countDown > 0){
                    return ;//禁用
                }
                else{                  
                    //输出 true
                    if(!this.isPhoneNumVaild(this.phoneNum)){
                        uni.showToast({
                            title:"请检查手机号码格式！",
                            icon:"none"
                        });
                        this.vericodeAble = true
                        return
                    }
                    //TODO 请求服务器，发送验证码到手机
                    //发送成功 开始倒计时
                    this.countDown = 5;
                    let timer = setInterval(()=>{
                         this.countDown--;
                         if(this.countDown == 0){
                            this.vericodeAble = true
                            clearInterval(timer);
                            this.countDown = 0;
                            return;
                         }
                         else{
                              this.vericodeAble = false
                         }
                    },1000)
                }
            }
		},
        watch:{
            userName(val){
                this.OnBtnChange()
            },
            pw(wal){
                this.OnBtnChange()
            },
            phoneNum(val){
                this.OnBtnChange()
            },
            vericode(val){
                this.OnBtnChange()
            }
        }
	}
</script>

<style>
@import "../../common/form.css";
.pureColor{
    height: 400upx;    
    background: rgba(0,150,135,0.5);  
    margin-bottom: 100upx;
    box-shadow: 2upx 2upx 10upx #333333 ;
}
.icon-guanbi{
    position: fixed;
    top: 60upx;
    left: 30upx;
    font-size: 40upx;
    font-weight: bold;
    color: #FFFFFF;
    z-index: 100;
}
.user-setting-logout-btn{
    margin: 30upx;
    background: #009687;
}
.login-status{
    margin: 20upx 0;
}
.login-color{
    color: #9E9E9E;
}

.login-input-box{
    position: relative;
}
.login-input-box .forget-input{
    /* 腾出150upx的空间防止遮档 */
    padding-right: 150upx;
}
.login-input-box .vericode-input{
    padding-right: 150upx;
}
.login-input-box .forget{
    /* 容器声明reletive 子组件可以用absolute 来针对容器相对定位 */
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 150upx;
}
.login-input-box .vericode{
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 150upx;
    background: #EEEEEE;
}
.vericode-active{
    background: #009687 !important;
}
.login-input-box .phone-verify{
    width: 50upx;
    font-weight: bold;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
}
.login-input-box .phone-verify-input{
    padding-left: 80upx;
}

</style>
