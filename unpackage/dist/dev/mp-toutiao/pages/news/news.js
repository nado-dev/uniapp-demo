(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/news/news"],{

/***/ 35:
/*!*************************************************************!*\
  !*** D:/uniapp/demo/main.js?{"page":"pages%2Fnews%2Fnews"} ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _news = _interopRequireDefault(__webpack_require__(/*! ./pages/news/news.vue */ 36));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_news.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 36:
/*!******************************************!*\
  !*** D:/uniapp/demo/pages/news/news.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.vue?vue&type=template&id=4e1598d8& */ 37);
/* harmony import */ var _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.vue?vue&type=script&lang=js& */ 39);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.vue?vue&type=style&index=0&lang=css& */ 41);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "uniapp/demo/pages/news/news.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 37:
/*!*************************************************************************!*\
  !*** D:/uniapp/demo/pages/news/news.vue?vue&type=template&id=4e1598d8& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news.vue?vue&type=template&id=4e1598d8& */ 38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 38:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/news/news.vue?vue&type=template&id=4e1598d8& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 39:
/*!*******************************************************************!*\
  !*** D:/uniapp/demo/pages/news/news.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news.vue?vue&type=script&lang=js& */ 40);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 40:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/news/news.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var newsNavBar = function newsNavBar() {return __webpack_require__.e(/*! import() | components/news/news-nav-bar */ "components/news/news-nav-bar").then(__webpack_require__.bind(null, /*! ../../components/news/news-nav-bar.vue */ 89));};var commonList = function commonList() {return __webpack_require__.e(/*! import() | components/common/common-list */ "components/common/common-list").then(__webpack_require__.bind(null, /*! ../../components/common/common-list.vue */ 96));};var loadMore = function loadMore() {return __webpack_require__.e(/*! import() | components/common/load-more */ "components/common/load-more").then(__webpack_require__.bind(null, /*! ../../components/common/load-more.vue */ 77));};var topicNav = function topicNav() {return __webpack_require__.e(/*! import() | components/news/topic-nav */ "components/news/topic-nav").then(__webpack_require__.bind(null, /*! ../../components/news/topic-nav.vue */ 103));};var topicList = function topicList() {return __webpack_require__.e(/*! import() | components/news/topic-list */ "components/news/topic-list").then(__webpack_require__.bind(null, /*! ../../components/news/topic-list.vue */ 110));};var _default =

































































