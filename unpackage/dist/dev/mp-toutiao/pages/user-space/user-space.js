(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user-space/user-space"],{

/***/ 152:
/*!*************************************************************************!*\
  !*** D:/uniapp/demo/main.js?{"page":"pages%2Fuser-space%2Fuser-space"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _userSpace = _interopRequireDefault(__webpack_require__(/*! ./pages/user-space/user-space.vue */ 153));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_userSpace.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 153:
/*!******************************************************!*\
  !*** D:/uniapp/demo/pages/user-space/user-space.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_space_vue_vue_type_template_id_fdd0bc90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-space.vue?vue&type=template&id=fdd0bc90& */ 154);
/* harmony import */ var _user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-space.vue?vue&type=script&lang=js& */ 156);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _user_space_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-space.vue?vue&type=style&index=0&lang=css& */ 158);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_space_vue_vue_type_template_id_fdd0bc90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_space_vue_vue_type_template_id_fdd0bc90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _user_space_vue_vue_type_template_id_fdd0bc90___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "uniapp/demo/pages/user-space/user-space.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 154:
/*!*************************************************************************************!*\
  !*** D:/uniapp/demo/pages/user-space/user-space.vue?vue&type=template&id=fdd0bc90& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_template_id_fdd0bc90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-space.vue?vue&type=template&id=fdd0bc90& */ 155);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_template_id_fdd0bc90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_template_id_fdd0bc90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_template_id_fdd0bc90___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_template_id_fdd0bc90___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 155:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/user-space/user-space.vue?vue&type=template&id=fdd0bc90& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 156:
