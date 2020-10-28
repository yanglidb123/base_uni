<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
			<text class="title">全局过滤器： {{ number | filterDecimal}}</text>
		</view>
		<view class="text-area" @click="countNumberAdd">
			<text>store countNumber++: {{ countNumber }}</text>
		</view>
		<view class="text-area">
			<text>i18n: {{ i18n.title }}</text>
		</view>
		<picker
				:range="languageList"
				:value="currentLangIndex"
				range-key="name"
				@change="bindPickerChange">
			<text>语言切换：{{ $t('name') }}</text>
		</picker>
	</view>
</template>

<script>
	import { mapState, mapMutations, mapActions } from 'vuex'

	export default {
		data() {
			return {
				title: 'Hello',
				number: 123,
			}
		},
		computed: {
			...mapState([
				'token',
				'countNumber'
			]),
			currentLangIndex() {
				return this.languageList.findIndex(item => item.locale === this.$i18n.locale) || 0;
			},
			// 获取多语言列表 并排序
			languageList() {
				let result = [];
				let messages = this.$i18n.messages;
				Object.keys(messages).forEach(item => {
					result.push({
						locale: item,
						name: messages[item].name,
						order: messages[item].order
					})
				});
				return result.sort((a, b) => a.order - b.order);
			},
		},
		onLoad() {
			// 使用全局注册的插件 示例
			this.$toast('123123');
		},
		methods: {
			// store countNumber
			...mapMutations({
				countNumberAdd: 'COUNT_NUMBER_ADD',
			}),
			// 切换语言
			bindPickerChange(e) {
				let index = e.target.value;
				let locale = this.languageList[index].locale;
				this.$i18n.locale = locale;
				uni.setStorageSync('lang', locale);
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
