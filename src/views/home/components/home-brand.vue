<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a href="javascript:;" @click="toggle(-1)" :class="{disabled:index === 0}" class="iconfont icon-angle-left prev"></a>
      <a href="javascript:;" @click="toggle(+1)" :class="{disabled:index === 1}" class="iconfont icon-angle-right next"></a>
    </template>
    <Transition name="fade">
    <div  class="box" ref="target">
      <ul v-if="brand.lenght" class="list" :style="{transform:`translateX(${-index*1240}px)`}">
        <li v-for="i in brand" :key="i.id">
          <RouterLink to="/">
            <img :src="i.picture" alt="">
          </RouterLink>
        </li>
      </ul>
      <div v-else class="skeleton">
         <XtxSkeleton class="item" v-for="i in 5" :key="i" animated bg="#e4e4e4" width="240px" height="305px"/>
      </div>
    </div>
    </Transition>
  </HomePanel>
</template>

<script>
import HomePanel from './home-panel'
import { ref } from 'vue'
import { findBrand } from '@/api/home'
import { useLazyData } from '@/hooks'
export default {
  name: 'HomeBrand',
  components: { HomePanel },
  setup () {
    // 获取数据
    // const brand = ref([])
    // findBrand(10).then(data => {
    //   brand.value = data.result
    // })
    const { result, target } = useLazyData(() => { findBrand(10) })
    // 切换 只有 0 和 1

    const index = ref(0)
    const toggle = (stemp) => {
      const newIdex = stemp + index.value
      if (newIdex < 0 || newIdex > 1) return
      index.value = newIdex
    }

    return { brand: result, index, target, toggle }
  }
}
</script>

<style scoped lang='less'>
.home-panel {
  background:#f5f5f5
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
</style>
