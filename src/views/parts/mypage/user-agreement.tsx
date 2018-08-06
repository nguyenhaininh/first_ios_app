/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { RouterProps } from 'react-router';
import { StyleSheet, ViewStyle, Text, View, TouchableOpacity, Image } from 'react-native';
import { WHITE_COLOR, WHITE_SMOKE_COLOR, SOLITUDE_COLOR, DUSK_COLOR, BLACK_COLOR } from '../../styles/app-style';

import {
  arrowIcon,
} from '../../../assets/images';

interface IProps extends RouterProps {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_SMOKE_COLOR,
    paddingTop: 20,
  } as ViewStyle,
  rowContainer: {
    flexDirection: 'row',
    height: 54,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: SOLITUDE_COLOR,
    backgroundColor: WHITE_COLOR,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  topRowContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: SOLITUDE_COLOR,
  },
  sectionContainer: {
    flexDirection: 'row',
    height: 42,
    backgroundColor: DUSK_COLOR,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: WHITE_COLOR,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: BLACK_COLOR,
  },
  subtitle: {
    position: 'absolute',
    color: BLACK_COLOR,
    fontSize: 12,
    bottom: 3,
    left: 15,
  },
  containerContentStyle: {
    paddingBottom: 20,
  },
});

class UserAgreement extends React.PureComponent<IProps> {
  private goMemberShipInfo = () => {};
  private goTermsInfo = () => {};
  private goSettlementInfo = () => {};

  menuItems = [
    { title: 'T会員規約', onPress: this.goMemberShipInfo },
    { title: 'Tマガジン利用規約', onPress: this.goTermsInfo },
    { title: 'TSUTAYA決済サービス利用規約', onPress: this.goSettlementInfo },
  ];

  public render() {
    return (
      <View style={styles.container}>
        {this.menuItems.map((item, index) => (
          <TouchableOpacity onPress={item.onPress} key={item.title} >
            <View style={[styles.rowContainer, index === 0 ? styles.topRowContainer : null]}>
              <Text style={styles.title}>{item.title}</Text>
              <Image source={arrowIcon} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default UserAgreement;
