<template>
  <div class="p-main-container">
    <AsyncPractice />
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import AsyncPractice from '../components/asyncPractice.vue'

export default defineComponent({
  components: {
    AsyncPractice,
  },
})
</script>
