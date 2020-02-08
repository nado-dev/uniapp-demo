(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user-chat/user-chat"],{

/***/ 79:
/*!***********************************************************************!*\
  !*** D:/uniapp/demo/main.js?{"page":"pages%2Fuser-chat%2Fuser-chat"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _userChat = _interopRequireDefault(__webpack_require__(/*! ./pages/user-chat/user-chat.vue */ 80));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_userChat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 80:
/*!****************************************************!*\
  !*** D:/uniapp/demo/pages/user-chat/user-chat.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_chat_vue_vue_type_template_id_693c646e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-chat.vue?vue&type=template&id=693c646e& */ 81);
/* harmony import */ var _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-chat.vue?vue&type=script&lang=js& */ 83);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs




/* normalize component */

var component = Object(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_chat_vue_vue_type_template_id_693c646e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_chat_vue_vue_type_template_id_693c646e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _user_chat_vue_vue_type_template_id_693c646e___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "uniapp/demo/pages/user-chat/user-chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/*!***********************************************************************************!*\
  !*** D:/uniapp/demo/pages/user-chat/user-chat.vue?vue&type=template&id=693c646e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_template_id_693c646e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-chat.vue?vue&type=template&id=693c646e& */ 82);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_template_id_693c646e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_template_id_693c646e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_template_id_693c646e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_template_id_693c646e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 82:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/user-chat/user-chat.vue?vue&type=template&id=693c646e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 83:
/*!*****************************************************************************!*\
  !*** D:/uniapp/demo/pages/user-chat/user-chat.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-chat.vue?vue&type=script&lang=js& */ 84);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 84:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/user-chat/user-chat.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





















var _time = _interopRequireDefault(__webpack_require__(/*! ../../common/time.js */ 85));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var userChatBottom = function userChatBottom() {return __webpack_require__.e(/*! import() | components/user-chat/user-chat-bottom */ "components/user-chat/user-chat-bottom").then(__webpack_require__.bind(null, /*! ../../components/user-chat/user-chat-bottom.vue */ 283));};var userChatList = function userChatList() {return __webpack_require__.e(/*! import() | components/user-chat/user-chat-list */ "components/user-chat/user-chat-list").then(__webpack_require__.bind(null, /*! ../../components/user-chat/user-chat-list.vue */ 290));};var _default =


