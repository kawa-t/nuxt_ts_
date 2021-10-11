<template>
  <div>
    <img :src="urlsrc" />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Pokedex',
  setup() {
    onMounted(() => {
      // getPokemonData()
    })
  },
})
</script>
