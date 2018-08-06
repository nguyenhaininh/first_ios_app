/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import I18n from 'react-native-i18n';
import { StyleSheet, View, Image, Text, TextStyle, ViewStyle, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { DUSK_COLOR, BRIGHT_YELLOW_COLOR, WHITE_SMOKE_COLOR, SOLITUDE_COLOR, DARK_GREY_BLUE_COLOR } from '../../styles/app-style';

import {
  deleteIcon,
  sortIcon,
} from '../../../assets/images';

const styles = StyleSheet.create({
  container: {
    height: 111,
    backgroundColor: WHITE_SMOKE_COLOR,
    borderBottomColor: SOLITUDE_COLOR,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  mainContent: {
    padding: 15,
    justifyContent: 'center',
  },
  info: {
    flexDirection: 'row',
    paddingVertical: 9,
  },
  freeBox: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: DUSK_COLOR,
  },
  subTitle: {
    fontSize: 12,
    color: DUSK_COLOR,
  },
  subTitleContainer: {
    marginTop: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,
  sizeBox: {
    flexDirection: 'row',
    height: 22,
  },
  usedBox: {
    backgroundColor: BRIGHT_YELLOW_COLOR,
  } as ViewStyle,
  unusedBox: {
    backgroundColor: '#e0e0e0',
  } as TextStyle,
  deleteButton: {
    width: 100,
  },
  deleteView: {
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteTitle: {
    color: DUSK_COLOR,
    fontSize: 12,
    marginLeft: 5,
  },
  orderButton: {
    position: 'absolute',
    right: 15,
    bottom: 5,
    flexDirection: 'row',
    width: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  orderTitle: {
    color: DARK_GREY_BLUE_COLOR,
    fontSize: 12,
    marginLeft: 8,
  }
});

const Touchable = Platform.select<React.ReactType>({
  ios: TouchableOpacity,
  android: TouchableNativeFeedback,
});

const BookListCell: React.StatelessComponent<{
  total: string;
  used: string;
  order: string;
  onChangeOrderType?: () => void;
  onDeleteAll?: () => void;
}> = ({total, used, order, onChangeOrderType, onDeleteAll}) => (
  <View style={styles.container}>
    <View style={styles.mainContent}>
      <View style={styles.info}>
        <Text style={styles.title}>{I18n.t('device_capacity')}</Text>
        <View style={styles.freeBox} />
        <Text style={styles.subTitle}>{`${I18n.t('already_used')}: ${used}/${total}`}</Text>
      </View>
      <View style={styles.sizeBox}>
        <View style={[styles.usedBox, {flex: 1}]} />
        <View style={[styles.unusedBox, {flex: 3}]} />
      </View>
      <Touchable style={styles.deleteButton} onPress={onDeleteAll} >
        <View style={styles.deleteView}>
          <Image source={deleteIcon} />
          <Text style={styles.deleteTitle}>{I18n.t('delete_all')}</Text>
        </View>
      </Touchable>
    </View>
    <Touchable onPress={onChangeOrderType} >
      <View style={styles.orderButton}>
        <Image source={sortIcon} />
        <Text style={styles.orderTitle}>{order}</Text>
      </View>
    </Touchable>
  </View>
);
export default BookListCell;
