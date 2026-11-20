<template>
  <div>
    <div class="card">
      <h2>GET 请求：拿一本书回来</h2>
      <p class="muted">
        点按钮 → axios 向 <code>http://localhost:3001/books</code> 发 GET 请求 →
        then 里把 <code>res.data</code> 存进 data → 页面自动更新
      </p>
      <button @click="loadBooks">{{ loaded ? '重新请求' : '发 GET 请求' }}</button>
      <div v-if="loaded" class="console">GET {{ url }}
响应状态：{{ status }}（200 = 成功）
拿回 {{ books.length }} 本书：
<span v-for="(b, i) in books" :key="b.id">  [{{ b.id }}] 《{{ b.name }}》 {{ b.author }} ￥{{ b.price }}
</span></div>
      <div v-else class="console">// 还没发请求——json‑server 开了吗？（3001 端口）</div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'AxiosGet',
  data() {
    return {
      url: 'http://localhost:3001/books',
      books: [],
      status: null,
      loaded: false
    }
  },
  methods: {
    loadBooks() {
      axios
        .get(this.url)
        .then((res) => {
          this.status = res.status
          this.books = res.data
          this.loaded = true
        })
        .catch((err) => {
          alert('请求失败：' + err.message + '\n请确认 json‑server 已在 3001 端口运行')
        })
    }
  }
}
</script>
