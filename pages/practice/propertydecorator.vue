<template>
  <div></div>
</template>
<script>
import { Vue, Component, Watch } from 'vue-property-decorator'

// Class Componentで記述
@Component
export default class CounterComponent extends Vue {
  // 監視プロパティ
  @Watch('myCount')
  countByWatched() {}
}
</script>
