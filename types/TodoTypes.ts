export enum State {
  All,
  Workking,
  Done,
}

export interface TodoItemindex {
  id: number
  name: string
  sate: State.Workking | State.Done
}
