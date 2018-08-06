/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import AppSwitch from '../app-switch';
import { View } from 'react-native';

import * as renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

it('renders correctly', () => {
  const onSwitchTab = jest.fn();
  const tree = renderer.create(
    <MemoryRouter>
      <AppSwitch>
        <View key="a" />
        <View key="b" />
        <View key="c" />
      </AppSwitch>
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
