<template>
	<view>
		<view class="goods_list">
			<goodsList :goods="goods" />
			<view class="isOver" v-if="flag">-----我是有底线的-----</view>
		</view>
	</view>
</template>

<script>
	import goodsList from '@/pages/components/goods-list/goods-list.vue'
	import {
		computed,
		ref,
		onMounted,
		reactive
	} from 'vue'
	import {
		useStore
	} from 'vuex'
	export default {
		components: {
			goodsList
		},
		setup() {
			let flag = ref(false);
			let $store = useStore();

			let getGoods = function(callBack) {
				$store.dispatch('getGoods');
				callBack && callBack()
			}

			let goods = computed(() => $store.state.goods.goods);
			onMounted(() => {
				getGoods();
			})

			return {
				goods,
				flag,
				getGoods
			}
		},
		onReachBottom() {
			if (this.goods.length > 20) return this.flag = true;
			this.goods.push(...this.goods);
		},
		onPullDownRefresh() {
			this.flag = false;
			this.goods = null;
			setTimeout(() => {
				this.getGoods(() => {
					uni.stopPullDownRefresh()
				});
			}, 1000)
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background-color: #eee;

		.isOver {
			width: 100%;
			height: 50px;
			line-height: 50px;
			text-align: center;
			background: #fff;
			font-size: 28rpx;
		}
	}
</style>
