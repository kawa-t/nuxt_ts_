<template>
  <div>
    <!-- <img :src="urlsrc" /> -->
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  // useAsync,
  useContext,
  onMounted,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Pokedex',
  setup() {
    const context = useContext()
    context.store.$router = useContext()
    // const posts = useAsync(() => $http.$get(''))

    onMounted(async () => {})

    return {
      // posts,
    }
  },
})
</script>
