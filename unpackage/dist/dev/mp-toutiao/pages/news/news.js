(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/news/news"],{

/***/ 39:
/*!*************************************************************!*\
  !*** D:/uniapp/demo/main.js?{"page":"pages%2Fnews%2Fnews"} ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _news = _interopRequireDefault(__webpack_require__(/*! ./pages/news/news.vue */ 40));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_news.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 40:
/*!******************************************!*\
  !*** D:/uniapp/demo/pages/news/news.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.vue?vue&type=template&id=4e1598d8& */ 41);
/* harmony import */ var _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.vue?vue&type=script&lang=js& */ 43);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.vue?vue&type=style&index=0&lang=css& */ 45);
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

/***/ 41:
/*!*************************************************************************!*\
  !*** D:/uniapp/demo/pages/news/news.vue?vue&type=template&id=4e1598d8& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news.vue?vue&type=template&id=4e1598d8& */ 42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_4e1598d8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 42:
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

/***/ 43:
/*!*******************************************************************!*\
  !*** D:/uniapp/demo/pages/news/news.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news.vue?vue&type=script&lang=js& */ 44);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 44:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/news/news.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var newsNavBar = function newsNavBar() {return __webpack_require__.e(/*! import() | components/news/news-nav-bar */ "components/news/news-nav-bar").then(__webpack_require__.bind(null, /*! ../../components/news/news-nav-bar.vue */ 210));};var commonList = function commonList() {return __webpack_require__.e(/*! import() | components/common/common-list */ "components/common/common-list").then(__webpack_require__.bind(null, /*! ../../components/common/common-list.vue */ 217));};var loadMore = function loadMore() {return __webpack_require__.e(/*! import() | components/common/load-more */ "components/common/load-more").then(__webpack_require__.bind(null, /*! ../../components/common/load-more.vue */ 156));};var topicNav = function topicNav() {return __webpack_require__.e(/*! import() | components/news/topic-nav */ "components/news/topic-nav").then(__webpack_require__.bind(null, /*! ../../components/news/topic-nav.vue */ 224));};var topicList = function topicList() {return __webpack_require__.e(/*! import() | components/news/topic-list */ "components/news/topic-list").then(__webpack_require__.bind(null, /*! ../../components/news/topic-list.vue */ 231));};var _default =



































































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
          titlePic: "../../static/common/zheshiluwei.jpg",
          title: "这是芦苇",
          desc: "想歪的自重",
          totalPostNum: 148,
          todayPostNum: 7 },

        {
          titlePic: "../../static/common/zheshiluwei.jpg",
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
          gender: 0, //0:女 1:男
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

/***/ 45:
/*!***************************************************************************!*\
  !*** D:/uniapp/demo/pages/news/news.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news.vue?vue&type=style&index=0&lang=css& */ 46);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 46:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/news/news.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[39,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvbmV3cy9uZXdzLnZ1ZT83NDQ1Iiwid2VicGFjazovLy9EOi91bmlhcHAvZGVtby9wYWdlcy9uZXdzL25ld3MudnVlP2NhYWYiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC9kZW1vL3BhZ2VzL25ld3MvbmV3cy52dWU/MzMyNyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvbmV3cy9uZXdzLnZ1ZT9iM2VjIiwid2VicGFjazovLy9EOi91bmlhcHAvZGVtby9wYWdlcy9uZXdzL25ld3MudnVlIiwid2VicGFjazovLy9EOi91bmlhcHAvZGVtby9wYWdlcy9uZXdzL25ld3MudnVlP2IxNjciLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC9kZW1vL3BhZ2VzL25ld3MvbmV3cy52dWU/MWRmNyJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSIsImRhdGEiLCJ0YWJJbmRleCIsInRhYkJhciIsIm5hbWUiLCJpZCIsInRvcGljQmFubmVyIiwic3dpcGVyIiwic3JjIiwibmF2IiwibGlzdCIsInRpdGxlUGljIiwidGl0bGUiLCJkZXNjIiwidG90YWxQb3N0TnVtIiwidG9kYXlQb3N0TnVtIiwic3dpcGVySGVpZ2h0IiwiZm9sbG93TGlzdCIsImxvYWRUZXh0IiwidXNlclBpYyIsInVzZXJOYW1lIiwiZ2VuZGVyIiwiYWdlIiwiaXNGb2xsb3ciLCJ0ZXh0U3R5bGUiLCJQaWNUZXh0U3R5bGUiLCJ2aWRlb1N0eWxlIiwic2hhcmVTdHlsZSIsInNoYXJlTnVtIiwiY29tbWVudE51bSIsImxpa2VOdW0iLCJsb2NhdGlvbiIsInBsYXlOdW0iLCJsZW5ndGgiLCJzaGFyZVRpdGxlIiwic2hhcmVQaWMiLCJtZXRob2RzIiwiY2hhbmdlVGFiIiwiaW5kZXgiLCJ0YWJDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiY3VycmVudCIsImxvYWRNb3JlIiwic2V0VGltZW91dCIsIm9iaiIsInB1c2giLCJjb21wb25lbnRzIiwiY29tbW9uTGlzdCIsIm5ld3NOYXZCYXIiLCJ0b3BpY05hdiIsInRvcGljTGlzdCIsIm9uTG9hZCIsInVuaSIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwidXB4MnB4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBLHdDQUFtQjs7QUFFbkI7QUFDQSx5RjtBQUNBQSxVQUFVLENBQUNDLGFBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlIO0FBQ2pIO0FBQ3dEO0FBQ0w7QUFDYTs7O0FBR2hFO0FBQzRLO0FBQzVLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUMxQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQThvQixDQUFnQiwycEJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29FbnBCO0FBQ1hDLE1BRFcsa0JBQ0o7QUFDSCxXQUFPO0FBQ0hDLGNBQVEsRUFBRSxDQURQLEVBQ1M7QUFDWkMsWUFBTSxFQUFFO0FBQ0osUUFBQ0MsSUFBSSxFQUFFLElBQVAsRUFBWUMsRUFBRSxFQUFFLFFBQWhC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Q0gsT0FKYSxFQUFsQjs7QUFNSCxHQTNMVSxFOzs7Ozs7Ozs7Ozs7O0FDcEVmO0FBQUE7QUFBQTtBQUFBO0FBQWc3QixDQUFnQiwrNUJBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0FwOEIsdUMiLCJmaWxlIjoicGFnZXMvbmV3cy9uZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnICAgICAgICAgICAgXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL25ld3MvbmV3cy52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9uZXdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTE1OThkOCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25ld3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9uZXdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9uZXdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGUxNTk4ZDgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGUxNTk4ZDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGUxNTk4ZDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL25ld3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlMTU5OGQ4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRlMTU5OGQ4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlhcHAvZGVtby9wYWdlcy9uZXdzL25ld3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9uZXdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTE1OThkOCZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL25ld3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL25ld3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBuZXdzTmF2QmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25ld3MvbmV3cy1uYXYtYmFyLnZ1ZVwiO1xuaW1wb3J0IGNvbW1vbkxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbW9uL2NvbW1vbi1saXN0LnZ1ZVwiO1xuaW1wb3J0IGxvYWRNb3JlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL2xvYWQtbW9yZS52dWUnO1xuaW1wb3J0IHRvcGljTmF2IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25ld3MvdG9waWMtbmF2LnZ1ZVwiO1xuaW1wb3J0IHRvcGljTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uZXdzL3RvcGljLWxpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFiSW5kZXg6IDAsLy/lvZPliY3pgInkuK3nmoR0YWLnmoTntKLlvJXlgLwg6buY6K6k5Li6MVxuICAgICAgICAgICAgdGFiQmFyOiBbXG4gICAgICAgICAgICAgICAge25hbWU6IFwi5YWz5rOoXCIsaWQ6IFwiZm9sbG93XCJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiBcIuivnemimFwiLGlkOiBcInRvcGljXCJ9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdG9waWNCYW5uZXI6e1xuICAgICAgICAgICAgICAgIHN3aXBlcjpbXG4gICAgICAgICAgICAgICAgICAgIHtzcmM6XCIuLi8uLi9zdGF0aWMvZGVtby9iYW5uZXIxLmpwZ1wifSxcbiAgICAgICAgICAgICAgICAgICAge3NyYzpcIi4uLy4uL3N0YXRpYy9kZW1vL2Jhbm5lcjEuanBnXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7c3JjOlwiLi4vLi4vc3RhdGljL2RlbW8vYmFubmVyMS5qcGdcIn1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIG5hdjpbXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOlwi5oqA5pyvXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTpcIuekvueVnFwifSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6XCLliqjnlLtcIn0sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOlwi5bCP6K+0XCJ9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTpcIuaJi+a4uFwifSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6XCLmkYTlvbFcIn1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGxpc3Q6W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVBpYzpcIi4uLy4uL3N0YXRpYy9jb21tb24vemhlc2hpbHV3ZWkuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIui/meaYr+iKpuiLh1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzpcIuaDs+atqueahOiHqumHjVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQb3N0TnVtOjE0OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZGF5UG9zdE51bTo3XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlUGljOlwiLi4vLi4vc3RhdGljL2NvbW1vbi96aGVzaGlsdXdlaS5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwi6L+Z5piv6Iqm6IuHXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOlwi5oOz5q2q55qE6Ieq6YeNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBvc3ROdW06MTQ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kYXlQb3N0TnVtOjdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzd2lwZXJIZWlnaHQ6NTAwLFxuICAgICAgICAgICAgZm9sbG93TGlzdDp7XG4gICAgICAgICAgICAgICBsb2FkVGV4dDpcIuS4iuaLieWKoOi9veabtOWkmlwiLFxuICAgICAgICAgICAgICAgIGxpc3Q6W1xuICAgICAgICAgICAgICAgICAgICAvLyDnuq/mloflrZfmoLflvI8gdGV4dFN0eWxlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzEwLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmRlcjowLC8vMDrlpbMgMTrnlLdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93OmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCLpgI/mmI7otKjphbjpkqBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGljVGV4dFN0eWxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9TdHlsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlU3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU51bTozNDk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudE51bTozNDU2LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZU51bTozNDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjpcIlBla2luZ1VcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy/lm77mlofmoLflvI8gUGljVGV4dFN0eWxlOnRydWUsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzEwLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6XCIzMUs0NzNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MSwvLzA65aWzIDE655S3XG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2U6MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiLi4u6L276L275ZG85ZSk5L2g55qE5ZCN5a2XXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL2RhdGFwaWMvMTMuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBQaWNUZXh0U3R5bGU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvU3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVN0eWxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246XCJQZWtpbmdVXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU51bTozNDk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudE51bTozNDU2LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZU51bTozNDUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8v6KeG6aKR5qC35byPXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzEwLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6XCJtb21vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MCwvLzA65aWzIDE655S3XG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2U6MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwi5qyi5LmQ5oG25pCe5LiN5piv5rOV5aSW5LmL5ZywXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL2RhdGFwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBpY1RleHRTdHlsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvU3R5bGU6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlOdW06XCIzNFdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6XCIzOjUxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVN0eWxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246XCJQZWtpbmdVXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU51bTozNDk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudE51bTozNDU2LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZU51bTozNDUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8v5YiG5Lqr5qC35byPXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzEwLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmRlcjowLC8vMDrlpbMgMTrnlLdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93OmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCLpgI/mmI7otKjphbjpkqBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlUGljOlwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBQaWNUZXh0U3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1N0eWxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTdHlsZTp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVUaXRsZTpcIumVv+esm1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlUGljOlwiLi4vLi4vc3RhdGljL2RlbW8vZGF0YXBpYy8yLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246XCJQZWtpbmdVXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU51bTozNDk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudE51bTozNDU2LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZU51bTozNDUsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLy/ngrnlh7vliIfmjaJcbiAgICAgICAgY2hhbmdlVGFiKGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnRhYkluZGV4ID0gaW5kZXg7XG4gICAgICAgIH0sXG4gICAgICAgIC8vdGFiQmFy5ruR5Yqo5LqL5Lu2XG4gICAgICAgIHRhYkNoYW5nZShlKXtcbiAgICAgICAgICAgIHRoaXMudGFiSW5kZXggPSBlLmRldGFpbC5jdXJyZW50O1xuICAgICAgICB9LFxuICAgICAgICAvL+S4iuaLieWKoOi9vVxuICAgICAgICBsb2FkTW9yZSgpe1xuICAgICAgICAgICAgaWYoIHRoaXMuZm9sbG93TGlzdC5sb2FkVGV4dCAhPSBcIuS4iuaLieWKoOi9veabtOWkmlwiKXtcbiAgICAgICAgICAgICAgICByZXR1cm47Ly/lpoLmnpzmraPlnKjliqDovb3kuK0o77y+b++8vinvvonmiJbmsqHmnInmlbDmja7lj6/ku6XliqDovb3vvIzliJnlgZzmraLor7fmsYJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm9sbG93TGlzdC5sb2FkVGV4dCA9IFwi5Yqg6L295LitKO+8vm/vvL4p776JXCI7XG4gICAgICAgICAgICAvL+S/ruaUueeKtuaAgVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHsgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL+ekuuS+izrliqDovb0yMDAwbXPlkI7ku47mnI3liqHnq6/ojrflj5bkuobmlrDnmoTmlbDmja5cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0geyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8v6KeG6aKR5qC35byPICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMTAuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTpcIkFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOlwiMFwiLC8vMDrlpbMgMTrnlLdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93OmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCLpgI/mmI7otKjphbjpkqBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlUGljOlwiLi4vLi4vc3RhdGljL2RlbW8vZGF0YXBpYy8yLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgUGljVGV4dFN0eWxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9TdHlsZTp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheU51bTpcIjM0V1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDpcIjM6NTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlU3R5bGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjpcIlBla2luZ1VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlTnVtOjM0OTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50TnVtOjM0NTYsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWtlTnVtOjM0NSxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGxvd0xpc3QubGlzdC5wdXNoKG9iaik7Ly/ov73liqBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGxvd0xpc3QubG9hZFRleHQgPSBcIuS4iuaLieWKoOi9veabtOWkmlwiOyAgICAgLy/lpI3ljp/nirbmgIEgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vdGhpcy5mb2xsb3dMaXN0LmxvYWRUZXh0ID0gXCLmsqHmnInmm7TlpJrmlbDmja5cIjtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGNvbW1vbkxpc3QsXG4gICAgICAgIG5ld3NOYXZCYXIsXG4gICAgICAgIGxvYWRNb3JlLFxuICAgICAgICB0b3BpY05hdixcbiAgICAgICAgdG9waWNMaXN0XG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHVuaS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0PSByZXMud2luZG93SGVpZ2h0IC0gdW5pLnVweDJweCgxMDApOy8vdGFiQmFy55qE6auY5bqm5pivMTAwdXB4XG4gICAgICAgICAgICAgICAgdGhpcy5zd2lwZXJIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbn1cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbmV3cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9uZXdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==