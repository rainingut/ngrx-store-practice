import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () => import('./pages/counter/counter.module').then(m=>m.CounterModule),
    pathMatch:'full'
  },
  {
    path: 'todo',
    loadChildren: () => import('./pages/todo/todo.module').then(m=>m.TodoModule),
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
