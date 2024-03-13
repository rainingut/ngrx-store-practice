import { Component } from '@angular/core';
import { Todo } from '../../stores/todo/todo.store';

@Component({
  selector: 'app-todo',
  template: `
  todo
  <app-todo-list></app-todo-list>
  <app-todo-dashboard></app-todo-dashboard>
  `,
})
export class TodoComponent {}
