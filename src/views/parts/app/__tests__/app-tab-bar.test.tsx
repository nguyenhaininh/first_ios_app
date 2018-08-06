/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import AppTabBar, { IAppTabItem } from '../app-tab-bar';

import * as renderer from 'react-test-renderer';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

it('renders correctly', () => {
  const onPress = jest.fn();
  const history = createMemoryHistory({ initialEntries: ['/tab/feed'] });
  const tree = renderer.create(
    <Router history={history}>
      <AppTabBar
        index={0}
        items={[{
          onPress,
          title: 'Title',
          sourceOff: 123,
          sourceOn: 456
        } as IAppTabItem
        ]}
      />
    </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
