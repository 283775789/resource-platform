import Vue from 'vue'
import Router from 'vue-router'

// 主页
import Home from '@/pages/teacher/home'

// 个人中心相关路由
import Person from '@/pages/person/person'
import PersonInfo from '@/pages/person/info'
import PersonPassword from '@/pages/person/password'
import PersonPoints from '@/pages/person/points'
import PersonNotice from '@/pages/person/notice'
import PersonExercise from '@/pages/person/exercise'
import PersonExerciseStore from '@/pages/person/exercise-store'
import PersonExerciseCart from '@/pages/person/exercise-cart'
import PersonPaper from '@/pages/person/paper'
import PersonPaperStore from '@/pages/person/paper-store'
import PersonDownload from '@/pages/person/download'
import PersonDelete from '@/pages/person/delete'
import PersonAnswerCard from '@/pages/person/answer-card'

// 公用路由
import Artical from '@/pages/common/artical'
import AddExamQuestion from '@/pages/common/add-exam-question'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'xactive',
  linkExactActiveClass: 'xcurrent',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/person',
      component: Person,
      redirect: '/person/info',
      children: [
        {
          path: 'info',
          component: PersonInfo
        },
        {
          path: 'password',
          component: PersonPassword
        },
        {
          path: 'points',
          component: PersonPoints
        },
        {
          path: 'notice',
          component: PersonNotice
        },
        {
          path: 'exercise',
          component: PersonExercise
        },
        {
          path: 'exercise-store',
          component: PersonExerciseStore
        },
        {
          path: 'exercise-cart',
          component: PersonExerciseCart
        },
        {
          path: 'paper',
          component: PersonPaper
        },
        {
          path: 'paper-store',
          component: PersonPaperStore
        },
        {
          path: 'download',
          component: PersonDownload
        },
        {
          path: 'delete',
          component: PersonDelete
        },
        {
          path: 'answer-card',
          component: PersonAnswerCard
        }
      ]
    },
    {
      path: '/artical',
      name: 'artical',
      component: Artical
    },
    {
      path: '/add-exam-question',
      name: 'addExamQuestion',
      component: AddExamQuestion
    }
  ]
})