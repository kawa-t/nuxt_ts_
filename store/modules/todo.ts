import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

// 型を定義
type Todo = {
  id?: Number
  title: String
  description: String
  done: Boolean
}

// モジュールの定義
@Module({
  stateFactory: true,
  namespaced: true,
  name: 'todo',
})
export default class Todos extends VuexModule {
  // state
  private todos: Todo[] = []

  // getters
  public get getTodos() {
    return this.todos
  }

  public get getTodo() {
    return (id: Number) => this.todos.find((todo) => todo.id === id)
  }

  public get getTodoCount() {
    return this.todos.length
  }

  // Mutation
  @Mutation
  private add(todo: Todo) {
    this.todos.push(todo)
  }

  @Mutation
  private remove(id: Number) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  @Mutation set(todos: Todo[]) {
    this.todos = todos
  }

  // Actions
  @Action({ rawError: true })
  public async fetchTodos() {
    const { data } = await $axios.get<Todo[]>('/api/todos')
    this.set(data)
  }

  @Action({ rawError: true })
  public async createTodo(payload: Todo) {
    const { data } = await $axios.post<Todo>('/api/todo', payload)
    this.add(data)
  }

  @Action({ rawError: true })
  async deleteTodo(id: Number) {
    await $axios.delete(`/api/todo/${id}`)
    this.remove(id)
  }
}
