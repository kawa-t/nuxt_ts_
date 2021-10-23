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
  @Watch("count", {immediate: true})
}
</script>
