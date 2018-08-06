/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import LogoTitle from '../logo-title';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
const tree = renderer.create(<LogoTitle/>).toJSON;
  expect(tree).toMatchSnapshot();
});
