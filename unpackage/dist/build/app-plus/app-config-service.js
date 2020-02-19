
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/me/me","pages/paper/paper","pages/news/news","pages/search/search","pages/addINput/addINput","pages/topic-nav/topic-nav","pages/topic-detail/topic-detail","pages/user-list/user-list","pages/user-chat/user-chat","pages/detail/detail","pages/user-setting/user-setting","pages/user-set-password/user-set-password","pages/user-setting-email/user-setting-email","pages/user-setting-userinfo/user-setting-userinfo","pages/user-setting-help/user-setting-help","pages/user-set-about/user-set-about","pages/login/login","pages/user-space/user-space","pages/user-bind-phone/user-bind-phone","pages/user-safe/user-safe","pages/user-history/user-history"],"window":{"transparentTitle":"none","navigationBarTitleText":"demo","navigationBarBackgroundColor":"#009687","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#B5B5B5","selectedColor":"#009687","borderStyle":"black","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/index/index","text":"世界","iconPath":"static/tabBar/index.png","selectedIconPath":"static/tabBar/index1.png"},{"pagePath":"pages/news/news","text":"动态","iconPath":"static/tabBar/news.png","selectedIconPath":"static/tabBar/news1.png"},{"pagePath":"pages/paper/paper","text":"消息","iconPath":"static/tabBar/message.png","selectedIconPath":"static/tabBar/msg1.png"},{"pagePath":"pages/me/me","text":"我的","iconPath":"static/tabBar/me.png","selectedIconPath":"static/tabBar/me1.png"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Demo","compilerVersion":"2.5.1","entryPagePath":"pages/index/index","networkTimeout":{"request":6000,"connectSocket":6000,"uploadFile":6000,"downloadFile":6000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"scrollIndicator":"none","bounce":"vertical","titleNView":{"searchInput":{"align":"center","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"(=ﾟωﾟ)=","disabled":true},"buttons":[{"color":"#FFFFFF","colorPressed":"#BBBBBB","float":"left","fontSize":"24px","fontSrc":"/static/font/icon.ttf","text":""},{"color":"#FFFFFF","colorPressed":"#BBBBBB","float":"right","fontSize":"24px","fontSrc":"/static/font/icon.ttf","text":""}]}}},{"path":"/pages/me/me","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","scrollIndicator":"none","titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/pages/paper/paper","meta":{"isQuit":true,"isTabBar":true},"window":{"backgroundColor":"#EEEEEE","enablePullDownRefresh":true,"navigationBarTitleText":"消息","titleNView":{"buttons":[{"color":"#FFFFFF","colorPressed":"#BBBBBB","float":"left","fontSize":"24px","fontSrc":"/static/font/icon.ttf","text":""},{"color":"#FFFFFF","colorPressed":"#BBBBBB","float":"right","fontSize":"24px","fontSrc":"/static/font/icon.ttf","text":""}]}}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"动态","titleNView":false,"bounce":"vertical"}},{"path":"/pages/search/search","meta":{},"window":{"enablePullDownRefresh":true,"scrollIndicator":"none","titleNView":{"autoBackButton":false,"searchInput":{"align":"left","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"(=ﾟωﾟ)=","disabled":false}}}},{"path":"/pages/addINput/addINput","meta":{},"window":{"animationType":"slide-in-bottom","animationDuration":200,"scrollIndicator":"none","titleNView":false}},{"path":"/pages/topic-nav/topic-nav","meta":{},"window":{"navigationBarTitleText":"话题分类","bounce":"vertical"}},{"path":"/pages/topic-detail/topic-detail","meta":{},"window":{"navigationBarTitleText":"话题详情","enablePullDownRefresh":true,"animationType":"slide-in-bottom","scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/user-list/user-list","meta":{},"window":{"navigationBarTitleText":"我的好友","animationType":"slide-in-left","scrollIndicator":"none","titleNView":{"autoBackButton":false,"searchInput":{"disabled":true,"align":"left","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"搜索用户(=ﾟωﾟ)="}}}},{"path":"/pages/user-chat/user-chat","meta":{},"window":{"navigationBarTitleText":"聊天页面","titleNView":{"buttons":[{"color":"#FFFFFF","colorPressed":"#BBBBBB","float":"right","fontSize":"24px","fontSrc":"/static/font/icon.ttf","text":""}]}}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"内容页","scrollIndicator":"none","titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/pages/user-setting/user-setting","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/user-set-password/user-set-password","meta":{},"window":{"navigationBarTitleText":"修改密码"}},{"path":"/pages/user-setting-email/user-setting-email","meta":{},"window":{"navigationBarTitleText":"绑定邮箱"}},{"path":"/pages/user-setting-userinfo/user-setting-userinfo","meta":{},"window":{"navigationBarTitleText":"修改资料"}},{"path":"/pages/user-setting-help/user-setting-help","meta":{},"window":{"navigationBarTitleText":"意见反馈"}},{"path":"/pages/user-set-about/user-set-about","meta":{},"window":{"navigationBarTitleText":"关于"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/user-space/user-space","meta":{},"window":{"navigationBarTitleText":"个人空间","scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/user-bind-phone/user-bind-phone","meta":{},"window":{"navigationBarTitleText":"绑定手机"}},{"path":"/pages/user-safe/user-safe","meta":{},"window":{"navigationBarTitleText":"账号与安全"}},{"path":"/pages/user-history/user-history","meta":{},"window":{"navigationBarTitleText":"浏览历史","titleNView":{"buttons":[{"type":"close"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});
