// 提供复用逻辑的函数(钩子)
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

/**
 * 数据懒加载
 * @param {Element} target - Dom对象
 * @param {*} apiFn - function
 */
export const useLazyData = (apiFn) => {
  const result = ref([])
  const target = ref(null)
  // stop是停止观察
  const { stop } = useIntersectionObserver(
    // target 是观测对象
    target,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        // 调用api接口请求数据
        stop()
        apiFn().then(data => {
          result.value = data.result
        })
      }
    },
    // 配置项
    {
      threshold: 0.1
    }
  )
  return { result, target }
}
