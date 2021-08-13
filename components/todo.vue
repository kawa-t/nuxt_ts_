<template>
  <div>
    <div>リスト一覧</div>
    <div v-for="todo in todos" :key="todo.id">
      <div>{{ todo.id }}</div>
      <div>{{ todo.title }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { TodoStore } from '~/store'

export default Vue.extend({
  async asyncData({ error }) {
    try {
      await TodoStore.fetchTodos()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
      error({
        statusCode: e.response.status,
        message: e.response.message,
      })
    }
  },
  computed: {
    todos() {
      return TodoStore.getTodos
    },
  },
})
</script>
