<template>
    <view style="margin: 30upx 0;">
        <!-- 第三方登录API -->
        <view class="other-login u-f-ac">
            <block v-for="(item, index) in providerList" :key="index">
                <view class="u-f-ajc u-f1" @tap="tologin(item)">
                    <view class="icon iconfont  u-f-ajc " :class="['icon-'+item.icon]"></view>
                </view>
           </block>
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
            this.getLoadingAuth()
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
