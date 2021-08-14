<template>
  <div class="p-main-container">
    <TodoList />
    <GeneHoge />
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import TodoList from '../components/todo.vue'
import GeneHoge from '../components/generics.vue'

export default defineComponent({
  components: {
    TodoList,
    GeneHoge,
  },
})
</script>
