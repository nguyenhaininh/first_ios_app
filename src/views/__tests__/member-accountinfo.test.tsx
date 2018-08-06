/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import MemberAccountInfo from '../member-accountinfo';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const fn = jest.fn();
  const tree = renderer.create(
    <MemberAccountInfo />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
