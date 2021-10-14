<template>
  <div>
    <img :src="state.imgUrl" />
    <div>
      <p>ずかんNo.{{ state.resultnum }}</p>
    </div>
    <div>
      <button @click="changePokemon()">変える</button>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  // useAsync,
  // useContext,
  onMounted,
  reactive,
} from '@nuxtjs/composition-api'
const POKEMON_MAX_NO = 898

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
    const state = reactive({
      imgUrl: '',
      resultnum: 0,
    })

    function PokemonUrl(num: number) {
      state.resultnum = Math.floor(Math.random() * num)
      state.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${state.resultnum}.png`
    }

    function changePokemon(): void {
      state.resultnum = Math.floor(Math.random() * POKEMON_MAX_NO)
      state.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${state.resultnum}.png`
    }

    onMounted(() => {
      PokemonUrl(POKEMON_MAX_NO)
    })

    return {
      state,
      PokemonUrl,
      changePokemon,
    }
  },
})
</script>
