/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import Separator from '../separator';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
const tree = renderer.create(<Separator/>).toJSON();
  expect(tree).toMatchSnapshot();
});
