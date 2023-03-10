import { createRouter, createWebHashHistory } from 'vue-router'

const LayOut = () => import('@/views/layout')
const Home = () => import('@/views/home/index')
const TopCategory = () => import('@/views/category/index')
const SubCategory = () => import('@/views/category/sub')

const routes = [{
  path: '/',
  component: LayOut,
  children: [
    { path: '/', component: Home },
    { path: '/category/:id', component: TopCategory },
    { path: '/category/sub/:id', component: SubCategory }]
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
