<template>
	<view>
		<!-- 自定义导航栏 -->
        <uni-nav-bar rightText="发布" 
        :statusBar="true" 
        left-icon="arrowleft"  
        @clickLeft="back" @clickRight="submit"
        backgroundColor="#009687"
        color="#ffffff" >
            <view class="u-f-ajc" @tap="changeOne" style="font-size: 24upx;">
                {{open[isOpen]}}
                <view class="icon iconfont icon-xialazhankai"></view>
            </view>
        </uni-nav-bar>
        <!-- 多行输入框 -->
        <view class="uni-textarea">
            <!-- v-mode 将文本输入框内容实时绑定 指定变量 内 -->
            <textarea placeholder="在发言前请先阅读相应板块版规" v-model="text"/>
        </view>
        
        <view class="user-setting-userinfo-list u-f-ac u-f-jsb" @tap="changePostClass()">
            <view class=""> 板块(必选)</view> 
            <view class="u-f-ac" >
                {{postClass.title}}
                <view class="icon iconfont icon-jinru"></view>
            </view>
        </view> 
        <view class="user-setting-userinfo-list u-f-ac u-f-jsb" @tap="changeTopic()">
            <view class=""> 话题(必选) </view> 
            <view class="u-f-ac">
                {{topic.title }}
                <view class="icon iconfont icon-jinru"></view>
            </view>
        </view>
       <!-- <view >
            文本框输入内容为{{text}}
        </view> -->
        
        <!-- 上传多图 -->
        <!-- 监听了upload事件，接受子组件传来的imgList -->
        <upload-images @upload = "upload" @del="delImgList" :imglist="imglist" />
        
        
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
                open: ['仅自己可见', '所有人可见'],
                isTips2Save:false,
                showpop_up:true,
                title:"",
				postClass:{
                    id:0, //当前选中的分类id   
                    title:"", // 当前选中的分类名称
                    range:[],//可选项
                    list:[] //服务端获取的分类列表
                },
                topic:{
                    id:0, //当前选中的话题id   
                    title:""
                },
                text:"",//把text绑定到表单中
                imglist:[],
                imglistIds:[],
                isOpen:1
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
                            // 本地存储
                            let obj = {
                                isOpen:this.isOpen,
                                text:this.text,
                                imglist:this.imglist,
                                imglistIds:this.imglistIds,
                                postClass:this.postClass,
                                topic:this.topic
                            };
                            uni.setStorageSync('addinput',JSON.stringify(obj))
                        }
                        else{
                             console.log("dont save");
                             uni.removeStorage({ key:"addinput" }) // 清除缓存
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
                
            upload(item){
                this.imglist.push(item.url);
                this.imglistIds.push({ id:item.id });
                console.log( this.imglist)
            },
            //返回
			back(){
                uni.navigateBack({
                    delta:1000,
                })
            },
            // 发布
            async submit(){
                if (!this.postClass.id) {
                    return uni.showToast({
                        title: '请选择分类',icon:"none"
                    });
                }
                uni.showLoading({ title: '发布中(*´∀`)', mask: true });
                try{
                    let [err,res] = await this.$http.post('post/create',{
                        imglist:JSON.stringify(this.imglistIds),
                        text:this.text,
                        isopen:this.isOpen,
                        topic_id:this.topic.id,
                        post_class_id:this.postClass.id
                    },{
                        token:true,
                        checkToken:true,
                        checkAuth:true
                    });
                    console.log(JSON.stringify(this.imglistIds))
                    // 发布失败
                    if (!this.$http.errorCheck(err,res)) {
                        uni.showToast({
                            title: res.msg,
                            icon:"none"
                        });
                        uni.hideLoading();
                        return 
                    }
                    // 发布成功
                    uni.hideLoading();
                    uni.showToast({
                        title: '发布成功！'
                    });
                    console.log(res)
                    this.isTips2Save = true;
                    uni.$emit('updateData',{ 
                        type:"updateList",
                        data:res.data.data.detail
                    });
                    uni.navigateBack({ delta: 1 });
                    
                }catch(e){
                    console.log(e)
                    return;
                }
            },
            
            changePostClass(){
                uni.showActionSheet({
                    itemList:this.postClass.range,
                    success:(res)=> {
                        this.postClass.id = this.postClass.list[res.tapIndex].id;
                        this.postClass.title = this.postClass.list[res.tapIndex].name;
                    },
                })
            },
            
            changeTopic(){
                uni.navigateTo({
                    url:"/pages/topic-nav/topic-nav?ischange="+true,
                });
            },
            
            hidePopup(){
                this.showpop_up = false;
            },
            
            changeOne(){
                uni.showActionSheet({
                    itemList:this.open,
                    success: (res) => {
                       this.isOpen = res.tapIndex
                    }
                })
            },
            
            async getPostClass(postClass){
                if (postClass) {
                    this.postClass.list = postClass;
                    let arr = [];
                    for (let i = 0; i < postClass.length; i++) {
                        arr.push(postClass[i].name)
                    }
                    return this.postClass.range = arr;
                }
                try{
                    let [err,res] = await this.$http.get('postclass');
                    if (!this.$http.errorCheck(err,res)) return;
                    let list = res.data.data.list;
                    let arr = [] , arr2 = [];
                    for (let i = 0; i < list.length; i++) {
                        arr.push(list[i].classname);
                        arr2.push({
                            id:list[i].id,
                            name:list[i].classname
                        })
                    }
                    this.postClass.range = arr;
                    this.postClass.list = arr2;
                }catch(e){
                    return;
                }
            },
            // 清空图片
            delImgList(){
                this.imglist = [],
                this.imglistIds = []
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
        onLoad(e) {
            // 读取缓存
            let res = uni.getStorageSync('addinput');
            if (res) {
                res = JSON.parse(res);
                this.isOpen = res.isOpen;
                this.imglistIds = res.imglistIds || [];
                if (this.imglistIds.length) {
                    this.imglist = res.imglist;
                }
                this.text = res.text;
                if (res.postClass) {
                    this.postClass = res.postClass;
                }
                if (res.topic) {
                    this.topic = res.topic;
                }
            }
            // 获取板块列表
            let postClass = e.postClass ? JSON.parse(e.postClass) : false;
            this.getPostClass(postClass)
            // 获取评论列表
            uni.$on('changeTopic', (data)=>{
                console.log(data);
                this.topic.id = data.id;
                this.topic.title =  `#${data.title}#`
            })
        }
	}
</script>

<style>

.tip-before-post image{
    width: 80%;
    height: 120%;
    padding-bottom: 50upx;
}
.tip-before-post button{
    background: #009687;
}
.user-setting-userinfo-list{
    padding: 20upx;
    border-bottom: #F4F4F4;  
}
</style>
