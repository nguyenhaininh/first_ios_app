/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Provider } from 'react-redux';
import MemberSearchStack from '../member-search-stack';

import * as renderer from 'react-test-renderer';
import { configureStore } from '../../../stores/configure-store';

it('renders correctly', () => {
  const store = configureStore();
  const tree = renderer.create(<Provider store={store}>
    <MemberSearchStack />
  </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
