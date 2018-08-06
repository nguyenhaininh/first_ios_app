/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Provider } from 'react-redux';
import MemberCategory from '../member-category';

import * as renderer from 'react-test-renderer';
import { configureStore } from '../../stores/configure-store';

it('renders correctly', () => {
  const store = configureStore();
  const tree = renderer.create(
    <Provider store={store}>
      <MemberCategory />
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
