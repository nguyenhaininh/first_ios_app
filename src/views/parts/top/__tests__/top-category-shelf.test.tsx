/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import TopCategoryShelf from '../top-category-shelf';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const fn = jest.fn();
  const tree = renderer.create(
    <TopCategoryShelf
      onPressHeader={fn}
      onPressItem={fn}>
      Test
    </TopCategoryShelf>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
