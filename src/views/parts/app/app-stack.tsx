/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';

import { Navigation, NavigationComponentProps } from 'react-router-navigation';
import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { WHITE_COLOR, DARK_GREY_BLUE_COLOR } from '../../styles/app-style';

export const styles = StyleSheet.create({
  navBar: {
    backgroundColor: WHITE_COLOR,
  } as ViewStyle,
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: DARK_GREY_BLUE_COLOR,
  } as TextStyle,
});

interface IProps extends NavigationComponentProps {
  children?: any;
}

const AppStack: React.StatelessComponent<IProps> = (props) => (
  <Navigation
    titleStyle={styles.title}
    navBarStyle={styles.navBar}
    backButtonTintColor={DARK_GREY_BLUE_COLOR}
    backButtonTitle=" "
    {...props}
  />
);

export default AppStack;
