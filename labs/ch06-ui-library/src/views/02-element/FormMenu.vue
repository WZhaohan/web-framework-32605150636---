<!-- ============================================================
  FormMenu.vue —— 实验 02：Element Plus 的 Form + Menu（教材 6.2.2 第 3、4 组件）
  目录：views/02-element/
  要点：el-form 的 :inline 行内排布 + :model 绑数据对象；
        el-input 的 placeholder / clearable 一键清空 / show-password 密码小眼睛；
        el-menu 横向(horizontal)与垂直(vertical)两种摆法，el-sub-menu 折叠子菜单。
  图标：<el-icon><HomeFilled /></el-icon> 里的图标组件是 main.js 全局注册的。
============================================================ -->
<template>
  <div>
    <div class="card">
      <h2>3. Form 表单：:inline 行内 + :model 绑数据</h2>
      <p class="muted">用户名可一键清空（clearable），密码有小眼睛（show-password），提交结果打到下方控制台</p>
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入用户名" clearable />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="console">{{ formLog }}</div>
    </div>
    <div class="card">
      <h2>4. Menu 菜单：横向导航 + 垂直侧边栏</h2>
      <p class="muted">default-active 是点亮项；垂直菜单的"我的"是 el-sub-menu，可展开折叠</p>
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><el-icon><HomeFilled /></el-icon>首页</el-menu-item>
        <el-menu-item index="2"><el-icon><ShoppingCart /></el-icon>商品管理</el-menu-item>
        <el-menu-item index="3"><el-icon><Tickets /></el-icon>订单管理</el-menu-item>
      </el-menu>
      <div class="menu-flex">
        <el-menu class="el-menu-vertical-demo" :default-active="activeIndex" @select="handleSelect">
          <el-menu-item index="1"><el-icon><HomeFilled /></el-icon>首页</el-menu-item>
          <el-sub-menu index="mine">
            <template #title><el-icon><User /></el-icon>我的</template>
            <el-menu-item index="4">个人中心</el-menu-item>
            <el-menu-item index="5">修改密码</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="3"><el-icon><Tickets /></el-icon>订单管理</el-menu-item>
        </el-menu>
        <p class="muted">最近选中：{{ activeIndex }} 号菜单项</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormMenu',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      formLog: '// 提交后这里会显示表单数据',
      activeIndex: '1'
    }
  },
  methods: {
    onSubmit() {
      this.formLog = 'submit! ' + JSON.stringify(this.form)
    },
    onReset() {
      this.form.username = ''
      this.form.password = ''
      this.formLog = '// 已重置'
    },
    handleSelect(index) {
      this.activeIndex = index
    }
  }
}
</script>
<style scoped>
.menu-flex {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-top: 16px;
}
.menu-flex .el-menu-vertical-demo {
  width: 180px;
  border-right: 1px solid var(--border);
}
</style>
