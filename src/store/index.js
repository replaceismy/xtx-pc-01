import { createStore } from 'vuex'
import createpersistedstate from 'vuex-persistedstate'

import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    cart,
    category

  },
  plugins: [
    createpersistedstate({
      // 本地存储名字
      key: 'erabbit-client-pc-store',
      paths: ['cart', 'user']
    })
  ]
})
