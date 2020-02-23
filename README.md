# uniapp-demo
uni-app demo
使用uni-app 构建一个 社区综合类 app

**课程地址 [uni-app实战社区交友类app开发](https://study.163.com/course/introduction.htm?courseId=1209188809#/courseDetail?tab=1)**

**uni-app官方文档 [官方文档](https://uniapp.dcloud.io/)**

本项目后端 [后端](https://github.com/AaronFang123/uni-app-demo-backend)

**注意：本工程参考了课程源码，仓库仅作为个人资料学习备份用**

## 实现

* [x] H5

* [x] APP Android

  > 某些页面渲染仍然具有问题（登录后返回“我的”页面时）

* [x] 微信小程序

  > 针对小程序平台的特点使用条件编译能力重新设置了一些样式

* [ ] 其他小程序平台

## 目录结构

```
DEMO/
├─common				// 公共配置：配置文件、函数、公共样式
├─components			// 组件
│  ├─bkhumor-emoji
│  ├─colorui
│  │  └─components
│  ├─common
│  ├─detail
│  ├─home
│  ├─index
│  ├─mpvue-citypicker
│  │  └─city-data
│  ├─news
│  ├─paper
│  ├─topic
│  ├─uni-badge
│  ├─uni-collapse
│  ├─uni-collapse-item
│  ├─uni-icon
│  ├─uni-icons
│  ├─uni-list
│  ├─uni-list-item
│  ├─uni-nav-bar
│  ├─uni-popup
│  ├─uni-status-bar
│  ├─user-chat
│  ├─user-list
│  └─user-space
├─pages					//页面
│  ├─addINput				// 发布页面
│  ├─detail					// 动态详情页面
│  ├─index					// 首页
│  ├─login					// 登录页面
│  ├─me						// ”我的”页面
│  ├─news					// （好友）动态页面
│  ├─paper					// 聊天页面（小纸条）
│  ├─search					// 搜索页面
│  ├─topic-detail			// 话题详情页
│  ├─topic-nav				// 话题导航页
│  ├─user-bind-phone		// 设置-绑定手机页
│  ├─user-chat				// 聊天页面-对话
│  ├─user-history			// 浏览历史页
│  ├─user-list				// 好友列表
│  ├─user-safe				// 账户安全页
│  ├─user-set-about			// “关于”页
│  ├─user-set-password		// 密码设置页
│  ├─user-setting			// 设置页
│  ├─user-setting-email		// 设置-绑定邮箱页
│  ├─user-setting-help		// 设置-帮助页
│  ├─user-setting-userinfo  // 用户资料设置页
│  └─user-space				// 个人空间页
├─static				//静态资源
│  ├─bgimg
│  ├─bkhumor-emoji
│  ├─common
│  ├─demo
│  ├─font
│  └─tabBar
└─unpackage

```

## 使用方法

1. `git clone https://github.com/AaronFang123/uniapp-demo.git `

   或下载项目

2. 使用HBuiderX 或VSCode等编辑器打开所在目录

   > 使用Hbuilder可以使用内置浏览器预览H5，运行到手机等操作

3. 在`/common`文件夹下新建文件`config.js`

   ```
   export default {
   	// api请求前缀
   	webUrl:'http://xxx.yyy.com/',
       // 图片请求前缀
       picUrl:"http://xxx.yyy.com/",
       }
   ```

   > **使用后端Api文档和配置见课程源码或本项目 [后端](https://github.com/AaronFang123/uni-app-demo-backend)**

4. 从uniapp官方拷贝`manifest.json`并自行进行相关配置

## 展示
![首页](https://raw.githubusercontent.com/AaronFang123/uniapp-demo/master/demo_pic/index.jpg)
![我的](https://raw.githubusercontent.com/AaronFang123/uniapp-demo/master/demo_pic/me.jpg)
![聊天](https://raw.githubusercontent.com/AaronFang123/uniapp-demo/master/demo_pic/chat.jpg)
![聊天](https://raw.githubusercontent.com/AaronFang123/uniapp-demo/master/demo_pic/news.jpg)
