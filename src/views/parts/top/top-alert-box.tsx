/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { StyleSheet, ViewStyle, Text, TextStyle, TouchableOpacity } from 'react-native';
import { RED_COLOR, YELLOW_COLOR } from '../../styles/app-style';

const styles = StyleSheet.create({
  container: {
    minHeight: 51,
    borderWidth: 2,
    borderColor: YELLOW_COLOR,
    marginHorizontal: 16,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  text: {
    color: RED_COLOR,
    fontWeight: 'bold',
    fontSize: 11,
  } as TextStyle
});

const TopAlertBox = (props: React.Props<any> & { onPress: () => void }) => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <Text style={styles.text}>{props.children}</Text>
  </TouchableOpacity>
);

export default TopAlertBox;
