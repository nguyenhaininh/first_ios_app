/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import { createTypeAsyncAction, createTypeAction } from '../common/utility/redux';

export const incrementAction = createTypeAsyncAction('TEST_INCREMENT', (args: { amount: number }) => {
  return new Promise<number>((resolve) => {
    setTimeout(() => resolve(args.amount), 1000);
  });
});

export const decrementAction = createTypeAction('TEST_DECREMENT', (amount: number) => amount);

export const resetAction = createTypeAsyncAction('TEST_RESET', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('TEST_RESET error!'));
    }, 300);
  });
});
