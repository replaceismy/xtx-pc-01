<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem :to="{path:'/'}">首页</XtxBreadItem>
        <XtxBreadItem>电器</XtxBreadItem>
        <XtxBreadItem>冰箱</XtxBreadItem>
      </XtxBread>
      <!-- 轮播图 -->
      <!-- 全部分类 -->
      <!-- 各个分类商品 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopCategory'
}
</script>

<style scoped lang ="less">

</style>
