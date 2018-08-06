/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import AppSwitch from './parts/app/app-switch';
import { connect, MapStateToPropsParam, MapDispatchToPropsFactory } from 'react-redux';
import { initAppAction, } from '../actions/app-actions';
import { IStore } from '../stores/configure-store';
import { AppMode } from '../stores/app-state';
import Init from './init';
import Member from './member';
import LoginStack from './stack/login-stack';

interface IOwnProps {
}

interface IStateProps {
  mode: AppMode;
}

interface IDispProps {
  init(): Promise<any>;
}

type IProps = IOwnProps & IStateProps & IDispProps;

const mapStateToProps: MapStateToPropsParam<IStateProps, IOwnProps, IStore> =
  ({ appState: { mode } }) => ({ mode });

const mapDispatchToProps: MapDispatchToPropsFactory<IDispProps, IOwnProps> =
  (dispatch) => ({
    init: () => dispatch(initAppAction()),
  });

class App extends React.PureComponent<IProps> {
  render() {
    const { mode } = this.props;
    return (
      <AppSwitch index={mode} >
        <Init />
        <LoginStack />
        <Member />
      </AppSwitch>
    );
  }
}

export default connect<IStateProps, IDispProps, IOwnProps, IStore>(mapStateToProps, mapDispatchToProps)(App);
