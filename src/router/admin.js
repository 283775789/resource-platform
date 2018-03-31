import Vue from 'vue'
import Router from 'vue-router'

// 系统管理相关路由
import System from '@/pages/system/system'
import SystemRole from '@/pages/system/role'
import SystemTemplate from '@/pages/system/template'
import SystemNotice from '@/pages/system/notice'
import SystemDictionary from '@/pages/system/dictionary'
import SystemKnowledge from '@/pages/system/knowledge'
import SystemBook from '@/pages/system/book'
import SystemPoints from '@/pages/system/points'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'xactive',
  linkExactActiveClass: 'xcurrent',
  routes: [
    {
      path: '/system',
      component: System,
      redirect: '/system/role',
      children: [
        {
          path: 'role',
          component: SystemRole
        },
        {
          path: 'template',
          component: SystemTemplate
        },
        {
          path: 'notice',
          component: SystemNotice
        },
        {
          path: 'dictionary',
          component: SystemDictionary
        },
        {
          path: 'knowledge',
          component: SystemKnowledge
        },
        {
          path: 'book',
          component: SystemBook
        },
        {
          path: 'points',
          component: SystemPoints
        }
      ]
    }
  ]
})
