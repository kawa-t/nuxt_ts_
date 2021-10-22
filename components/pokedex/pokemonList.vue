<template>
  <div class="poke__index">
    <img :src="state.imgUrl" />
    <div>
      <p>ずかんNo.{{ state.resultnum }}</p>
    </div>
    <div>
      <button @click="changePokemon()">変える</button>
    </div>

    <div>
      <input v-model="state.changePokemonNo" type="text" />
      <button @click="callPokemonNo()">Noで変える</button>
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
      changePokemonNo: 0,
    })

    function PokemonUrl(num: number) {
      state.resultnum = Math.floor(Math.random() * num)
      state.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${state.resultnum}.png`
    }

    function changePokemon(): void {
      state.resultnum = Math.floor(Math.random() * POKEMON_MAX_NO)
      state.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${state.resultnum}.png`
    }

    function callPokemonNo(): void {
      state.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${state.changePokemonNo}.png`
    }

    onMounted(() => {
      PokemonUrl(POKEMON_MAX_NO)
    })

    return {
      state,
      PokemonUrl,
      changePokemon,
      callPokemonNo,
    }
  },
})
</script>
<style scoped>
.poke__index {
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
}
</style>
