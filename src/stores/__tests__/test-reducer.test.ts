/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import { incrementReducer, ITestState, decrementReducer, resetReducer } from '../../stores/test-reducer';

describe('test-reducer', () => {

  describe('increment', () => {

    it('resolve', () => {
      const state: ITestState = { counter: 1000 };
      const action = {
        type: 'TEST_INCREMENT',
        payload: 123,
      };
      const result = incrementReducer(state, action);
      expect(result).toEqual({
        counter: 1123,
      });
    });

    it('reject', () => {
      const state: ITestState = { counter: 2000 };
      const action = {
        type: 'TEST_INCREMENT',
        payload: new Error('Test Error'),
        error: true,
      };
      const result = incrementReducer(state, action);
      expect(result).toEqual({
        message: 'Test Error'
      });
    });
  });

  it('decrement', () => {
    const state: ITestState = { counter: 3000 };
    const action = {
      type: 'TEST_DECREMENT',
      payload: 123,
    };
    const result = decrementReducer(state, action);
    expect(result).toEqual({
      counter: 2877
    });
  });

  describe('reset', () => {
    it('resolve', () => {
      const state: ITestState = { counter: 4000 };
      const action = {
        type: 'TEST_RESET',
      };
      const result = resetReducer(state, action);
      expect(result).toEqual({
        counter: 0
      });
    });
    it('reject', () => {
      const state: ITestState = { counter: 5000 };
      const action = {
        type: 'TEST_RESET',
        payload: new Error('This is unit test for reset reject.'),
        error: true,
      };
      const result = resetReducer(state, action);
      expect(result).toEqual({
        counter: 0,
        message: 'This is unit test for reset reject.',
      });
    });
  });
});