{
  data: function data() {
    return {
      tabIndex: 0, //当前选中的tab的索引值 默认为1
      tabBar: [
      { name: "关注", id: "follow" },
      { name: "话题", id: "topic" }],

      topicBanner: {
        swiper: [
        { src: "../../static/demo/banner1.jpg" },
        { src: "../../static/demo/banner1.jpg" },
        { src: "../../static/demo/banner1.jpg" }],

        nav: [
        { name: "技术" },
        { name: "社畜" },
        { name: "动画" },
        { name: "小说" },
        { name: "手游" },
        { name: "摄影" }],

        list: [
        {
          titlePic: "../../static/demo/topicpic/5.jpeg",
          title: "这是芦苇",
          desc: "想歪的自重",
          totalPostNum: 148,
          todayPostNum: 7 },

        {
          titlePic: "../../static/demo/topicpic/5.jpeg",
          title: "这是芦苇",
          desc: "想歪的自重",
          totalPostNum: 148,
          todayPostNum: 7 }] },



      swiperHeight: 500,
      followList: {
        loadText: "上拉加载更多",
        list: [
        // 纯文字样式 textStyle
        {
          userPic: "../../static/demo/userpic/10.jpg",
          userName: "ATM",
          gender: "0", //0:女 1:男
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
          gender: "1", //0:女 1:男
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
          gender: "0", //0:女 1:男
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
          gender: "0", //0:女 1:男
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
          likeNum: 345 }] } };




  },
  methods: {
    //点击切换
    changeTab: function changeTab(index) {
      this.tabIndex = index;
    },
    //tabBar滑动事件
    tabChange: function tabChange(e) {
      this.tabIndex = e.detail.current;
    },
    //上拉加载
    loadMore: function loadMore() {var _this = this;
      if (this.followList.loadText != "上拉加载更多") {
        return; //如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
      }
      this.followList.loadText = "加载中(＾o＾)ﾉ";
      //修改状态
      setTimeout(function () {
        //示例:加载2000ms后从服务端获取了新的数据
        var obj = {
          //视频样式          
          userPic: "../../static/demo/userpic/10.jpg",
          userName: "ATM",
          gender: "0", //0:女 1:男
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


        _this.followList.list.push(obj); //追加

        _this.followList.loadText = "上拉加载更多"; //复原状态              
      }, 2000);

      //this.followList.loadText = "没有更多数据";

    } },

  components: {
    commonList: commonList,
    newsNavBar: newsNavBar,
    loadMore: loadMore,
    topicNav: topicNav,
    topicList: topicList },

  onLoad: function onLoad() {var _this2 = this;
    uni.getSystemInfo({
      success: function success(res) {
        var height = res.windowHeight - uni.upx2px(100); //tabBar的高度是100upx
        _this2.swiperHeight = height;
      } });

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 41:
/*!***************************************************************************!*\
  !*** D:/uniapp/demo/pages/news/news.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news.vue?vue&type=style&index=0&lang=css& */ 42);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 42:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/news/news.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[35,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvbmV3cy9uZXdzLnZ1ZT83NDQ1Iiwid2VicGFjazovLy9EOi91bmlhcHAvZGVtby9wYWdlcy9uZXdzL25ld3MudnVlP2NhYWYiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC9kZW1vL3BhZ2VzL25ld3MvbmV3cy52dWU/MzMyNyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvbmV3cy9uZXdzLnZ1ZT9iM2VjIiwid2VicGFjazovLy9EOi91bmlhcHAvZGVtby9wYWdlcy9uZXdzL25ld3MudnVlIiwid2VicGFjazovLy9EOi91bmlhcHAvZGVtby9wYWdlcy9uZXdzL25ld3MudnVlP2IxNjciLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC9kZW1vL3BhZ2VzL25ld3MvbmV3cy52dWU/MWRmNyJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSIsImRhdGEiLCJ0YWJJbmRleCIsInRhYkJhciIsIm5hbWUiLCJpZCIsInRvcGljQmFubmVyIiwic3dpcGVyIiwic3JjIiwibmF2IiwibGlzdCIsInRpdGxlUGljIiwidGl0bGUiLCJkZXNjIiwidG90YWxQb3N0TnVtIiwidG9kYXlQb3N0TnVtIiwic3dpcGVySGVpZ2h0IiwiZm9sbG93TGlzdCIsImxvYWRUZXh0IiwidXNlclBpYyIsInVzZXJOYW1lIiwiZ2VuZGVyIiwiYWdlIiwiaXNGb2xsb3ciLCJ0ZXh0U3R5bGUiLCJQaWNUZXh0U3R5bGUiLCJ2aWRlb1N0eWxlIiwic2hhcmVTdHlsZSIsInNoYXJlTnVtIiwiY29tbWVudE51bSIsImxpa2VOdW0iLCJsb2NhdGlvbiIsInBsYXlOdW0iLCJsZW5ndGgiLCJzaGFyZVRpdGxlIiwic2hhcmVQaWMiLCJtZXRob2RzIiwiY2hhbmdlVGFiIiwiaW5kZXgiLCJ0YWJDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiY3VycmVudCIsImxvYWRNb3JlIiwic2V0VGltZW91dCIsIm9iaiIsInB1c2giLCJjb21wb25lbnRzIiwiY29tbW9uTGlzdCIsIm5ld3NOYXZCYXIiLCJ0b3BpY05hdiIsInRvcGljTGlzdCIsIm9uTG9hZCIsInVuaSIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwidXB4MnB4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBLHdDQUFtQjs7QUFFbkI7QUFDQSx5RjtBQUNBQSxVQUFVLENBQUNDLGFBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlIO0FBQ2pIO0FBQ3dEO0FBQ0w7QUFDYTs7O0FBR2hFO0FBQzRLO0FBQzVLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUMxQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQThvQixDQUFnQiwycEJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNrRW5wQjtBQUNYQyxNQURXLGtCQUNKO0FBQ0gsV0FBTztBQUNIQyxjQUFRLEVBQUUsQ0FEUCxFQUNTO0FBQ1pDLFlBQU0sRUFBRTtBQUNKLFFBQUNDLElBQUksRUFBRSxJQUFQLEVBQVlDLEVBQUUsRUFBRSxRQUFoQixFQURJO0FBRUosUUFBQ0QsSUFBSSxFQUFFLElBQVAsRUFBWUMsRUFBRSxFQUFFLE9BQWhCLEVBRkksQ0FGTDs7QUFNSEMsaUJBQVcsRUFBQztBQUNSQyxjQUFNLEVBQUM7QUFDSCxVQUFDQyxHQUFHLEVBQUMsK0JBQUwsRUFERztBQUVILFVBQUNBLEdBQUcsRUFBQywrQkFBTCxFQUZHO0FBR0gsVUFBQ0EsR0FBRyxFQUFDLCtCQUFMLEVBSEcsQ0FEQzs7QUFNUkMsV0FBRyxFQUFDO0FBQ0EsVUFBQ0wsSUFBSSxFQUFDLElBQU4sRUFEQTtBQUVBLFVBQUNBLElBQUksRUFBQyxJQUFOLEVBRkE7QUFHQSxVQUFDQSxJQUFJLEVBQUMsSUFBTixFQUhBO0FBSUEsVUFBQ0EsSUFBSSxFQUFDLElBQU4sRUFKQTtBQUtBLFVBQUNBLElBQUksRUFBQyxJQUFOLEVBTEE7QUFNQSxVQUFDQSxJQUFJLEVBQUMsSUFBTixFQU5BLENBTkk7O0FBY1JNLFlBQUksRUFBQztBQUNEO0FBQ0lDLGtCQUFRLEVBQUMsbUNBRGI7QUFFSUMsZUFBSyxFQUFDLE1BRlY7QUFHSUMsY0FBSSxFQUFDLE9BSFQ7QUFJSUMsc0JBQVksRUFBQyxHQUpqQjtBQUtJQyxzQkFBWSxFQUFDLENBTGpCLEVBREM7O0FBUUQ7QUFDSUosa0JBQVEsRUFBQyxtQ0FEYjtBQUVJQyxlQUFLLEVBQUMsTUFGVjtBQUdJQyxjQUFJLEVBQUMsT0FIVDtBQUlJQyxzQkFBWSxFQUFDLEdBSmpCO0FBS0lDLHNCQUFZLEVBQUMsQ0FMakIsRUFSQyxDQWRHLEVBTlQ7Ozs7QUFxQ0hDLGtCQUFZLEVBQUMsR0FyQ1Y7QUFzQ0hDLGdCQUFVLEVBQUM7QUFDUkMsZ0JBQVEsRUFBQyxRQUREO0FBRVBSLFlBQUksRUFBQztBQUNEO0FBQ0E7QUFDSVMsaUJBQU8sRUFBQyxrQ0FEWjtBQUVJQyxrQkFBUSxFQUFDLEtBRmI7QUFHSUMsZ0JBQU0sRUFBQyxHQUhYLEVBR2U7QUFDWEMsYUFBRyxFQUFDLEVBSlI7QUFLSUMsa0JBQVEsRUFBQyxLQUxiO0FBTUlYLGVBQUssRUFBQyxPQU5WO0FBT0lZLG1CQUFTLEVBQUMsSUFQZDtBQVFJQyxzQkFBWSxFQUFDLEtBUmpCO0FBU0lDLG9CQUFVLEVBQUMsS0FUZjtBQVVJQyxvQkFBVSxFQUFDLEtBVmY7QUFXSUMsa0JBQVEsRUFBQyxJQVhiO0FBWUlDLG9CQUFVLEVBQUMsSUFaZjtBQWFJQyxpQkFBTyxFQUFDLEdBYlo7QUFjSUMsa0JBQVEsRUFBQyxTQWRiLEVBRkM7O0FBa0JEO0FBQ0E7QUFDSVosaUJBQU8sRUFBQyxrQ0FEWjtBQUVJQyxrQkFBUSxFQUFDLFNBRmI7QUFHSUMsZ0JBQU0sRUFBQyxHQUhYLEVBR2U7QUFDWEMsYUFBRyxFQUFDLEVBSlI7QUFLSUMsa0JBQVEsRUFBQyxLQUxiO0FBTUlYLGVBQUssRUFBQyxhQU5WO0FBT0lELGtCQUFRLEVBQUMsa0NBUGI7QUFRSWEsbUJBQVMsRUFBQyxLQVJkO0FBU0lDLHNCQUFZLEVBQUMsSUFUakI7QUFVSUMsb0JBQVUsRUFBQyxLQVZmO0FBV0lDLG9CQUFVLEVBQUMsS0FYZjtBQVlJSSxrQkFBUSxFQUFDLFNBWmI7QUFhSUgsa0JBQVEsRUFBQyxJQWJiO0FBY0lDLG9CQUFVLEVBQUMsSUFkZjtBQWVJQyxpQkFBTyxFQUFDLEdBZlosRUFuQkM7O0FBb0NEO0FBQ0E7QUFDSVgsaUJBQU8sRUFBQyxrQ0FEWjtBQUVJQyxrQkFBUSxFQUFDLE1BRmI7QUFHSUMsZ0JBQU0sRUFBQyxHQUhYLEVBR2U7QUFDWEMsYUFBRyxFQUFDLEVBSlI7QUFLSUMsa0JBQVEsRUFBQyxLQUxiO0FBTUlYLGVBQUssRUFBQyxZQU5WO0FBT0lELGtCQUFRLEVBQUMsaUNBUGI7QUFRSWEsbUJBQVMsRUFBQyxLQVJkO0FBU0lDLHNCQUFZLEVBQUMsS0FUakI7QUFVSUMsb0JBQVUsRUFBQztBQUNQTSxtQkFBTyxFQUFDLEtBREQ7QUFFUEMsa0JBQU0sRUFBQyxNQUZBLEVBVmY7O0FBY0lOLG9CQUFVLEVBQUMsS0FkZjtBQWVJSSxrQkFBUSxFQUFDLFNBZmI7QUFnQklILGtCQUFRLEVBQUMsSUFoQmI7QUFpQklDLG9CQUFVLEVBQUMsSUFqQmY7QUFrQklDLGlCQUFPLEVBQUMsR0FsQlosRUFyQ0M7O0FBeUREO0FBQ0E7QUFDSVgsaUJBQU8sRUFBQyxrQ0FEWjtBQUVJQyxrQkFBUSxFQUFDLEtBRmI7QUFHSUMsZ0JBQU0sRUFBQyxHQUhYLEVBR2U7QUFDWEMsYUFBRyxFQUFDLEVBSlI7QUFLSUMsa0JBQVEsRUFBQyxLQUxiO0FBTUlYLGVBQUssRUFBQyxPQU5WO0FBT0lELGtCQUFRLEVBQUMsRUFQYjtBQVFJYSxtQkFBUyxFQUFDLEtBUmQ7QUFTSUMsc0JBQVksRUFBQyxLQVRqQjtBQVVJQyxvQkFBVSxFQUFDLEtBVmY7QUFXSUMsb0JBQVUsRUFBQztBQUNQTyxzQkFBVSxFQUFDLElBREo7QUFFUEMsb0JBQVEsRUFBQyxpQ0FGRixFQVhmOztBQWVJSixrQkFBUSxFQUFDLFNBZmI7QUFnQklILGtCQUFRLEVBQUMsSUFoQmI7QUFpQklDLG9CQUFVLEVBQUMsSUFqQmY7QUFrQklDLGlCQUFPLEVBQUMsR0FsQlosRUExREMsQ0FGRSxFQXRDUixFQUFQOzs7OztBQXlISCxHQTNIVTtBQTRIWE0sU0FBTyxFQUFFO0FBQ0w7QUFDQUMsYUFGSyxxQkFFS0MsS0FGTCxFQUVZO0FBQ2IsV0FBS3BDLFFBQUwsR0FBZ0JvQyxLQUFoQjtBQUNILEtBSkk7QUFLTDtBQUNBQyxhQU5LLHFCQU1LQyxDQU5MLEVBTU87QUFDUixXQUFLdEMsUUFBTCxHQUFnQnNDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxPQUF6QjtBQUNILEtBUkk7QUFTTDtBQUNBQyxZQVZLLHNCQVVLO0FBQ04sVUFBSSxLQUFLMUIsVUFBTCxDQUFnQkMsUUFBaEIsSUFBNEIsUUFBaEMsRUFBeUM7QUFDckMsZUFEcUMsQ0FDOUI7QUFDVjtBQUNELFdBQUtELFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCLFdBQTNCO0FBQ0E7QUFDQTBCLGdCQUFVLENBQUMsWUFBSztBQUNaO0FBQ0EsWUFBSUMsR0FBRyxHQUFHO0FBQ047QUFDSTFCLGlCQUFPLEVBQUMsa0NBRk47QUFHRkMsa0JBQVEsRUFBQyxLQUhQO0FBSUZDLGdCQUFNLEVBQUMsR0FKTCxFQUlTO0FBQ1hDLGFBQUcsRUFBQyxFQUxGO0FBTUZDLGtCQUFRLEVBQUMsS0FOUDtBQU9GWCxlQUFLLEVBQUMsT0FQSjtBQVFGRCxrQkFBUSxFQUFDLGlDQVJQO0FBU0ZhLG1CQUFTLEVBQUMsS0FUUjtBQVVGQyxzQkFBWSxFQUFDLEtBVlg7QUFXRkMsb0JBQVUsRUFBQztBQUNQTSxtQkFBTyxFQUFDLEtBREQ7QUFFUEMsa0JBQU0sRUFBQyxNQUZBLEVBWFQ7O0FBZUZOLG9CQUFVLEVBQUMsS0FmVDtBQWdCRkksa0JBQVEsRUFBQyxTQWhCUDtBQWlCRkgsa0JBQVEsRUFBQyxJQWpCUDtBQWtCRkMsb0JBQVUsRUFBQyxJQWxCVDtBQW1CRkMsaUJBQU8sRUFBQyxHQW5CTixFQUFWOzs7QUFzQkEsYUFBSSxDQUFDYixVQUFMLENBQWdCUCxJQUFoQixDQUFxQm9DLElBQXJCLENBQTBCRCxHQUExQixFQXhCWSxDQXdCbUI7O0FBRS9CLGFBQUksQ0FBQzVCLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCLFFBQTNCLENBMUJZLENBMEI2QjtBQUM1QyxPQTNCUyxFQTJCUCxJQTNCTyxDQUFWOztBQTZCQTs7QUFFSCxLQS9DSSxFQTVIRTs7QUE2S1g2QixZQUFVLEVBQUU7QUFDUkMsY0FBVSxFQUFWQSxVQURRO0FBRVJDLGNBQVUsRUFBVkEsVUFGUTtBQUdSTixZQUFRLEVBQVJBLFFBSFE7QUFJUk8sWUFBUSxFQUFSQSxRQUpRO0FBS1JDLGFBQVMsRUFBVEEsU0FMUSxFQTdLRDs7QUFvTFhDLFFBcExXLG9CQW9MRjtBQUNMQyxPQUFHLENBQUNDLGFBQUosQ0FBa0I7QUFDZEMsYUFBTyxFQUFFLGlCQUFDQyxHQUFELEVBQVM7QUFDZCxZQUFJQyxNQUFNLEdBQUVELEdBQUcsQ0FBQ0UsWUFBSixHQUFtQkwsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxDQUEvQixDQURjLENBQ2lDO0FBQy9DLGNBQUksQ0FBQzNDLFlBQUwsR0FBb0J5QyxNQUFwQjtBQUNILE9BSmEsRUFBbEI7O0FBTUgsR0EzTFUsRTs7Ozs7Ozs7Ozs7OztBQ2xFZjtBQUFBO0FBQUE7QUFBQTtBQUFnN0IsQ0FBZ0IsKzVCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBcDhCLHVDIiwiZmlsZSI6InBhZ2VzL25ld3MvbmV3cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJyAgICAgICAgICAgIFxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9uZXdzL25ld3MudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbmV3cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGUxNTk4ZDgmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9uZXdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbmV3cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbmV3cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRlMTU5OGQ4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRlMTU5OGQ4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRlMTU5OGQ4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9uZXdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTE1OThkOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZTE1OThkOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pYXBwL2RlbW8vcGFnZXMvbmV3cy9uZXdzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbmV3cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGUxNTk4ZDgmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9uZXdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9uZXdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuaW1wb3J0IG5ld3NOYXZCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmV3cy9uZXdzLW5hdi1iYXIudnVlXCI7XG5pbXBvcnQgY29tbW9uTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vY29tbW9uLWxpc3QudnVlXCI7XG5pbXBvcnQgbG9hZE1vcmUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vbG9hZC1tb3JlLnZ1ZSc7XG5pbXBvcnQgdG9waWNOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmV3cy90b3BpYy1uYXYudnVlXCI7XG5pbXBvcnQgdG9waWNMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25ld3MvdG9waWMtbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWJJbmRleDogMCwvL+W9k+WJjemAieS4reeahHRhYueahOe0ouW8leWAvCDpu5jorqTkuLoxXG4gICAgICAgICAgICB0YWJCYXI6IFtcbiAgICAgICAgICAgICAgICB7bmFtZTogXCLlhbPms6hcIixpZDogXCJmb2xsb3dcIn0sXG4gICAgICAgICAgICAgICAge25hbWU6IFwi6K+d6aKYXCIsaWQ6IFwidG9waWNcIn1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0b3BpY0Jhbm5lcjp7XG4gICAgICAgICAgICAgICAgc3dpcGVyOltcbiAgICAgICAgICAgICAgICAgICAge3NyYzpcIi4uLy4uL3N0YXRpYy9kZW1vL2Jhbm5lcjEuanBnXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7c3JjOlwiLi4vLi4vc3RhdGljL2RlbW8vYmFubmVyMS5qcGdcIn0sXG4gICAgICAgICAgICAgICAgICAgIHtzcmM6XCIuLi8uLi9zdGF0aWMvZGVtby9iYW5uZXIxLmpwZ1wifVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgbmF2OltcbiAgICAgICAgICAgICAgICAgICAge25hbWU6XCLmioDmnK9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOlwi56S+55WcXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTpcIuWKqOeUu1wifSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6XCLlsI/or7RcIn0sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOlwi5omL5ri4XCJ9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTpcIuaRhOW9sVwifVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgbGlzdDpbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlUGljOlwiLi4vLi4vc3RhdGljL2RlbW8vdG9waWNwaWMvNS5qcGVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIui/meaYr+iKpuiLh1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzpcIuaDs+atqueahOiHqumHjVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQb3N0TnVtOjE0OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZGF5UG9zdE51bTo3XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlUGljOlwiLi4vLi4vc3RhdGljL2RlbW8vdG9waWNwaWMvNS5qcGVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIui/meaYr+iKpuiLh1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzpcIuaDs+atqueahOiHqumHjVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQb3N0TnVtOjE0OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZGF5UG9zdE51bTo3XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3dpcGVySGVpZ2h0OjUwMCxcbiAgICAgICAgICAgIGZvbGxvd0xpc3Q6e1xuICAgICAgICAgICAgICAgbG9hZFRleHQ6XCLkuIrmi4nliqDovb3mm7TlpJpcIixcbiAgICAgICAgICAgICAgICBsaXN0OltcbiAgICAgICAgICAgICAgICAgICAgLy8g57qv5paH5a2X5qC35byPIHRleHRTdHlsZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyUGljOlwiLi4vLi4vc3RhdGljL2RlbW8vdXNlcnBpYy8xMC5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOlwiQVRNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6XCIwXCIsLy8wOuWlsyAxOueUt1xuICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIumAj+aYjui0qOmFuOmSoFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlOnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBQaWNUZXh0U3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1N0eWxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTdHlsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlTnVtOjM0OTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50TnVtOjM0NTYsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWtlTnVtOjM0NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOlwiUGVraW5nVVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvL+WbvuaWh+agt+W8jyBQaWNUZXh0U3R5bGU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMTAuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTpcIjMxSzQ3M2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmRlcjpcIjFcIiwvLzA65aWzIDE655S3XG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2U6MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiLi4u6L276L275ZG85ZSk5L2g55qE5ZCN5a2XXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL2RhdGFwaWMvMTMuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBQaWNUZXh0U3R5bGU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvU3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVN0eWxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246XCJQZWtpbmdVXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU51bTozNDk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudE51bTozNDU2LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZU51bTozNDUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8v6KeG6aKR5qC35byPXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzEwLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6XCJtb21vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6XCIwXCIsLy8wOuWlsyAxOueUt1xuICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIuasouS5kOaBtuaQnuS4jeaYr+azleWkluS5i+WcsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby9kYXRhcGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBQaWNUZXh0U3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1N0eWxlOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5TnVtOlwiMzRXXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOlwiMzo1MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTdHlsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOlwiUGVraW5nVVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVOdW06MzQ5OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnROdW06MzQ1NixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VOdW06MzQ1LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvL+WIhuS6q+agt+W8j1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyUGljOlwiLi4vLi4vc3RhdGljL2RlbW8vdXNlcnBpYy8xMC5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOlwiQVRNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6XCIwXCIsLy8wOuWlsyAxOueUt1xuICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIumAj+aYjui0qOmFuOmSoFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVQaWM6XCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBpY1RleHRTdHlsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvU3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVN0eWxlOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVRpdGxlOlwi6ZW/56ybXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby9kYXRhcGljLzIuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjpcIlBla2luZ1VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlTnVtOjM0OTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50TnVtOjM0NTYsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWtlTnVtOjM0NSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvL+eCueWHu+WIh+aNolxuICAgICAgICBjaGFuZ2VUYWIoaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMudGFiSW5kZXggPSBpbmRleDtcbiAgICAgICAgfSxcbiAgICAgICAgLy90YWJCYXLmu5Hliqjkuovku7ZcbiAgICAgICAgdGFiQ2hhbmdlKGUpe1xuICAgICAgICAgICAgdGhpcy50YWJJbmRleCA9IGUuZGV0YWlsLmN1cnJlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIC8v5LiK5ouJ5Yqg6L29XG4gICAgICAgIGxvYWRNb3JlKCl7XG4gICAgICAgICAgICBpZiggdGhpcy5mb2xsb3dMaXN0LmxvYWRUZXh0ICE9IFwi5LiK5ouJ5Yqg6L295pu05aSaXCIpe1xuICAgICAgICAgICAgICAgIHJldHVybjsvL+WmguaenOato+WcqOWKoOi9veS4rSjvvL5v77y+Ke++ieaIluayoeacieaVsOaNruWPr+S7peWKoOi9ve+8jOWImeWBnOatouivt+axglxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb2xsb3dMaXN0LmxvYWRUZXh0ID0gXCLliqDovb3kuK0o77y+b++8vinvvolcIjtcbiAgICAgICAgICAgIC8v5L+u5pS554q25oCBXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4geyAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v56S65L6LOuWKoOi9vTIwMDBtc+WQjuS7juacjeWKoeerr+iOt+WPluS6huaWsOeahOaVsOaNrlxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy/op4bpopHmoLflvI8gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyUGljOlwiLi4vLi4vc3RhdGljL2RlbW8vdXNlcnBpYy8xMC5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOlwiQVRNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6XCIwXCIsLy8wOuWlsyAxOueUt1xuICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIumAj+aYjui0qOmFuOmSoFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby9kYXRhcGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBQaWNUZXh0U3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1N0eWxlOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5TnVtOlwiMzRXXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOlwiMzo1MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTdHlsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOlwiUGVraW5nVVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVOdW06MzQ5OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnROdW06MzQ1NixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VOdW06MzQ1LFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuZm9sbG93TGlzdC5saXN0LnB1c2gob2JqKTsvL+i/veWKoFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuZm9sbG93TGlzdC5sb2FkVGV4dCA9IFwi5LiK5ouJ5Yqg6L295pu05aSaXCI7ICAgICAvL+WkjeWOn+eKtuaAgSAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy90aGlzLmZvbGxvd0xpc3QubG9hZFRleHQgPSBcIuayoeacieabtOWkmuaVsOaNrlwiO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgY29tbW9uTGlzdCxcbiAgICAgICAgbmV3c05hdkJhcixcbiAgICAgICAgbG9hZE1vcmUsXG4gICAgICAgIHRvcGljTmF2LFxuICAgICAgICB0b3BpY0xpc3RcbiAgICB9LFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdW5pLmdldFN5c3RlbUluZm8oe1xuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBoZWlnaHQ9IHJlcy53aW5kb3dIZWlnaHQgLSB1bmkudXB4MnB4KDEwMCk7Ly90YWJCYXLnmoTpq5jluqbmmK8xMDB1cHhcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXBlckhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LFxufVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9uZXdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL25ld3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9