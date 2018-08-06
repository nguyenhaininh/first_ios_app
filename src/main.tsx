/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import App from './views/app';
import { Provider } from 'react-redux';
import { Store } from 'react-redux/node_modules/redux';
import { configureStore, IStore } from './stores/configure-store';

import AppNavContext, { IAppNavContext, createInitialContextValue } from './views/parts/app/app-nav-context';

interface IProps {
  store?: Store<IStore>;
}

interface IState {
  navContext: IAppNavContext;
}

class Main extends React.PureComponent<IProps, IState> {
  private store: Store<IStore>;

  constructor(props: IProps) {
    super(props);
    this.store = configureStore();
    this.state = { navContext: createInitialContextValue() };
  }

  render() {
    return (
      <Provider store={this.store}>
        <AppNavContext.Provider value={this.state.navContext}>
          <App />
        </AppNavContext.Provider>
      </Provider>
    );
  }
}

export default Main;
