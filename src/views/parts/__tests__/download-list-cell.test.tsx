/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Provider } from 'react-redux';
import DownloadCell from '../download-list-cell';

import * as renderer from 'react-test-renderer';
import { configureStore } from '../../../stores/configure-store';

import downloads from '../../../assets/downloads';

const onPress = () => {};

it('renders correctly', () => {
  const store = configureStore();
  const tree = renderer.create(
    <Provider store={store}>
      <DownloadCell data={downloads[0]} onPress={onPress}/>
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
