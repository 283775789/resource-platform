// 注册通用的全局组件
import Vue from 'vue'
import SideFloat from '@/components/side-float'

const components = [
  SideFloat
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
