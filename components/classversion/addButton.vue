<template>
  <div>
    <div>{{ count }}</div>
    <button>@emitで親に伝える</button>
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
}
</script>
