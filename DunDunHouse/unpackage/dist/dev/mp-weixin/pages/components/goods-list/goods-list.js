"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: ["goods"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.goods, (item, k0, i0) => {
      return {
        a: item.img_url,
        b: common_vendor.t(item.sell_price),
        c: common_vendor.t(item.market_price),
        d: common_vendor.t(item.title),
        e: item.id
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ff8ae0e2"], ["__file", "D:/\u524D\u7AEF/\u5B9E\u6218\u7EC3\u4E60/DundunHouse-uniapp/DunDunHouse-uniapp/DunDunHouse/pages/components/goods-list/goods-list.vue"]]);
wx.createComponent(Component);
