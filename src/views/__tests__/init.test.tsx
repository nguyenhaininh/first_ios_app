/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import Init from '../init';

import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '../../stores/configure-store';

it('renders correctly', () => {
  const store = configureStore();
  const tree = renderer.create(
    <Provider store={store}>
      <Init />
    </Provider>
  );
  expect(tree).toBeTruthy();
});
