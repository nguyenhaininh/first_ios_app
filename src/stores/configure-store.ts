/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { typePendingReducerSet, TypeReduxPendingState, createTypeReduxInitialState, typeReduxMiddleware } from '../common/utility/redux';

import { ITestState, testReducer, createInitialTestState } from './test-reducer';
import { appReducer } from './app-reducer';
import { createInitialAppState, IAppState } from './app-state';

export interface IStore extends TypeReduxPendingState {
  testState: ITestState;
  appState: IAppState;
}

export const rootReducer = combineReducers<IStore>({
  ...typePendingReducerSet,
  testState: testReducer,
  appState: appReducer,
});

const middlewares = [typeReduxMiddleware];

export const InitialState: IStore = {
  ...createTypeReduxInitialState(),
  testState: createInitialTestState(),
  appState: createInitialAppState(),
};

export const configureStore = (initialState: IStore = InitialState) => createStore(rootReducer, initialState, applyMiddleware(...middlewares));
