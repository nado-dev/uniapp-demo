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
                {{gender}}
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
                {{qinggan}}
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
    
    let sexOptions = ['未设置','男','女']; 
    let qgOptions = ['未设置','未婚','已婚']; 
    let jobOptions = ['未设置','IT','教师','服务业从业者','公务员','学生']; 
    
	export default {
        components:{
            mpvueCityPicker
        },
		data() {
			return {
				userPic:"../../static/demo/userpic/10.jpg",
                userName:"ATM",
                gender:"未设置",
                qinggan:"未设置",
                job:"未设置",
                birthday:" 未设置 ",
                cityPickerValueDefault:[0,0,1],//默认选中的地址
                location:"未设置"
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
            changeImg(){
                uni.chooseImage({
                    count:1,
                    sizeType:["compressed"],
                    success: (res) => {
                        this.userPic = res.tempFilePaths;
                        // console.log(res.tempFilePath)
                    }
                })
            },
            // 单列选择
            changeOne(option){
               switch (option){
                    case "gender":
                        uni.showActionSheet({
                            itemList:sexOptions,
                            success: (res) => {
                               this.gender = sexOptions[res.tapIndex]
                            }
                        })
                       break;
                    case "qinggan":
                        uni.showActionSheet({
                            itemList:qgOptions,
                            success: (res) => {
                               this.qinggan = qgOptions[res.tapIndex]
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
			submit(){
                
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
