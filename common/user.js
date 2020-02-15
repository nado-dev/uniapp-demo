import $http from "./request.js"

export default{
    // 用户token
    // token:false,
    // token:'a8c3418a9b519f4551236064dd798dd6228c9935',
    token:false,
    // 用户信息
    userinfo:false,
    // 权限验证跳转
    navigate(options, type='navigateTo'){
        // 权限验证
        if(!this.token){
            return uni.navigateTo({
                 url:'/pages/login/login'
            })
        }
        // 跳转
        switch(type){
            case 'navigateTo':
                 uni.navigateTo(options);
                 break;
            case 'redirectTo':
                 uni.redirectTo(options);
                 break;
            case 'reLaunch':
                 uni.reLaunch(options);
                 break;
            case 'switchTab':
                 uni.switchTab(options);
                 break;
        }
    },
    // 初始化
    	__init(){
    		// 获取用户信息
    		this.userinfo = uni.getStorageSync("userinfo");
    		this.token = uni.getStorageSync("token");
    		this.counts = uni.getStorageSync("counts");
    		this.userbind = uni.getStorageSync("userbind");
    		// this.OnUserCounts();
    		// 如果用户id存在，则连接 
    		// if (this.userinfo.id) {
    		// 	// 连接socket
    		// 	$chat.Open();
    		// }
    	},
    // 登录
    	async login(options ={}){
    		uni.showLoading({ title: '登录中...', mask: true });
    		// 请求登录
    		let [err,res] = await $http.post(options.url,options.data);
    		// 登录失败
    		if (!$http.errorCheck(err,res)){
    			uni.hideLoading();
    			return false;
    		}
    		// 登录成功 保存状态
    		this.token = res.data.data.token;
    		this.userinfo = this.__formatUserinfo(res.data.data);
    		// 本地存储
    		uni.setStorageSync("userinfo",this.userinfo);
    		uni.setStorageSync("token", this.token);
    		// 获取用户相关统计
    		// await this.getCounts();
    		// 连接socket
    		// if (this.userinfo.id) {
    		// 	$chat.Open();
    		// }
    		// 成功提示
    		uni.hideLoading();
    		uni.showToast({ title: '登录成功' });
    		// 返回上一步
    		if (!options.Noback) {
    			uni.navigateBack({ delta: 1 });
    		}
    		return true;
    	},
        
    // userinfo格式转换
    	__formatUserinfo(obj){
    		// 手机/邮箱/账号登录
    		if (obj.logintype == "username" || obj.logintype == "email" || obj.logintype == "phone") {
    			// 设置默认头像
    			obj.userpic = obj.userpic || "https://krplus-pic.b0.upaiyun.com/avatar/201812/28095646/fde0v5pcswzft2s8!120";
    			return obj;
    		}
    		// 第三方登录（已绑定）
    		if (obj.user && obj.user_id > 0) {
    			return {
    				id: obj.user.id,
    				username: obj.user.username || obj.nickname,
    				userpic: obj.user.userpic || obj.avatarurl,
    				phone: obj.user.phone,
    				email: obj.user.email,
    				status: obj.user.status,
    				create_time: obj.user.create_time,
    				logintype: obj.logintype,
    				password:obj.user.password,
    				token: obj.token,
    				userinfo: {
    				    id: obj.user.userinfo.id,
    				    user_id: obj.user.userinfo.user_id,
    				    age: obj.user.userinfo.age,
    				    sex: obj.user.userinfo.sex,
    				    qg: obj.user.userinfo.qg,
    				    job: obj.user.userinfo.job,
    				    path: obj.user.userinfo.path,
    				    birthday: obj.user.userinfo.birthday,
    				}
    			}
    		}
    		// 第三方登录（未绑定）
    		return {
    			id: obj.user_id,
    			username: obj.nickname,
    			userpic: obj.avatarurl,
    			phone: false,
    			email: false,
    			status: 1,
    			create_time: false,
    			logintype: obj.logintype,
    			token: obj.token,
    			userinfo: false
    		}
    	},
}