/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import MemberInfoTop from '../member-info-top';

import * as renderer from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import { configureStore } from '../../stores/configure-store';
import { Provider } from 'react-redux';

it('renders correctly', () => {
  const history = createMemoryHistory();
  const store = configureStore();
  const tree = renderer.create(
    <Provider store={store}>
      <MemberInfoTop history={history} />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
