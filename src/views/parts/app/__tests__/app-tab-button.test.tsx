/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import AppTabButton from '../app-tab-button';

import * as renderer from 'react-test-renderer';

it('renders correctly when focused', () => {
  const onPress = jest.fn();
  const tree = renderer.create(
    <AppTabButton
      sourceOn={123}
      sourceOff={456}
      on={true}
      onPress={onPress} >
      ABC
    </AppTabButton>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when unfocsed', () => {
  const onPress = jest.fn();
  const tree = renderer.create(
    <AppTabButton
      sourceOn={123}
      sourceOff={456}
      on={false}
      onPress={onPress} >
      ABC
    </AppTabButton>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
