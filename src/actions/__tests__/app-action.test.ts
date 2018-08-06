import { initAppAction, fetchInfomartionsAction, setTabAction, setModeAction } from '../../actions/app-actions';
import { createStore, applyMiddleware } from 'redux';

import { typeReduxMiddleware } from '../../common/utility/redux';
import { AppTab, AppMode } from '../../stores/app-state';

jest.useFakeTimers();
const createDispatch = <State>() => createStore((state: State | undefined) => state, {}, applyMiddleware(typeReduxMiddleware)).dispatch;

it('initAppAction', async () => {
  const promise = initAppAction();
  jest.runAllTimers();
  const result = await promise;
  expect(result).toBeUndefined();
});

it('fetchInformationsAction', async () => {
  const promise = fetchInfomartionsAction();
  jest.runAllTimers();
  const action = await promise;
  expect(action.length).toBe(6);
});

it('setTabAction', async () => {
  expect(setTabAction(AppTab.Search)).toEqual({
    type: 'APP_SET_TAB',
    payload: AppTab.Search
  });
});

it('setModeAction', async () => {
  expect(setModeAction(AppMode.Member)).toEqual({
    type: 'APP_SET_MODE',
    payload: AppMode.Member
  });
});
