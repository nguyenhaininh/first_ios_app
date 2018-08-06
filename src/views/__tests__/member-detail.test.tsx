/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import MemberDetail from '../member-detail';
import { createLocation, createMemoryHistory } from 'history';

import * as renderer from 'react-test-renderer';
import { match, MemoryRouter, Route } from 'react-router';
import { configureStore } from '../../stores/configure-store';

it('renders correctly', () => {
  const store = configureStore();
  const location = createLocation('/member/detail/12345');
  const match: match<{ bookId: string }> = {
    params: {
      bookId: '12345'
    },
    isExact: false,
    path: '/member/detail/12345',
    url: 'app://member/detail/12345'
  };
  const tree = renderer.create(
    <MemoryRouter>
      <Route path="/member/detail/:bookId" component={MemberDetail}/>
    </MemoryRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
