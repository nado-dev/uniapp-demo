<template>
    <view>
        <input type="text"  v-model="email"
                class="uni-input common-input" 
                placeholder="输入邮箱"/>
                
        <input type="text"  v-model="Pw"
                class="uni-input common-input" 
                placeholder="确认您的手机号码"/>
                
        <button class="user-setting-logout-btn "
        :class="{'user-set-btn-disable':disable}"
        type="primary" @tap="submit" :disabled="disable"
        :loading="loading">绑定邮箱</button>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				email:"",
                Pw:"",
                disable:true,
                loading:false
			}
		},
		methods: {
            verifyEmailFormat(){
                // 验证邮箱格式
                let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                if(!ePattern.test(this.email)){
                    uni.showToast({
                        title: '请输入正确邮箱格式',
                        icon:"none"
                    });
                    return false;
                }
                return true;
            },
            
            check(){
                if(this.email && this.Pw &&
                this.email != "" && this.Pw != "" && this.verifyEmailFormat() 
                &&  this.Pw === this.User.userinfo.phone){
                       return true ;
                }
                
                else{
                    if(!this.email || this.email == ""){
                        uni.showToast({
                             icon:"none",
                            title:"邮箱不能为空"
                        })
                     return false;
                    }
                    else if(!this.Pw || this.Pw == "" ){
                        uni.showToast({
                             icon:"none",
                            title:"手机不能为空"
                        }) 
                        return false;
                    }
                    else if(this.Pw !== this.User.userinfo.phone){
                    uni.showToast({
                         icon:"none",
                        title:"手机与当前登录账号不一致"
                    })
                  
                    return false;
                }
              }
            },
			async  submit(){
			    this.loading = true;
			    this.disable = true;
			    if(!this.check()){
			        this.loading = false;
			        this.disable = true;
			        return;
			    }			 
			   	let [err,res] =await this.$http.post('/user/bindemail',{
                    email:this.email,
                    phone:this.Pw
                },{
                    token:true,
                    checkToken:true
                });
                if (!this.$http.errorCheck(err,res)){
                    return this.loading=this.disable=false;
                }
                // 绑定成功
                this.loading = this.disabled = false;
               	// 修改状态，缓存
                this.User.userinfo.email = this.email;
                uni.setStorageSync("userinfo",this.User.userinfo);
                return uni.showToast({
                    title: '绑定成功！',
                    success: () => {
                        uni.navigateBack({ delta: 1 });
                    }
                });
			},
            //实时监听数据
            change(){
                if(this.Pw && this.email ){
                    this.disable = false;
                }
                else{
                    this.disable = true;
                }
            }
		},
        watch:{
            //当每次监听到  值发生改变时，执行函数。
            //也可以在所监听的数据后面直接加字符串形式的方法名：
            //监听 方法名与被监听变量同名
                email(val){
                    this.change()
                },
                Pw(val){
                     this.change()
                },
               
            }
	}
</script>

<style>
@import "../../common/form.css";
.user-setting-logout-btn{
    position: fixed;
    bottom: 600upx;
    left: 20upx;
    right: 20upx;
    background: #009687;
}
</style>
