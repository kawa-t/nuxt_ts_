<template>
  <div>
    <button @click="callbackfn">{{ callbackVer }}</button>
    <button @click="promisefn">{{ promiseVer }}</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import callbackAction from '../utils/callback'
import promiseAction from '../utils/promise'

@Component
export default class CounterComponent extends Vue {
  callbackVer: string = 'callback関数で実行'
  promiseVer: string = 'Promiseで実行'

  // メソッド
  callbackfn() {
    callbackAction()
  }

  promisefn() {
    promiseAction()
  }

  numberup() {
    function dubleNumber(num: number): void {
      console.log(num * 2)
    }
    dubleNumber(21)
  }
}
</script>
