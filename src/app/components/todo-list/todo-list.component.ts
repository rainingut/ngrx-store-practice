import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Todo  {
  id: any;
  title: string;
}

@Component({
  // templateUrl: './todo-list.component.html',
  // styleUrl: './todo-list.component.scss'
  selector: 'app-todo-list',
  template: `
    <input type="text" #title>
    <button (click)="addTodo(title)">Add</button>
    <ul>
      <li *ngFor="let todo of todos">
        {{ todo.title }}
        <button (click)="removeTodo(todo)">Remove</button>
      </li>
    </ul>
  `,
})
export class TodoListComponent {
  // todos: Observable<Todo[]>;
  @Input() todos: Todo[] = [];
  @Output() onadd = new EventEmitter();
  @Output() onremove = new EventEmitter();

  constructor(
    // private store: Store<TodoState>
  ) {
    // this.todos = store.select('todos');
  }

  addTodo(input: HTMLInputElement) {
    this.onadd.emit(input.value);

    // const value = input.value?.trim?.();
    // if (!value) return;
    // this.todos.push({id: Date.now(), title: value});

    // this.store.dispatch({
    //   type: ADD_TODO,
    //   payload: {
    //     title: value
    //   }
    // });
    input.value = '';
  }

  removeTodo(todo: Todo) {
    this.onremove.emit(todo);

    // const {id} = todo;
    // this.todos = this.todos.filter(todo => todo.id!==id);

    // this.store.dispatch({
    //   type: REMOVE_TODO,
    //   payload: {
    //     id: todo.id
    //   }
    // });
  }
}
