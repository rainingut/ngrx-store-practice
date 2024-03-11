import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { DECREMENT, INCREMENT, RESET } from '../../stores/counter/counter.action';
import { CounterReducerKey } from '../../stores/counter/counter.reducer';
import { CounterState } from '../../stores/counter/counter.store';

@Component({
  selector: 'app-counter',
  // templateUrl: './counter.component.html',
  // styleUrl: './counter.component.scss'
  template:  `
  <p>Counter: {{ counter | async }}</p>
  <button (click)="increment()">Increment</button>
  <button (click)="decrement()">Decrement</button>
  <button (click)="reset()">Reset</button>
  `,
})
export class CounterComponent  implements OnInit{
  counter!: Observable<number>;

  constructor(
    private store: Store<CounterState>
    ) {}

  ngOnInit(): void {
    this.counter = this.store.select(CounterReducerKey as any)
    .pipe(map((value:CounterState)=> value.count));
  }

  increment() {
    this.store.dispatch({
      type: INCREMENT,
      payload: {
        value: 1
      }
    });
  }

  decrement() {
    this.store.dispatch({
      type: DECREMENT,
      payload: {
        value: 1
      }
    });
  }

  reset() {
    this.store.dispatch({type: RESET});
  }
}
