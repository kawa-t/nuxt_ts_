<template>
  <div>
    <img :src="urlsrc" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  components: {
    get urlsrc() {
      const index = 3
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
    },
  },
})
</script>
