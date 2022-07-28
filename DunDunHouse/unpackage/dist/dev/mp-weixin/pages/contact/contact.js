"use strict";
var common_vendor = require("../../common/vendor.js");
var _imports_0 = "/static/\u8054\u7CFB\u6211\u4EEC.jpeg";
const _sfc_main = {
  data() {
    return {
      latitude: 34.196574,
      longitude: 108.883614,
      markers: [{
        latitude: 34.196574,
        longitude: 108.883614,
        iconPath: "@/static/hmlogo.png",
        width: 30,
        height: 30
      }],
      scale: 13
    };
  },
  methods: {
    phone() {
      common_vendor.index.makePhoneCall({
        phoneNumber: "400--648-9090"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _imports_0,
    b: common_vendor.o((...args) => $options.phone && $options.phone(...args)),
    c: $data.latitude,
    d: $data.scale,
    e: $data.longitude,
    f: $data.markers
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/\u5B9E\u6218\u7EC3\u4E60/DundunHouse-uniapp/DunDunHouse-uniapp/DunDunHouse/pages/contact/contact.vue"]]);
wx.createPage(MiniProgramPage);
