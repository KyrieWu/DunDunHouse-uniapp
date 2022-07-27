"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var util_api = require("./util/api.js");
var store_index = require("./store/index.js");
require("./store/swipers.js");
require("./store/getGoods.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/cart/cart.js";
  "./pages/member/member.js";
  "./pages/news/news.js";
  "./pages/goods/goods.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u524D\u7AEF/\u5B9E\u6218\u7EC3\u4E60/DundunHouse-uniapp/DunDunHouse-uniapp/DunDunHouse/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  app.config.globalProperties.$myRequest = util_api.myRequest;
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
