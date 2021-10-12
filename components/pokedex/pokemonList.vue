<template>
  <div>
    <img :src="PokemonUrl" />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  // useAsync,
  // useContext,
  onMounted,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Pokedex',
  setup() {
    // const context = useContext().$axios
    // const posts = useAsync(() =>
    //   context.$get(
    //     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png'
    //   )
    // )
    // console.log(posts)

    const PokemonUrl = () => {
      console.log('pass')
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png'
    }

    onMounted(() => {
      PokemonUrl()
    })

    return {
      // posts,
    }
  },
})
</script>
