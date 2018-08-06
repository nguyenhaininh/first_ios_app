/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import TopAlertBox from '../top-alert-box';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const fn = jest.fn();
  const tree = renderer.create(
    <TopAlertBox onPress={fn}>
      Test
    </TopAlertBox>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
