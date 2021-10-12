<template>
  <client-only>
    <div>
      <div><PokemonIndex /></div>
      <div><PokemonList /></div>
    </div>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import PokemonIndex from '@/components/pokedex/getPokemon.vue'
import PokemonList from '@/components/pokedex/pokemonList.vue'

export default defineComponent({
  components: {
    PokemonIndex,
    PokemonList,
  },
})
</script>
