/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import MemberInfoDetail from '../member-info-detail';

import * as renderer from 'react-test-renderer';
import { configureStore } from '../../stores/configure-store';
import { Provider } from 'react-redux';

it('renders correctly', () => {
  const store = configureStore();
  const tree = renderer.create(
    <Provider store={store}>
      <MemberInfoDetail infoId={'1234'} />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
