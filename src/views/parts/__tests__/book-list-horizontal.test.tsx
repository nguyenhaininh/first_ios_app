/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import BookListHorizontal from '../book-list-horizontal';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <BookListHorizontal />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
