<template>
  <div>
    <p>you click button {{ count }} times</p>
    <p>your score : {{ doubledCount }} points</p>
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component'
import { Prop, Vue } from 'vue-property-decorator'

@Component
export default class Display extends Vue {
  @Prop()
  // 感嘆符(!)を付けることで、TypeScriptに値が確実に割り当てられいる事を伝えられる。
  public count!: number

  public get doubledCount(): number {
    return this.count * 2
  }
}
</script>
