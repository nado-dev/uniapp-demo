<template>
	<view>
		<input type="password"  v-model="oldPw"
        class="uni-input common-input" 
        placeholder="输入旧密码"/>
		
        <input type="password"  v-model="newPw"
        class="uni-input common-input" 
        placeholder="输入新密码"/>
		
        <input type="password"  v-model="comfirmedPw"
        class="uni-input common-input"
         placeholder="确认新密码"/>
        
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
				oldPw:"",
                newPw:"",
                comfirmedPw:"",
                disable:true ,//是否禁用按钮
                loading:false
			}
		},
		methods: {
            //验证
            check(){
                if(this.oldPw && this.newPw && this.comfirmedPw &&
                   this.oldPw != "" && this.newPw!="" && 
                   this.comfirmedPw!="" && this.newPw === this.comfirmedPw){
                       return true ;
                }
                
                else{
                    if(!this.oldPw || this.oldPw == ""){
                        uni.showToast({
                             icon:"none",
                            title:"旧密码不能为空!"
                        })
                    }
                    else if(!this.newPw || this.newPw == ""){
                        uni.showToast({
                             icon:"none",
                            title:"新密码不能为空!"
                        })
                    }
                    else if(!this.comfirmedPw || this.comfirmedPw == ""){
                        uni.showToast({
                             icon:"none",
                            title:"请输入新密码以确认!"
                        })
                    }
                    else if(this.newPw !== this.comfirmedPw){
                        uni.showToast({
                            icon:"none",
                            title:"新密码输入不一致,请重新输入!"
                        })
                    }
                    return false;
                }
            },
            //提交
			submit(){
                this.loading = true;
                this.disable = true;
                if(!this.check()){
                    this.loading = false;
                    this.disable = true;
                    return;
                }
                setTimeout(function() {}, 1000);
                uni.showToast({
                    title: '验证通过',
                    icon:"success"
                });
                this.loading = false;
            },
            //实时监听数据
            change(){
                if(this.oldPw && this.newPw && this.comfirmedPw){
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
                comfirmedPw(val){
                    this.change()
                },
                newPw(val){
                     this.change()
                },
                oldPw(val){
                     this.change()
                }
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
