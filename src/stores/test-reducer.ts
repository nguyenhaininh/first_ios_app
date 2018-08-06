/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import { createTypeReducer, isError } from '../common/utility/redux';
import { incrementAction, decrementAction, resetAction } from '../actions/test-actions';

export interface ITestState {
  counter: number;
  message?: string;
}

export function createInitialTestState(): ITestState {
  return { counter: 0 };
}

export const incrementReducer = incrementAction.reducer<ITestState>((state, action) => {
  if (isError(action)) {
    return {
      message: action.payload && action.payload.message,
    };
  }
  return {
    message: undefined,
    counter: state.counter += action.payload,
  };
});

export const decrementReducer = decrementAction.reducer<ITestState>((state, action) => ({
  counter: state.counter -= action.payload,
}));

export const resetReducer = resetAction.reducer<ITestState>((state, action) => {
  if (isError(action)) {
    return {
      message: action.payload && action.payload.message,
      counter: 0
    };
  }
  return {
    message: undefined,
    counter: 0
  };
});

export const testReducer = createTypeReducer(
  createInitialTestState,
  incrementReducer,
  decrementReducer,
  resetReducer,
);
