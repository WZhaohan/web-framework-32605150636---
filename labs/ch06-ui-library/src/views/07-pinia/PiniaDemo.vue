<template>
  <div>
    <div class="card">
      <h2>Pinia 计数器（对照左边 Vuex 页）</h2>
      <p style="font-size: 40px; margin: 8px 0">
        {{ count }}　<small style="font-size: 18px">× 2 = {{ double }}</small>
      </p>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
      <p class="muted">
        没有 mutations、没有 $store、没有 commit——mapState 直接抄数据，actions 当方法调
      </p>
    </div>
    <UserCard />
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../../store/counter'
import UserCard from './UserCard.vue'
export default {
  name: 'PiniaDemo',
  components: { UserCard },
  computed: {
    ...mapState(useCounterStore, ['count', 'double'])
  },
  methods: {
    ...mapActions(useCounterStore, ['increment', 'decrement'])
  }
}
</script>
