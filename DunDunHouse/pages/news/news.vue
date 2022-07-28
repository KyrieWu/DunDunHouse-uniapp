<template>
	<view class="news">
		<view class="news_item">
			<image src="https://demoapi.dtcms.net/upload/202104/16/01a894ee-3e7e-4de3-81b6-571f97ce0baa.jpg" mode=""></image>
			<view class="right">
				<view class="tit">
					华为P50 Pro采用矩阵镜头模块设计曝光，华为P40即将跌至白菜价
				</view>
				<view class="info">
					<text>发表时间:</text>
					<text>浏览:</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.news{
		.news_item{
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid #b50e03;
			image{
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
			}
			.right{
				margin-left: 15rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.tit{
					font-size: 33rpx;
				}
				.info{
					font-size: 24rpx;
					text:nth-child(2){
						margin-left: 30px;
					}
				}
			}
			
		}
	}

</style>
