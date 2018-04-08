// 注册通用的全局指令
import Vue from 'vue'

// 初始化元素的高度
let updateHeight
Vue.directive('pl-to-bottom', {
  inserted: function (el, binding) {
    updateHeight = function () {
      const rect = el.getBoundingClientRect()
      const top = rect.top + window.pageYOffset - document.documentElement.clientTop
      let diffHeight = window.innerHeight - top

      if (typeof binding.value === 'number') {
        diffHeight -= binding.value
      }

      if (binding.modifiers.fixed) {
        el.style.height = diffHeight + 'px'
      } else {
        el.style.minHeight = diffHeight + 'px'
      }
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
  },
  unbind () {
    window.removeEventListener('resize', updateHeight)
  }
})
