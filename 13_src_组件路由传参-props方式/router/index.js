import Vue from 'vue'
// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../components/About'
import Home from '../components/Home'
//应用插件
Vue.use(VueRouter)

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			name:'About',
			path:'/about',
			component:About
		},
		{
			name:'Home',
			// path:'/home',
			path:'/home/:id/:title',
			component:Home,
			// props:{a:900}
			// props:true
			props($route){
				return {
					id:$route.query.id,
					title:$route.query.title,
					// 还可以返回一些别的数据
					a:1,
					b:'hello'
				}
			}
		}
	]
})
