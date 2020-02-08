(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user-list/user-list"],{

/***/ 73:
/*!***********************************************************************!*\
  !*** D:/uniapp/demo/main.js?{"page":"pages%2Fuser-list%2Fuser-list"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _userList = _interopRequireDefault(__webpack_require__(/*! ./pages/user-list/user-list.vue */ 74));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_userList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 74:
/*!****************************************************!*\
  !*** D:/uniapp/demo/pages/user-list/user-list.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.vue?vue&type=template&id=79d0d97a& */ 75);
/* harmony import */ var _user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.vue?vue&type=script&lang=js& */ 77);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs




/* normalize component */

var component = Object(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "uniapp/demo/pages/user-list/user-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 75:
/*!***********************************************************************************!*\
  !*** D:/uniapp/demo/pages/user-list/user-list.vue?vue&type=template&id=79d0d97a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-list.vue?vue&type=template&id=79d0d97a& */ 76);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 76:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/user-list/user-list.vue?vue&type=template&id=79d0d97a& ***!
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

/***/ 77:
/*!*****************************************************************************!*\
  !*** D:/uniapp/demo/pages/user-list/user-list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-list.vue?vue&type=script&lang=js& */ 78);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 78:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/user-list/user-list.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var swiperTabHead = function swiperTabHead() {return __webpack_require__.e(/*! import() | components/index/swiper-tab-head */ "components/index/swiper-tab-head").then(__webpack_require__.bind(null, /*! ../../components/index/swiper-tab-head.vue */ 149));};var tagGenderAge = function tagGenderAge() {return __webpack_require__.e(/*! import() | components/common/tag-gender-age */ "components/common/tag-gender-age").then(__webpack_require__.bind(null, /*! ../../components/common/tag-gender-age.vue */ 269));};var userList = function userList() {return __webpack_require__.e(/*! import() | components/user-list/user-list */ "components/user-list/user-list").then(__webpack_require__.bind(null, /*! ../../components/user-list/user-list.vue */ 276));};var loadMore = function loadMore() {return __webpack_require__.e(/*! import() | components/common/load-more */ "components/common/load-more").then(__webpack_require__.bind(null, /*! ../../components/common/load-more.vue */ 156));};var emptyContent = function emptyContent() {return __webpack_require__.e(/*! import() | components/common/empty-content */ "components/common/empty-content").then(__webpack_require__.bind(null, /*! ../../components/common/empty-content.vue */ 163));};var _default =























































