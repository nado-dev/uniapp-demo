<template>
    <view class="uni-list list-pd">
        <view class="uni-list-cell cell-pd">
            <view class="uni-uploader">
                <view class="uni-uploader-head">
                    <view class="uni-uploader-title">点击可预览选好的图片</view>
                    <view class="uni-uploader-info">{{imglist.length}}/9</view>
                </view>
                <view class="uni-uploader-body">
                    <view class="uni-uploader__files">
                        <block v-for="(image,index) in imglist" :key="index">
                            <view class="uni-uploader__file">
                                <view class="icon iconfont icon-shanchu" @tap="deletePic()"> </view>
                                <image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
                            </view>
                        </block>
                        <view class="uni-uploader__input-box">
                            <view class="uni-uploader__input" @tap="chooseImage"></view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    var sourceType = [
        ['camera'],
        ['album'],
        ['camera', 'album']
    ]
    var sizeType = [
        ['compressed'],
        ['original'],
        ['compressed', 'original']
    ]
    export default {
        props: {
            imglist: Array
        },
        data() {
            return {
                sourceTypeIndex: 2,
                sourceType: ['拍照', '相册', '拍照或相册'],
                sizeTypeIndex: 2,
                sizeType: ['压缩', '原图', '压缩或原图'],
                countIndex: 8,
                count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
        },
        methods: {
            chooseImage: async function() {
                // #ifdef APP-PLUS
                // TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
                if (this.sourceTypeIndex !== 2) {
                    let status = await this.checkPermission();
                    if (status !== 1) {
                        return;
                    }
                }
                // #endif

                if (this.imglist.length === 9) {
                    return;
                }
                uni.chooseImage({
                    sourceType: sourceType[this.sourceTypeIndex],
                    sizeType: sizeType[this.sizeTypeIndex],
                    count: this.imglist.length + this.count[this.countIndex] > 9 ? 9 - this.imglist.length :
                        this.count[this.countIndex],
                    success: (res) => {
                        // this.imageList = this.imageList.concat(res.tempFilePaths);
                        //                   // 可以调用父组件的upload方法,并把imageList传给父组件
                        //                   this.$emit('upload',this.imageList)
                        console.log("获取路径信息")
                        console.log(res)
                        for (let i = 0; i < res.tempFilePaths.length; i++) {
                            this.Upload(res.tempFilePaths[i]);
                        }
                    },
                    fail: (err) => {
                        // #ifdef APP-PLUS
                        if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
                            this.checkPermission(err.code);
                        }
                        // #endif
                        // #ifdef MP
                        uni.getSetting({
                            success: (res) => {
                                let authStatus = false;
                                switch (this.sourceTypeIndex) {
                                    case 0:
                                        authStatus = res.authSetting['scope.camera'];
                                        break;
                                    case 1:
                                        authStatus = res.authSetting['scope.album'];
                                        break;
                                    case 2:
                                        authStatus = res.authSetting['scope.album'] && res.authSetting[
                                            'scope.camera'];
                                        break;
                                    default:
                                        break;
                                }
                                if (!authStatus) {
                                    uni.showModal({
                                        title: '授权失败',
                                        content: 'Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限',
                                        success: (res) => {
                                            if (res.confirm) {
                                                uni.openSetting()
                                            }
                                        }
                                    })
                                }
                            }
                        })
                        // #endif
                    }
                })
            },
            deletePic() {
                uni.showModal({
                    title: "提示",
                    content: "是否删除所有图片",
                    success: (res) => {
                        if (res.confirm) {
                            this.$emit('del')
                        }
                    }
                })
            },
            previewImage: function(e) {
                var current = e.target.dataset.src
                uni.previewImage({
                    current: current,
                    urls: this.imglist
                })
            },
            async checkPermission(code) {
                let type = code ? code - 1 : this.sourceTypeIndex;
                let status = permision.isIOS ? await permision.requestIOS(sourceType[type][0]) :
                    await permision.requestAndroid(type === 0 ? 'android.permission.CAMERA' :
                        'android.permission.READ_EXTERNAL_STORAGE');

                if (status === null || status === 1) {
                    status = 1;
                } else {
                    uni.showModal({
                        content: "没有开启权限",
                        confirmText: "设置",
                        success: function(res) {
                            if (res.confirm) {
                                permision.gotoAppSetting();
                            }
                        }
                    })
                }

                return status;
            },
            // 上传多图
            async Upload(filePath) {
                try {
                    let [err2, res2] = await this.$http.upload('image/uploadmore', {
                        name: 'imglist[]',
                        filePath: filePath,
                        token: true,
                        checkToken: true
                    });
                    let data = JSON.parse(res2.data);
                    // 上传失败
                    if (err2 || data.errorCode) {
                        uni.showToast({
                            title: data.msg ? data.msg : '上传失败',
                            icon: "none"
                        });
                        return false;
                    }
                    // 上传成功
                    let list = data.data.list;
                    // 通知父组件
                    this.$emit('upload', list[0])
                } catch (e) {
                    return;
                }
            },
        }
    }
</script>

<style>
    .uni-textarea {
        border: 1upx solid #EEEEEE;
    }

    .cell-pd {
        padding: 22upx 30upx;
    }

    .list-pd {
        margin-top: 50upx;
    }

    .icon-shanchu {
        position: absolute;
        right: 0;
        top: 0;
        background: #333333;
        color: #FFFFFF;
        padding: 2upx 10upx;
        border-radius: 10upx;
        z-index: 100upx;
    }

    .uni-uploader__files {
        position: relative;
    }
</style>
