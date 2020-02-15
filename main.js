import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

// 挂载全局方法
// 已经挂在的在其他vue文件内使用this.[name]调用即可
import config from "./common/config.js"
Vue.prototype.config = config
import lib from './common/lib.js'
Vue.prototype.lib = lib
import User from "./common/user.js"
Vue.prototype.User = User

import request from "./common/request.js"
Vue.prototype.$http = request


const app = new Vue({
    ...App,
    config,
    lib,
    User,
})
app.$mount()
