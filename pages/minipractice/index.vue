<template>
  <client-only>
    <div><MiniPractice /></div>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import MiniPractice from '@/components/minipractice/index.vue'

export default defineComponent({
  components: {
    MiniPractice,
  },
})
</script>
