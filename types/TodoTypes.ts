export enum State {
  All,
  Workking,
  Done,
}

export interface TodoItemindex {
  id: number
  name: string
  state: State.Workking | State.Done
}
