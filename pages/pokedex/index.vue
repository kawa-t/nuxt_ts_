<template>
  <client-only>
    <div><PokemonIndex /></div>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import PokemonIndex from '@/components/pokedex/getPokemon.vue'

export default defineComponent({
  components: {
    PokemonIndex,
  },
})
</script>
