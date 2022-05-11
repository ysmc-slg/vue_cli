<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
					<!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

					<!-- Vue中借助router-link标签实现路由的切换 -->
					<!-- <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link> -->

          <button class="list-group-item" active-class="active" @click="cativeAbout">About</button>
          <button class="list-group-item" active-class="active" @click="cativeHome">Home</button>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
						<!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name:'App',
    methods:{
      cativeAbout(){
        // this.$router.push({name:'guanyu'})
        // this.$router.push({path:'/about'})
        // 默认就是 path 的形式
        // this.$router.push("/about")

        this.$router.replace("/about")
      },

      cativeHome(){
        // this.$router.push({path:'/home'})
        // this.$router.push("/home")
        this.$router.replace("/home")
      }
    }
	}
</script>
