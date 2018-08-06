/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { View, StyleSheet, ViewStyle, SafeAreaView, ImageRequireSource } from 'react-native';
import { WHITE_SMOKE_COLOR, GAINSBORO_COLOR } from '../../styles/app-style';
import AppTabButton from './app-tab-button';

export interface IAppTabItem {
  title: string;
  sourceOn: ImageRequireSource;
  sourceOff: ImageRequireSource;
  onPress(): void;
}

interface IProps {
  index: number;
  items: IAppTabItem[];
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE_SMOKE_COLOR,
    height: 56,
    width: '100%',
  } as ViewStyle,
  safeArea: {
    backgroundColor: WHITE_SMOKE_COLOR,
    borderTopColor: GAINSBORO_COLOR,
    borderTopWidth: 1,
  } as ViewStyle,
});

class AppTabBar extends React.PureComponent<IProps> {

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {this.props.items.map(this.renderChild)}
        </View>
      </SafeAreaView >
    );
  }

  renderChild = (item: IAppTabItem, index: number) => {
    return (
      <AppTabButton
        key={index}
        sourceOn={item.sourceOn}
        sourceOff={item.sourceOff}
        on={index === this.props.index}
        onPress={item.onPress}
      >
        {item.title}
      </AppTabButton>
    );
  }
}

export default AppTabBar;
