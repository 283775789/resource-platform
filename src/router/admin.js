import Vue from 'vue'
import Router from 'vue-router'

// 主页
import Home from '@/pages/admin/home'

// 系统管理相关路由
import System from '@/pages/system/system'
import SystemUser from '@/pages/system/user'
import SystemRole from '@/pages/system/role'
import SystemTemplate from '@/pages/system/template'
import SystemNotice from '@/pages/system/notice'
import SystemDictionary from '@/pages/system/dictionary'
import SystemKnowledge from '@/pages/system/knowledge'
import SystemBook from '@/pages/system/book'
import SystemPoints from '@/pages/system/points'

// 试卷相关路由
import TestpaperStore from '@/pages/testpaper/store'
import TestpaperFirstCheck from '@/pages/testpaper/first-check'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'xactive',
  linkExactActiveClass: 'xcurrent',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/system',
      component: System,
      redirect: '/system/user',
      children: [
        {
          path: 'user',
          component: SystemUser
        },
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
    },
    {
      path: '/testpaper-store',
      component: TestpaperStore
    },
    {
      path: '/testpaper-first-check',
      component: TestpaperFirstCheck
    }
  ]
})
