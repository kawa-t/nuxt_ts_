<template>
  <div class="container mx-auto">
    <div>
      <nuxt-link to="/practice/asynclesson">非同期処理について</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/practice/objectlesson">基本処理について</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/practice/propertydecorator">カウンタ</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/minipractice">todo</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/pokedex">pokedex</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/classcomponent">カウントアップ</nuxt-link>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  components: {},
})
</script>
