"use strict";
var util_api = require("../util/api.js");
const state = {
  swipers: []
};
const mutations = {
  SWIPERS(state2, swipers2) {
    state2.swipers = swipers2;
  }
};
const actions = {
  async getSwipers({
    commit
  }) {
    let result = await util_api.myRequest({
      url: "/api/getlunbo"
    });
    if (result.statusCode == 200) {
      commit("SWIPERS", result.data.message);
    }
  }
};
const getters = {};
var swipers = {
  state,
  mutations,
  actions,
  getters
};
exports.swipers = swipers;
