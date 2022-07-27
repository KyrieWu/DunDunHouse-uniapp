import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	myRequest
} from '@/util/api.js'
import store from '@/store/index.js'
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store);
	app.config.globalProperties.$myRequest = myRequest;
	return {
		app
	}
}
// #endif
