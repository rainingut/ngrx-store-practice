export interface Todo {
  id: number;
  title: string;
}

export interface TodoState {
  todos: Todo[];
  lastUpdate: Date | any;
}

export const INITIAL_TODO_STATE: TodoState = {
  todos: [],
  lastUpdate: null,
};
