<template>
  <div></div>
</template>
<script lang="ts">
import Component from 'vue-class-component'
import { Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class ClassApp extends Vue {
  public count: number = 0
  public countUp(): void {
    this.count++
  }
  // eslint-disable-next-line lines-between-class-members
  @Watch('count', { immediate: true })
  public fCount(value: number): void {
    if (value > 50) {
      this.count = 0
    }
  }
}
</script>