/*!*******************************************************************************!*\
  !*** D:/uniapp/demo/pages/user-space/user-space.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-space.vue?vue&type=script&lang=js& */ 157);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 157:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/user-space/user-space.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var loadMore = function loadMore() {return __webpack_require__.e(/*! import() | components/common/load-more */ "components/common/load-more").then(__webpack_require__.bind(null, /*! ../../components/common/load-more.vue */ 174));};var swiperTabHead = function swiperTabHead() {return __webpack_require__.e(/*! import() | components/index/swiper-tab-head */ "components/index/swiper-tab-head").then(__webpack_require__.bind(null, /*! ../../components/index/swiper-tab-head.vue */ 167));};var userSpaceHead = function userSpaceHead() {return __webpack_require__.e(/*! import() | components/user-space/user-space-head */ "components/user-space/user-space-head").then(__webpack_require__.bind(null, /*! ../../components/user-space/user-space-head.vue */ 367));};var userSpaceUserinfo = function userSpaceUserinfo() {return Promise.all(/*! import() | components/user-space/user-space-userinfo */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/user-space/user-space-userinfo")]).then(__webpack_require__.bind(null, /*! ../../components/user-space/user-space-userinfo.vue */ 374));};var commonList = function commonList() {return __webpack_require__.e(/*! import() | components/common/common-list */ "components/common/common-list").then(__webpack_require__.bind(null, /*! ../../components/common/common-list.vue */ 235));};var homeData = function homeData() {return __webpack_require__.e(/*! import() | components/home/home-data */ "components/home/home-data").then(__webpack_require__.bind(null, /*! ../../components/home/home-data.vue */ 207));};var userSpacePopup = function userSpacePopup() {return __webpack_require__.e(/*! import() | components/user-space/user-space-popup */ "components/user-space/user-space-popup").then(__webpack_require__.bind(null, /*! ../../components/user-space/user-space-popup.vue */ 381));};var _default =














































{
  components: {
    userSpaceHead: userSpaceHead,
    homeData: homeData,
    swiperTabHead: swiperTabHead,
    userSpaceUserinfo: userSpaceUserinfo,
    commonList: commonList,
    loadMore: loadMore,
    userSpacePopup: userSpacePopup },

  data: function data() {
    return {
      isPopupShow: false,
      tabIndex: 1,
      userInfo: {
        userPic: "../../static/ATMpic.jpg",
        userName: "ATM",
        gender: 0,
        age: 28,
        regtime: "2019-12-11",
        id: 12344,
        birthday: "1988-12-3",
        qinggan: "未设置",
        job: "未设置",
        location: "未设置",
        isFollow: true },

      spaceData: [
      { name: "获赞", num: "10k" },
      { name: "关注", num: '345' },
      { name: "粉丝", num: '5623' }],

      tabBars: [
      { name: "主页", id: "zhuye" },
      { name: "动态", id: "dongtai" }],


      loadText: "上拉加载更多",
      list: [
      // 纯文字样式 textStyle
      {
        userPic: "../../static/demo/userpic/10.jpg",
        userName: "ATM",
        gender: 0, //0:女 1:男
        age: 25,
        isFollow: false,
        title: "透明质酸钠",
        textStyle: true,
        PicTextStyle: false,
        videoStyle: false,
        shareStyle: false,
        shareNum: 3498,
        commentNum: 3456,
        likeNum: 345,
        location: "PekingU" },

      //图文样式 PicTextStyle:true,
      {
        userPic: "../../static/demo/userpic/10.jpg",
        userName: "31K473k",
        gender: 1, //0:女 1:男
        age: 25,
        isFollow: false,
        title: "...轻轻呼唤你的名字",
        titlePic: "../../static/demo/datapic/13.jpg",
        textStyle: false,
        PicTextStyle: true,
        videoStyle: false,
        shareStyle: false,
        location: "PekingU",
        shareNum: 3498,
        commentNum: 3456,
        likeNum: 345 },

      //视频样式
      {
        userPic: "../../static/demo/userpic/10.jpg",
        userName: "momo",
        gender: 0, //0:女 1:男
        age: 25,
        isFollow: false,
        title: "欢乐恶搞不是法外之地",
        titlePic: "../../static/demo/datapic/2.jpg",
        textStyle: false,
        PicTextStyle: false,
        videoStyle: {
          playNum: "34W",
          length: "3:51" },

        shareStyle: false,
        location: "PekingU",
        shareNum: 3498,
        commentNum: 3456,
        likeNum: 345 },

      //分享样式
      {
        userPic: "../../static/demo/userpic/10.jpg",
        userName: "ATM",
        gender: 1, //0:女 1:男
        age: 25,
        isFollow: false,
        title: "透明质酸钠",
        titlePic: "",
        textStyle: false,
        PicTextStyle: false,
        videoStyle: false,
        shareStyle: {
          shareTitle: "长笛",
          sharePic: "../../static/demo/datapic/2.jpg" },

        location: "PekingU",
        shareNum: 3498,
        commentNum: 3456,
        likeNum: 345 }] };



  },

  methods: {
    hidePopup: function hidePopup() {
      this.isPopupShow = false;
    },
    // 拉黑
    addBlackList: function addBlackList() {
      console.log("拉黑");
    },
    // 备注
    remark: function remark() {
      console.log("备注");
    },
    follow: function follow()
    {
      this.userInfo.isFollow != this.userInfo.isFollow;
    },
    tabSwitch: function tabSwitch(index) {
      this.tabIndex = index;
    },
    //上拉加载
    loadMore: function loadMore() {var _this = this;
      if (this.loadText != "上拉加载更多") {
        return; //如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
      }
      this.loadText = "加载中(＾o＾)ﾉ";
      //修改状态
      setTimeout(function () {
        //示例:加载2000ms后从服务端获取了新的数据
        var obj = {
          //视频样式          
          userPic: "../../static/demo/userpic/10.jpg",
          userName: "ATM",
          gender: 0, //0:女 1:男
          age: 25,
          isFollow: false,
          title: "透明质酸钠",
          titlePic: "../../static/demo/datapic/2.jpg",
          textStyle: false,
          PicTextStyle: false,
          videoStyle: {
            playNum: "34W",
            length: "3:51" },

          shareStyle: false,
          location: "PekingU",
          shareNum: 3498,
          commentNum: 3456,
          likeNum: 345 };


        _this.list.push(obj); //追加

        _this.loadText = "上拉加载更多"; //复原状态              
      }, 1000);

      //this.tablist[this.tabIndex] .loadText = "没有更多数据";

    } },

  onReachBottom: function onReachBottom() {
    //上拉加载
    this.loadMore();
  },
  onNavigationBarButtonTap: function onNavigationBarButtonTap() {
    this.isPopupShow = true;
  } };exports.default = _default;

/***/ }),

