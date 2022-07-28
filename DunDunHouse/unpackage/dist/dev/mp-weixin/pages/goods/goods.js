"use strict";
var common_vendor = require("../../common/vendor.js");
const goodsList = () => "../components/goods-list/goods-list.js";
const _sfc_main = {
  components: {
    goodsList
  },
  setup() {
    let flag = common_vendor.ref(false);
    let $store = common_vendor.useStore();
    let getGoods = function(callBack) {
      $store.dispatch("getGoods");
      callBack && callBack();
    };
    let goods = common_vendor.computed$1(() => $store.state.goods.goods);
    common_vendor.onMounted(() => {
      getGoods();
    });
    return {
      goods,
      flag,
      getGoods
    };
  },
  onReachBottom() {
    if (this.goods.length > 20)
      return this.flag = true;
    this.goods.push(...this.goods);
  },
  onPullDownRefresh() {
    this.flag = false;
    this.goods = null;
    setTimeout(() => {
      this.getGoods(() => {
        common_vendor.index.stopPullDownRefresh();
      });
    }, 1e3);
  }
};
if (!Array) {
  const _component_goodsList = common_vendor.resolveComponent("goodsList");
  _component_goodsList();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      goods: $setup.goods
    }),
    b: $setup.flag
  }, $setup.flag ? {} : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/\u5B9E\u6218\u7EC3\u4E60/DundunHouse-uniapp/DunDunHouse-uniapp/DunDunHouse/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
