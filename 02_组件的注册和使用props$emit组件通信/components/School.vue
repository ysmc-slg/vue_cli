<template>
	<div>
		<h1>{{msg}} 组件</h1>
		<button @click="sendStudentlName">传递信息给父组件</button>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				msg:'你好School'
			}
		},
		methods:{
			sendStudentlName(){
				this.$emit('ysmc',this.msg)
			}
		}
	}
</script>