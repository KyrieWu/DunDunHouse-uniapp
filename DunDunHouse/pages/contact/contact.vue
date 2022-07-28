<template>
	<view class="contact">
		<image class="img" src="@/static/联系我们.jpeg" mode=""></image>
		<view class="info">
			<view @click="phone">联系电话:400--648-9090(点击拨打)</view>
			<view class="">地址：陕西省西安市</view>
		</view>
		<map class="map" :latitude="latitude" :scale="scale" :longitude="longitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 34.196574,
				longitude: 108.883614,
				markers: [{
					latitude: 34.196574,
					longitude: 108.883614,
					iconPath: '@/static/hmlogo.png',
					width: 30,
					height: 30
				}],
				scale: 13
			}
		},
		methods: {
			phone() {
				uni.makePhoneCall({
					phoneNumber: '400--648-9090'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		width: 750rpx;
		height: 320rpx;

		.info {
			padding: 10rpx 20rpx;
			font-size: 30rpx;

			view {
				line-height: 80px;
				border-bottom: 1px solid #eee;
			}
		}

		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
