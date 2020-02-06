<template>
    <view>
        <input type="password"  v-model="email"
                class="uni-input common-input" 
                placeholder="输入邮箱"/>
                
        <input type="password"  v-model="Pw"
                class="uni-input common-input" 
                placeholder="输入密码"/>
                
        <button class="user-setting-logout-btn "
        :class="{'user-set-btn-disable':disable}"
        type="primary" @tap="submit" :disabled="disable"
        :loading="loading">修改密码</button>
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
            check(){
                if(this.email && this.Pw &&
                this.email != "" && this.Pw != ""){
                       return true ;
                }
                
                else{
                    if(!this.email || this.email == ""){
                        uni.showToast({
                             icon:"none",
                            title:"邮箱不能为空!"
                        })
                     return false;
                    }
                    else if(!this.Pw || this.Pw == ""){
                        uni.showToast({
                             icon:"none",
                            title:"密码不能为空!"
                        })
                  
                    return false;
                }
              }
            },
			submit(){
			    this.loading = true;
			    this.disable = true;
			    if(!this.check()){
			        this.loading = false;
			        this.disable = true;
			        return;
			    }			 
			    uni.showToast({
			        title: '验证通过',
			        icon:"success"
			    });
			    this.loading = false;
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
