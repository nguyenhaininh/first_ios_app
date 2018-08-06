/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import { createTypeReducer, isError } from '../common/utility/redux';
import {
  initAppAction, fetchInfomartionsAction, setShowAppMenu, setTabAction, setModeAction,
} from '../actions/app-actions';
import { IAppState, createInitialAppState, AppMode } from './app-state';

export const appReducer = createTypeReducer<IAppState>(
  createInitialAppState,
  initAppAction.reducer((state, action) => {
    if (isError(action)) {
      throw action.error;
    }
    return {
      ...state,
      mode: AppMode.Login,
    };
  }),
  fetchInfomartionsAction.reducer((state, action) => isError(action) ? ({}) : ({
    informations: action.payload
  })),
  setShowAppMenu.reducer((state, action) => ({
    isShowingMenu: action.payload
  })),
  setTabAction.reducer((state, action) => ({
    tab: action.payload
  })),
  setModeAction.reducer((state, action) => ({
    mode: action.payload
  })),
);
