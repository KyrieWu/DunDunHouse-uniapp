"use strict";
var util_api = require("../util/api.js");
const state = {
  imgcategory: []
};
const mutations = {
  IMGCATEGORY(state2, imgcategory2) {
    state2.imgcategory = imgcategory2;
  }
};
const actions = {
  async getImgCategory({
    commit
  }) {
    const imgcategory2 = await util_api.myRequest({
      url: "/api/getimgcategory"
    });
    if (imgcategory2.statusCode == 200) {
      commit("IMGCATEGORY", imgcategory2.data.message);
    }
  }
};
const getters = {};
var imgcategory = {
  state,
  mutations,
  actions,
  getters
};
exports.imgcategory = imgcategory;
