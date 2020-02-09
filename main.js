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

const app = new Vue({
    ...App,
    config,
    lib
})
app.$mount()
