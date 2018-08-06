/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Main from '../main';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <Main />).toJSON();
  expect(rendered).toBeTruthy();
});
