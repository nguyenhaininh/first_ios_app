/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import Button from '../button';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const onPress = jest.fn();
  const tree = renderer.create(<Button onPress={onPress}>Test</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
