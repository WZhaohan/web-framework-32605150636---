<template>
  <div class="card">
    <h2>POST 请求：新增一本书</h2>
    <p class="muted">填表单 → axios post 提交到 http://localhost:3001/books → json-server自动生成id存入db.json</p>
    <div class="form-item">
      <label>书名：</label>
      <input v-model="book.name" placeholder="输入书名">
    </div>
    <div class="form-item">
      <label>作者：</label>
      <input v-model="book.author" placeholder="作者">
    </div>
    <div class="form-item">
      <label>价格：</label>
      <input v-model.number="book.price" type="number" placeholder="价格">
    </div>
    <button @click="addBook">提交新增</button>
    <div class="console">{{ msg }}</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'BookPost',
  data() {
    return {
      book: {
        name: '',
        author: '',
        price: ''
      },
      msg: '// 等待提交'
    }
  },
  methods: {
    addBook() {
      axios.post('http://localhost:3001/books', this.book)
        .then(res => {
          this.msg = '✅ 添加成功！返回数据：' + JSON.stringify(res.data)
          // 清空表单
          this.book.name = ''
          this.book.author = ''
          this.book.price = ''
        })
        .catch(err => {
          this.msg = '❌ 请求失败：' + err.message
        })
    }
  }
}
</script>
