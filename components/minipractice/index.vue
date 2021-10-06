<template>
  <div>
    <div class="my-10">
      <label v-for="[state, text] in Array.from(labels)" :key="state">
        <input v-model="current" type="radio" :value="state" />
        {{ text }}
      </label>
    </div>
    <div>{{ filteredTodos.length }} 件を表示中</div>

    <!-- ヘッダー -->
    <div class="flex w-2/3">
      <div class="id">ID</div>
      <div class="comment">コメント</div>
      <div class="state">状態</div>
      <div class="button">-</div>
    </div>
    <div
      v-for="todo in filteredTodos"
      :key="todo.id"
      class="flex h-14 content-center items-center"
    >
      <div class="flex">
        <div class="p-4">{{ todo.id }}</div>
        <div class="p-4">
          <button
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded-full
            "
            @click="toggleState(todo)"
          >
            {{ labels.get(todo.state) }}
          </button>
        </div>
      </div>
      <div class="flex">
        <div>{{ todo.name }}</div>
        <div><button @click.shift="removeTodo(todo)">削除</button></div>
      </div>
    </div>

    <p>Ctrl + Click</p>

    <div>add</div>
    <form @submit.prevent="addTodo">
      コメント<input class="mx-4" type="text" ref="name" />
      <button class="m-4" type="submit">追加する</button>
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
