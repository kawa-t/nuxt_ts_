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
import { Vue, Component } from 'vue-property-decorator'
import TodoStorage from './todoStorage'
import { State, TodoItemindex } from '@/types/TodoTypes'

const todoStorage = new TodoStorage()

// Class Componentで記述
@Component
export default class TodoComponent extends Vue {
  private todos: TodoItemindex[] = []

  private labels = new Map<State, string>([
    [State.All, 'ずべて'],
    [State.Working, '作業中'],
    [State.All, '完了'],
  ])

  // 現在表示中の作業区分
  private current: State = State.All

  private get filteredTodos() {
    return this.todos.filter(t =>
    this.current === State.All ? true : this.current === t.state)
  }

  private created() {
    this.todos = todoStorage.fetchAll()
  }

  // private addTodo()
  private addTodo(){
    // HTML要素のname
    const name = this.$refs.name as HTMLInputElement
    if(!name.value.length) {
      return false
    }
    this.todos.push({
      id: todoStorage.nextId,
      name: name.value,
      state: State.Working
    })
    name.value = ''
  }

  // 削除
  private removeTodo(todo:TodoItemindex) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
  }

  // 作業中or完了
  private toggleState(todo: TodoItemindex) {
    todo.state = todo.state === State.Working ? State.Done : State.Working
  }

  @Watch('todos', {deep: true}){

  }
}
