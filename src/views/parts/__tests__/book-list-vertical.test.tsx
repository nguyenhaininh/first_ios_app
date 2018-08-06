/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import BookListVertical from '../book-list-vertical';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <BookListVertical />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
