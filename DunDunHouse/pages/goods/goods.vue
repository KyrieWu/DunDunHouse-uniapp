<template>
	<view>
		<view class="goods_list">
			<goodsList :goods="goods"/>
		</view>
	</view>
</template>

<script>
	import goodsList from '@/pages/components/goods-list/goods-list.vue'
	import {computed} from 'vue'
	import {useStore} from 'vuex'
	export default {
		components:{
			goodsList
		},
		
		setup() {
			let $store = useStore()
			$store.dispatch('getGoods')
			let goods = computed(() => $store.state.goods.goods);
			
			return{
				goods
			}
		}
		}
</script>

<style lang="scss">
.goods_list{
	background-color: #eee;
}
</style>
