<template>
    <view class="animated fadeIn faster" v-if="isShareShow">
        <!-- 蒙版 -->
        <view class="more-share-mask"  @tap="togle"></view>
            
        
        <!-- 主体 -->
        <view class="more-share">
            <!-- 上部 标题 -->
            <view class="more-share-title u-f-ajc">分享到</view>
            <!-- 中部 分享选择 -->
            <scroll-view scroll-x class="more-share-body u-f-ajc">
                
                <block v-for="(val, index) in providerList " :key="index">
                    <view class="more-share-item" 
                    hover-class="more-share-hover"
                    @tap="share(val)">
                        <view class="icon iconfont u-f-ajc"
                        :class="['icon-'+val.zicon,'share-'+val.zclass]"></view>
                        <view>{{val.name}}</view>
                    </view>
                </block>
                
            </scroll-view>
            <!-- 下部 取消-->
            <view class="more-share-bottom u-f-ajc" hover-class="more-share-hover" 
            @tap="togle">取消</view>
        </view>
    </view>
</template>

<script>
export default {
		props:{
			isShareShow:Boolean,
           
		},
		data() {
			return {
				shareText: 'share test',
				href:"https://uniapp.dcloud.io",
				image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png',
				shareType:1,//1文字 2图片 0图文 5小程序
                providerList:[]
			}
		},
		
		methods:{
            
                loadShareList(){
                    uni.getProvider({
                        service: 'share',
                        success: (e) => {
                            let data = []
                           
                            for (let i = 0; i < e.provider.length; i++) {
                                switch (e.provider[i]) {
                                    case 'weixin':
                                        data.push({
                                            name: '微信好友',
                                            id: 'weixin',
                                            zicon:"weixin",
                                            zclass:"wechat",
                                            sort:0
                                        })
                                        data.push({
                                            name: '朋友圈',
                                            id: 'weixin',
                                            type:'WXSenceTimeline',
                                            zicon:"weixin",
                                            zclass:"wxfriends",
                                            sort:1
                                        })
                                        break;
                                    case 'sinaweibo':
                                        data.push({
                                            name: '新浪微博',
                                            id: 'sinaweibo',
                                            zicon:"xinlangweibo",
                                            zclass:"weibo",
                                            sort:2
                                        })
                                        break;
                                    case 'qq':
                                        data.push({
                                            name: 'QQ好友',
                                            id: 'qq',
                                            zicon:"QQ",
                                            zclass:"QQ",
                                            sort:3
                                        })
                                        break;
                                    default:
                                        break;
                                }
                               
                            }
                              console.log("length"+data.length)
                            this.providerList = data.sort((x,y) => {
                                return x.sort - y.sort
                            });
                             console.log("length"+this.providerList.length)
                        },
                        fail: (e) => {
                            console.log('获取分享通道失败', e);
                            uni.showModal({
                                content:'获取分享通道失败',
                                showCancel:false
                            })
                        }
                    });
                },
            
			togle(){
				this.$emit('togle')
			},
			async share(e) {
				console.log('分享通道:'+ e.id +'； 分享类型:' + this.shareType);
				
				if(!this.shareText && (this.shareType === 1 || this.shareType === 0)){
					uni.showModal({
						content:'分享内容不能为空',
						showCancel:false
					})
					return;
				}
				
				if(!this.image && (this.shareType === 2 || this.shareType === 0)){
					uni.showModal({
						content:'分享图片不能为空',
						showCancel:false
					})
					return;
				}
				
				let shareOPtions = {
					provider: e.id,
					scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession', //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
					type: this.shareType,
					success: (e) => {
						console.log('success', e);
						uni.showModal({
							content: '分享成功',
							showCancel:false
						})
					},
					fail: (e) => {
						console.log('fail', e)
						uni.showModal({
							content: e.errMsg,
							showCancel:false
						})
					},
					complete:function(){
						console.log('分享操作结束!')
					}
				}
				
				switch (this.shareType){
					case 0:
						shareOPtions.summary = this.shareText;
						shareOPtions.imageUrl = this.image;
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.href = 'https://uniapp.dcloud.io';
						break;
					case 1:
						shareOPtions.summary = this.shareText;
						break;
					case 2:
						shareOPtions.imageUrl = this.image;
						break;
					case 5:
						shareOPtions.imageUrl = this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.miniProgram = {
							id:'gh_33446d7f7a26',
							path:'/pages/tabBar/component/component',
							webUrl:'https://uniapp.dcloud.io',
							type:0
						};
						break;
					default:
						break;
				}
				
				if(shareOPtions.type === 0 && plus.os.name === 'iOS'){//如果是图文分享，且是ios平台，则压缩图片 
					shareOPtions.imageUrl = await this.compress();
				}
				if(shareOPtions.type === 1 && shareOPtions.provider === 'qq'){//如果是分享文字到qq，则必须加上href和title
					shareOPtions.href = 'https://uniapp.dcloud.io';
					shareOPtions.title = '欢迎体验uniapp';
				}
				uni.share(shareOPtions);
			},
			compress(){//压缩图片 图文分享要求分享图片大小不能超过20Kb
				console.log('开始压缩');
				let img = this.image;
				return new Promise((res) => {
					var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
					console.log('after' + localPath);
					// 压缩size
					plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
						entry.file((file) => {// 可通过entry对象操作图片 
							console.log('getFile:' + JSON.stringify(file));
							if(file.size > 20480) {// 压缩后size 大于20Kb
								plus.zip.compressImage({
									src: img,
									dst: img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
									width: '10%',
									height: '10%',
									quality: 1,
									overwrite: true
								}, (event) => {
									console.log('success zip****' + event.size);
									let newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
									res(newImg);
								}, function(error) {
									uni.showModal({
										content:'分享图片太大,需要请重新选择图片!',
										showCancel:false
									})
								});
							}
						});
					}, (e) => {
						console.log('Resolve file URL failed: ' + e.message);
						uni.showModal({
							content:'分享图片太大,需要请重新选择图片!',
							showCancel:false
						})
					});
				})
			}
		},
        created() {
            this.loadShareList();
        }
	}
</script>

<style>
    /* 分享 */
        /* 主体 */
    .more-share{
        z-index: 110;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #FFFFFF;
    }
    .more-share-hover{
        background: #EEEEEE;
    }
    /* 标题和取消 主体样式*/
    .more-share-title, .more-share-bottom{
       
        font-size: 35upx;
        padding: 25upx;
    }
    /* 滚动选择栏 */
    .more-share-body{
        border-bottom: 1upx solid #EEEEEE ;
        /* 不会换行 */
        white-space: nowrap;
        width: 100%;
        height: 200upx;
        display: flex;
        line-height: 170upx;
    }
    /* 选项图标和文字具体样式 */
    .more-share-item{
       
         width: 25%;
         display: inline-flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;
    }
    .more-share-item>view:first-child{
        width: 100upx;
        height: 100upx;
        border-radius: 100%;
        color: #FFFFFF;
        font-size: 55upx;
    }
    .more-share-item>view:last-child{
        color: #666666;
    }
    .share-wechat{
        background: #2AD19B;
    }
    .share-wxfriends{
        background: #514D4C;
    }
    .share-weibo{
         background: #EE5E5E;
    }
    .share-QQ{
         background: #4A73BA;
    }
    .share-more{
        background: #C7ABC5;
    }
        
    /* 蒙版 */
    .more-share-mask{
        z-index: 99;
        background:  rgba(55,55,55,0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
        
</style>
