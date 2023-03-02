// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器。
// 这就是插件
// vue2.0插件写法要素：导出一个对象。欧install函数。默认传出Vue构造函数，Vue基础之上拓展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了APP应用实例，APP基础之上拓展
import XtxSkeloten from './xtx-skeloten.vue'
import XtxCarousel from './xtx-carousel.vue'
import XtxMore from './xtx-more.vue'

export default {
  install (app) {
  // 在APP上进行拓展，APP提供 component(全局组件) directive(自定义指令)
    app.component(XtxSkeloten.name, XtxSkeloten)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
  }
}
