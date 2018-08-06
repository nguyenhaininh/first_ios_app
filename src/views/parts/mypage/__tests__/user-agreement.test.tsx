/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { createMemoryHistory } from 'history';
import UserAgreement from '../user-agreement';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const history = createMemoryHistory();
  const tree = renderer.create(
    <UserAgreement history={history} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
