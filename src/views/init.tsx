/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { StyleSheet, ViewStyle, ActivityIndicator } from 'react-native';
import { initAppAction } from '../actions/app-actions';
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { IStore } from '../stores/configure-store';

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
  } as ViewStyle,
});

interface IStateProps {
  isInitializing: boolean;
}
interface IDispProps {
  init(): Promise<{}>;
}
interface IOwnProps {
}

type IProps = IStateProps & IDispProps & IOwnProps;

class Init extends React.PureComponent<IProps, {}> {
  componentWillMount() {
    if (!this.props.isInitializing) {
      this.props.init();
    }
  }

  render() {
    return (
      <ActivityIndicator
        style={styles.activityIndicator}
        key="init"
        size="large"
      />
    );
  }
}

const mapStateToProps: MapStateToPropsParam<IStateProps, IOwnProps, IStore> = (state, ownProps) => ({
  isInitializing: initAppAction.isPending(state),
});

const mapDispToProps: MapDispatchToPropsParam<IDispProps, IOwnProps> = (dispatch, ownProps) => ({
  init: () => dispatch(initAppAction())
});

export default connect<IStateProps, IDispProps, IOwnProps, IStore>(mapStateToProps, mapDispToProps)(Init);
