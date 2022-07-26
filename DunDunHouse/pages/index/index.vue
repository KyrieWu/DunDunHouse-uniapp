<template>
	<view class="home">
		<swiper indicator-dots circular v-if="isShow">
			<swiper-item v-for="item in swipers" :key="item.id">
				<img :src="item.img">
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		reactive,
		getCurrentInstance,
		ref,
		onBeforeMount,
	} from 'vue'
	export default {
		setup() {
			let $myRequest = getCurrentInstance().appContext.config.globalProperties.$myRequest;
			let swipers = reactive([]);
			let isShow = ref(false);

			onBeforeMount(async () => {
				let res = await $myRequest({
					url: '/api/getlunbo'
				})
				swipers = res.data.message;
				isShow.value = true;
			});
			return {
				//getSwipers,
				swipers,
				isShow
			}
			// onLoad() {
			// 	this.getSwipers()
			// },
			// let getSwipers = async function(){
			// 	const res = await $myRequest({
			// 		url: '/api/getlunbo'
			// 	})
			// 	swipers = res.data.message;
			// 	isShow.value = true;
			// }


		},

	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
