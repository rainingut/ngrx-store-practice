import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent  implements OnInit{
  // counter!: Observable<number>;
  counter: number = 0;

  constructor(
    // private store: Store<CounterState>
    ) {}
    
  ngOnInit(): void {
    // this.counter = store.select('counter');
  }

  increment() {
    // this.store.dispatch({
    //   type: INCREMENT,
    //   payload: {
    //     value: 1
    //   }
    // });
    this.counter += 1;
  }

  decrement() {
    // this.store.dispatch({
    //   type: DECREMENT,
    //   payload: {
    //     value: 1
    //   }
    // });
    this.counter -= 1;
  }

  reset() {
    // this.store.dispatch({type: RESET});
    this.counter = 0;
  }
}
