import { createApp } from 'vue'
import './style.css'

// Element Plus 全量引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// ElementPlus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
// 路由
import router from './router'
// Vuex仓库
import store from './store'
// Pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

// 全局注册element图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.use(router)
// 使用Vuex
app.use(store)

// Pinia挂载
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.mount('#app')
