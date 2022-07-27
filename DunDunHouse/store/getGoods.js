import {
	myRequest
} from '@/util/api.js'

const state = {
	goods: []
}
const mutations = {
	GOODS(state, goods) {
		state.goods = goods
	}
}
const actions = {
	async getGoods({
		commit
	}) {
		let result = await myRequest({
			url: '/api/getgoods'
		});
		console.log(result)
		if (result.statusCode == 200) {
			commit("GOODS", result.data.message);
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
