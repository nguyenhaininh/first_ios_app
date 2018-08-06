/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Provider } from 'react-redux';
import DownloadHeader from '../download-header';

import * as renderer from 'react-test-renderer';
import { configureStore } from '../../../stores/configure-store';

import downloads from '../../../assets/downloads';

const onPress = () => {};

it('renders correctly', () => {
  const store = configureStore();
  const tree = renderer.create(
    <Provider store={store}>
      <DownloadHeader order="order" used="used" total="total" />
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
