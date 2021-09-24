<template>
  <div>
    <div>データの表示:{{ myCount }}</div>
    <div>データの表示:{{ myWatch }}</div>
    <p>Computed: {{ countByComputed }}</p>
    <button @click="increment">増やす</button>
    <button @click="decrement">減らす</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { State, TodoItemindex } from '@/types/TodoTypes'

// Class Componentで記述
@Component
export default class TodoComponent extends Vue {
  private todos: TodoItemindex[] = []

  private labels = new Map<State, string>([
    [State.All, 'ずべて'],
    [State.Workking, '作業中'],
    [State.All, '完了'],
  ])

  // 現在表示中の作業区分
  private current: State = State.All

  private get filteredTodos() {
    return this.todos.filter(t =>
    this.current === State.All ? true : this.current === t.state)
  }

  private created() {
    this.todos = todoStorage
  }

  // private addTodo()
}
