/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import BarLogoTitle from '../bar-logo-title';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <BarLogoTitle >
      hogehoge
    </BarLogoTitle>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
