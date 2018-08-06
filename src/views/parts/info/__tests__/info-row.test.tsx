/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import InfoRow from '../info-row';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const onPress = jest.fn();
  const tree = renderer.create(
    <InfoRow
      infoId="abc"
      contentText="Content Text"
      headerText="Header Text"
      onPress={onPress}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
