<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- 跳转路由并携带query参数，to的字符串写法 -->
				<!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

				<!-- 跳转路由并携带query参数，to的对象写法 -->
				<!-- <router-link :to="{
					path:'/home/message/detail',
					query:{
						id:m.id,
						title:m.title
					}
				}">
					{{m.title}}
				</router-link> -->

				<!-- <router-link :to="{
					name:'Detail',
					query:{
						id:m.id,
						title:m.title
					}
				}">
				{{m.title}}
				</router-link> -->
			 <a @click="clickEvent(m.id,m.title)">{{m.title}}</a>
			</li>
		</ul>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Message',
		data() {
			return {
				messageList:[
					{id:'001',title:'消息001'},
					{id:'002',title:'消息002'},
					{id:'003',title:'消息003'}
				]
			}
		},
		methods:{
			clickEvent(id,title){
				// this.$router.push({path:'/home/message/detail',query:{
				// 		id,
				// 		title
				// }})


				// this.$router.push({name:'Detail',query:{
				// 		id:id,
				// 		title:title
				// }})

				this.$router.replace({path:'/home/message/detail',query:{
						id:id,
						title:title
				}})


				// this.$router.replace({name:'Detail',query:{
				// 		id:id,
				// 		title:title
				// }})
			}
		}
	}
</script>