/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
const moment = require('moment');
import I18n from 'react-native-i18n';
import { StyleSheet, View, Image, Text, TextStyle, ViewStyle, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import { WHITE_SMOKE_COLOR, WARM_GREY_COLOR, DARK_BLACK_COLOR, DUSK_COLOR, BRIGHT_YELLOW_COLOR_30, LIGHT_GREY_COLOR_30 } from '../../styles/app-style';

import { DownloadData } from '../../../assets/downloads';
import { deleteIcon } from '../../../assets/images';

const styles = StyleSheet.create({
  container: {
    height: 156
  },
  mainContent: {
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
    marginLeft: 20,
  },
  title: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: DARK_BLACK_COLOR,
  } as TextStyle,
  dateTitme: {
    marginTop: 10,
    fontSize: 11,
    fontWeight: 'bold',
    color: DARK_BLACK_COLOR,
  } as ViewStyle,
  deliveryTitle: {
    fontSize: 11,
    marginTop: 8,
    color: WARM_GREY_COLOR,
  } as TextStyle,
  downloadedBox: {
    height: 28,
    backgroundColor: BRIGHT_YELLOW_COLOR_30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  downloadingBox: {
    backgroundColor: LIGHT_GREY_COLOR_30,
  },
  sizeTitle: {
    color: DUSK_COLOR,
    fontSize: 11,
  },
  freeBox: {
    flex: 1,
  },
  deleteButton: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: 3,
    right: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Touchable = Platform.select<React.ReactType>({
  ios: TouchableOpacity,
  android: TouchableNativeFeedback,
});

const DownloadCell: React.StatelessComponent<{
  data: DownloadData,
  onPress: () => void,
}> = ({data, onPress}) => (
  <Touchable onPress={onPress} >
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Image resizeMode={'contain'} source={data.book.image} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{data.book.title}</Text>
          <Text style={styles.dateTitme}>{`${moment(data.book.date, 'YYYY/MM/DD').format(I18n.t('book_issue_date_format'))}`}</Text>
          <Text style={styles.deliveryTitle}>{`${I18n.t('delivery_date')}(${data.deliveryDate})${I18n.t('end_date')}(${data.endDate})`}</Text>
          <View style={styles.freeBox} />
          <View style={[styles.downloadedBox, data.downloaded < 100 ? styles.downloadingBox : null]}>
            <Text style={styles.sizeTitle}>{`${data.downloaded}% ${I18n.t('download_completed')}`}</Text>
            <View style={styles.freeBox}/>
            <Text style={styles.sizeTitle}>{`${data.size}MB`}</Text>
          </View>
        </View>
      </View>
      <Touchable style={styles.deleteButton}>
        <View>
          <Image source={deleteIcon} />
        </View>
      </Touchable>
    </View>
  </Touchable>
);
export default DownloadCell;
