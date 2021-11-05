<template>
  <client-only>
    <div class="m-8">
      <div><SyncParent /></div>
    </div>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import SyncParent from '@/components/syncprops/syncParent.vue'

export default defineComponent({
  components: {
    SyncParent,
  },
})
</script>
