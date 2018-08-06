import { incrementAction, resetAction, decrementAction } from '../../actions/test-actions';
import { createStore, applyMiddleware } from 'redux';

import { typeReduxMiddleware } from '../../common/utility/redux';

jest.useFakeTimers();
const createDispatch = <State>() => createStore((state: State | undefined) => state, {}, applyMiddleware(typeReduxMiddleware)).dispatch;

describe('test-actions', () => {
  it('increment', async () => {
    const action = incrementAction({ amount: 123 });
    expect(action).toEqual(
      expect.objectContaining({
        type: '@@redux-type/PENDING',
        payload: 'TEST_INCREMENT',
        meta: { amount: 123 },
      })
    );
    jest.runAllTimers();
    const payload = await action;
    expect(payload).toBe(123);
  });
  it('decrement', () => {
    const dispatch = createDispatch();
    const action = dispatch(decrementAction(456));
    expect(action.payload).toBe(456);
  });
  it('reset', async () => {
    const dispatch = createDispatch();
    try {
      const action = dispatch(resetAction());
      jest.runAllTimers();
      await action;
      fail();
    } catch (err) {
      // NOP
      expect(err.message).toBe('TEST_RESET error!');
    }
  });
});
