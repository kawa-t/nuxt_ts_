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
  @Watch('count', { immediate: true })
  public fCount(value: number): void {
    if (value > 50) {
      this.count = 0
    }
  }
}
</script>
