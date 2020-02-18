import $http from "./request.js";

// 网络监听
const NetWork = {
	// 网络状态
	isConnect:false,
	// 监听网络状态
	On(){
		// 获取当前网络状态
		uni.getNetworkType({
			success: (res) => {
				if(res.networkType!=='none'){ 
                    uni.showToast({
                    	icon:"none",
                    	title: '当前使用'+res.networkType+"网络",
                    });
                    this.isConnect=true; 
                    return;
                }
                    uni.showToast({
                        icon:"none",
                        title: '请先连接网络',
                    });
			}
		})
		// 监听网络状态变化
		uni.onNetworkStatusChange((res)=>{
			this.isConnect = res.isConnected;
			if(!res.isConnected){
				uni.showToast({
					icon:"none",
					title: '您目前处于断网状态',
				});
			}
            else{
                uni.showToast({
                	icon:"none",
                	title: '当前使用'+res.networkType+"网络",
                });
            }
		})
	}
}

// app更新
const Update = function(){
	// #ifdef APP-PLUS  
	plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {  
        $http.post('update',{
            ver:widgetInfo.version,
        }).then((res) =>{
            let [err,result] = res;
            // 错误判断
            if(!$http.errorCheck(err, result))  return;
            // 成功
            var data = result.data;
            if(!data.url) {
                // wuxugenxin
                uni.showToast({
                    title: '无需更新'
                });
                return;
            }
            else{
                uni.showModal({
                    title:'发现新版本',
                    content:"最新版本:"+data.version,
                    cancelText:"放弃更新",
                    confirmText:"立即更新",
                    success: (res) => {
                        if(res.confirm){
                            uni.downloadFile({
                                url: data.wgtUrl,  
                                success: (downloadResult) => {  
                                    if (downloadResult.statusCode === 200) {  
                                        plus.runtime.install(downloadResult.tempFilePath, {  
                                            force: false  
                                        }, function() {  
                                            console.log('install success...');  
                                            plus.runtime.restart();  
                                        }, function(e) {  
                                            console.error('install fail...');  
                                        });  
                                    }  
                                }  
                            });  
                        }
                    }
                })
            }
        });
	});  
	// #endif  
}

import config from "./config.js"
export default {
	NetWork,
	Update
}