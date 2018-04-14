// 注册通用的全局组件
import Vue from 'vue'
import SideFloat from '@/components/side-float'
import Attachment from '@/components/attachment'
import QuestionDetailSelect from '@/components/question-details/select'
import QuestionDetailJudgment from '@/components/question-details/judgment'
import QuestionDetailFill from '@/components/question-details/fill'
import QuestionDetailShortAnswer from '@/components/question-details/shortanswer'
import QuestionDetailJoin from '@/components/question-details/join'
import QuestionDetailLine from '@/components/question-details/line'
import QuestionDetailVoice from '@/components/question-details/voice'

const components = [
  SideFloat,
  Attachment,
  QuestionDetailSelect,
  QuestionDetailJudgment,
  QuestionDetailFill,
  QuestionDetailShortAnswer,
  QuestionDetailJoin,
  QuestionDetailLine,
  QuestionDetailVoice
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
