<template>
  <div class="w-2/3">
    <button @click="callbackfn">{{ objectlabel }}</button>
    <button @click="testfn">{{ arraytype }}</button>
    <div>実行結果</div>
    <div>{{ displayObject }}</div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ObjectAction from '../utils/objectPractice/object'

@Component
export default class CounterComponent extends Vue {
  // data
  objectlabel: string = 'オブジェクト'
  arraytype: string = '配列の型定義'
  displayObject: string | undefined = ''

  // メソッド
  callbackfn() {
    this.displayObject = ObjectAction(1)
  }

  testfn() {
    this.displayObject = ObjectAction(2)
  }
}
</script>
<style></style>
