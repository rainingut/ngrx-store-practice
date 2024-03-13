import { TodoReducerKey } from './../../stores/todo/todo.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, tap } from 'rxjs';
import { Todo, TodoState } from '../../stores/todo/todo.store';
import { ADDTODO, REMOVETODO } from '../../stores/todo/todo.action';

@Component({
  selector: 'app-todo-list',
  template: `
    <input type="text" #title (keyup.enter)="addTodo(title)">
    <button (click)="addTodo(title)">Add</button>
    <ul>
      <li *ngFor="let todo of todos | async">
        {{ todo.title }}
        <button (click)="removeTodo(todo)">Remove</button>
      </li>
    </ul>
  `,
})
export class TodoListComponent implements OnInit{
  todos!: Observable<Todo[]>;

  constructor(
    private store: Store<TodoState>
  ) {}

  ngOnInit(): void {
    this.todos = this.store.select((TodoReducerKey as any))
    .pipe(map(todoResponse=>todoResponse?.todos || []))
  }

  addTodo(input: HTMLInputElement) {
    const value = input.value?.trim?.();
    if (!value) return;
    this.store.dispatch({
      type: ADDTODO,
      payload: { title: value }
    });
    input.value = '';
  }

  removeTodo(todo: Todo) {
    this.store.dispatch({
      type: REMOVETODO,
      payload: { id: todo.id }
    });
  }
}
