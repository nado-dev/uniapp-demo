<template>
    <view class="animated fadeIn faster">
        <!-- 未登录 -->
        <template v-if="!isLogin">
            <!-- 第三方登录 -->
            <other-login :noback="true" @logining="isLogin_func"></other-login>
            <!-- 账号密码登录 -->
            <view class="u-f-ajc" @tap="openLogin">
                <view class="icon iconfont icon-jinru"> </view>账号密码登录
            </view>

        </template>

        <!-- 已登录 -->
        <template v-else>
            <home-info :homeInfo="homeInfo"></home-info>
            <!-- 动态 评论 收藏数量 -->
            <!-- #ifdef APP-PLUS || H5 -->
            <view class="home-data u-f-ac u-f1 u-f-ajc ">
                <block v-for="(item, index) in homeData" :key="index">
                    <home-data :item="item" :index="index" :userid="homeInfo.id"></home-data>
                </block>
            </view>
            <!-- #endif -->

        </template>
        <!-- 广告banner -->
        <view class="home-ad-pic u-f-ajc">
            <image src="../../static/demo/demo20.jpg" mode="widthFix" lazy-load></image>
        </view>

        <!-- 选项列表*2 -->
        <view class="home-list">
            <block v-for="(item, index) in list" :key="index">
                <home-list-item :item="item" :index="index"></home-list-item>
            </block>

        </view>
    </view>
</template>

<script>
    import homeListItem from "../../components/home/home-list-item.vue";
    import homeInfo from "../../components/home/home-info.vue";
    import otherLogin from "../../components/home/other-login.vue";
    import homeData from "../../components/home/home-data.vue"
    export default {
        components: {
            homeListItem,
            homeInfo,
            otherLogin,
            homeData
        },
        methods: {
            openLogin() {
                uni.navigateTo({
                    url: "../login/login"
                })
            },

            async isLogin_func() {
                uni.showLoading({
                    title: '加载中',
                    mask: false
                });
                if(this.User.isUserInfoChange){
                    await this.User.getUserInfo(this.User.userinfo.id)
                    this.User.isUserInfoChange = false;
                }
              
                if (!this.User.token) {
                    this.isLogin = false;
                    this.homeInfo = {
                        userpic: "",
                        username: "",
                        totalnum: 0,
                        todaynum: 0,
                    };
                    this.homeData[0].num = 0;
                    this.homeData[1].num = 0;
                    this.homeData[2].num = 0;
                    this.homeData[3].num = 0;
                    return;
                }
                // 用户已登录
                this.homeInfo.id = this.User.userinfo.id;
                this.homeInfo.userPic = this.User.userinfo.userpic;
                this.homeInfo.userName = this.User.userinfo.username;
                this.homeInfo.totalVistor = this.User.counts.post_count || 0;
                this.homeInfo.todayVistor = this.User.counts.today_posts_count || 0;
                this.homeData[0].num = this.User.counts.post_count || 0;
                this.homeData[1].num = this.User.counts.comments_count || 0;
                this.homeData[2].num = this.User.counts.withfen_count || 0;
                this.isLogin = true;
               
               
                console.log("userpic")
                console.log(this.homeInfo.userPic)
                // uni.reLaunch({
                //     url:"/pages/me/me"
                // })
                uni.hideLoading()
            },
        },
        data() {
            return {
                isLogin: false,
                list: [{
                        name: "浏览历史",
                        icon: "liulan",
                        clickType: "nothing",
                        url: "/pages/user-history/user-history"
                    },
                    {
                        name: "实名认证",
                        icon: "huiyuanvip",
                        clickType: "tips",
                        url: ""
                    },
                    {
                        name: "设置",
                        icon: "keyboard",
                        clickType: "navigateTo",
                        url: "/pages/user-setting/user-setting",
                        auth: true,
                        Nocheck: true
                    },
                ],
                homeInfo: {
                    userPic: "",
                    userName: "",
                    totalVistor: 0,
                    todayVistor: 0
                },
                homeData: [{
                        name: "动态",
                        num: 0,
                        type:"latest"
                    },
                    {
                        name: "评论",
                        num: 0,
                        type:"comment"
                    },
                    {
                        name: "粉丝",
                        num: 0,
                        type:"fans"
                    }
                ]
            }
        },
        onNavigationBarButtonTap(e) {
            if (e.index == 0) {
                // this.User.navigate({
                //      url:"../user-setting/user-setting"
                //  });
                uni.navigateTo({
                    url: "../user-setting/user-setting"
                })
            }
        },
        onShow() {
            this.isLogin_func()
            console.log(this.User.userinfo)
            console.log(this.homeInfo)
            console.log(this.homeData)

        },
        // onLoad() {
        //     this.isLogin_func()
        // }
    }
</script>

<style>
    .home-ad-pic {

        padding: 20upx 20upx;

    }

    .home-ad-pic>image {
        width: 100%;
        border-radius: 20upx;
    }

    .home-list {
        padding: 20upx 20upx;

    }

    .home-data {

        padding: 20upx 80upx;
    }

    .home-data>view {

        color: #989898;
    }

    .home-data>view>view {

        font-size: 36upx;
        color: #000000 !important;
        font-weight: bold;
    }
</style>
