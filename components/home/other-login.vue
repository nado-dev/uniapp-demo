<template>
    <view style="margin: 30upx 0;">
        <!-- 第三方登录API -->
        <view class="other-login u-f-ac">
            <!-- #ifndef MP -->
                <block v-for="(item, index) in providerList" :key="index">
                    <view class="u-f-ajc u-f1" @tap="tologin(item)">
                        <view class="icon iconfont  u-f-ajc " :class="['icon-'+item.icon]"></view>
                    </view>
               </block>
            <!-- #endif -->
            
            <!-- #ifdef MP-WEIXIN -->
                <button type="primary" open-type="getUserInfo" @getuserinfo="mpGetUserInfo">微信登录</button>
            <!-- #endif -->
            
        </view>
       <view class="u-f-ajc" style="padding: 10upx;">登录以查看更多内容</view>
    </view>
</template>

<script>
    export default {
        props:{
            noback:{
                type:Boolean,
                default:true
            }
        },
        data() {
            return {
                providerList: []
            }
        },
        methods:{
            mpGetUserInfo(result){
                uni.showLoading({ title: '登录中...', mask: true });
                // 获取失败
                if (result.detail.errMsg !== 'getUserInfo:ok') {
                    uni.hideLoading();
                    uni.showModal({
                        title: '获取用户信息失败',
                        content: '错误原因' + result.detail.errMsg,
                        showCancel: false
                    });
                    return;
                }
                let userinfo = result.detail.userInfo;
                uni.login({
                    provider:"weixin",
                    success: (res) => {
                        this.MpLogin({
                            url:"/wxlogin",
                            code:res.code,
                            nickName:userinfo.nickName,
                            avatarUrl:userinfo.avatarUrl
                        })
                    },
                    complete: () => {
                        uni.hideLoading();
                    }
                })
            },
            MpLogin(options){
                this.$http.post(options.url,{
                    code:options.code,
                    nickName:options.nickName,
                    avatarUrl:options.avatarUrl
                }).then(data=>{
                    let [err2,res2] = data;
                    // 登录失败
                    if (!this.$http.errorCheck(err2,res2)){
                        return false;
                    }
                    console.log(res2.data.data)
                    // 登录成功 保存状态
                    this.User.token = res2.data.data.token;
                    this.User.userinfo = this.User.__formatUserinfo(res2.data.data);
                    // 本地存储
                    uni.setStorageSync("userinfo",this.User.userinfo);
                    uni.setStorageSync("token", this.User.token);
                    // 获取用户相关统计
                    if (this.User.userinfo.id) {
                        this.User.getCounts();
                    }
                    // 连接socket
                    // if (this.User.userinfo.id) {
                    //     this.$chat.Open();
                    // }
                    // 成功提示
                    uni.showToast({ title: '登录成功' });
                    // 登录成功，重新加载数据
                    this.$emit('logining')
                    if (!this.noback) {
                        // uni.navigateBack();
                        uni.reLaunch({
                            url:"/pages/me/me"
                        })
                    }
                });
            },
            async loginEvent(data){
  				let res = await this.User.login({
  					url:'user/otherlogin',
  					data:data,
  					Noback:this.noback
  				});
  				if (res) {
  					// 登录成功，重新加载数据
  					this.$emit('logining')
  				}
  			},          
            //登录
            tologin(provider) {
                uni.login({
                    provider: provider.id,
                    // #ifdef MP-ALIPAY
                    scopes: 'auth_user', //支付宝小程序需设置授权类型
                    // #endif
                    success: (res) => {
                        uni.showLoading({
                            title: '登陆中...',
                            mask: false
                        });
                        console.log(JSON.stringify(res))
                        console.log('login success:', res);
                        // 更新保存在 store 中的登录状态
                        console.log("登录成功 保存到本地 修改当前登录状态");
                        
                        uni.getUserInfo({
                            provider:provider.id,
                            success: (infoRes) => {
                                console.log(JSON.stringify(infoRes.userInfo))
                                let data = this.User.__formatOtherLogin(provider.id,Object.assign(infoRes,res));
                                this.loginEvent(data);
                            
                            }
                        });
                        console.log('登录成功，保存到本地存储，修改当前用户登录状态')
                    },
                    fail: (err) => {
                        console.log('login fail:', err);
                    },
                    complete() {
                        uni.hideLoading();
                    }
                });
            },
            
            //获取登陆渠道
            getLoadingAuth(){
                uni.getProvider({
                    service: 'oauth',
                    success: (result) => {
                        this.providerList = result.provider.map((value) => {
                            let providerName = '';
                            let icon = ''
                            switch (value) {
                                case 'weixin':
                                    providerName = '微信登录'
                                    icon = 'weixin'
                                    break;
                                case 'qq':
                                    providerName = 'QQ登录'
                                    icon = 'QQ'
                                    break;
                                case 'sinaweibo':
                                    providerName = '新浪微博登录'
                                    icon = 'xinlangweibo'
                                    break;
                                case 'xiaomi':
                                    providerName = '小米登录'
                                    icon = 'gengduo'
                                    break;
                                case 'alipay':
                                    providerName = '支付宝登录'
                                    icon = 'gengduo'
                                    break;
                                case 'baidu':
                                    providerName = '百度登录'
                                    icon = 'gengduo'
                                    break;
                                case 'toutiao':
                                    providerName = '头条登录'
                                    icon = 'gengduo'
                                    break;
                                case 'apple':
                                    providerName = '苹果登录'
                                    icon = 'gengduo'
                                    break;
                            }
                            return {
                                name: providerName,
                                icon: icon,
                                id: value
                            }
                        });
                    },
                    fail: (error) => {
                        console.log('获取登录通道失败', error);
                    }
                });
            }
        },
        created() {
            // #ifdef APP-PLUS ||H5
                this.getLoadingAuth()
            // #endif
           
        }
    }
</script>

<style scoped>
    .other-login{
      
        padding: 20upx 80upx; 
    }
    .other-login>view{
       
       }
    .other-login>view>view{
        width: 100upx;
        height: 100upx;
       
        border-radius: 100%;
        font-size: 55upx;
        color: #FFFFFF;
    }
    .other-login .icon-weixin{
        background: #28DE98;
    }
    .other-login .icon-xinlangweibo{
        background: #FC7729;
    }
    .other-login .icon-QQ{
        background: #2CAEFC;
    }
    
</style>
