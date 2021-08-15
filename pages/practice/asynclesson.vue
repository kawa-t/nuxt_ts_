<template>
  <div class="container mx-auto w-3/4">
    <AsyncPractice />
    <nuxt-link to="/">もどる</nuxt-link>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import AsyncPractice from '@/components/asyncPractice.vue'

export default defineComponent({
  components: {
    AsyncPractice,
  },
})
</script>
