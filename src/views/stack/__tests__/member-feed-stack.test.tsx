/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Provider } from 'react-redux';
import MemberFeedStack from '../member-feed-stack';

import * as renderer from 'react-test-renderer';
import { configureStore } from '../../../stores/configure-store';

it('renders correctly', () => {
  const store = configureStore();
  const tree = renderer.create(<Provider store={store}>
    <MemberFeedStack />
  </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
