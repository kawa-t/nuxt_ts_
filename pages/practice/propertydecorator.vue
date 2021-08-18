<template>
  <div>
    <div>データの表示:{{ myCount }}</div>
    <div>データの表示:{{ myWatch }}</div>
    <p>Computed: {{ countByComputed }}</p>
    <button @click="increment">増やす</button>
    <button @click="increment">増やす</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

// Class Componentで記述
@Component
export default class CounterComponent extends Vue {
  // data
  myCount: number = 0
  myWatch: number = 0

  // 算出プロパティcomputeはgetを使う
  get countByComputed(): number {
    console.log('countを検知!')
    return this.myCount
  }

  // 監視プロパティ
  @Watch('myCount')
  countByWatched() {
    this.myWatch = this.myCount * 2
  }

  // メソッドはmethodの記述はしない
  increment() {
    console.log('increment')
    this.myCount++
  }

  // メソッド
  decrement() {
    console.log('decrement')
    this.myCount--
  }
}
</script>
