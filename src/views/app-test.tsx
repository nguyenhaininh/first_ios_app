/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { StyleSheet, View, ViewStyle, Text, ActivityIndicator } from 'react-native';
import Button from './components/button';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { IStore } from '../stores/configure-store';
import { incrementAction, resetAction, decrementAction } from '../actions/test-actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  } as ViewStyle
});

interface IOwnProps {
}

interface IStateProps {
  counter: number;
  loading: boolean;
}

interface IDispProps {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const Test: React.StatelessComponent<IOwnProps & IStateProps & IDispProps> = (props) => (
  <View style={styles.container}>
    <Text>COUNT : {props.counter}</Text>
    <Button onPress={props.increment} >Increment</Button>
    <Button onPress={props.decrement} >Decrement</Button>
    <Button onPress={props.reset} >Reset</Button>
    {props.loading ? <ActivityIndicator /> : undefined}
  </View>
);

const mapStateToProps: MapStateToPropsParam<IStateProps, IOwnProps, IStore> = (state, ownProps) => ({
  counter: state.testState.counter,
  loading: incrementAction.isPending(state) || resetAction.isPending(state)
});

const mapDispatchToProps: MapDispatchToPropsParam<IDispProps, IOwnProps> = (dispatch, ownProps) => ({
  increment: () => dispatch(incrementAction({ amount: 1 })),
  decrement: () => dispatch(decrementAction(1)),
  reset: () => dispatch(resetAction())
});

export default connect<IStateProps, IDispProps, IOwnProps, IStore>(
  mapStateToProps, mapDispatchToProps,
)(Test);
