/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle, TouchableHighlight, ImageStyle, Image } from 'react-native';
import { GREY_BLUE_COLOR, BLACK_COLOR, WHITE_SMOKE_COLOR } from '../../styles/app-style';
import InfoTip from '../../components/info/info-tip';

import {
  arrowIcon,
} from '../../../assets/images';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  } as ViewStyle,
  header: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  headerText: {
    fontSize: 11,
    marginLeft: 10,
    marginRight: 38,
    color: GREY_BLUE_COLOR,
  } as TextStyle,
  content: {
    flexDirection: 'row',
    alignItems:  'center',
  } as ViewStyle,
  contentText: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 21,
    color: BLACK_COLOR,
    marginTop: 14,
    marginLeft: 16,
    marginBottom: 27,
  } as TextStyle,
  arrowIcon: {
    marginRight: 14,
    marginLeft: 10,
    marginTop: 14,
    marginBottom: 27,
  } as ImageStyle,
});

class InfoRow extends React.PureComponent<{
  infoId: string;
  important?: boolean;
  headerText: string;
  contentText: string;
  onPress: (infoId: string) => void;
}> {
  render() {
    const {
      important, headerText, contentText
    } = this.props;
    return (
      <TouchableHighlight
        underlayColor={WHITE_SMOKE_COLOR}
        onPress={this.onPress}>
        <View style={styles.container}>
          <View style={styles.header}>
            <InfoTip important={important} />
            <Text style={styles.headerText}>{headerText}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentText}>{contentText}</Text>
            <Image style={styles.arrowIcon} source={arrowIcon} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  onPress = () => this.props.onPress(this.props.infoId);
}

export default InfoRow;
