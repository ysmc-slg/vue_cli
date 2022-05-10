//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
import School from './components/School'
//关闭Vue的生产提示
Vue.config.productionTip = false
// 全局注册组件
Vue.component("School",School);


//创建vm
new Vue({
	el:'#app',
	render: h => h(App)
})