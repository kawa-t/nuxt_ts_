<template>
  <div>
    <button @click="numberup">{{ hoge }}</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import calling from '../utils/callback'

@Component
export default class CounterComponent extends Vue {
  hoge: number = 0

  // メソッド
  increment() {
    this.hoge = 3
    calling()
  }

  numberup() {
    function dubleNumber(num: number): void {
      console.log(num * 2)
    }
    dubleNumber(21)
  }
}
</script>
