<template>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o" badge="5">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o" badge="20">标签</van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ref } from 'vue';
import { Toast } from 'vant';
export default defineComponent({
  setup() {
    const active = ref(0);
    const onChange = (index:number) => Toast(`标签 ${index}`);
    return {
      active,
      onChange,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>

