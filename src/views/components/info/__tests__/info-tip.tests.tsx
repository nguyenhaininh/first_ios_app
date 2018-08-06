/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import InfoTip from '../info-tip';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<InfoTip/>).toJSON();
  expect(tree).toMatchSnapshot();
});
