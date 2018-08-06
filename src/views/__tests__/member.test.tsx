/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Provider } from 'react-redux';
import Member from '../member';

import * as renderer from 'react-test-renderer';
import { configureStore } from '../../stores/configure-store';
import { createMemoryHistory } from 'history';

it('renders correctly', () => {
  const store = configureStore();
  const tree = renderer.create(
    <Provider store={store}>
      <Member />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
