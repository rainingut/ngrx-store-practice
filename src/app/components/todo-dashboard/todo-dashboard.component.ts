import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Todo  {
  id: any;
  title: string;
}
@Component({
  // templateUrl: './todo-dashboard.component.html',
  // styleUrl: './todo-dashboard.component.scss'
  selector: 'app-todo-dashboard',
  template: `
    <p>
      Last Update: {{ lastUpdate | date:'mediumTime'}}
    </p>
    <p>
      Total items: {{ (todos ).length }}
    </p>
    <p>
      <button (click)="clearTodos()">Clear All</button>
    </p>
  `
})
export class TodoDashboardComponent {
  // todos: Observable<Todo[]>;
  // lastUpdate: Observable<Date>;
  @Input() todos: Todo[] = [];
  @Output() onclear = new EventEmitter();
  lastUpdate: Date = new Date();

  constructor(
    // private store: Store<TodoState>
  ) {
    // this.todos = store.select('todos');
    // this.lastUpdate = store.select('lastUpdate');
  }

  clearTodos() {
    this.onclear.emit();
    // this.store.dispatch({
    //   type: CLEAR_TODOS
    // });
  }
}
