import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';


@NgModule({
  declarations: [
    TodoComponent
  ],
  exports: [TodoComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    TodoRoutingModule,
  ]
})
export class TodoModule { }
