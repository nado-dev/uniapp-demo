<template>
	<view>
        <!-- 设置头像 -->
        <view class="user-setting-userinfo-list u-f-ac u-f-jsb">
            <view class="">头像 </view> 
            <view class="u-f-ac" @tap="changeImg">
                <image :src="userPic" 
                mode="aspectFill" lazy-load></image>
                <view class="icon iconfont icon-bianji1"></view>
            </view>
        </view>
        <!-- 昵称 -->
        <view class="user-setting-userinfo-list u-f-ac u-f-jsb">
            <view class="">昵称 </view> 
            <view class="u-f-ac">
                <input type="text"  v-model="userName"/>
                <view class="icon iconfont icon-bianji1"></view>
            </view>
        </view>
        
        <view class="user-setting-userinfo-list u-f-ac u-f-jsb">
            <view class="">性别 </view> 
            <view class="u-f-ac" @tap="changeOne('gender')">
                {{sexOptions[gender]}}
                <view class="icon iconfont icon-bianji1"></view>
            </view>
        </view>
        
        <view class="user-setting-userinfo-list u-f-ac u-f-jsb">
            <view class="">生日 </view>
            <!-- 日期选择器 -->
            <view class="">
                <picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
                    <view class="u-f-ac">
                       {{birthday}}
                        <view class="icon iconfont icon-bianji1"></view>
                    </view>
                </picker>
            </view>
        </view>
        
        <view class="user-setting-userinfo-list u-f-ac u-f-jsb">
            <view class="">情感 </view> 
            <view class="u-f-ac" @tap="changeOne('qinggan')">
                {{qgOptions[qinggan]}}
                <view class="icon iconfont icon-bianji1"></view>
            </view>
        </view>
        
        <view class="user-setting-userinfo-list u-f-ac u-f-jsb">
            <view class="">职业 </view> 
            <view class="u-f-ac" @tap="changeOne('job')">
                {{job}}
                <view class="icon iconfont icon-bianji1"></view>
            </view>
        </view>
        
        <view class="user-setting-userinfo-list u-f-ac u-f-jsb">
            <view class="">地区</view> 
            <view class="u-f-ac" @tap="showMulLinkageThreePicker">
                {{location}}
                <view class="icon iconfont icon-bianji1"></view>
            </view>
        </view>
        
		<button class="user-setting-logout-btn "
		type="primary" @tap="submit" >修改资料</button>
        
        <mpvue-city-picker themeColor="#007AFF" ref="mpvueCityPicker" 
        :pickerValueDefault="cityPickerValueDefault" 
        @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
    // 引入三级联动
    import mpvueCityPicker from "../../components/mpvue-citypicker/mpvueCityPicker.vue";
    import Time from "../../common/time.js"
    let sexOptions = ['未设置','男','女']; 
    let qgOptions = ['未设置','未婚','已婚']; 
    let jobOptions = ['未设置','IT','教师','服务业从业者','公务员','学生']; 
    
	export default {
        components:{
            mpvueCityPicker
        },
		data() {
			return {
				userPic:"",
                userName:"",
                gender:"",
                qinggan:"",
                job:"",
                birthday:"  ",
                cityPickerValueDefault:[0,0,1],//默认选中的地址
                location:"",
                sexOptions : ['未设置','男','女'],
                qgOptions :['未设置','未婚','已婚'],
                jobOptions : ['未设置','IT','教师','服务业从业者','公务员','学生']
			}
		},
		methods: {
            // 三级联动
            showMulLinkageThreePicker() {
                this.$refs.mpvueCityPicker.show()
            },
            onConfirm(e) {
                this.location = e.label;
            },
            // 修改头像
            // 修改头像
            async changeImg(){
                let [err,res] =await uni.chooseImage({
                    count:1,
                    sizeType:['compressed'],
                    sourceType:['camera', 'album']
                });
                if (!res) return;
                // 上传
                console.log("获取路径信息")
                console.log(res)
                let filepath = res.tempFilePaths[0];
                uni.showLoading({ title: '上传中...', mask: false });
                let [err2,res2] = await this.$http.upload('edituserpic',{
                    name: 'userpic',
                    filePath:filepath,
                    token:true,
                    checkToken:true
                }); 
                let data = JSON.parse(res2.data);
                // 上传失败
                if (err2 || data.errorCode) {
                    uni.showToast({ title: data.msg ? data.msg : '上传失败', icon:"none" });
                    return false;
                }
                // 成功
                uni.hideLoading();
                uni.showToast({ title: '修改头像成功!' });
                this.userPic = data.data;
                // 修改状态，存储
                this.User.userinfo.userpic = this.userpic;
                uni.setStorageSync("userinfo",this.User.userinfo);
            },
            // 单列选择
            changeOne(option){
               switch (option){
                    case "gender":
                        uni.showActionSheet({
                            itemList:sexOptions,
                            success: (res) => {
                               this.gender = res.tapIndex
                            }
                        })
                       break;
                    case "qinggan":
                        uni.showActionSheet({
                            itemList:qgOptions,
                            success: (res) => {
                               this.qinggan = res.tapIndex
                            }
                        })
                        break;
                    case "job":
                        uni.showActionSheet({
                            itemList:jobOptions,
                            success: (res) => {
                               this.job = jobOptions[res.tapIndex]
                            }
                        })
                        break;
                   default:
                        break;
                   
                }
            },
			async submit(){
            let data = {
                    name:this.userName,
                    sex:this.gender,
                    qg:this.qinggan,
                    job:this.job,
                    birthday:this.birthday,
                    path:this.location,
                    age:Time.gettime.getAgeByBirthday(this.birthday),
                };
                let [err,res] = await this.$http.post('edituserinfo',data,{
                    token:true,
                    checkToken:true
                });
                // 请求失败处理
                if (!this.$http.errorCheck(err,res)) return;
                // 成功
                uni.showToast({ title: '修改成功！' });
                // 修改状态，缓存
                this.User.userinfo.username = this.userName;
                this.User.userinfo.userinfo = data;
                uni.setStorageSync('userinfo',this.User.userinfo);
                this.User.isUserInfoChange = true;
            },
            getDate(type) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
    
                if (type === 'start') {
                    year = year - 60;
                } else if (type === 'end') {
                    year = year + 2;
                }
                month = month > 9 ? month : '0' + month;;
                day = day > 9 ? day : '0' + day;
                //格式化字符串
                return `${year}-${month}-${day}`;
            },
            //修改生日
             bindDateChange(e) {
                this.birthday = e.target.value
            },
		},
         computed: {
            startDate() {
                return this.getDate('start');
            },
            endDate() {
                return this.getDate('end');
            }
        },
        onBackPress() {
          if (this.$refs.mpvueCityPicker.showPicker) {
            this.$refs.mpvueCityPicker.pickerCancel();
            return true;
          }
        },
        onUnload() {
            if (this.$refs.mpvueCityPicker.showPicker) {
                this.$refs.mpvueCityPicker.pickerCancel()
            }
        },
        onLoad() {
                this.userPic = this.User.userinfo.userpic;
                this.userName = this.User.userinfo.username;
                this.gender = this.User.userinfo.userinfo.sex || 0;
                this.qinggan = this.User.userinfo.userinfo.qg || 0;
                this.job = this.User.userinfo.userinfo.job || "请填写";
                this.birthday = this.User.userinfo.userinfo.birthday || "请填写";
                this.location = this.User.userinfo.userinfo.path || "请填写";
            },
	}
</script>

<style>
@import "../../common/form.css";
.user-setting-logout-btn{
    position: fixed;
    bottom: 100upx;
    left: 20upx;
    right: 20upx;
    background: #009687;
}
.user-setting-userinfo-list{
    padding: 20upx;
    border-bottom: #F4F4F4;  
}
.user-setting-userinfo-list>view:first-child{
    font-size: 32upx;
    font-weight: bold;
    color: #9B9B9B;
}
.user-setting-userinfo-list>view:last-child>view{
    margin-left: 20upx;
    color: #9B9B9B;
}
.user-setting-userinfo-list>view:last-child view{
    margin-left: 20upx;
    color: #9B9B9B;
}
.user-setting-userinfo-list>view:last-child>image{
    height: 80upx;
    width: 80upx;
    border-radius: 100%;
}
.user-setting-userinfo-list>view:last-child>input{
   text-align: right;
}
</style>
