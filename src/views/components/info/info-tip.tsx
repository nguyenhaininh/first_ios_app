/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { StyleSheet, ViewStyle, TextStyle, View, Text } from 'react-native';
import { WHITE_COLOR, BLUE_COLOR, RED_COLOR } from '../../styles/app-style';
import I18n from 'react-native-i18n';

const styles = StyleSheet.create({
  box: {
    width: 70,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  boxText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: WHITE_COLOR,
  } as TextStyle,
  blueBox: {
    backgroundColor: BLUE_COLOR,
  } as ViewStyle,
  redBox: {
    backgroundColor: RED_COLOR,
  } as ViewStyle,
});

const InfoTip: React.StatelessComponent<{
  important?: boolean
}> = ({ important }) => (
  <View style={[styles.box, important ? styles.redBox : styles.blueBox]}>
    <Text style={styles.boxText}>{important ? I18n.t('important') : I18n.t('information')}</Text>
  </View>
);

export default InfoTip;
