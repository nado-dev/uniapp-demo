(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user-list/user-list"],{

/***/ 75:
/*!***********************************************************************!*\
  !*** D:/uniapp/demo/main.js?{"page":"pages%2Fuser-list%2Fuser-list"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _userList = _interopRequireDefault(__webpack_require__(/*! ./pages/user-list/user-list.vue */ 76));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_userList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 76:
/*!****************************************************!*\
  !*** D:/uniapp/demo/pages/user-list/user-list.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.vue?vue&type=template&id=79d0d97a& */ 77);
/* harmony import */ var _user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.vue?vue&type=script&lang=js& */ 79);
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

/***/ 77:
/*!***********************************************************************************!*\
  !*** D:/uniapp/demo/pages/user-list/user-list.vue?vue&type=template&id=79d0d97a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-list.vue?vue&type=template&id=79d0d97a& */ 78);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_79d0d97a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 78:
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

/***/ 79:
/*!*****************************************************************************!*\
  !*** D:/uniapp/demo/pages/user-list/user-list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-list.vue?vue&type=script&lang=js& */ 80);
/* harmony import */ var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 80:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniapp/demo/pages/user-list/user-list.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var swiperTabHead = function swiperTabHead() {return __webpack_require__.e(/*! import() | components/index/swiper-tab-head */ "components/index/swiper-tab-head").then(__webpack_require__.bind(null, /*! ../../components/index/swiper-tab-head.vue */ 167));};var tagGenderAge = function tagGenderAge() {return __webpack_require__.e(/*! import() | components/common/tag-gender-age */ "components/common/tag-gender-age").then(__webpack_require__.bind(null, /*! ../../components/common/tag-gender-age.vue */ 287));};var userList = function userList() {return __webpack_require__.e(/*! import() | components/user-list/user-list */ "components/user-list/user-list").then(__webpack_require__.bind(null, /*! ../../components/user-list/user-list.vue */ 294));};var loadMore = function loadMore() {return __webpack_require__.e(/*! import() | components/common/load-more */ "components/common/load-more").then(__webpack_require__.bind(null, /*! ../../components/common/load-more.vue */ 174));};var emptyContent = function emptyContent() {return __webpack_require__.e(/*! import() | components/common/empty-content */ "components/common/empty-content").then(__webpack_require__.bind(null, /*! ../../components/common/empty-content.vue */ 181));};var _default =
























































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

},[[75,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1saXN0L3VzZXItbGlzdC52dWU/YjI2NSIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1saXN0L3VzZXItbGlzdC52dWU/MTkxZiIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1saXN0L3VzZXItbGlzdC52dWU/YjA1MCIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1saXN0L3VzZXItbGlzdC52dWU/ZDQ1NSIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL2RlbW8vcGFnZXMvdXNlci1saXN0L3VzZXItbGlzdC52dWUiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiLCJjb21wb25lbnRzIiwic3dpcGVyVGFiSGVhZCIsInRhZ0dlbmRlckFnZSIsInVzZXJMaXN0IiwibG9hZE1vcmUiLCJlbXB0eUNvbnRlbnQiLCJkYXRhIiwic3dpcGVySGVpZ2h0IiwidGFiSW5kZXgiLCJ0YWJCYXJzIiwibmFtZSIsImlkIiwibnVtIiwidGFiTGlzdCIsImxvYWRUZXh0IiwibGlzdCIsInVzZXJwaWMiLCJnZW5kZXIiLCJhZ2UiLCJpc0ZvbGxvdyIsIm9uTG9hZCIsInVuaSIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwidXB4MnB4IiwibWV0aG9kcyIsInRhYlN3aXRjaCIsImluZGV4IiwiZm9sbG93IiwiaXRlbSIsInRhYkNoYW5nZSIsImUiLCJkZXRhaWwiLCJjdXJyZW50Iiwic2V0VGltZW91dCIsIm9iaiIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUEsd0NBQW1COztBQUVuQjtBQUNBLHVHO0FBQ0FBLFVBQVUsQ0FBQ0MsaUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFB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QUFDLGlDQUREO0FBRVBOLGNBQUksRUFBQyxPQUZFO0FBR1BPLGdCQUFNLEVBQUMsQ0FIQTtBQUlQQyxhQUFHLEVBQUMsRUFKRztBQUtQQyxrQkFBUSxFQUFDLElBTEYsRUFBVjs7QUFPQSxjQUFJLENBQUNOLE9BQUwsQ0FBYWlCLEtBQWIsRUFBb0JmLElBQXBCLENBQXlCd0IsSUFBekIsQ0FBOEJELEdBQTlCLEVBVFksQ0FTdUI7O0FBRW5DLGNBQUksQ0FBQ3pCLE9BQUwsQ0FBYWlCLEtBQWIsRUFBb0JoQixRQUFwQixHQUErQixRQUEvQixDQVhZLENBV2lDO0FBQ2hELE9BWlMsRUFZUCxJQVpPLENBQVY7O0FBY0E7O0FBRUgsS0FwQ0YsRUF6SUssRSIsImZpbGUiOiJwYWdlcy91c2VyLWxpc3QvdXNlci1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnICAgICAgICAgICAgXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL3VzZXItbGlzdC91c2VyLWxpc3QudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdXNlci1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OWQwZDk3YSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VzZXItbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VzZXItbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3OWQwZDk3YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3OWQwZDk3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3OWQwZDk3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdXNlci1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OWQwZDk3YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3OWQwZDk3YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pYXBwL2RlbW8vcGFnZXMvdXNlci1saXN0L3VzZXItbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3VzZXItbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzlkMGQ5N2EmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91c2VyLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3VzZXItbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuICAgIGltcG9ydCBzd2lwZXJUYWJIZWFkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5kZXgvc3dpcGVyLXRhYi1oZWFkLnZ1ZSc7XG4gICAgaW1wb3J0IHRhZ0dlbmRlckFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi90YWctZ2VuZGVyLWFnZS52dWUnO1xuICAgIGltcG9ydCB1c2VyTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXItbGlzdC91c2VyLWxpc3QudnVlJztcbiAgICBpbXBvcnQgbG9hZE1vcmUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vbG9hZC1tb3JlLnZ1ZSc7XG4gICAgaW1wb3J0IGVtcHR5Q29udGVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vZW1wdHktY29udGVudC52dWVcIjtcbiAgICBcblx0ZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOntcbiAgICAgICAgICAgIHN3aXBlclRhYkhlYWQsXG4gICAgICAgICAgICB0YWdHZW5kZXJBZ2UsXG4gICAgICAgICAgICB1c2VyTGlzdCxcbiAgICAgICAgICAgIGxvYWRNb3JlLFxuICAgICAgICAgICAgZW1wdHlDb250ZW50XG4gICAgICAgIH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3dpcGVySGVpZ2h0OjUwMCxcbiAgICAgICAgICAgICAgICB0YWJJbmRleDowLFxuXHRcdFx0XHR0YWJCYXJzOltcblx0XHRcdFx0ICAgIHtuYW1lOlwi5LqS5YWzXCIsaWQ6XCJodWd1YW5cIiwgbnVtOjEwICAgfSxcblx0XHRcdFx0ICAgIHtuYW1lOlwi5YWz5rOoXCIsaWQ6XCJndWFuemh1XCIsbnVtOjIwICAgfSxcblx0XHRcdFx0ICAgIHtuYW1lOlwi57KJ5LidXCIsaWQ6XCJmZW5zaVwiLCAgbnVtOjIzICAgfSwgICAgICAgICAgICAgIFxuXHRcdFx0XHRdLFxuICAgICAgICAgICAgICAgIHRhYkxpc3Q6W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkVGV4dDpcIuS4iuaLieWKoOi9veabtOWkmlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDpbICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCIxQVRNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmRlcjoxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ2U6MjgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93OnRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpcIkFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpcIkFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpcIkFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpcIkFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpcIkFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpcIkFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpcIkFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpcIkFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpcIkFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFRleHQ6XCLkuIrmi4nliqDovb3mm7TlpJpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6WyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycGljOlwiLi4vLi4vc3RhdGljL2RlbW8vdXNlcnBpYy8yLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOlwiMkFUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzp0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFRleHQ6XCLkuIrmi4nliqDovb3mm7TlpJpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6WyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycGljOlwiLi4vLi4vc3RhdGljL2RlbW8vdXNlcnBpYy8yLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOlwiM0FUTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOjI4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvdzp0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwaWM6XCIuLi8uLi9zdGF0aWMvZGVtby91c2VycGljLzIuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XCJBVE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZToyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3c6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuXHRcdFx0fVxuXHRcdH0sXG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHVuaS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWlnaHQ9IHJlcy53aW5kb3dIZWlnaHQgLSB1bmkudXB4MnB4KDEwMCk7Ly90YWJCYXLnmoTpq5jluqbmmK8xMDB1cHhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2lwZXJIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHR0YWJTd2l0Y2goaW5kZXgpe1xuXHRcdFx0ICAgIC8v54K55Ye75pON5L2c6I635Y+W5LqG5b2T5YmN55qEaW5kZXjvvIzlho3lsIblhbblhpnlhaV0YWJJbmRleOS4re+8jOWMuemFjeeahOmhueebruaUueWPmOagt+W8j1xuXHRcdFx0ICAgIHRoaXMudGFiSW5kZXggPSBpbmRleDtcblx0XHRcdCAgICAvL2NvbnNvbGUubG9nKGluZGV4KVxuXHRcdFx0fSxcbiAgICAgICAgICAgIGZvbGxvdygpe1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5pc0ZvbGxvdyAhPXRoaXMuaXRlbS5pc0ZvbGxvdztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL3RhYkJhcua7keWKqOS6i+S7tlxuICAgICAgICAgICAgdGFiQ2hhbmdlKGUpe1xuICAgICAgICAgICAgICAgIHRoaXMudGFiSW5kZXggPSBlLmRldGFpbC5jdXJyZW50O1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRNb3JlKGluZGV4KXtcbiAgICAgICAgICAgICAgICBpZiggdGhpcy50YWJMaXN0W2luZGV4XS5sb2FkVGV4dCAhPSBcIuS4iuaLieWKoOi9veabtOWkmlwiKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOy8v5aaC5p6c5q2j5Zyo5Yqg6L295LitKO+8vm/vvL4p776J5oiW5rKh5pyJ5pWw5o2u5Y+v5Lul5Yqg6L2977yM5YiZ5YGc5q2i6K+35rGCXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0ubG9hZFRleHQgPSBcIuWKoOi9veS4rSjvvL5v77y+Ke++iVwiO1xuICAgICAgICAgICAgICAgIC8v5L+u5pS554q25oCBXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHsgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy/npLrkvos65Yqg6L29MjAwMG1z5ZCO5LuO5pyN5Yqh56uv6I635Y+W5LqG5paw55qE5pWw5o2uXG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBpYzpcIi4uLy4uL3N0YXRpYy9kZW1vL3VzZXJwaWMvMi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpcInJlQVRNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIGdlbmRlcjoxLFxuICAgICAgICAgICAgICAgICAgICAgICBhZ2U6MjgsXG4gICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93OnRydWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS5saXN0LnB1c2gob2JqKTsvL+i/veWKoFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS5sb2FkVGV4dCA9IFwi5LiK5ouJ5Yqg6L295pu05aSaXCI7ICAgICAvL+WkjeWOn+eKtuaAgSAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy90aGlzLnRhYkxpc3RbaW5kZXhdLmxvYWRUZXh0ID0gXCLmsqHmnInmm7TlpJrmlbDmja5cIjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblx0XHR9XG5cdH1cbiJdLCJzb3VyY2VSb290IjoiIn0=