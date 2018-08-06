/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { StyleSheet, ViewStyle, Image, ScrollView, TextStyle, Text, View, TouchableOpacity, Platform } from 'react-native';
import { MapDispatchToPropsParam, connect } from 'react-redux';
import { setModeAction } from '../actions/app-actions';
import { IStore } from '../stores/configure-store';
import { WHITE_COLOR, DUSK_COLOR, BLUE_COLOR, LIGHT_GREY_COLOR, LIGHT_BLUE_COLOR, YELLOW_COLOR, BLACK_COLOR } from './styles/app-style';
import I18n from 'react-native-i18n';
import { AppMode } from '../stores/app-state';
import { loginYahooBtn, loginTidBtn } from '../assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  } as ViewStyle,
  content: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  headerText: {
    fontSize: 20,
    color: DUSK_COLOR,
    fontWeight: 'bold',
  } as TextStyle,
  descriptionText: {
    fontSize: 11,
    lineHeight: 15,
    color: DUSK_COLOR,
    textAlign: 'center',
  } as TextStyle,
  boldText: {
    fontWeight: 'bold',
  } as TextStyle,
  loginHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: BLUE_COLOR,
  } as TextStyle,
  loginDescriptionText: {
    fontSize: 10,
    color: DUSK_COLOR,
  } as TextStyle,
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: LIGHT_GREY_COLOR,
  } as ViewStyle,
  optionText: {
    color: LIGHT_BLUE_COLOR,
  } as TextStyle,
  registerButton: {
    backgroundColor: YELLOW_COLOR,
    borderRadius: 4,
    width: 260,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  registerButtonText: {
    color: BLACK_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
  } as TextStyle,
  space40: { height: 40 },
  space34: { height: 34 },
  space30: { height: 30 },
  space27: { height: 27 },
  space24: { height: 24 },
  space20: { height: 20 },
  space15: { height: 15 },
  space10: { height: 10 },
});

interface IOwnProps {
}

interface IStateProps {
}

interface IDispProps {
  login(): void;
}

type IProps = IOwnProps & IStateProps & IDispProps;

class Login extends React.PureComponent<IProps> {
  strings = {
    login: I18n.t('login'),
    login_guide_ios_1: I18n.t('login_guide_ios_1'),
    login_guide_ios_2: I18n.t('login_guide_ios_2'),
    login_guide_android_1: I18n.t('login_guide_android_1'),
    login_guide_yj: I18n.t('login_guide_yj'),
    login_guide_tsite: I18n.t('login_guide_tsite'),
    login_register_guide_yj: I18n.t('login_register_guide_yj'),
    yahoo_japan_id: I18n.t('yahoo_japan_id'),
    tcard_number_or_mail_address: I18n.t('tcard_number_or_mail_address'),
    for_tsutaya_premium_user: I18n.t('for_tsutaya_premium_user'),
    login_with_tid: I18n.t('login_with_tid'),
    for_first_time_users: I18n.t('for_first_time_users'),
    register_yjid: I18n.t('register_yjid'),
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <this.LoginFragment />
          <View style={styles.separator} />
          <this.OptionFragment />
        </View>
      </ScrollView>
    );
  }

  LoginFragment: React.StatelessComponent = Platform.select({
    ios: () => (
      <React.Fragment>
        <Text style={styles.headerText}>{this.strings.login}</Text>
        <View style={styles.space20} />
        <Text style={styles.descriptionText}>
          <Text style={styles.boldText}>
            {this.strings.login_guide_ios_1}{'\n'}
          </Text>
          {this.strings.login_guide_ios_2}
        </Text>
        <View style={styles.space27} />
        <Text style={styles.loginHeaderText}>{this.strings.yahoo_japan_id}</Text>
        <View style={styles.space10} />
        <TouchableOpacity onPress={this.props.login}>
          <Image source={loginYahooBtn} />
        </TouchableOpacity>
        <View style={styles.space10} />
        <Text style={styles.loginDescriptionText}>{this.strings.login_guide_yj}</Text>
        <View style={styles.space34} />
      </React.Fragment>
    ),
    android: () => (
      <React.Fragment>
        <Text style={styles.headerText}>{this.strings.login}</Text>
        <View style={styles.space20} />
        <Text style={styles.descriptionText}>
          {this.strings.login_guide_android_1}
        </Text>
        <View style={styles.space34} />
        <Text style={styles.loginHeaderText}>{this.strings.yahoo_japan_id}</Text>
        <View style={styles.space15} />
        <TouchableOpacity onPress={this.props.login}>
          <Image source={loginYahooBtn} />
        </TouchableOpacity>
        <View style={styles.space10} />
        <Text style={styles.loginDescriptionText}>{this.strings.login_guide_yj}</Text>
        <View style={styles.space30} />
        <Text style={styles.loginHeaderText}>{this.strings.tcard_number_or_mail_address}</Text>
        <View style={styles.space15} />
        <TouchableOpacity onPress={this.props.login}>
          <Image source={loginTidBtn} />
        </TouchableOpacity>
        <View style={styles.space10} />
        <Text style={styles.loginDescriptionText}>{this.strings.login_guide_tsite}</Text>
        <View style={styles.space40} />
      </React.Fragment>
    ),
  });

  OptionFragment = Platform.select({
    ios: () => (
      <React.Fragment>
        <View style={styles.space34} />
        <Text style={styles.loginHeaderText}>{this.strings.for_tsutaya_premium_user}</Text>
        <View style={styles.space27} />
        <TouchableOpacity onPress={this.props.login}>
          <Text style={styles.optionText}>{this.strings.login_with_tid}</Text>
        </TouchableOpacity>
      </React.Fragment>
    ),
    android: () => (
      <React.Fragment>
        <View style={styles.space24} />
        <Text style={styles.loginHeaderText}>{this.strings.for_first_time_users}</Text>
        <View style={styles.space20} />
        <TouchableOpacity onPress={this.props.login}>
          <View style={styles.registerButton}>
            <Text style={styles.registerButtonText}>{this.strings.register_yjid}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.space15} />
        <Text style={styles.loginDescriptionText}>{this.strings.login_register_guide_yj}</Text>
      </React.Fragment>
    )
  });

}

const mapDispatchToPropsParam: MapDispatchToPropsParam<IDispProps, IOwnProps> = (dispatch, props) => ({
  login: () => dispatch(setModeAction(AppMode.Member)),
});

export default connect<IStateProps, IDispProps, IOwnProps, IStore>(undefined, mapDispatchToPropsParam)(Login);
