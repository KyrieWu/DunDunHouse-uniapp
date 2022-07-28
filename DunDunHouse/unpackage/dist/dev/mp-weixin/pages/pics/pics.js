"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    let active = common_vendor.ref(0);
    let $store = common_vendor.useStore();
    $store.dispatch("getImgCategory");
    let imgCategory = common_vendor.computed$1(() => $store.state.imgcategory.imgcategory);
    let leftClickHandle = function(index) {
      active.value = index;
    };
    return {
      imgCategory,
      active,
      leftClickHandle
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.imgCategory, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.o(($event) => $setup.leftClickHandle(index)),
        c: common_vendor.n($setup.active === index ? "active" : ""),
        d: index
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/\u5B9E\u6218\u7EC3\u4E60/DundunHouse-uniapp/DunDunHouse-uniapp/DunDunHouse/pages/pics/pics.vue"]]);
wx.createPage(MiniProgramPage);
