<template>
  <div><button @click="typeAssertClick">TEST</button></div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TsBasic extends Vue {
  typeAssertClick() {
    // OK
    this.typeAssert('100')

    // 数値はだめ
    // this.typeAssert(100)

    // asで明示的にすれば変えられる
    this.typeAssert(100 as any)
  }

  enumClick() {
    // 列挙型
    enum Pref {
      Tokyo,
      Nagoya,
      Oosaka,
    }

    const getPre: Pref = Pref.Tokyo
    console.log(getPre)
  }

  typeAssert(result: string) {
    return `結果は${result}です。`
  }
}
</script>
<style></style>
