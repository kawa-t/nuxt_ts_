<template>
  <div>
    <user-input-form></user-input-form>
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component'
import { Emit, Vue } from 'vue-property-decorator'
import UserInputForm from '@/components/syncprops/syncChild.vue'

@Component({
  components: {
    UserInputForm,
  },
})
export default class SyncParent extends Vue {
  @Emit('push')
  public push(): void {}
}
</script>
