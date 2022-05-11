<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- 直接在路径后面写参数，分别会将 m.id、m.title作为参数传递给detail组件 -->
				<!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->

				<!-- 跳转路由并携带query参数，to的对象写法 -->
				<!-- <router-link :to="{
					name:'Detail',
					params:{
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
				this.$router.push({
						name:'Detail',
						params:{
							id:id,
							title:title
						}
					})


				// this.$router.replace({
				// 		name:'Detail',
				// 		params:{
				// 			id:id,
				// 			title:title
				// 		}
				// 	})
			}
		}
	}
</script>