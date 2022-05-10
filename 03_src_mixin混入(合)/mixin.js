export default {
	//数据
	data() {
			return {
				message: '我是混入',
				foo: 'abc'
			}
	},
	//生命周期
	created() {
			console.log('混入的created被调用')
	},
	// 方法
	methods: {
		foo2(){
			console.log('混入的foo2被调用')
		},
		conflicting(){
			console.log('混入的conflicting被调用')
		}
	}
}