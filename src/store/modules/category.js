// 分类模块
import { topCategory } from '@/api/constants'
import { findAllCateGory } from '@/api/category'
export default {
  namespaced: true,
  state () {
    return {
      // 分列信息
      list: topCategory.map(item => ({ name: item }))
    }
  },
  // 修改分类函数
  mutations: {
    // payload是分类集合
    setList (state, payload) {
      state.list = payload
    },
    // 定义show和hide函数，控制当前分类的二级显示和隐藏
    show (state, id) {
      const currentcategory = state.list.find(item => item.id === id)
      currentcategory.open = true
    },
    hide (state, id) {
      const currentcategory = state.list.find(item => item.id === id)
      currentcategory.open = false
    }
  },
  // 获取分类数据函数
  actions: {
    // 获取分类数据
    async getList ({ commit }) {
      const data = await findAllCateGory()
      // 给每个分类加上控制二级分类显示隐藏的数据
      data.result.forEach(top => {
        top.open = false
      })
      // 修改分类数据
      commit('setList', data.result)
    }
  }
}
