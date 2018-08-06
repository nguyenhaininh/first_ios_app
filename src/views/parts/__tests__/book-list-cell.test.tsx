/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import BookListCell from '../book-list-cell';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <BookListCell
      title="Book Title"
      subTitle="Sub Title"
      new={true}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
