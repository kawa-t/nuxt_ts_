<template>
  <div>
    <button @click="callbackfn">{{ callbackVer }}</button>
    <button @click="promisefn">{{ promiseVer }}</button>
    <button @click="asyncawaitfn">{{ asyncAwaitVer }}</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import callbackAction from '../utils/asyncPractice/callback'
import promiseAction from '../utils/asyncPractice/promise'
import asyncawaitAction from '../utils/asyncPractice/asyncawait'

@Component
export default class CounterComponent extends Vue {
  // data
  callbackVer: string = 'callback関数で実行'
  promiseVer: string = 'Promiseで実行'
  asyncAwaitVer: string = 'AsyncAwawitで実行'

  // メソッド
  callbackfn() {
    callbackAction()
  }

  promisefn() {
    promiseAction()
  }

  asyncawaitfn() {
    asyncawaitAction()
  }
}
</script>
