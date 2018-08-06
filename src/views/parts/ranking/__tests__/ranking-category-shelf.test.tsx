/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import RankingCategoryShelf from '../ranking-category-shelf';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const fn = jest.fn();
  const tree = renderer.create(
    <RankingCategoryShelf
      onPressHeader={fn}
      onPressItem={fn}>
      Test
    </RankingCategoryShelf>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
