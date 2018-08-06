/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import AppStack from '../app-stack';
import { View } from 'react-native';

import * as renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import { Card } from 'react-router-navigation';

it('renders correctly', () => {
  const onSwitchTab = jest.fn();
  const tree = renderer.create(
    <MemoryRouter>
      <AppStack>
        <Card path="/" exact component={View as any}/>
        <Card path="/a" component={View as any}/>
        <Card path="/b" component={View as any}/>
      </AppStack>
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
