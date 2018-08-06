/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import { configureStore } from '../../stores/configure-store';
import { AppTab, AppMode } from '../app-state';

it('keys', () => expect(Object.keys(configureStore().getState())).toEqual(
  expect.arrayContaining(['@@redux-type', 'testState', 'appState'])
));
it('@@redux-type', () => expect(configureStore().getState()['@@redux-type']).toEqual({ pendings: {} }));
it('testState', () => expect(configureStore().getState().testState).toEqual({ counter: 0 }));
it('appState', () => expect(configureStore().getState().appState).toEqual({
  isShowingMenu: false,
  tab: AppTab.Feed,
  mode: AppMode.Init,
}));
