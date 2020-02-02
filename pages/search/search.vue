<template>
	<view>
		搜索页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
        //监听搜索框文本变化
        onNavigationBarSearchInputChanged(e) {
            console.log(JSON.stringify(e.text))
        },
        //监听搜索框文本确认
        onNavigationBarSearchInputConfirmed(e) {
            console.log(JSON.stringify(e.text))
        },
	}
</script>

<style>

</style>
