import { TodoReducerKey } from './../../stores/todo/todo.reducer';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { CLEARTODOS } from '../../stores/todo/todo.action';
import { Todo, TodoState } from '../../stores/todo/todo.store';
@Component({
  selector: 'app-todo-dashboard',
  template: `
    <p> Last Update: {{ (lastUpdate | async) | date:'mediumTime'}} </p>
    <p> Total items: {{ (todos | async )?.length }} </p>
    <p>
      <button (click)="clearTodos()">Clear All</button>
    </p>
  `
})
export class TodoDashboardComponent implements OnInit{
  todos!: Observable<Todo[]>;
  lastUpdate!: Observable<Date>;

  constructor(
    private store: Store<TodoState>
  ) {}

  ngOnInit(): void {
    this.todos = this.store.select((TodoReducerKey as any))
    .pipe(map(todoResponse => todoResponse?.todos || []));
    this.lastUpdate = this.store.select((TodoReducerKey as any))
    .pipe(map(todoResponse => todoResponse?.lastUpdate));
  }

  clearTodos() {
    this.store.dispatch({
      type: CLEARTODOS
    });
  }
}
