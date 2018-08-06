/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { StyleSheet, View, ViewStyle, Text, TextStyle, Image, TouchableOpacity } from 'react-native';
import { DUSK_COLOR } from '../../styles/app-style';
import BookListHorizontal from '../book-list-horizontal';
import {
  arrowIcon,
} from '../../../assets/images';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  } as ViewStyle,
  header: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  } as ViewStyle,
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: DUSK_COLOR,
  } as TextStyle,
  list: {
    marginVertical: 10,
  } as ViewStyle,
});

const TopCategoryShelf: React.StatelessComponent<{
  onPressHeader: () => void,
  onPressItem: () => void,
}> = (props) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.header}>
      <Text style={styles.label}>{props.children}</Text>
      <Image source={arrowIcon} />
    </TouchableOpacity>
    <View style={styles.list} >
      <BookListHorizontal />
    </View>
  </View>
);

export default TopCategoryShelf;
