import { ActionReducerMap } from '@ngrx/store';
import { counterReducer, CounterReducerKey } from './counter/counter.reducer';

interface reducer {
  [reducerKey:string]: any
}

export const Reducers: ActionReducerMap<reducer> = {
  [CounterReducerKey]: counterReducer,

}
