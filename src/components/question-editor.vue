<template>
  <div class="pl-qeditor" :class="{xshowmenu: showMenu}">
    <div class="pl-qeditor-menu">
      <a><i class="pl-ico xmimg"></i></a>
      <a><i class="pl-ico xmformula"></i></a>
    </div>
    <div class="pl-qeditor-body" contenteditable :style="{minHeight:minHeight}"></div>
  </div>
</template>

<script>
  export default {
    props: {
      showMenu: {
        type: Boolean,
        default: false
      },
      minHeight: {
        type: String,
        default: '16px'
      }
    },
    name: 'plQuestionEditor'
  }
</script>