{
  components: {
    swiperTabHead: swiperTabHead,
    tagGenderAge: tagGenderAge,
    userList: userList,
    loadMore: loadMore,
    emptyContent: emptyContent },

  data: function data() {
    return {
      swiperHeight: 500,
      tabIndex: 0,
      tabBars: [
      { name: "互关", id: "huguan", num: 10 },
      { name: "关注", id: "guanzhu", num: 20 },
      { name: "粉丝", id: "fensi", num: 23 }],

      tabList: [
      {
        loadText: "上拉加载更多",
        list: [
        {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "1ATM",
          gender: 1,
          age: 28,
          isFollow: true },

        {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "ATM",
          gender: 0,
          age: 28,
          isFollow: false },
        {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "ATM",
          gender: 0,
          age: 28,
          isFollow: false },
        {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "ATM",
          gender: 0,
          age: 28,
          isFollow: false },
        {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "ATM",
          gender: 0,
          age: 28,
          isFollow: false },
        {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "ATM",
          gender: 0,
          age: 28,
          isFollow: false },
        {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "ATM",
          gender: 0,
          age: 28,
          isFollow: false },
        {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "ATM",
          gender: 0,
          age: 28,
          isFollow: false },
        {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "ATM",
          gender: 0,
          age: 28,
          isFollow: false },
        {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "ATM",
          gender: 0,
          age: 28,
          isFollow: false }] },



      {
        loadText: "上拉加载更多",
        list: [
        {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "2ATM",
          gender: 1,
          age: 28,
          isFollow: true },

        {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "ATM",
          gender: 0,
          age: 28,
          isFollow: false }] },



      {
        loadText: "上拉加载更多",
        list: [
        {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "3ATM",
          gender: 1,
          age: 28,
          isFollow: true },

        {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "ATM",
          gender: 0,
          age: 28,
          isFollow: false }] }] };








  },
  onLoad: function onLoad() {var _this = this;
    uni.getSystemInfo({
      success: function success(res) {
        var height = res.windowHeight - uni.upx2px(100); //tabBar的高度是100upx
        _this.swiperHeight = height;
      } });

  },
  methods: {
    tabSwitch: function tabSwitch(index) {
      //点击操作获取了当前的index，再将其写入tabIndex中，匹配的项目改变样式
      this.tabIndex = index;
      //console.log(index)
    },
    follow: function follow() {
      this.item.isFollow != this.item.isFollow;
    },
    //tabBar滑动事件
    tabChange: function tabChange(e) {
      this.tabIndex = e.detail.current;
      //console.log(index);
    },
    loadMore: function loadMore(index) {var _this2 = this;
      if (this.tabList[index].loadText != "上拉加载更多") {
        return; //如果正在加载中(＾o＾)ﾉ或没有数据可以加载，则停止请求
      }
      this.tabList[index].loadText = "加载中(＾o＾)ﾉ";
      //修改状态
      setTimeout(function () {
        //示例:加载2000ms后从服务端获取了新的数据
        var obj = {
          userpic: "../../static/demo/userpic/2.jpg",
          name: "reATM",
          gender: 1,
          age: 28,
          isFollow: true };

        _this2.tabList[index].list.push(obj); //追加

        _this2.tabList[index].loadText = "上拉加载更多"; //复原状态              
      }, 2000);

      //this.tabList[index].loadText = "没有更多数据";

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ })

},[[73,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1saXN0L3VzZXItbGlzdC52dWU/YjI2NSIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1saXN0L3VzZXItbGlzdC52dWU/MTkxZiIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1saXN0L3VzZXItbGlzdC52dWU/YjA1MCIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1saXN0L3VzZXItbGlzdC52dWU/ZDQ1NSIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1saXN0L3VzZXItbGlzdC52dWUiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiLCJjb21wb25lbnRzIiwic3dpcGVyVGFiSGVhZCIsInRhZ0dlbmRlckFnZSIsInVzZXJMaXN0IiwibG9hZE1vcmUiLCJlbXB0eUNvbnRlbnQiLCJkYXRhIiwic3dpcGVySGVpZ2h0IiwidGFiSW5kZXgiLCJ0YWJCYXJzIiwibmFtZSIsImlkIiwibnVtIiwidGFiTGlzdCIsImxvYWRUZXh0IiwibGlzdCIsInVzZXJwaWMiLCJnZW5kZXIiLCJhZ2UiLCJpc0ZvbGxvdyIsIm9uTG9hZCIsInVuaSIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwidXB4MnB4IiwibWV0aG9kcyIsInRhYlN3aXRjaCIsImluZGV4IiwiZm9sbG93IiwiaXRlbSIsInRhYkNoYW5nZSIsImUiLCJkZXRhaWwiLCJjdXJyZW50Iiwic2V0VGltZW91dCIsIm9iaiIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUEsd0NBQW1COztBQUVuQjtBQUNBLHVHO0FBQ0FBLFVBQVUsQ0FBQ0MsaUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFB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QUMsaUNBREQ7QUFFUE4sY0FBSSxFQUFDLE9BRkU7QUFHUE8sZ0JBQU0sRUFBQyxDQUhBO0FBSVBDLGFBQUcsRUFBQyxFQUpHO0FBS1BDLGtCQUFRLEVBQUMsSUFMRixFQUFWOztBQU9BLGNBQUksQ0FBQ04sT0FBTCxDQUFhaUIsS0FBYixFQUFvQmYsSUFBcEIsQ0FBeUJ3QixJQUF6QixDQUE4QkQsR0FBOUIsRUFUWSxDQVN1Qjs7QUFFbkMsY0FBSSxDQUFDekIsT0FBTCxDQUFhaUIsS0FBYixFQUFvQmhCLFFBQXBCLEdBQStCLFFBQS9CLENBWFksQ0FXaUM7QUFDaEQsT0FaUyxFQVlQLElBWk8sQ0FBVjs7QUFjQTs7QUFFSCxLQXBDRixFQXpJSyxFIiwiZmlsZSI6InBhZ2VzL3VzZXItbGlzdC91c2VyLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZScgICAgICAgICAgICBcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvdXNlci1saXN0L3VzZXItbGlzdC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91c2VyLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5ZDBkOTdhJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdXNlci1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXNlci1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc5ZDBkOTdhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc5ZDBkOTdhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc5ZDBkOTdhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi91c2VyLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5ZDBkOTdhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc5ZDBkOTdhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlhcHAvZGVtby9wYWdlcy91c2VyLWxpc3QvdXNlci1saXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdXNlci1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OWQwZDk3YSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3VzZXItbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdXNlci1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbiAgICBpbXBvcnQgc3dpcGVyVGFiSGVhZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2luZGV4L3N3aXBlci10YWItaGVhZC52dWUnO1xuICAgIGltcG9ydCB0YWdHZW5kZXJBZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vdGFnLWdlbmRlci1hZ2UudnVlJztcbiAgICBpbXBvcnQgdXNlckxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91c2VyLWxpc3QvdXNlci1saXN0LnZ1ZSc7XG4gICAgaW1wb3J0IGxvYWRNb3JlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL2xvYWQtbW9yZS52dWUnO1xuICAgIGltcG9ydCBlbXB0eUNvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbW9uL2VtcHR5LWNvbnRlbnQudnVlXCI7XG4gICAgXG5cdGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czp7XG4gICAgICAgICAgICBzd2lwZXJUYWJIZWFkLFxuICAgICAgICAgICAgdGFnR2VuZGVyQWdlLFxuICAgICAgICAgICAgdXNlckxpc3QsXG4gICAgICAgICAgICBsb2FkTW9yZSxcbiAgICAgICAgICAgIGVtcHR5Q29udGVudFxuICAgICAgICB9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN3aXBlckhlaWdodDo1MDAsXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg6MCxcblx0XHRcdFx0dGFiQmFyczpbXG5cdFx0XHRcdCAgICB7bmFtZTpcIuS6kuWFs1wiLGlkOlwiaHVndWFuXCIsIG51bToxMCAgIH0sXG5cdFx0XHRcdCAgICB7bmFtZTpcIuWFs+azqFwiLGlkOlwiZ3VhbnpodVwiLG51bToyMCAgIH0sXG5cdFx0XHRcdCAgICB7bmFtZTpcIueyieS4nVwiLGlkOlwiZmVuc2lcIiwgIG51bToyMyAgIH0sICAgICAgICAgICAgICBcblx0XHRcdFx0XSxcbiAgICAgICAgICAgICAgICB0YWJMaXN0OltcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFRleHQ6XCLkuIrmi4nliqDovb3mm7TlpJpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6WyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycGljOlwiLi4vLi4vc3RhdGljL2RlbW8vdXNlcnBpYy8yLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOlwiMUFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzp0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRUZXh0Olwi5LiK5ouJ5Yqg6L295pu05aSaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OlsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpcIjJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOjEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6dHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycGljOlwiLi4vLi4vc3RhdGljL2RlbW8vdXNlcnBpYy8yLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOlwiQVRNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmRlcjowLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ2U6MjgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93OmZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRUZXh0Olwi5LiK5ouJ5Yqg6L295pu05aSaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OlsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpcIjNBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOjEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6dHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycGljOlwiLi4vLi4vc3RhdGljL2RlbW8vdXNlcnBpYy8yLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOlwiQVRNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmRlcjowLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ2U6MjgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93OmZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcblx0XHRcdH1cblx0XHR9LFxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB1bmkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0PSByZXMud2luZG93SGVpZ2h0IC0gdW5pLnVweDJweCgxMDApOy8vdGFiQmFy55qE6auY5bqm5pivMTAwdXB4XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpcGVySGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0dGFiU3dpdGNoKGluZGV4KXtcblx0XHRcdCAgICAvL+eCueWHu+aTjeS9nOiOt+WPluS6huW9k+WJjeeahGluZGV477yM5YaN5bCG5YW25YaZ5YWldGFiSW5kZXjkuK3vvIzljLnphY3nmoTpobnnm67mlLnlj5jmoLflvI9cblx0XHRcdCAgICB0aGlzLnRhYkluZGV4ID0gaW5kZXg7XG5cdFx0XHQgICAgLy9jb25zb2xlLmxvZyhpbmRleClcblx0XHRcdH0sXG4gICAgICAgICAgICBmb2xsb3coKXtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0uaXNGb2xsb3cgIT10aGlzLml0ZW0uaXNGb2xsb3c7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy90YWJCYXLmu5Hliqjkuovku7ZcbiAgICAgICAgICAgIHRhYkNoYW5nZShlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkluZGV4ID0gZS5kZXRhaWwuY3VycmVudDtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkTW9yZShpbmRleCl7XG4gICAgICAgICAgICAgICAgaWYoIHRoaXMudGFiTGlzdFtpbmRleF0ubG9hZFRleHQgIT0gXCLkuIrmi4nliqDovb3mm7TlpJpcIil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsvL+WmguaenOato+WcqOWKoOi9veS4rSjvvL5v77y+Ke++ieaIluayoeacieaVsOaNruWPr+S7peWKoOi9ve+8jOWImeWBnOatouivt+axglxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLmxvYWRUZXh0ID0gXCLliqDovb3kuK0o77y+b++8vinvvolcIjtcbiAgICAgICAgICAgICAgICAvL+S/ruaUueeKtuaAgVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8v56S65L6LOuWKoOi9vTIwMDBtc+WQjuS7juacjeWKoeerr+iOt+WPluS6huaWsOeahOaVsOaNrlxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0geyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgIHVzZXJwaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJyZUFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MSxcbiAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI4LFxuICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzp0cnVlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0ubGlzdC5wdXNoKG9iaik7Ly/ov73liqBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0ubG9hZFRleHQgPSBcIuS4iuaLieWKoOi9veabtOWkmlwiOyAgICAgLy/lpI3ljp/nirbmgIEgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vdGhpcy50YWJMaXN0W2luZGV4XS5sb2FkVGV4dCA9IFwi5rKh5pyJ5pu05aSa5pWw5o2uXCI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cdFx0fVxuXHR9XG4iXSwic291cmNlUm9vdCI6IiJ9