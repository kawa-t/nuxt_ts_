<template>
  <div>
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
