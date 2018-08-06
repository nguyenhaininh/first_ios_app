/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
const moment = require('moment');
import I18n from 'react-native-i18n';
import { StyleSheet, View, Image, Text, TextStyle, ViewStyle, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import { WHITE_SMOKE_COLOR, BLACK_COLOR, DARK_BLACK_COLOR, BROWNISH_GREY_COLOR, RED_COLOR } from '../../styles/app-style';

import { RankingData } from '../../../assets/rankings';

const styles = StyleSheet.create({
  container: {
    height: 156,
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 100,
    height: 126,
    backgroundColor: WHITE_SMOKE_COLOR,
  },
  info: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: DARK_BLACK_COLOR,
  } as TextStyle,
  dateTime: {
    fontSize: 11,
    color: BROWNISH_GREY_COLOR,
  } as ViewStyle,
  description: {
    fontSize: 12,
    color: BLACK_COLOR,
    marginVertical: 10,
  } as ViewStyle,
  deliveryView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  newBox: {
    width: 27,
    height: 12,
    borderColor: RED_COLOR,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  } as ViewStyle,
  newText: {
    fontSize: 8,
    color: RED_COLOR,
  } as TextStyle,
});

const Touchable = Platform.select<React.ReactType>({
  ios: TouchableOpacity,
  android: TouchableNativeFeedback,
});

const NewBox: React.StatelessComponent<{}> = () => (
  <View style={styles.newBox}>
    <Text style={styles.newText}>NEW</Text>
  </View>
);

const RankingCell: React.StatelessComponent<{
  data: RankingData,
  onPress: () => void,
}> = ({data, onPress}) => (
  <Touchable onPress={onPress} style={styles.container} >
    <Image resizeMode={'contain'} source={data.image} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>{`${data.title}  ${I18n.t('ranking_month').replace('%s', data.month.toString())}`}</Text>
      <Text style={styles.description} ellipsizeMode="tail" numberOfLines={3}>{data.description}</Text>
      <View style={styles.deliveryView} >
        <Text style={styles.dateTime}>{`${I18n.t('ranking_deliver').replace('%s', moment(data.date, 'YYYY/MM/DD').format('YYYY.MM.DD'))}`}</Text>
        <NewBox />
      </View>
    </View>
  </Touchable>
);
export default RankingCell;
