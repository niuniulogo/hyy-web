<template>
  <router-view />

  <tab-bar></tab-bar>    
</template>

<script>
import tabBar from "/@/components/tabBar.vue";
export default {
  name: 'App',
  components:{
    tabBar
  },
  setup() {

  }
}
</script>
<style lang="scss">
	@import 'vant/lib/index.css'
</style>
