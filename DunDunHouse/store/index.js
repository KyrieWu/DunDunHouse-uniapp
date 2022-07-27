import {
	createStore
} from 'vuex'

import swipers from './swipers.js'
import goods from './getGoods.js'

export default createStore({
	modules: {
		swipers: swipers,
		goods: goods
	}
})
