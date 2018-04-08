<template>
  <div class="pl-sc">
    <div class="pl-astable xquestion">
      <div class="pl-astable-col xquestion-label" style="width:4em;">标题：</div>
      <div class="pl-astable-col">
        <pl-question-editor showMenu minHeight="90px" style="margin-bottom:10px;"></pl-question-editor>
        <!-- 上传控件用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-upload action="https://jsonplaceholder.typicode.com/posts/">
          <el-button type="primary" size="medium">添加附件</el-button>
          <el-tooltip class="item" effect="dark" content="提示文字" placement="top">
            <a class="pl-ico xtip"></a>
          </el-tooltip>
        </el-upload>
      </div>
    </div>
    <div class="pl-astable xquestion">
      <div class="pl-astable-col xquestion-label" style="width:4em;"></div>
      <div class="pl-astable-col">
        <div class="pl-question-join">
          <div class="pl-title2">
            <div class="pl-title2-left">
              <span class="pl-title2-text">单选题</span>
              <el-input style="width:60px;"></el-input>
              <span>分</span>
            </div>
            <div class="pl-title2-right">
              <a class="pl-link2"><i class="pl-ico xdel"></i>删除单选题</a>
            </div>
          </div>
          <div class="pl-question-join-body">
            <pl-question-single></pl-question-single>
          </div>
        </div>
        <div class="pl-question-join">
          <div class="pl-title2">
            <div class="pl-title2-left">
              <span class="pl-title2-text">单选题</span>
              <el-input style="width:60px;"></el-input>
              <span>分</span>
            </div>
            <div class="pl-title2-right">
              <a class="pl-link2"><i class="pl-ico xdel"></i>删除单选题</a>
            </div>
          </div>
          <div class="pl-question-join-body">
            <pl-question-single></pl-question-single>
          </div>
        </div>
      </div>
    </div>
    <div class="pl-astable xquestion">
      <div class="pl-astable-col xquestion-label" style="width:4em;"></div>
      <div class="pl-astable-col" style="width:220px;">
        <el-select>
          <el-option>单选题</el-option>
          <el-option>填空题</el-option>
        </el-select>
      </div>
      <div class="pl-astable-col">
        <a class="pl-addoptionbtn" style="margin-top:0;"><i class="pl-ico xadd2"></i>添加新试题</a>
      </div>
    </div>
    <div class="pl-astable xquestion">
      <div class="pl-astable-col xquestion-label" style="width:4em;">解析：</div>
      <div class="pl-astable-col">
        <pl-question-editor showMenu minHeight="90px" style="margin-bottom:10px;"></pl-question-editor>
        <!-- 上传控件用法详见:http://element.eleme.io/#/zh-CN/component/form -->
        <el-upload action="https://jsonplaceholder.typicode.com/posts/">
          <el-button type="primary" size="medium">添加附件</el-button>
          <el-tooltip class="item" effect="dark" content="提示文字" placement="top">
            <a class="pl-ico xtip"></a>
          </el-tooltip>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<script>
  import QuestionEditor from '@/components/question-editor'
  import QuestionSingle from '@/components/question-types/single'
  import QuestionMultiple from '@/components/question-types/multiple'
  import QuestionJudgment from '@/components/question-types/judgment'
  import QuestionFill from '@/components/question-types/fill'
  import QuestionShortAnswer from '@/components/question-types/shortanswer'
  import QuestionListening from '@/components/question-types/listening'
  import QuestionLine from '@/components/question-types/line'
  import QuestionVoice from '@/components/question-types/voice'

  export default {
    name: 'plQuestionJoin',
    components: {
    'plQuestionEditor': QuestionEditor,
    'plQuestionSingle': QuestionSingle,
    'plQuestionMultiple': QuestionMultiple,
    'plQuestionJudgment': QuestionJudgment,
    'plQuestionFill': QuestionFill,
    'plQuestionShortAnswer': QuestionShortAnswer,
    'plQuestionListening': QuestionListening,
    'plQuestionLine': QuestionLine,
    'plQuestionVoice': QuestionVoice
    }
  }
</script>
