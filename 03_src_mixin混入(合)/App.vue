<template>
	<div>
		{{message}}
	</div>
</template>

<script>
  import mixin from './mixin'
	export default {
		name:'App',
		//局部混入
    mixins: [mixin],

		data() {
			return {
				message: '我是APP',
				bar: 'def'
			}
		},
		created() {
			console.log('组件的created被调用');
			console.log(this.$data);

			this.bar2()
			this.foo2()
			this.conflicting()
		},
		methods: {
			bar2() {
				console.log('组件的bar2被调用')
			},
			conflicting() {
				console.log('组件的conflicting被调用')
			}
		}
	}
</script>
