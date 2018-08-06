/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { SOLITUDE_COLOR } from '../styles/app-style';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    backgroundColor: SOLITUDE_COLOR,
    height: 1
  }
});

const Separator = () => <View style={styles.separator} />;

export default Separator;
