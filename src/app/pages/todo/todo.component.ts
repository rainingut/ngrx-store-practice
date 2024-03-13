import { Component } from '@angular/core';


export interface Todo  {
  id: any;
  title: string;
}

@Component({
  // templateUrl: './todo.component.html',
  // styleUrl: './todo.component.scss'
  selector: 'app-todo',
  template: `
  todo
  <app-todo-list
    [todos]="todos"
    (onadd)="onadd($event)"
    (onremove)="onremove($event)"
  ></app-todo-list>
  <app-todo-dashboard
    [todos]="todos"
    (onclear)="onclear()"
  ></app-todo-dashboard>
  `,
})
export class TodoComponent {
  todos: Todo[] = [];

  onadd(inputvalue: any){
    const value = inputvalue?.trim?.();
    if (!value) return;
    this.todos.push({id: Date.now(), title: value});
  }

  onremove(todo: Todo){
    const {id} = todo;
    this.todos = this.todos.filter(todo => todo.id!==id);
  }

  onclear(){
    this.todos.length = 0;
  }
}
