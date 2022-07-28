import {
	myRequest
} from '@/util/api.js'

const state = {
	imgcategory: []
}
const mutations = {
	IMGCATEGORY(state, imgcategory) {
		state.imgcategory = imgcategory
	}
}
const actions = {
	async getImgCategory({
		commit
	}) {
		const imgcategory = await myRequest({
			url: '/api/getimgcategory'
		});
		if (imgcategory.statusCode == 200) {
			commit('IMGCATEGORY', imgcategory.data.message);
		}
	}
}
const getters = {}

export default {
	state,
	mutations,
	actions,
	getters
}
