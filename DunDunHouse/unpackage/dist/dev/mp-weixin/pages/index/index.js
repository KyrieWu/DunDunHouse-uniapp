"use strict";
var common_vendor = require("../../common/vendor.js");
const goodsList = () => "../components/goods-list/goods-list.js";
const _sfc_main = {
  onLoad() {
    this.getGoods();
    this.getSwipers();
  },
  components: {
    goodsList
  },
  setup() {
    let navs = common_vendor.reactive([
      {
        icon: "iconfont icon-ziyuan",
        title: "\u6566\u6566\u5C4B",
        path: "/pages/goods/goods"
      },
      {
        icon: "iconfont icon-guanyuwomen",
        title: "\u8054\u7CFB\u6211\u4EEC",
        path: "/pages/contact/contact"
      },
      {
        icon: "iconfont icon-tupian",
        title: "\u793E\u533A\u56FE\u7247",
        path: "/pages/pics/pics"
      },
      {
        icon: "iconfont icon-shipin",
        title: "\u5B66\u4E60\u89C6\u9891",
        path: "/pages/videos/videos"
      }
    ]);
    let $store = common_vendor.useStore();
    let getSwipers = function() {
      $store.dispatch("getSwipers");
    };
    let getGoods = function() {
      $store.dispatch("getGoods");
    };
    let swipers = common_vendor.computed$1(() => $store.state.swipers.swipers);
    let goods = common_vendor.computed$1(() => $store.state.goods.goods);
    let navItemClick = function(url) {
      common_vendor.index.navigateTo({
        url
      });
    };
    return {
      swipers,
      goods,
      navs,
      navItemClick,
      getSwipers,
      getGoods
    };
  }
};
if (!Array) {
  const _component_goodsList = common_vendor.resolveComponent("goodsList");
  _component_goodsList();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.swipers, (item, k0, i0) => {
      return {
        a: item.img,
        b: item.id
      };
    }),
    b: common_vendor.f($setup.navs, (item, index, i0) => {
      return {
        a: common_vendor.n(item.icon),
        b: common_vendor.t(item.title),
        c: index,
        d: common_vendor.o(($event) => $setup.navItemClick(item.path))
      };
    }),
    c: common_vendor.p({
      goods: $setup.goods
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/\u5B9E\u6218\u7EC3\u4E60/DundunHouse-uniapp/DunDunHouse-uniapp/DunDunHouse/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
