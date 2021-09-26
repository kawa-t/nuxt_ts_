import { TodoItemindex } from '~/types/TodoTypes'

interface Storable {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

const STORAGE_KEY = 'vue-ts-todoapp'

export default class TodoStorage {
  get nextId(): number {
    return this.fetchAll().length + 1
  }

  // eslint-disable-next-line no-useless-constructor
  constructor(private storage: Storable = localStorage) {}

  public fetchAll(): TodoItemindex[] {
    const todos = JSON.parse(
      this.storage.getItem(STORAGE_KEY) || '[]'
    ) as TodoItemindex[]
    todos.forEach((todo, index) => (todo.id = index))
    return todos
  }

  public save(todos: TodoItemindex[]) {
    this.storage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
