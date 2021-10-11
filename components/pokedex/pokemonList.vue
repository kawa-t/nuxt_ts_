<template>
  <div>
    <img :src="urlsrc" />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  useAsync,
  // useContext,
  onMounted,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Pokedex',
  setup() {
    // const { $http } = useContext()
    // const posts = useAsync(() => $http.$get(''))

    onMounted(() => {
        async asyncData({
      const test = awat $http.$get('')
    }){

    }
    })

    return {
      posts,
    }
  },
})
</script>
