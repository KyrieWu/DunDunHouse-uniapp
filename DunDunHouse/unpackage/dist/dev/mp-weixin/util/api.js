"use strict";
var common_vendor = require("../common/vendor.js");
const BASE_URL = "http://localhost:8080";
const myRequest = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASE_URL + options.url,
      method: options.method || "GET",
      data: options.data || {},
      success: (res) => {
        if (res.data.status !== 0) {
          return common_vendor.index.showToast({
            title: "\u6570\u636E\u83B7\u53D6\u5931\u8D25"
          });
        }
        resolve(res);
      },
      fail: (err) => {
        common_vendor.index.showToast({
          title: "\u8BF7\u6C42\u501F\u53E3\u5931\u8D25!"
        });
        reject(err);
      }
    });
  });
};
exports.myRequest = myRequest;
