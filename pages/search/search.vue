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
        
        onNavigationBarSearchInputChanged(e) {
            console.log(JSON.stringify(e.text))
        },
        //确认
        onNavigationBarSearchInputConfirmed(e) {
            console.log(JSON.stringify(e.text))
        },
	}
</script>

<style>

</style>
