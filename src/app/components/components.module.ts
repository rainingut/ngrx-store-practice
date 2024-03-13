import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoDashboardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoListComponent,
    TodoDashboardComponent,
  ]
})
export class ComponentsModule { }
