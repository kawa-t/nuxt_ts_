<template>
  <div>
    <label v-for="[state, text] in Array.from(labels)" :key="state">
      <input v-model="current" type="radio" :value="state" />
      {{ text }}
    </label>
    <table>
      <thead>
        <tr>
          <th class="id">ID</th>
          <th class="comment">コメント</th>
          <th class="state">状態</th>
          <th class="button">-</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in filteredTodos" :key="todo.id">
          <th>{{ todo.id }}</th>
          <th>{{ todo.name }}</th>
          <td class="state">
            <button @click="toddleState(todo)">
              {{ labels.get(todo, state) }}
            </button>
          </td>
          <td class="button">
            <button @click.shift="removeTodo(todo)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p>Ctrl + Click</p>

    <div>add</div>
    <form @submit.prevent="addTodo">
      コメント<input type="text" ref="name" />
      <button type="submit">add</button>
    </form>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
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
    return this.todos.filter((t) =>
      this.current === State.All ? true : this.current === t.state
    )
  }

  private created() {
    this.todos = todoStorage.fetchAll()
  }

  // private addTodo()
  private addTodo() {
    // HTML要素のname
    const name = this.$refs.name as HTMLInputElement
    if (!name.value.length) {
      return false
    }
    this.todos.push({
      id: todoStorage.nextId,
      name: name.value,
      state: State.Working,
    })
    name.value = ''
  }

  // 削除
  private removeTodo(todo: TodoItemindex) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
  }

  // 作業中or完了
  private toggleState(todo: TodoItemindex) {
    todo.state = todo.state === State.Working ? State.Done : State.Working
  }

  @Watch('todos', { deep: true })
  private onTodoChange(todos: TodoItemindex[]) {
    todoStorage.save(todos)
  }
}
</script>
