/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { StyleSheet, View, Image, Text, ImagePropertiesSourceOptions, TextStyle, ViewStyle } from 'react-native';
import { WHITE_SMOKE_COLOR, WARM_GREY_COLOR, DARK_BLACK_COLOR, RED_COLOR } from '../styles/app-style';

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: 130,
    height: 158,
    backgroundColor: WHITE_SMOKE_COLOR,
  },
  info: {

  },
  title: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: DARK_BLACK_COLOR,
  } as TextStyle,
  subTitleContainer: {
    marginTop: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,
  subTitle: {
    fontSize: 11,
    color: WARM_GREY_COLOR,
  } as TextStyle,
  newBox: {
    width: 27,
    height: 12,
    borderColor: RED_COLOR,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  newText: {
    fontSize: 8,
    color: RED_COLOR,
  } as TextStyle,
});

const NewBox: React.StatelessComponent<{}> = () => (
  <View style={styles.newBox}>
    <Text style={styles.newText}>NEW</Text>
  </View>
);

const BookListCell: React.StatelessComponent<{
  title: string,
  subTitle: string,
  new: boolean,
  image?: ImagePropertiesSourceOptions
}> = (props) => (
  <View style={styles.container}>
    {props.image && <Image resizeMode={'contain'} source={props.image} /> || <View />}
    <View style={styles.info}>
      <Text style={styles.title}>
        {props.title}
      </Text>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>
          {props.subTitle}
        </Text>
        {props.new && <NewBox />}
      </View>
    </View>
  </View>
);
export default BookListCell;
