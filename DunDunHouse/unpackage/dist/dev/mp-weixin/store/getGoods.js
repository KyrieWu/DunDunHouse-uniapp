"use strict";
var util_api = require("../util/api.js");
const state = {
  goods: []
};
const mutations = {
  GOODS(state2, goods2) {
    state2.goods = goods2;
  }
};
const actions = {
  async getGoods({
    commit
  }) {
    let result = await util_api.myRequest({
      url: "/api/getgoods"
    });
    if (result.statusCode == 200) {
      commit("GOODS", result.data.message);
    }
  }
};
const getters = {};
var goods = {
  state,
  mutations,
  actions,
  getters
};
exports.goods = goods;
