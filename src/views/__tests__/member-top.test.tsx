/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import MemberTop from '../member-top';

import * as renderer from 'react-test-renderer';
import { configureStore } from '../../stores/configure-store';
import { createMemoryHistory } from 'history';

it('renders correctly', () => {
  const store = configureStore();
  const history = createMemoryHistory();
  const tree = renderer.create(
    <Provider store={store}>
      <MemberTop history={history} />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
