<template>
  <!-- 顶部通栏 -->
    <AppNavbar/>
  <!-- 吸顶头部组件 -->
    <AppHeaderSticky/>
  <!-- 头部组件 -->
    <app-header/>
   <!-- 内容容器 -->
   <div class="main">
    <router-view></router-view>
   </div>
  <!-- 底部组件 -->
    <app-footer/>
</template>

<script>

import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'LayOut',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  // 获取分类数据
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang="less">
// .main{
//   height: 600px;
// }
</style>
