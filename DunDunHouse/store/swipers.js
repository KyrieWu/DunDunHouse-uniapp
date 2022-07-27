import {
	myRequest
} from '@/util/api.js'

const state = {
	swipers: []
}
const mutations = {
	SWIPERS(state, swipers) {
		state.swipers = swipers
	}
}
const actions = {
	async getSwipers({
		commit
	}) {
		let result = await myRequest({
			url: '/api/getlunbo'
		});
		if (result.statusCode == 200) {
			commit("SWIPERS", result.data.message);
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
