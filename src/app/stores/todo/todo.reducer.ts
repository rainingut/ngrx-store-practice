import { Action } from '@ngrx/store';
import { Todo, TodoState, INITIAL_TODO_STATE } from './todo.store';
import * as TodoActions from './todo.action';

export interface TodoAction extends Action{
  type: string;
  payload?: {title?:string, id?: number};
}

export const TodoReducerKey: string = 'TodoPage';

export function todoReducer (
  state: TodoState = INITIAL_TODO_STATE, // 資料
  action: TodoAction                     // (type動作)，(payload)欲更動的資料
): TodoState {
  const { type, payload } = action;
  let newstate: TodoState = {...state, lastUpdate: new Date().toJSON()};
  switch(type){
    case TodoActions.ADDTODO:
      return {...newstate, todos: [...state.todos, {id: Date.now(), title: payload!.title!}]};
    case TodoActions.REMOVETODO:
      return {...newstate, todos: state.todos.filter(todo=>todo.id!==payload!.id)};
    case TodoActions.CLEARTODOS:
      return {...newstate, todos: []};
    case TodoActions.DEFAULT:
    default: return newstate;
  }
}
