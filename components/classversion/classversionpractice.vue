<template>
  <div>
    <button>click here</button>
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component'
import { Emit, Vue } from 'vue-property-decorator'

@Component
export default class AddButton extends Vue {
  @Emit('push')
  public push(): void {}
}
</script>
