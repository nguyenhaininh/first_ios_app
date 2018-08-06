/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import HeaderButton from '../header-button';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const onPress = jest.fn();
  const tree = renderer.create(<HeaderButton onPress={onPress}>Test</HeaderButton>).toJSON();
  expect(tree).toMatchSnapshot();
});
