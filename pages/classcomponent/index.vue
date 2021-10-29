<template>
  <div>
    <AddButton @push="countUp"></AddButton>
    <ClassVer :count="count"></ClassVer>
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component'
import { Vue, Watch } from 'vue-property-decorator'
import AddButton from '~/components/classversion/addButton.vue'
import ClassVer from '~/components/classversion/classversionpractice.vue'

@Component({
  components: {
    AddButton,
    ClassVer,
  },
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
