/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import AppNavContext, { createInitialContextValue } from '../app-nav-context';

import * as renderer from 'react-test-renderer';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

it('create initial value', () => {
  const value = createInitialContextValue();
  expect(value).toMatchSnapshot();
});

it('renders correctly', () => {
  const value = createInitialContextValue();
  const tree = renderer.create(
    <AppNavContext.Provider value={value}>
      <AppNavContext.Consumer>
        {(context) => {
          expect(context).toBeTruthy();
          return false;
        }}
      </AppNavContext.Consumer>
    </AppNavContext.Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
