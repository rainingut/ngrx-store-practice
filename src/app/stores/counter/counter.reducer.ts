import {Action} from '@ngrx/store';
import {CounterState, INITIAL_COUNTER_STATE} from './counter.store';
import * as CounterActions from './counter.action';

export interface CounterAction extends Action{
  payload?: {value: any,}
}

export const CounterReducerKey: string = 'CounterPage';

export function counterReducer(
  state: CounterState = INITIAL_COUNTER_STATE, // 資料
  action: CounterAction                        // (type)動作，(payload)欲更動的資料
): CounterState {
  const {type, payload} = action;

  switch (type) {
    case CounterActions.INCREMENT:
      return {...state, count: state.count + payload!.value};

    case CounterActions.DECREMENT:
      return {...state, count: state.count - payload!.value};

    case CounterActions.RESET:
      return INITIAL_COUNTER_STATE;

    default:
      return state;
  }
}
