/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { StyleSheet, ViewStyle, ScrollView, Text, TextStyle, View } from 'react-native';
import { MapStateToPropsParam, connect } from 'react-redux';
import { IAppInformation } from '../stores/app-state';
import { IStore } from '../stores/configure-store';
import { WHITE_COLOR, GREY_BLUE_COLOR, BLACK_COLOR } from './styles/app-style';
import InfoTip from './components/info/info-tip';
import { RouteComponentProps } from 'react-router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  } as ViewStyle,
  headerText: {
    color: GREY_BLUE_COLOR,
    fontSize: 12,
    marginHorizontal: 16,
    marginTop: 15,
  } as TextStyle,
  subjectText: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 34,
    marginHorizontal: 16,
    marginTop: 10,
    color: BLACK_COLOR,
  } as TextStyle,
  descriptionText: {
    color: BLACK_COLOR,
    fontSize: 14,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 31,
    marginBottom: 32,
  } as TextStyle,
});

interface IOwnProps extends RouteComponentProps<{ infoId: string }> {
}

interface IStateProps {
  info?: IAppInformation;
}

type IProps = IOwnProps & IStateProps;

const MemberInfoDetail: React.StatelessComponent<IProps> = ({ info }) => info ? (
  <ScrollView style={styles.container}>
    <View>
      <InfoTip important={info.important} />
      <Text style={styles.headerText}>
        {info.date}
      </Text>
      <Text style={styles.subjectText}>
        {info.subject}
      </Text>
      <Text style={styles.descriptionText}>
        {info.description}
      </Text>
    </View>
  </ScrollView>
) : null;

const mapStateToProps: MapStateToPropsParam<IStateProps, IOwnProps, IStore> = (state, ownProps) => ({
  info: state.appState.informations && state.appState.informations.find(info => info.infoId === ownProps.match.params.infoId),
});

export default connect<IStateProps, {}, IOwnProps, IStore>(mapStateToProps)(MemberInfoDetail);