{
  components: {
    userChatBottom: userChatBottom,
    userChatList: userChatList },

  data: function data() {
    return {
      list: [],
      style: {
        contentH: 0,
        itemH: 0,
        lastItemH: 0 },


      scrollTop: 0 };

  },
  //加载时就转化时间，更新formatedTime
  onLoad: function onLoad(e) {
    this.initdata(JSON.parse(e.chatData));
    this.getData();
    this.initData();
  },
  onReady: function onReady() {
    this.pageToButtom();
  },
  methods: {
    //func1初始化参数
    initData: function initData() {
      try {
        var res = uni.getSystemInfoSync();
        this.style.contentH = res.windowHeight - uni.upx2px(120);
      } catch (e) {
        //TODO handle the exception
        console.error("res request failed");
      }
    },
    submit: function submit(chatText) {
      console.log(chatText);
      //示例代码***********************************************************
      var nowtime = Math.round(new Date() / 1000);
      var newitem = {
        isMyMsg: true,
        userPic: "../../static/demo/userpic/15.jpg",
        type: "text",
        data: chatText,
        time: "1586262166", //时间戳：js默认10位，php：13位，转化要在最低三位补零
        formatedTime: _time.default.gettime.getChatTime(nowtime, this.list[this.list.length - 1].time) };

      this.list.push(newitem);

      //示例代码***********************************************************
      this.pageToButtom();
    },
    //func2滚动条置于底部
    pageToButtom: function pageToButtom() {var _this = this;
      var q = uni.createSelectorQuery();
      q.select('#scroll-view').boundingClientRect();
      q.selectAll('.user-chat-item').boundingClientRect();
      q.exec(function (res) {
        res[1].forEach(function (ret) {
          _this.style.itemH += ret.height;
        });

        if (_this.style.itemH > _this.style.contentH) {
          _this.scrollTop = _this.style.itemH;

        }

      });

    },
    //func3获取聊天数据
    getData: function getData() {
      //1服务端获取的数据
      //2示例数据******************************************************************
      var arr = [
      {
        isMyMsg: false,
        userPic: "../../static/demo/userpic/16.jpg",
        type: "text",
        data: "聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容",
        time: "1586262166" //时间戳：js默认10位，php：13位，转化要在最低三位补零
      },

      {
        isMyMsg: true,
        userPic: "../../static/demo/userpic/15.jpg",
        type: "img",
        data: "../../static/demo/datapic/34.jpg",
        time: "1586262166" //时间戳：js默认10位，php：13位，转化要在最低三位补零
      }];


      //2示例数据******************************************************************

      //3追加新属性formatedTime
      for (var i = 0; i < arr.length; i++) {
        if (i == 0) {
          arr[i].formatedTime = _time.default.gettime.getChatTime(arr[i].time, 0);
        } else
        {
          arr[i].formatedTime = _time.default.gettime.getChatTime(arr[i].time, arr[i - 1].time);
        }
        // console.log(arr[i].formatedTime)
      }
      //4更新list
      this.list = arr;
    },
    //func5初始化
    initdata: function initdata(obj) {
      //1、修改标题
      uni.setNavigationBarTitle({
        title: obj.userName });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ })

},[[79,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1jaGF0L3VzZXItY2hhdC52dWU/ZWI4YSIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1jaGF0L3VzZXItY2hhdC52dWU/N2QxZCIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1jaGF0L3VzZXItY2hhdC52dWU/ZGI3NiIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1jaGF0L3VzZXItY2hhdC52dWU/NWNjMyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1jaGF0L3VzZXItY2hhdC52dWUiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiLCJjb21wb25lbnRzIiwidXNlckNoYXRCb3R0b20iLCJ1c2VyQ2hhdExpc3QiLCJkYXRhIiwibGlzdCIsInN0eWxlIiwiY29udGVudEgiLCJpdGVtSCIsImxhc3RJdGVtSCIsInNjcm9sbFRvcCIsIm9uTG9hZCIsImUiLCJpbml0ZGF0YSIsIkpTT04iLCJwYXJzZSIsImNoYXREYXRhIiwiZ2V0RGF0YSIsImluaXREYXRhIiwib25SZWFkeSIsInBhZ2VUb0J1dHRvbSIsIm1ldGhvZHMiLCJyZXMiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd0hlaWdodCIsInVweDJweCIsImNvbnNvbGUiLCJlcnJvciIsInN1Ym1pdCIsImNoYXRUZXh0IiwibG9nIiwibm93dGltZSIsIk1hdGgiLCJyb3VuZCIsIkRhdGUiLCJuZXdpdGVtIiwiaXNNeU1zZyIsInVzZXJQaWMiLCJ0eXBlIiwidGltZSIsImZvcm1hdGVkVGltZSIsImdldHRpbWUiLCJnZXRDaGF0VGltZSIsImxlbmd0aCIsInB1c2giLCJxIiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInNlbGVjdEFsbCIsImV4ZWMiLCJmb3JFYWNoIiwicmV0IiwiaGVpZ2h0IiwiYXJyIiwiaSIsIm9iaiIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwidXNlck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUEsd0NBQW1COztBQUVuQjtBQUNBLHVHO0FBQ0FBLFVBQVUsQ0FBQ0MsaUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzSDtBQUN0SDtBQUM2RDtBQUNMOzs7QUFHeEQ7QUFDNEs7QUFDNUssZ0JBQWdCLHNMQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLG9GQUFNO0FBQ1IsRUFBRSw2RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3pDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBbXBCLENBQWdCLGdxQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNzQm5xQix3Rjs7O0FBR2U7QUFDWEMsWUFBVSxFQUFDO0FBQ1BDLGtCQUFjLEVBQWRBLGNBRE87QUFFUEMsZ0JBQVksRUFBWkEsWUFGTyxFQURBOztBQUtqQkMsTUFMaUIsa0JBS1Y7QUFDTixXQUFPO0FBQ01DLFVBQUksRUFBQyxFQURYO0FBRU1DLFdBQUssRUFBQztBQUNGQyxnQkFBUSxFQUFDLENBRFA7QUFFRkMsYUFBSyxFQUFDLENBRko7QUFHRkMsaUJBQVMsRUFBQyxDQUhSLEVBRlo7OztBQVFNQyxlQUFTLEVB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a0JBOztBQUVBO0FBQ0EsV0FBSyxJQUFJZ0IsQ0FBQyxHQUFDLENBQVgsRUFBYUEsQ0FBQyxHQUFDRCxHQUFHLENBQUNYLE1BQW5CLEVBQTBCWSxDQUFDLEVBQTNCLEVBQStCO0FBQzNCLFlBQUdBLENBQUMsSUFBRSxDQUFOLEVBQVE7QUFDSEQsYUFBRyxDQUFDQyxDQUFELENBQUgsQ0FBT2YsWUFBUCxHQUFzQkQsY0FBS0UsT0FBTCxDQUFhQyxXQUFiLENBQXlCWSxHQUFHLENBQUNDLENBQUQsQ0FBSCxDQUFPaEIsSUFBaEMsRUFBc0MsQ0FBdEMsQ0FBdEI7QUFDSixTQUZEO0FBR0k7QUFDQ2UsYUFBRyxDQUFDQyxDQUFELENBQUgsQ0FBT2YsWUFBUCxHQUFzQkQsY0FBS0UsT0FBTCxDQUFhQyxXQUFiLENBQXlCWSxHQUFHLENBQUNDLENBQUQsQ0FBSCxDQUFPaEIsSUFBaEMsRUFBc0NlLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFDLENBQUgsQ0FBSCxDQUFTaEIsSUFBL0MsQ0FBdEI7QUFDSjtBQUNBO0FBQ0o7QUFDRDtBQUNBLFdBQUtuQyxJQUFMLEdBQVVrRCxHQUFWO0FBQ0gsS0FsRkQ7QUFtRkE7QUFDQTFDLFlBcEZBLG9CQW9GUzRDLEdBcEZULEVBb0ZhO0FBQ1Y7QUFDQWxDLFNBQUcsQ0FBQ21DLHFCQUFKLENBQTBCO0FBQ3RCQyxhQUFLLEVBQUNGLEdBQUcsQ0FBQ0csUUFEWSxFQUExQjs7QUFHRixLQXpGRCxFQTFCUSxFIiwiZmlsZSI6InBhZ2VzL3VzZXItY2hhdC91c2VyLWNoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZScgICAgICAgICAgICBcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvdXNlci1jaGF0L3VzZXItY2hhdC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91c2VyLWNoYXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY5M2M2NDZlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdXNlci1jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXNlci1jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY5M2M2NDZlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY5M2M2NDZlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY5M2M2NDZlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi91c2VyLWNoYXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY5M2M2NDZlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY5M2M2NDZlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlhcHAvZGVtby9wYWdlcy91c2VyLWNoYXQvdXNlci1jaGF0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdXNlci1jaGF0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTNjNjQ2ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3VzZXItY2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdXNlci1jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbiAgICBcbiAgICBpbXBvcnQgdXNlckNoYXRCb3R0b20gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91c2VyLWNoYXQvdXNlci1jaGF0LWJvdHRvbS52dWUnO1xuICAgIGltcG9ydCB0aW1lIGZyb20gXCIuLi8uLi9jb21tb24vdGltZS5qc1wiO1xuICAgIGltcG9ydCB1c2VyQ2hhdExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlci1jaGF0L3VzZXItY2hhdC1saXN0LnZ1ZVwiXG5cdFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czp7XG4gICAgICAgICAgICB1c2VyQ2hhdEJvdHRvbSxcbiAgICAgICAgICAgIHVzZXJDaGF0TGlzdFxuICAgICAgICB9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpc3Q6W10sXG4gICAgICAgICAgICAgICAgc3R5bGU6e1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50SDowLFxuICAgICAgICAgICAgICAgICAgICBpdGVtSDowLFxuICAgICAgICAgICAgICAgICAgICBsYXN0SXRlbUg6MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6MCxcblx0XHRcdH1cblx0XHR9LFxuICAgICAgICAvL+WKoOi9veaXtuWwsei9rOWMluaXtumXtO+8jOabtOaWsGZvcm1hdGVkVGltZVxuICAgICAgICBvbkxvYWQoZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0ZGF0YShKU09OLnBhcnNlKGUuY2hhdERhdGEpKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xuICAgICAgICB9LFxuICAgICAgICBvblJlYWR5KCkge1xuICAgICAgICAgICAgdGhpcy5wYWdlVG9CdXR0b20oKTtcbiAgICAgICAgfSxcblx0XHRtZXRob2RzOiB7XG4gICAgICAgICAgICAvL2Z1bmMx5Yid5aeL5YyW5Y+C5pWwXG4gICAgICAgICAgICBpbml0RGF0YSgpe1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUuY29udGVudEggPSByZXMud2luZG93SGVpZ2h0IC0gdW5pLnVweDJweCgxMjApO1xuICAgICAgICAgICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPIGhhbmRsZSB0aGUgZXhjZXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZXMgcmVxdWVzdCBmYWlsZWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXHRcdFx0c3VibWl0KGNoYXRUZXh0KXsgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGF0VGV4dCk7XG4gICAgICAgICAgICAgICAgLy/npLrkvovku6PnoIEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgIGxldCBub3d0aW1lID0gTWF0aC5yb3VuZChuZXcgRGF0ZSgpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld2l0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTXlNc2c6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlclBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMTUuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6XCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6Y2hhdFRleHQsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6XCIxNTg2MjYyMTY2XCIgLC8v5pe26Ze05oiz77yaanPpu5jorqQxMOS9je+8jHBocO+8mjEz5L2N77yM6L2s5YyW6KaB5Zyo5pyA5L2O5LiJ5L2N6KGl6Zu2XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdGVkVGltZTp0aW1lLmdldHRpbWUuZ2V0Q2hhdFRpbWUobm93dGltZSwgdGhpcy5saXN0W3RoaXMubGlzdC5sZW5ndGgtMV0udGltZSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKG5ld2l0ZW0pO1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v56S65L6L5Luj56CBKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VUb0J1dHRvbSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAvL2Z1bmMy5rua5Yqo5p2h572u5LqO5bqV6YOoXG4gICAgICAgICAgICBwYWdlVG9CdXR0b20oKXtcbiAgICAgICAgICAgICAgIFx0bGV0IHE9dW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKTtcbiAgICAgICAgICAgICAgICBxLnNlbGVjdCgnI3Njcm9sbC12aWV3JykuYm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgcS5zZWxlY3RBbGwoJy51c2VyLWNoYXQtaXRlbScpLmJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIHEuZXhlYygocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXNbMV0uZm9yRWFjaCgocmV0KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHlsZS5pdGVtSCArPSByZXQuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdHlsZS5pdGVtSCA+IHRoaXMuc3R5bGUuY29udGVudEgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3A9dGhpcy5zdHlsZS5pdGVtSCA7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcdFx0XHRcdFx0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL2Z1bmMz6I635Y+W6IGK5aSp5pWw5o2uXG4gICAgICAgICAgIGdldERhdGEoKXtcbiAgICAgICAgICAgICAgIC8vMeacjeWKoeerr+iOt+WPlueahOaVsOaNrlxuICAgICAgICAgICAgICAgLy8y56S65L6L5pWw5o2uKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICBsZXQgYXJyPVtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzTXlNc2c6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzE2LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOlwi6IGK5aSp5YaF5a656IGK5aSp5YaF5a656IGK5aSp5YaF5a656IGK5aSp5YaF5a656IGK5aSp5YaF5a656IGK5aSp5YaF5a656IGK5aSp5YaF5a656IGK5aSp5YaF5a656IGK5aSp5YaF5a656IGK5aSp5YaF5a656IGK5aSp5YaF5a65XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6XCIxNTg2MjYyMTY2XCIgLy/ml7bpl7TmiLPvvJpqc+m7mOiupDEw5L2N77yMcGhw77yaMTPkvY3vvIzovazljJbopoHlnKjmnIDkvY7kuInkvY3ooaXpm7ZcbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNeU1zZzp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyUGljOlwiLi4vLi4vc3RhdGljL2RlbW8vdXNlcnBpYy8xNS5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcImltZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOlwiLi4vLi4vc3RhdGljL2RlbW8vZGF0YXBpYy8zNC5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTpcIjE1ODYyNjIxNjZcIiAvL+aXtumXtOaIs++8mmpz6buY6K6kMTDkvY3vvIxwaHDvvJoxM+S9je+8jOi9rOWMluimgeWcqOacgOS9juS4ieS9jeihpembtlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgLy8y56S65L6L5pWw5o2uKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgLy8z6L+95Yqg5paw5bGe5oCnZm9ybWF0ZWRUaW1lXG4gICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7aTxhcnIubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgICAgICAgIGlmKGk9PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldLmZvcm1hdGVkVGltZSA9IHRpbWUuZ2V0dGltZS5nZXRDaGF0VGltZShhcnJbaV0udGltZSwgMCk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0uZm9ybWF0ZWRUaW1lID0gdGltZS5nZXR0aW1lLmdldENoYXRUaW1lKGFycltpXS50aW1lLCBhcnJbaS0xXS50aW1lKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFycltpXS5mb3JtYXRlZFRpbWUpXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAvLzTmm7TmlrBsaXN0XG4gICAgICAgICAgICAgICB0aGlzLmxpc3Q9YXJyO1xuICAgICAgICAgICB9LFxuICAgICAgICAgICAvL2Z1bmM15Yid5aeL5YyWXG4gICAgICAgICAgIGluaXRkYXRhKG9iail7XG4gICAgICAgICAgICAgIC8vMeOAgeS/ruaUueagh+mimFxuICAgICAgICAgICAgICB1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOm9iai51c2VyTmFtZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgfVxuXHRcdH1cblx0fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==