<template>
  <div class="card">
    <h2>计数器（本卡能加减）</h2>
    <p style="font-size: 40px; margin: 8px 0">{{ $store.state.count }}</p>
    <button @click="$store.commit('increment')">+1</button>
    <button @click="$store.commit('decrement')">-1</button>
  </div>
</template>
<script>
export default {
  name: 'CounterCard'
}
</script>
