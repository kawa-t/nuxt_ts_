<template>
  <div class="container mx-auto w-3/4">
    <div>
      構造的部分型 各オブジェクトの名前については気にしない
      ただし、オブジェクトが持っているプロパティについてはきちんと定義をしようというのが部分的構造型
    </div>
    <ObjectPractice />
    <nuxt-link to="/">もどる</nuxt-link>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import ObjectPractice from '@/components/objectPractice.vue'

export default defineComponent({
  components: {
    ObjectPractice,
  },
})
</script>
