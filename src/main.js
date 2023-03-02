import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 自己的UI组件库
import UI from '@/components/library/index'

// 重置样式库
import 'normalize.css'
// 重置自己的样式
import './assets/styles/common.less'

createApp(App).use(store).use(router).use(UI).mount('#app')
