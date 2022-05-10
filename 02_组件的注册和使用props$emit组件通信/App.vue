<template>
	<div>
		<!-- 父向子传递数据 -->
		<Student name="李四" sex="女" :age="18"/>
		<hr/>
		<School @ysmc="getSchool"></School>
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student},
		methods:{
			getSchool(msg){
				alert("接到School组件的信息" + msg)
			}
		}
	}
</script>
