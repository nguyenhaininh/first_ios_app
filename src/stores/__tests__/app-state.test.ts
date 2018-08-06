import { createInitialAppState, IAppState, AppMode, AppTab } from '../app-state';
import { createLocation } from 'history';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

it('initialState', () => {
  const appState = createInitialAppState();
  expect(appState).toEqual({
    isShowingMenu: false,
    mode: AppMode.Init,
    tab: AppTab.Feed,
  } as IAppState);
});