/***/ 158:
/*!***************************************************************************************!*\
  !*** D:/uniapp/demo/pages/user-space/user-space.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-space.vue?vue&type=style&index=0&lang=css& */ 159);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 159:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/user-space/user-space.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[152,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1zcGFjZS91c2VyLXNwYWNlLnZ1ZT8xNzNhIiwid2VicGFjazovLy9EOi91bmlhcHAvZGVtby9wYWdlcy91c2VyLXNwYWNlL3VzZXItc3BhY2UudnVlP2U5ZTciLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC9kZW1vL3BhZ2VzL3VzZXItc3BhY2UvdXNlci1zcGFjZS52dWU/M2RjYyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1zcGFjZS91c2VyLXNwYWNlLnZ1ZT80MjdhIiwid2VicGFjazovLy9EOi91bmlhcHAvZGVtby9wYWdlcy91c2VyLXNwYWNlL3VzZXItc3BhY2UudnVlIiwid2VicGFjazovLy9EOi91bmlhcHAvZGVtby9wYWdlcy91c2VyLXNwYWNlL3VzZXItc3BhY2UudnVlPzlmZmQiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC9kZW1vL3BhZ2VzL3VzZXItc3BhY2UvdXNlci1zcGFjZS52dWU/Yzk5OSJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSIsImNvbXBvbmVudHMiLCJ1c2VyU3BhY2VIZWFkIiwiaG9tZURhdGEiLCJzd2lwZXJUYWJIZWFkIiwidXNlclNwYWNlVXNlcmluZm8iLCJjb21tb25MaXN0IiwibG9hZE1vcmUiLCJ1c2VyU3BhY2VQb3B1cCIsImRhdGEiLCJpc1BvcHVwU2hvdyIsInRhYkluZGV4IiwidXNlckluZm8iLCJ1c2VyUGljIiwidXNlck5hbWUiLCJnZW5kZXIiLCJhZ2UiLCJyZWd0aW1lIiwiaWQiLCJiaXJ0aGRheSIsInFpbmdnYW4iLCJqb2IiLCJsb2NhdGlvbiIsImlzRm9sbG93Iiwic3BhY2VEYXRhIiwibmFtZSIsIm51bSIsInRhYkJhcnMiLCJsb2FkVGV4dCIsImxpc3QiLCJ0aXRsZSIsInRleHRTdHlsZSIsIlBpY1RleHRTdHlsZSIsInZpZGVvU3R5bGUiLCJzaGFyZVN0eWxlIiwic2hhcmVOdW0iLCJjb21tZW50TnVtIiwibGlrZU51bSIsInRpdGxlUGljIiwicGxheU51bSIsImxlbmd0aCIsInNoYXJlVGl0bGUiLCJzaGFyZVBpYyIsIm1ldGhvZHMiLCJoaWRlUG9wdXAiLCJhZGRCbGFja0xpc3QiLCJjb25zb2xlIiwibG9nIiwicmVtYXJrIiwiZm9sbG93IiwidGFiU3dpdGNoIiwiaW5kZXgiLCJzZXRUaW1lb3V0Iiwib2JqIiwicHVzaCIsIm9uUmVhY2hCb3R0b20iLCJvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUEsd0NBQW1COztBQUVuQjtBQUNBLDJHO0FBQ0FBLFVBQVUsQ0FBQ0Msa0JBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVIO0FBQ3ZIO0FBQzhEO0FBQ0w7QUFDYTs7O0FBR3RFO0FBQzRLO0FBQzVLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUMxQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQW9wQixDQUFnQixpcUJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQytDcnBCO0FBQ1hDLFlBQVUsRUFBQztBQUNQQyxpQkFBYSxFQUFiQSxhQURPO0FBRVBDLFlBQVEsRUFBUkEsUUFGTztBQUdQQyxpQkFBYSxFQUFiQSxhQUhPO0FBSVBDLHFCQUFpQixFQUFqQkEsaUJBSk87QUFLUEMsY0FBVSxFQUFWQSxVQUxPO0FBTVBDLFlBQVEsRUFBUkEsUUFOTztBQU9QQyxrQkFBYyxFQUFkQSxjQVBPLEVBREE7O0FBVVhDLE1BVlcsa0JBVUw7QUFDRixXQUFPO0FBQ0hDLGlCQUFXLEVBQUMsS0FEVDtBQUVIQyxjQUFRLEVBQUMsQ0FGTjtBQUdIQyxjQUFRLEVBQUM7QUFDTEMsZUFBTyxFQUFDLHlCQURIO0FBRUxDLGdCQUFRLEVBQUMsS0FGSjtBQUdMQyxjQUFNLEVBQUMsQ0FIRjtBQUlMQyxXQUFHLEVBQUMsRUFKQztBQUtMQyxlQUFPLEVBQUMsWUFMSDtBQU1MQyxVQUFFLEVBQUMsS0FORTtBQU9MQyxnQkFBUSxFQUFDLFdBUEo7QUFRTEMsZUFBTyxFQUFDLEtBUkg7QUFTTEMsV0FBRyxFQUFDLEtBVEM7QUFVTEMsZ0JBQVEsRUFBQyxLQVZKO0FBV0xDLGdCQUFRLEVBQUMsSUFYSixFQUhOOztBQWdCSEMsZUFBUyxFQUFDO0FBQ04sUUFBQ0MsSUFBSSxFQUFDLElBQU4sRUFBWUMsR0FBRyxFQUFDLEtBQWhCLEVBRE07QUFFTixRQUFDRCxJQUFJLEVBQUMsSUFBTixFQUFZQyxHQUFHLEVBQUMsS0FBaEIsRUFGTTtBQUdOLFFBQUNELElBQUksRUFBQyxJQUFOLEVBQVlDLEdBQUcsRUFBQyxNQUFoQixFQUhNLENBaEJQOztBQXFCSEMsYUFBTyxFQUFDO0FBQ0osUUFBQ0YsSUFBSSxFQUFDLElBQU4sRUFBV1AsRUFBRSxFQUFDLE9BQWQsRUFESTtBQUVKLFFBQUNPLElBQUksRUFBQyxJQUFOLEVBQVdQLEVBQUUsRUFBQyxTQUFkLEVBRkksQ0FyQkw7OztBQTBCSFUsY0FBUSxFQUFDLFFBMUJOO0FBMkJIQyxVQUFJLEVBQUM7QUFDRDtBQUNBO0FBQ0loQixlQUFPLEVBQUMsa0NBRFo7QUFFSUMsZ0JBQVEsRUFBQyxLQUZiO0FBR0lDLGNBQU0sRUFBQyxDQUhYLEVBR2E7QUFDVEMsV0FBRyxFQUFDLEVBSlI7QUFLSU8sZ0JBQVEsRUFBQyxLQUxiO0FBTUlPLGFBQUssRUFBQyxPQU5WO0FBT0lDLGlCQUFTLEVBQUMsSUFQZDtBQVFJQyxvQkFBWSxFQUFDLEtBUmpCO0FBU0lDLGtCQUFVLEVBQUMsS0FUZjtBQVVJQyxrQkFBVSxFQUFDLEtBVmY7QUFXSUMsZ0JBQVEsRUFBQyxJQVhiO0FBWUlDLGtCQUFVLEVBQUMsSUFaZjtBQWFJQyxlQUFPLEVBQUMsR0FiWjtBQWNJZixnQkFBUSxFQUFDLFNBZGIsRUFGQzs7QUFrQkQ7QUFDQTtBQUNJVCxlQUFPLEVBQUMsa0NBRFo7QUFFSUMsZ0JBQVEsRUFBQyxTQUZiO0FBR0lDLGNBQU0sRUFBQyxDQUhYLEVBR2E7QUFDVEMsV0FBRyxFQUFDLEVBSlI7QUFLSU8sZ0JBQVEsRUFBQyxLQUxiO0FBTUlPLGFBQUssRUFBQyxhQU5WO0FBT0lRLGdCQUFRLEVBQUMsa0NBUGI7QUFRSVAsaUJBQVMsRUFBQyxLQVJkO0FBU0lDLG9CQUFZLEVBQUMsSUFUakI7QUFVSUMsa0JBQVUsRUFBQyxLQVZmO0FBV0lDLGtCQUFVLEVBQUMsS0FYZjtBQVlJWixnQkFBUSxFQUFDLFNBWmI7QUFhSWEsZ0JBQVEsRUFBQyxJQWJiO0FBY0lDLGtCQUFVLEVBQUMsSUFkZjtBQWVJQyxlQUFPLEVBQUMsR0FmWixFQW5CQzs7QUFvQ0Q7QUFDQTtBQUNJeEIsZUFBTyxFQUFDLGtDQURaO0FBRUlDLGdCQUFRLEVBQUMsTUFGYjtBQUdJQyxjQUFNLEVBQUMsQ0FIWCxFQUdhO0FBQ1RDLFdBQUcsRUFBQyxFQUpSO0FBS0lPLGdCQUFRLEVBQUMsS0FMYjtBQU1JTyxhQUFLLEVBQUMsWUFOVjtBQU9JUSxnQkFBUSxFQUFDLGlDQVBiO0FBUUlQLGlCQUFTLEVBQUMsS0FSZDtBQVNJQyxvQkFBWSxFQUFDLEtBVGpCO0FBVUlDLGtCQUFVLEVBQUM7QUFDUE0saUJBQU8sRUFBQyxLQUREO0FBRVBDLGdCQUFNLEVBQUMsTUFGQSxFQVZmOztBQWNJTixrQkFBVSxFQUFDLEtBZGY7QUFlSVosZ0JBQVEsRUFBQyxTQWZiO0FBZ0JJYSxnQkFBUSxFQUFDLElBaEJiO0FBaUJJQyxrQkFBVSxFQUFDLElBakJmO0FBa0JJQyxlQUFPLEVBQUMsR0FsQlosRUFyQ0M7O0FBeUREO0FBQ0E7QUFDSXhCLGVBQU8sRUFBQyxrQ0FEWjtBQUVJQyxnQkFBUSxFQUFDLEtBRmI7QUFHSUMsY0FBTSxFQUFDLENBSFgsRUFHYTtBQUNUQyxXQUFHLEVBQUMsRUFKUjtBQUtJTyxnQkFBUSxFQUFDLEtBTGI7QUFNSU8sYUFBSyxFQUFDLE9BTlY7QUFPSVEsZ0JBQVEsRUFBQyxFQVBiO0FBUUlQLGlCQUFTLEVBQUMsS0FSZDtBQVNJQyxvQkFBWSxFQUFDLEtBVGpCO0FBVUlDLGtCQUFVLEVBQUMsS0FWZjtBQVdJQyxrQkFBVSxFQUFDO0FBQ1BPLG9CQUFVLEVBQUMsSUFESjtBQUVQQyxrQkFBUSxFQUFDLGlDQUZGLEVBWGY7O0FBZUlwQixnQkFBUSxFQUFDLFNBZmI7QUFnQklhLGdCQUFRLEVBQUMsSUFoQmI7QUFpQklDLGtCQUFVLEVBQUMsSUFqQmY7QUFrQklDLGVBQU8sRUFBQyxHQWxCWixFQTFEQyxDQTNCRixFQUFQOzs7O0FBMkdILEdBdEhVOztBQXdIWE0sU0FBTyxFQUFDO0FBQ0pDLGFBREksdUJBQ087QUFDUCxXQUFLbEMsV0FBTCxHQUFtQixLQUFuQjtBQUNILEtBSEc7QUFJSjtBQUNBbUMsZ0JBTEksMEJBS1U7QUFDVkMsYUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNILEtBUEc7QUFRSjtBQUNBQyxVQVRJLG9CQVNJO0FBQ0pGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDSCxLQVhHO0FBWUpFLFVBWkk7QUFhSjtBQUNJLFdBQUtyQyxRQUFMLENBQWNXLFFBQWQsSUFBMEIsS0FBS1gsUUFBTCxDQUFjVyxRQUF4QztBQUNILEtBZkc7QUFnQkoyQixhQWhCSSxxQkFnQk1DLEtBaEJOLEVBZ0JZO0FBQ1osV0FBS3hDLFFBQUwsR0FBZ0J3QyxLQUFoQjtBQUNILEtBbEJHO0FBbUJKO0FBQ0E1QyxZQXBCSSxzQkFvQk07QUFDTixVQUFHLEtBQUtxQixRQUFMLElBQWlCLFFBQXBCLEVBQTZCO0FBQ3pCLGVBRHlCLENBQ2xCO0FBQ1Y7QUFDRCxXQUFLQSxRQUFMLEdBQWdCLFdBQWhCO0FBQ0E7QUFDQXdCLGdCQUFVLENBQUMsWUFBSztBQUNaO0FBQ0EsWUFBSUMsR0FBRyxHQUFHO0FBQ047QUFDSXhDLGlCQUFPLEVBQUMsa0NBRk47QUFHRkMsa0JBQVEsRUFBQyxLQUhQO0FBSUZDLGdCQUFNLEVBQUMsQ0FKTCxFQUlPO0FBQ1RDLGFBQUcsRUFBQyxFQUxGO0FBTUZPLGtCQUFRLEVBQUMsS0FOUDtBQU9GTyxlQUFLLEVBQUMsT0FQSjtBQVFGUSxrQkFBUSxFQUFDLGlDQVJQO0FBU0ZQLG1CQUFTLEVBQUMsS0FUUjtBQVVGQyxzQkFBWSxFQUFDLEtBVlg7QUFXRkMsb0JBQVUsRUFBQztBQUNQTSxtQkFBTyxFQUFDLEtBREQ7QUFFUEMsa0JBQU0sRUFBQyxNQUZBLEVBWFQ7O0FBZUZOLG9CQUFVLEVBQUMsS0FmVDtBQWdCRlosa0JBQVEsRUFBQyxTQWhCUDtBQWlCRmEsa0JBQVEsRUFBQyxJQWpCUDtBQWtCRkMsb0JBQVUsRUFBQyxJQWxCVDtBQW1CRkMsaUJBQU8sRUFBQyxHQW5CTixFQUFWOzs7QUFzQkEsYUFBSSxDQUFDUixJQUFMLENBQVV5QixJQUFWLENBQWVELEdBQWYsRUF4QlksQ0F3QlE7O0FBRXBCLGFBQUksQ0FBQ3pCLFFBQUwsR0FBZ0IsUUFBaEIsQ0ExQlksQ0EwQmtCO0FBQ2pDLE9BM0JTLEVBMkJQLElBM0JPLENBQVY7O0FBNkJBOztBQUVILEtBekRHLEVBeEhHOztBQW1MWDJCLGVBbkxXLDJCQW1MSztBQUNaO0FBQ0EsU0FBS2hELFFBQUw7QUFDSCxHQXRMVTtBQXVMWGlELDBCQXZMVyxzQ0F1TGdCO0FBQ3ZCLFNBQUs5QyxXQUFMLEdBQW1CLElBQW5CO0FBQ0gsR0F6TFUsRTs7Ozs7Ozs7Ozs7O0FDL0NuQjtBQUFBO0FBQUE7QUFBQTtBQUFzN0IsQ0FBZ0IscTZCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBMThCLHVDIiwiZmlsZSI6InBhZ2VzL3VzZXItc3BhY2UvdXNlci1zcGFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJyAgICAgICAgICAgIFxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy91c2VyLXNwYWNlL3VzZXItc3BhY2UudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdXNlci1zcGFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmRkMGJjOTAmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91c2VyLXNwYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXNlci1zcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdXNlci1zcGFjZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2ZkZDBiYzkwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ZkZDBiYzkwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ZkZDBiYzkwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi91c2VyLXNwYWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mZGQwYmM5MCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmZGQwYmM5MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pYXBwL2RlbW8vcGFnZXMvdXNlci1zcGFjZS91c2VyLXNwYWNlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdXNlci1zcGFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmRkMGJjOTAmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91c2VyLXNwYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91c2VyLXNwYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuICAgIGltcG9ydCBsb2FkTW9yZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9sb2FkLW1vcmUudnVlJztcbiAgICBpbXBvcnQgc3dpcGVyVGFiSGVhZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2luZGV4L3N3aXBlci10YWItaGVhZC52dWUnOyBcbiAgICBpbXBvcnQgdXNlclNwYWNlSGVhZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXItc3BhY2UvdXNlci1zcGFjZS1oZWFkLnZ1ZSdcblx0aW1wb3J0IHVzZXJTcGFjZVVzZXJpbmZvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdXNlci1zcGFjZS91c2VyLXNwYWNlLXVzZXJpbmZvLnZ1ZSdcbiAgICBpbXBvcnQgY29tbW9uTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vY29tbW9uLWxpc3QudnVlXCI7XG4gICAgaW1wb3J0IGhvbWVEYXRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvaG9tZS1kYXRhLnZ1ZVwiO1xuICAgIGltcG9ydCB1c2VyU3BhY2VQb3B1cCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXItc3BhY2UvdXNlci1zcGFjZS1wb3B1cC52dWUnXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOntcbiAgICAgICAgICAgIHVzZXJTcGFjZUhlYWQsXG4gICAgICAgICAgICBob21lRGF0YSxcbiAgICAgICAgICAgIHN3aXBlclRhYkhlYWQsXG4gICAgICAgICAgICB1c2VyU3BhY2VVc2VyaW5mbyxcbiAgICAgICAgICAgIGNvbW1vbkxpc3QsXG4gICAgICAgICAgICBsb2FkTW9yZSxcbiAgICAgICAgICAgIHVzZXJTcGFjZVBvcHVwXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXNQb3B1cFNob3c6ZmFsc2UsXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg6MSxcbiAgICAgICAgICAgICAgICB1c2VySW5mbzp7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJQaWM6XCIuLi8uLi9zdGF0aWMvQVRNcGljLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTpcIkFUTVwiLFxuICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MCxcbiAgICAgICAgICAgICAgICAgICAgYWdlOjI4LFxuICAgICAgICAgICAgICAgICAgICByZWd0aW1lOlwiMjAxOS0xMi0xMVwiLFxuICAgICAgICAgICAgICAgICAgICBpZDoxMjM0NCxcbiAgICAgICAgICAgICAgICAgICAgYmlydGhkYXk6XCIxOTg4LTEyLTNcIixcbiAgICAgICAgICAgICAgICAgICAgcWluZ2dhbjpcIuacquiuvue9rlwiLFxuICAgICAgICAgICAgICAgICAgICBqb2I6XCLmnKrorr7nva5cIixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246XCLmnKrorr7nva5cIixcbiAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6dHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3BhY2VEYXRhOltcbiAgICAgICAgICAgICAgICAgICAge25hbWU6XCLojrfotZ5cIiwgbnVtOlwiMTBrXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTpcIuWFs+azqFwiLCBudW06JzM0NSd9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTpcIueyieS4nVwiLCBudW06JzU2MjMnfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHRhYkJhcnM6W1xuICAgICAgICAgICAgICAgICAgICB7bmFtZTpcIuS4u+mhtVwiLGlkOlwiemh1eWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTpcIuWKqOaAgVwiLGlkOlwiZG9uZ3RhaVwifSxcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBsb2FkVGV4dDpcIuS4iuaLieWKoOi9veabtOWkmlwiLFxuICAgICAgICAgICAgICAgIGxpc3Q6W1xuICAgICAgICAgICAgICAgICAgICAvLyDnuq/mloflrZfmoLflvI8gdGV4dFN0eWxlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzEwLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmRlcjowLC8vMDrlpbMgMTrnlLdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93OmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCLpgI/mmI7otKjphbjpkqBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGljVGV4dFN0eWxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9TdHlsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlU3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU51bTozNDk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudE51bTozNDU2LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZU51bTozNDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjpcIlBla2luZ1VcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy/lm77mlofmoLflvI8gUGljVGV4dFN0eWxlOnRydWUsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzEwLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6XCIzMUs0NzNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MSwvLzA65aWzIDE655S3XG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2U6MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiLi4u6L276L275ZG85ZSk5L2g55qE5ZCN5a2XXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL2RhdGFwaWMvMTMuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBQaWNUZXh0U3R5bGU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvU3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVN0eWxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246XCJQZWtpbmdVXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU51bTozNDk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudE51bTozNDU2LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZU51bTozNDUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8v6KeG6aKR5qC35byPXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzEwLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6XCJtb21vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MCwvLzA65aWzIDE655S3XG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2U6MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwi5qyi5LmQ5oG25pCe5LiN5piv5rOV5aSW5LmL5ZywXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL2RhdGFwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBpY1RleHRTdHlsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvU3R5bGU6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlOdW06XCIzNFdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6XCIzOjUxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVN0eWxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246XCJQZWtpbmdVXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU51bTozNDk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudE51bTozNDU2LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZU51bTozNDUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8v5YiG5Lqr5qC35byPXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzEwLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmRlcjoxLC8vMDrlpbMgMTrnlLdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93OmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCLpgI/mmI7otKjphbjpkqBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlUGljOlwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBQaWNUZXh0U3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1N0eWxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTdHlsZTp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVUaXRsZTpcIumVv+esm1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlUGljOlwiLi4vLi4vc3RhdGljL2RlbW8vZGF0YXBpYy8yLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246XCJQZWtpbmdVXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU51bTozNDk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudE51bTozNDU2LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZU51bTozNDUsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgXG4gICAgICAgIG1ldGhvZHM6e1xuICAgICAgICAgICAgaGlkZVBvcHVwKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BvcHVwU2hvdyA9IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5ouJ6buRXG4gICAgICAgICAgICBhZGRCbGFja0xpc3QoKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaLiem7kVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOWkh+azqFxuICAgICAgICAgICAgcmVtYXJrKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlpIfms6hcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb2xsb3coKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uaXNGb2xsb3cgIT0gdGhpcy51c2VySW5mby5pc0ZvbGxvdztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJTd2l0Y2goaW5kZXgpe1xuICAgICAgICAgICAgICAgIHRoaXMudGFiSW5kZXggPSBpbmRleFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5LiK5ouJ5Yqg6L29XG4gICAgICAgICAgICBsb2FkTW9yZSgpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubG9hZFRleHQgIT0gXCLkuIrmi4nliqDovb3mm7TlpJpcIil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsvL+WmguaenOato+WcqOWKoOi9veS4rSjvvL5v77y+Ke++ieaIluayoeacieaVsOaNruWPr+S7peWKoOi9ve+8jOWImeWBnOatouivt+axglxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZXh0ID0gXCLliqDovb3kuK0o77y+b++8vinvvolcIjtcbiAgICAgICAgICAgICAgICAvL+S/ruaUueeKtuaAgVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8v56S65L6LOuWKoOi9vTIwMDBtc+WQjuS7juacjeWKoeerr+iOt+WPluS6huaWsOeahOaVsOaNrlxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0geyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+inhumikeagt+W8jyAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyUGljOlwiLi4vLi4vc3RhdGljL2RlbW8vdXNlcnBpYy8xMC5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTpcIkFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmRlcjowLC8vMDrlpbMgMTrnlLdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ2U6MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCLpgI/mmI7otKjphbjpkqBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL2RhdGFwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGljVGV4dFN0eWxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvU3R5bGU6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5TnVtOlwiMzRXXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDpcIjM6NTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTdHlsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjpcIlBla2luZ1VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU51bTozNDk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnROdW06MzQ1NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlTnVtOjM0NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QucHVzaChvYmopOy8v6L+95YqgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZXh0ID0gXCLkuIrmi4nliqDovb3mm7TlpJpcIjsgICAgIC8v5aSN5Y6f54q25oCBICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL3RoaXMudGFibGlzdFt0aGlzLnRhYkluZGV4XSAubG9hZFRleHQgPSBcIuayoeacieabtOWkmuaVsOaNrlwiO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgICAgICAgIC8v5LiK5ouJ5Yqg6L29XG4gICAgICAgICAgICB0aGlzLmxvYWRNb3JlKCk7ICBcbiAgICAgICAgfSxcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKCkge1xuICAgICAgICAgICAgdGhpcy5pc1BvcHVwU2hvdyA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuXHRcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdXNlci1zcGFjZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91c2VyLXNwYWNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==