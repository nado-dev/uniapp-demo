(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/detail/detail"],{

/***/ 88:
/*!*****************************************************************!*\
  !*** D:/uniapp/demo/main.js?{"page":"pages%2Fdetail%2Fdetail"} ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/detail/detail.vue */ 89));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 89:
/*!**********************************************!*\
  !*** D:/uniapp/demo/pages/detail/detail.vue ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_3da820d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=3da820d0& */ 90);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 92);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&lang=css& */ 94);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_3da820d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_3da820d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _detail_vue_vue_type_template_id_3da820d0___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "uniapp/demo/pages/detail/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 90:
/*!*****************************************************************************!*\
  !*** D:/uniapp/demo/pages/detail/detail.vue?vue&type=template&id=3da820d0& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3da820d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=3da820d0& */ 91);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3da820d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3da820d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3da820d0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3da820d0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 91:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/detail/detail.vue?vue&type=template&id=3da820d0& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 92:
/*!***********************************************************************!*\
  !*** D:/uniapp/demo/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 93);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 93:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



























var _time = _interopRequireDefault(__webpack_require__(/*! ../../common/time.js */ 87));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var detailInfo = function detailInfo() {return __webpack_require__.e(/*! import() | components/detail/detail-info */ "components/detail/detail-info").then(__webpack_require__.bind(null, /*! ../../components/detail/detail-info.vue */ 315));};var commentList = function commentList() {return __webpack_require__.e(/*! import() | components/detail/comment-list */ "components/detail/comment-list").then(__webpack_require__.bind(null, /*! ../../components/detail/comment-list.vue */ 322));};var userChatBottom = function userChatBottom() {return __webpack_require__.e(/*! import() | components/user-chat/user-chat-bottom */ "components/user-chat/user-chat-bottom").then(__webpack_require__.bind(null, /*! ../../components/user-chat/user-chat-bottom.vue */ 301));};var moreShare = function moreShare() {return Promise.all(/*! import() | components/common/more-share */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/common/more-share")]).then(__webpack_require__.bind(null, /*! ../../components/common/more-share.vue */ 329));};var _default =



{
  components: {
    detailInfo: detailInfo,
    commentList: commentList,
    userChatBottom: userChatBottom,
    moreShare: moreShare },

  data: function data() {
    return {
      isShareShow: false, //分享栏是否出现
      comment: {
        commentCount: 23,
        list: [],
        loginUserInfo: {} },

      //图文样式 PicTextStyle:true,
      detail: {
        userPic: "../../static/demo/userpic/10.jpg",
        userName: "31K4t3k",
        gender: 1, //0:女 1:男
        age: 25,
        isFollow: false,
        title: "...轻轻呼唤你的名字",
        titlePic: "../../static/demo/datapic/13.jpg",
        morePic: ["../../static/demo/datapic/13.jpg",
        "../../static/demo/datapic/15.jpg",
        "../../static/demo/datapic/12.jpg"],
        textStyle: false,
        PicTextStyle: true,
        videoStyle: false,
        shareStyle: false,
        location: "PekingU",
        shareNum: 3498,
        commentNum: 3456,
        likeNum: 345 } };


  },
  methods: {
    //初始化
    initdata: function initdata(obj) {
      // 获取登陆用户信息
      this.loginUserInfo = obj;
      //1、修改标题
      uni.setNavigationBarTitle({
        title: obj.title });

    },
    //获取评论
    getComment: function getComment() {
      var arr = [
      //fatherReplyId：指示评论父级id
      //commentId:评论标识号

      //一级评论
      {
        commentId: 1,
        fatherReplyId: 0,
        userPic: "../../static/demo/userpic/1.jpg",
        userName: "ATM",
        time: "1580908445",
        content: "我已经。没有办法相信红名了。" },


      //二级评论
      {
        commentId: 2,
        fatherReplyId: 1,
        userPic: "../../static/demo/userpic/1.jpg",
        userName: "ATM",
        time: "1580908445",
        content: "我已经。没有办法相信红名了。" },


      //三级评论
      {
        commentId: 3,
        fatherReplyId: 2,
        userPic: "../../static/demo/userpic/1.jpg",
        userName: "ATM",
        time: "1580908445",
        content: "我已经。没有办法相信红名了。" }];




      for (var i = 0; i < arr.length; i++) {
        arr[i].time = _time.default.gettime.gettime(arr[i].time);
      }
      // alert("go")
      this.comment.list = arr;
    },
    //提交评论
    submit: function submit(data) {
      var obj = {
        commentId: 1,
        fatherReplyId: 0,
        userPic: this.loginUserInfo.userPic,
        userName: "new" + this.loginUserInfo.userName,
        time: _time.default.gettime.gettime(new Date().getTime()),
        content: data };

      this.comment.list.push(obj);
      console.log(data);
    },
    //分享
    togle: function togle() {
      this.isShareShow = !this.isShareShow;
    } },


  onLoad: function onLoad(e) {
    this.initdata(JSON.parse(e.detailData));
    //加载评论
    this.getComment();
  },
  //监听导航栏右边按钮
  onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {
    if (e.index == 0) {
      this.togle();
    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 94:
/*!*******************************************************************************!*\
  !*** D:/uniapp/demo/pages/detail/detail.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&lang=css& */ 95);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 95:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/detail/detail.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[88,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvZGV0YWlsL2RldGFpbC52dWU/ZTdmNyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvZGV0YWlsL2RldGFpbC52dWU/YmY4ZiIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvZGV0YWlsL2RldGFpbC52dWU/ZTg1ZCIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvZGV0YWlsL2RldGFpbC52dWU/YmQ1MiIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvZGV0YWlsL2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC9kZW1vL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlPzBlMTkiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC9kZW1vL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlPzAxMjIiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiLCJjb21wb25lbnRzIiwiZGV0YWlsSW5mbyIsImNvbW1lbnRMaXN0IiwidXNlckNoYXRCb3R0b20iLCJtb3JlU2hhcmUiLCJkYXRhIiwiaXNTaGFyZVNob3ciLCJjb21tZW50IiwiY29tbWVudENvdW50IiwibGlzdCIsImxvZ2luVXNlckluZm8iLCJkZXRhaWwiLCJ1c2VyUGljIiwidXNlck5hbWUiLCJnZW5kZXIiLCJhZ2UiLCJpc0ZvbGxvdyIsInRpdGxlIiwidGl0bGVQaWMiLCJtb3JlUGljIiwidGV4dFN0eWxlIiwiUGljVGV4dFN0eWxlIiwidmlkZW9TdHlsZSIsInNoYXJlU3R5bGUiLCJsb2NhdGlvbiIsInNoYXJlTnVtIiwiY29tbWVudE51bSIsImxpa2VOdW0iLCJtZXRob2RzIiwiaW5pdGRhdGEiLCJvYmoiLCJ1bmkiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJnZXRDb21tZW50IiwiYXJyIiwiY29tbWVudElkIiwiZmF0aGVyUmVwbHlJZCIsInRpbWUiLCJjb250ZW50IiwiaSIsImxlbmd0aCIsImdldHRpbWUiLCJzdWJtaXQiLCJEYXRlIiwiZ2V0VGltZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwidG9nbGUiLCJvbkxvYWQiLCJlIiwiSlNPTiIsInBhcnNlIiwiZGV0YWlsRGF0YSIsIm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBLHdDQUFtQjs7QUFFbkI7QUFDQSwrRjtBQUNBQSxVQUFVLENBQUNDLGVBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1IO0FBQ25IO0FBQzBEO0FBQ0w7QUFDYTs7O0FBR2xFO0FBQzRLO0FBQzVLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUMxQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQWdwQixDQUFnQiw2cEJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNEJocUIsd0Y7Ozs7QUFJWTtBQUNSQyxZQUFVLEVBQUM7QUFDUEMsY0FBVSxFQUFWQSxVQURPO0FBRVBDLGVBQVcsRUFBWEEsV0FGTztBQUdQQyxrQkFBYyxFQUFkQSxjQUhPO0FBSVBDLGFBQVMsRUFBVEEsU0FKTyxFQURIOztBQU9kQyxNQVBjLGtCQU9Q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LEVBQUNqQyxJQU5ILEVBQVQ7O0FBUUEsV0FBS0UsT0FBTCxDQUFhRSxJQUFiLENBQWtCb0MsSUFBbEIsQ0FBdUJmLEdBQXZCO0FBQ0FnQixhQUFPLENBQUNDLEdBQVIsQ0FBWTFDLElBQVo7QUFDSCxLQWxFRjtBQW1FQztBQUNBMkMsU0FwRUQsbUJBb0VRO0FBQ0gsV0FBSzFDLFdBQUwsR0FBbUIsQ0FBQyxLQUFLQSxXQUF6QjtBQUNILEtBdEVGLEVBdENLOzs7QUErR1IyQyxRQS9HUSxrQkErR0RDLENBL0dDLEVBK0dFO0FBQ04sU0FBS3JCLFFBQUwsQ0FBY3NCLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixDQUFDLENBQUNHLFVBQWIsQ0FBZDtBQUNBO0FBQ0EsU0FBS3BCLFVBQUw7QUFDSCxHQW5ITztBQW9IUjtBQUNBcUIsMEJBckhRLG9DQXFIaUJKLENBckhqQixFQXFIb0I7QUFDeEIsUUFBR0EsQ0FBQyxDQUFDSyxLQUFGLElBQVcsQ0FBZCxFQUFnQjtBQUNaLFdBQUtQLEtBQUw7QUFDSDtBQUNKLEdBekhPLEU7Ozs7Ozs7Ozs7Ozs7QUNoQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQWs3QixDQUFnQixpNkJBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F0OEIsdUMiLCJmaWxlIjoicGFnZXMvZGV0YWlsL2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJyAgICAgICAgICAgIFxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2RhODIwZDAmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNkYTgyMGQwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNkYTgyMGQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNkYTgyMGQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNkYTgyMGQwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNkYTgyMGQwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlhcHAvZGVtby9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZGE4MjBkMCZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG4gICAgaW1wb3J0IGRldGFpbEluZm8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZGV0YWlsL2RldGFpbC1pbmZvLnZ1ZVwiO1xuICAgIGltcG9ydCB0aW1lIGZyb20gXCIuLi8uLi9jb21tb24vdGltZS5qc1wiO1xuICAgIGltcG9ydCBjb21tZW50TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9kZXRhaWwvY29tbWVudC1saXN0LnZ1ZVwiO1xuICAgIGltcG9ydCB1c2VyQ2hhdEJvdHRvbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXItY2hhdC91c2VyLWNoYXQtYm90dG9tLnZ1ZSc7XG4gICAgaW1wb3J0IG1vcmVTaGFyZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vbW9yZS1zaGFyZS52dWVcIlxuXHRleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6e1xuICAgICAgICAgICAgZGV0YWlsSW5mbyxcbiAgICAgICAgICAgIGNvbW1lbnRMaXN0LFxuICAgICAgICAgICAgdXNlckNoYXRCb3R0b20sXG4gICAgICAgICAgICBtb3JlU2hhcmVcbiAgICAgICAgfSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc1NoYXJlU2hvdyA6IGZhbHNlICwvL+WIhuS6q+agj+aYr+WQpuWHuueOsFxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6e1xuICAgICAgICAgICAgICAgICAgICBjb21tZW50Q291bnQ6MjMsXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6W10sXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luVXNlckluZm86e31cbiAgICAgICAgICAgICAgICB9LFxuXHRcdFx0XHQvL+WbvuaWh+agt+W8jyBQaWNUZXh0U3R5bGU6dHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOntcblx0XHRcdFx0ICAgIHVzZXJQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzEwLmpwZ1wiLFxuXHRcdFx0XHQgICAgdXNlck5hbWU6XCIzMUs0dDNrXCIsXG5cdFx0XHRcdCAgICBnZW5kZXI6MSwvLzA65aWzIDE655S3XG5cdFx0XHRcdCAgICBhZ2U6MjUsXG5cdFx0XHRcdCAgICBpc0ZvbGxvdzpmYWxzZSxcblx0XHRcdFx0ICAgIHRpdGxlOlwiLi4u6L276L275ZG85ZSk5L2g55qE5ZCN5a2XXCIsXG5cdFx0XHRcdCAgICB0aXRsZVBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL2RhdGFwaWMvMTMuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vcmVQaWM6W1wiLi4vLi4vc3RhdGljL2RlbW8vZGF0YXBpYy8xMy5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuLi8uLi9zdGF0aWMvZGVtby9kYXRhcGljLzE1LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi4uLy4uL3N0YXRpYy9kZW1vL2RhdGFwaWMvMTIuanBnXCJdLFxuXHRcdFx0XHQgICAgdGV4dFN0eWxlOmZhbHNlLFxuXHRcdFx0XHQgICAgUGljVGV4dFN0eWxlOnRydWUsXG5cdFx0XHRcdCAgICB2aWRlb1N0eWxlOmZhbHNlLFxuXHRcdFx0XHQgICAgc2hhcmVTdHlsZTpmYWxzZSxcblx0XHRcdFx0ICAgIGxvY2F0aW9uOlwiUGVraW5nVVwiLFxuXHRcdFx0XHQgICAgc2hhcmVOdW06MzQ5OCxcblx0XHRcdFx0ICAgIGNvbW1lbnROdW06MzQ1Nixcblx0XHRcdFx0ICAgIGxpa2VOdW06MzQ1LFxuXHRcdFx0XHR9LFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Ly/liJ3lp4vljJZcbiAgICAgICAgICAgIGluaXRkYXRhKG9iail7XG4gICAgICAgICAgICAgICAgLy8g6I635Y+W55m76ZmG55So5oi35L+h5oGvXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpblVzZXJJbmZvID0gb2JqXG4gICAgICAgICAgICAgICAvLzHjgIHkv67mlLnmoIfpophcbiAgICAgICAgICAgICAgIHVuaS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgICAgIHRpdGxlOm9iai50aXRsZVxuICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/ojrflj5bor4TorrpcbiAgICAgICAgICAgIGdldENvbW1lbnQoKXtcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9mYXRoZXJSZXBseUlk77ya5oyH56S66K+E6K6654i257qnaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29tbWVudElkOuivhOiuuuagh+ivhuWPt1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+S4gOe6p+ivhOiuulxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZDoxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhdGhlclJlcGx5SWQ6MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyUGljOlwiLi4vLi4vc3RhdGljL2RlbW8vdXNlcnBpYy8xLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOlwiQVRNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTpcIjE1ODA5MDg0NDVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Olwi5oiR5bey57uP44CC5rKh5pyJ5Yqe5rOV55u45L+h57qi5ZCN5LqG44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy/kuoznuqfor4TorrpcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50SWQ6MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXRoZXJSZXBseUlkOjEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMS5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTpcIkFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6XCIxNTgwOTA4NDQ1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIuaIkeW3sue7j+OAguayoeacieWKnuazleebuOS/oee6ouWQjeS6huOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5LiJ57qn6K+E6K66XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudElkOjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmF0aGVyUmVwbHlJZDoyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzEuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOlwiMTU4MDkwODQ0NVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCLmiJHlt7Lnu4/jgILmsqHmnInlip7ms5Xnm7jkv6HnuqLlkI3kuobjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTAgO2k8YXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0udGltZSA9IHRpbWUuZ2V0dGltZS5nZXR0aW1lKGFycltpXS50aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBhbGVydChcImdvXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudC5saXN0ID0gYXJyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5o+Q5Lqk6K+E6K66XG4gICAgICAgICAgICBzdWJtaXQoZGF0YSl7XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9e1xuICAgICAgICAgICAgICAgICAgICBjb21tZW50SWQ6MSxcbiAgICAgICAgICAgICAgICAgICAgZmF0aGVyUmVwbHlJZDowLFxuICAgICAgICAgICAgICAgICAgICB1c2VyUGljOnRoaXMubG9naW5Vc2VySW5mby51c2VyUGljLFxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTpcIm5ld1wiK3RoaXMubG9naW5Vc2VySW5mby51c2VyTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGltZTp0aW1lLmdldHRpbWUuZ2V0dGltZShuZXcgRGF0ZSgpLmdldFRpbWUoKSksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ZGF0YSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50Lmxpc3QucHVzaChvYmopXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+WIhuS6q1xuICAgICAgICAgICAgdG9nbGUoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hhcmVTaG93ID0gIXRoaXMuaXNTaGFyZVNob3cgO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgXG5cdFx0fSxcbiAgICAgICAgb25Mb2FkKGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGRhdGEoSlNPTi5wYXJzZShlLmRldGFpbERhdGEpKTtcbiAgICAgICAgICAgIC8v5Yqg6L296K+E6K66XG4gICAgICAgICAgICB0aGlzLmdldENvbW1lbnQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy/nm5HlkKzlr7zoiKrmoI/lj7PovrnmjInpkq5cbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKGUpIHtcbiAgICAgICAgICAgIGlmKGUuaW5kZXggPT0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cdH1cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=