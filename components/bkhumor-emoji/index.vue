<template>
	<view class="emotion-box">
		<swiper class="swiper" disable-programmatic-animation="true" indicator-dots="true">
		<swiper-item class="emotion-box-line">
			<view  v-for="(line, i) in list1" v-bind:key="i">
			<view v-for="(im, ix) in line" v-bind:key="ix" class="swiper-item emotion-item" :style="{width:img_width+'px'}" @click="clickHandler(im)">
				<rich-text :nodes="im.toString().replace(/^([1-9]\d?|97)$/g, emotion(im))"></rich-text> 
			</view>
			</view>
		</swiper-item>
		<swiper-item class="emotion-box-line">
			<view  v-for="(line, i) in list2" v-bind:key="i">
			<view v-for="(im, ix) in line" v-bind:key="ix" class="swiper-item emotion-item" :style="{width:img_width+'px'}" @click="clickHandler(im)">
				<rich-text :nodes="im.toString().replace(/^([1-9]\d?|97)$/g, emotion(im))"></rich-text> 
			</view>
			</view>
		</swiper-item>
		<swiper-item class="emotion-box-line">
			<view  v-for="(line, i) in list3" v-bind:key="i">
			<view v-for="(im, ix) in line" v-bind:key="ix" class="swiper-item emotion-item" :style="{width:img_width+'px'}" @click="clickHandler(im)">
				<rich-text :nodes="im.toString().replace(/^([1-9]\d?|97)$/g, emotion(im))"></rich-text> 
			</view>
			</view>
		</swiper-item>
		<swiper-item class="emotion-box-line">
			<view  v-for="(line, i) in list4" v-bind:key="i">
			<view v-for="(im, ix) in line" v-bind:key="ix" class="swiper-item emotion-item" :style="{width:img_width+'px'}" @click="clickHandler(im)">
				<rich-text :nodes="im.toString().replace(/^([1-9]\d?|97)$/g, emotion(im))"></rich-text> 
			</view>
			</view>
		</swiper-item>
		<swiper-item class="emotion-box-line">
			<view  v-for="(line, i) in list5" v-bind:key="i">
			<view v-for="(im, ix) in line" v-bind:key="ix" class="swiper-item emotion-item" :style="{width:img_width+'px'}" @click="clickHandler(im)">
				<rich-text :nodes="im.toString().replace(/^([1-9]\d?|97)$/g, emotion(im))"></rich-text> 
			</view>
			</view>
		</swiper-item>
	</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			
		},

		data() {
			return {
				// 画矩阵
				list1: [
					[1,2,3],[4,5,6],
					[7,8,9],[10,11,12],
					[13,14,15],[16,17,18],
					[19,20,21],[22,23,98]
				],
				list2:[
					[25,26,27],[28,29,30],
					[31,32,33],[34,35,36],
					[37,38,39],[40,41,42],
					[43,44,45],[46,47,98]
				],
				list3:[
					[49,50,51],[52,53,54],
					[55,56,57],[58,59,60],
					[61,62,63],[64,65,66],
					[67,68,69],[70,71,98]
				],
				list4:[
					[73,74,75],[76,77,78],
					[79,80,81],[82,83,84],
					[85,86,87],[88,89,90],
					[91,92,93],[94,95,98]
				],
				list5:[
					[24],[48],[72],[96],[97],[98]
				],
				item: [],
				img_width:0
			}
		},
		mounted() {
			 // #ifdef APP-PLUS || H5
			const query = uni.createSelectorQuery().in(this);
			query.select('.emotion-box').boundingClientRect(data => {
				console.log(data.width / 10);
				this.img_width = data.width / 10;
			}).exec();
			// #endif
			// #ifdef MP-WEIXIN
			this.img_width = 22;
			// #endif
		},
		methods: {
			
			clickHandler(i) {
				let emotion = `[em_${i}]`
				this.$emit('emotion', emotion);
			},
			emotion(res) {
				const list = Array.from({length:100}, (v,k) => k)
				let index = list.indexOf(res)
				//  请将此处地址更换为自己服务器的地址
				return `<img src="/static/bkhumor-emoji/${index}.gif" align="middle">`
			}
		}
	}
</script>

<style scoped>
	.emotion-box {
		height: 200px;
		margin: 0 auto;
		width: 750rpx;
		box-sizing: border-box;
		padding-top: 8upx;
		overflow: hidden;
		background: white;
	}
					
	.emotion-box-line {
		display: flex;
	}

	.emotion-item {
		flex: 1;
		text-align: center;
		cursor: pointer;
		padding:10upx;
	}
</style>
