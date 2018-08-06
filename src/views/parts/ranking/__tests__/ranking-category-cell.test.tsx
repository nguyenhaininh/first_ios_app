/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import RankingCategoryCell from '../ranking-category-cell';

import * as renderer from 'react-test-renderer';
import rankings from '../../../../assets/rankings';

it('renders correctly', () => {
  const fn = jest.fn();
  const tree = renderer.create(
    <RankingCategoryCell
      onPress={fn}
      data={rankings.overall[0]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
