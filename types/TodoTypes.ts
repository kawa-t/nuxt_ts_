export enum State {
  All,
  Working,
  Done,
}

export interface TodoItemindex {
  id: number
  name: string
  state: State.Working | State.Done
}
