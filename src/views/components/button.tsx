/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { StyleSheet, ViewStyle, Text, TouchableOpacity, TextStyle } from 'react-native';
import { BLUE_COLOR, YELLOW_COLOR, WHITE_COLOR, DARK_BLACK_COLOR } from '../styles/app-style';

const styles = {
  default: StyleSheet.create({
    container: {
      paddingTop: 13,
      paddingBottom: 13,
      backgroundColor: BLUE_COLOR,
      borderRadius: 4,
      minHeight: 42,
      width: 200,
      alignItems: 'center',
    } as ViewStyle,
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: WHITE_COLOR,
    } as TextStyle,
  }),
  yellow: StyleSheet.create({
    container: {
      backgroundColor: YELLOW_COLOR,
    } as ViewStyle,
    text: {
      color: DARK_BLACK_COLOR,
    } as TextStyle,
  }),
};

const Button = (props: {
  children: React.ReactText,
  yellow?: boolean,
  buttonStyle?: ViewStyle,
  titleStyle?: TextStyle,
  onPress: () => void,
}) => (
    <TouchableOpacity style={[
      styles.default.container,
      props.yellow && styles.yellow.container,
      props.buttonStyle,
    ]} onPress={props.onPress}>
      <Text style={[
        styles.default.text,
        props.yellow && styles.yellow.text,
        props.buttonStyle,
      ]}>{props.children}</Text>
    </TouchableOpacity>
  );

export default Button;
