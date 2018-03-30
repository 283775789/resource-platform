<template>
  <div id="app">
    <!-- 顶部栏 -->
    <div class="pl-topbar">
      <div class="pl-topbar-inner">
        <span>中南讯智科技有限公司</span>
        <div class="pl-topbar-right">
          <span>{{ 'data' }}您好，欢迎您访问资源平台</span>
          <a class="pl-icobtn"><i class="pl-ico xoff"></i><span>退出</span></a>
        </div>
      </div>
    </div>
    <!-- /顶部栏 -->

    <!-- 头部(搜索) -->
    <div class="pl-header">
      <div class="pl-header-inner">
        <router-link to="/"><img src="./assets/logo.png" /></router-link>
        <div class="pl-search">
          <el-input placeholder="请输入关键词搜索" v-model="searchText">
            <el-select v-model="type" slot="prepend" placeholder="请选择" style="width:80px;">
              <el-option label="选项1" value="1"></el-option>
              <el-option label="选项2" value="2"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </div>
    <!-- /头部(搜索) -->

    <!-- 导航 -->
    <div class="pl-nav">
      <ul class="pl-nav-inner">
        <li class="pl-nav-item">
          <a class="pl-nav-link xsubject">初中数学<i class="pl-triangle xdown"></i></a>
          <div class="pl-nav-menu xsubject">
            <h4 class="pl-nav-menu-title">小学</h4>
            <div class="pl-nav-menu-tags">
              <a class="pl-tag">语文</a>
              <a class="pl-tag">数学</a>
              <a class="pl-tag">英语</a>
              <a class="pl-tag">科学</a>
              <a class="pl-tag">政治思想</a>
            </div>
            <h4 class="pl-nav-menu-title">小学</h4>
            <div class="pl-nav-menu-tags">
              <a class="pl-tag">语文</a>
              <a class="pl-tag xactive">数学</a>
              <a class="pl-tag">英语</a>
              <a class="pl-tag">科学</a>
              <a class="pl-tag">物理</a>
              <a class="pl-tag">化学</a>
              <a class="pl-tag">历史</a>
              <a class="pl-tag">政治思想</a>
              <a class="pl-tag">地理</a>
              <a class="pl-tag">历史与社会</a>
              <a class="pl-tag">社会思想</a>
              <a class="pl-tag">生物</a>
            </div>
            <h4 class="pl-nav-menu-title">高中</h4>
            <div class="pl-nav-menu-tags">
              <a class="pl-tag">语文</a>
              <a class="pl-tag">数学</a>
              <a class="pl-tag">英语</a>
              <a class="pl-tag">物理</a>
              <a class="pl-tag">化学</a>
              <a class="pl-tag">历史</a>
              <a class="pl-tag">政治思想</a>
              <a class="pl-tag">地理</a>
              <a class="pl-tag">历史与社会</a>
              <a class="pl-tag">信息技术</a>
            </div>
          </div>
        </li>
        <li class="pl-nav-item"><router-link to="/" class="pl-nav-link">首页</router-link></li>
        <li class="pl-nav-item"><router-link to="/" class="pl-nav-link">试题库</router-link></li>
        <li class="pl-nav-item"><router-link to="/" class="pl-nav-link">手动组卷</router-link></li>
        <li class="pl-nav-item"><router-link to="/" class="pl-nav-link">智能组卷</router-link></li>
        <li class="pl-nav-item xright"><router-link to="/" class="pl-nav-link">个人中心</router-link></li>
      </ul>
    </div>
    <!-- /导航 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      searchText: '',
      type: ''
    }
  },
}
</script>

