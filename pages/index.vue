<template>
  <div class="p-main-container">
    <TodoList />
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import TodoList from '../components/todo.vue'

export default defineComponent({
  components: {
    TodoList,
  },
})
</script>
