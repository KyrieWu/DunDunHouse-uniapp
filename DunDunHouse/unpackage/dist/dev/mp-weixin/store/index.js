"use strict";
var common_vendor = require("../common/vendor.js");
var store_swipers = require("./swipers.js");
var store_getGoods = require("./getGoods.js");
var store = common_vendor.createStore({
  modules: {
    swipers: store_swipers.swipers,
    goods: store_getGoods.goods
  }
});
exports.store = store;
