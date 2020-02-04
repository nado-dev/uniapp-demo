<template>
	<view>
		<!-- 自定义导航栏 -->
        <uni-nav-bar rightText="发布" 
        :statusBar="true" 
        left-icon="arrowleft"  
        @clickLeft="back" @clickRight="submit"
        backgroundColor="#009687"
        color="#ffffff" >
            <view class="u-f-ajc" @tap="changeVisibility()" style="font-size: 24upx;">
                {{visiblity}}
                <view class="icon iconfont icon-xialazhankai"></view>
            </view>
        </uni-nav-bar>
        <!-- 多行输入框 -->
        <view class="uni-textarea">
            <!-- v-mode 将文本输入框内容实时绑定 指定变量 内 -->
            <textarea placeholder="在发言前请先阅读相应板块版规" v-model="text"/>
        </view>
        
       <!-- <view >
            文本框输入内容为{{text}}
        </view> -->
        
        <!-- 上传多图 -->
        <!-- 监听了upload事件，接受子组件传来的imgList -->
        <upload-images @upload = "upload" />
        
        <!-- 弹出警告栏 -->
        <uni-popup :show="showpop_up" position="middle" mode="fixed">
            <view class="tip-before-post ">
                <view class="u-f-ajc">
                    <image src="../../static/common/ACnyn.png" mode="widthFix"></image>                        
                </view>     
                <view style="font-size: 24upx;"> * 请不要发表涉政敏感信息，遵守相关法律法规。</view>
                <view style="font-size: 24upx;"> * 请遵循总版规和各版块分版规。</view>
                <view style="font-size: 24upx;"> * 发布内容前提为理解并愿意遵守所有版规及免责声明。</view>
                <button type="primary" @tap="hidePopup()" >我同意并接受相关条款</button>
            </view>
        </uni-popup>
	</view>
</template>

<script>
    import uploadImages from "../../components/common/upload-images.vue"
    import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
    import uniPopup from '../../components/uni-popup/uni-popup.vue'
	export default {
        components:{
            uniNavBar,
            uploadImages,
            uniPopup
        },
		data() {
			return {
                isTips2Save:false,
                showpop_up:true,
                title:"",
				visiblity:"综合1",
                text:"",//把text绑定到表单中
                imglist:[]
			}
		},
		methods: {
            //保存草稿
            saveAsDraft(){
                uni.showModal({
                    content: '是否保存为草稿',
                    cancelText: '不保存',
                    confirmText: "保存",
                    success: res => {
                        if(res.confirm){
                            console.log("save");
                            // this.text = 
                        }
                        else{
                             console.log("dont save");
                        }
                        this.isTips2Save = true;
                        uni.navigateBack(
                            {
                                delta:1
                            }
                        );
                    },
                    fail: () => {},
                    complete: () => {}
                });
               
            },
                
            upload(arr){
                this.imglist = arr;
            },
            //返回
			back(){
                uni.navigateBack({
                    delta:1000,
                })
            },
            //发布
            submit(){
                console.log("发布")
            },
            changeVisibility(){
                uni.showActionSheet({
                    itemList:["时间线","综合1","速报2","欢乐恶搞","跑团","圈内"],
                    success:(res)=> {
                        switch (res.tapIndex){
                            case 0:
                                this.visiblity = "时间线";
                                break; 
                            case 1:
                                this.visiblity = "综合1";
                                break;
                            case 2:
                                this.visiblity = "速报2";
                                break;
                            case 3:
                                this.visiblity = "欢乐恶搞";
                                break;
                            case 4:
                                this.visiblity = "跑团";
                                break;
                            case 5:
                                this.visiblity = "圈内";
                                break;
                            
                        }
                    },
                    
                })
            },
            hidePopup(){
                this.showpop_up = false;
            }

		},
        onBackPress() {
            //如果有信息
            if(this.text.length == 0 && this.imglist.length == 0){return;}
            if(!this.isTips2Save){
                this.saveAsDraft();
                return true;
            }            
        },
	}
</script>

<style>
.tip-before-post image{
    width: 100%;
    height: 100%;
}
.tip-before-post button{
    background: #009687;
}

</style>
