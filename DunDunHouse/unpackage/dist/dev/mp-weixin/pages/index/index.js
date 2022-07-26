"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    let $myRequest = common_vendor.getCurrentInstance().appContext.config.globalProperties.$myRequest;
    let swipers = common_vendor.reactive([]);
    let isShow = common_vendor.ref(false);
    common_vendor.onBeforeMount(async () => {
      let res = await $myRequest({
        url: "/api/getlunbo"
      });
      swipers = res.data.message;
      isShow.value = true;
    });
    return {
      swipers,
      isShow
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $setup.isShow
  }, $setup.isShow ? {
    b: common_vendor.f($setup.swipers, (item, k0, i0) => {
      return {
        a: item.img,
        b: item.id
      };
    })
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/\u5B9E\u6218\u7EC3\u4E60/DundunHouse-uniapp/DunDunHouse-uniapp/DunDunHouse/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
