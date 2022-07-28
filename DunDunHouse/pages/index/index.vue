<template>
	<view class="home">
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品区 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goodsList :goods="goods" />
		</view>
	</view>
</template>

<script>
	import goodsList from '@/pages/components/goods-list/goods-list.vue'
	import {
		reactive,
		getCurrentInstance,
		ref,
		onMounted,
		computed
	} from 'vue'
	import {
		useStore
	} from 'vuex'
	export default {
		onLoad() {
			this.getGoods();
			this.getSwipers()
		},
		components: {
			goodsList
		},
		setup() {
			let navs = reactive([{
					icon: 'iconfont icon-ziyuan',
					title: '敦敦屋',
					path: '/pages/goods/goods'
				},
				{
					icon: 'iconfont icon-guanyuwomen',
					title: '联系我们',
					path: '/pages/contact/contact'
				},
				{
					icon: 'iconfont icon-tupian',
					title: '社区图片',
					path: '/pages/pics/pics'
				},
				{
					icon: 'iconfont icon-shipin',
					title: '学习视频',
					path: '/pages/videos/videos'
				},
			])
			let $store = useStore();
			
			let getSwipers = function(){
				$store.dispatch('getSwipers');
			}
			let getGoods = function(){
				$store.dispatch('getGoods')
			}
			
			// onMounted(()=>{
			// 	getSwipers();
			// 	getGoods();
			// })

			let swipers = computed(() => $store.state.swipers.swipers);
			let goods = computed(() => $store.state.goods.goods);

			let navItemClick = function(url) {
				uni.navigateTo({
					url
				})
			}
			return {
				swipers,
				goods,
				navs,
				navItemClick,
				getSwipers,
				getGoods
			}
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

		.nav {
			display: flex;

			.nav_item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background-color: #b50e03;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}

				.icon-tupian {
					font-size: 45rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		.hot_goods {
			background-color: #eee;
			overflow: hidden;
			margin-top: 10px;

			.tit {
				height: 50px;
				line-height: 50px;
				color: #b50e03;
				text-align: center;
				letter-spacing: 20px;
				background-color: #fff;
				margin: 7px 0;
			}
		}
	}
</style>
