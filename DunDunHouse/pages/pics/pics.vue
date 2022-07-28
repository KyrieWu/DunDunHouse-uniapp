<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view @click="leftClickHandle(index)" :class="active === index?'active' :''"
				v-for="(item,index) in imgCategory" :key="index">{{item.title}}</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		useStore
	} from 'vuex'
	import {
		computed,
		ref
	} from 'vue'
	export default {
		setup() {
			let active = ref(0);
			let $store = useStore();
			$store.dispatch('getImgCategory')

			let imgCategory = computed(() => $store.state.imgcategory.imgcategory)

			let leftClickHandle = function(index) {
				active.value = index
			}

			return {
				imgCategory,
				active,
				leftClickHandle
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;

		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active {
				background: #b50e03;
				color: #fff;
			}
		}
	}
</style>
