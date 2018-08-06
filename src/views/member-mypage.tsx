/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  ViewStyle,
  View,
  TouchableOpacity,
  Text,
  Switch,
  Image,
} from 'react-native';
import I18n from 'react-native-i18n';
import { IStore } from '../stores/configure-store';
import { RouterProps } from 'react-router';
import { Link } from 'react-router-native';
import { IAppState } from '../stores/app-state';
import { WHITE_COLOR, WHITE_SMOKE_COLOR, SOLITUDE_COLOR, DUSK_COLOR, BLACK_COLOR } from './styles/app-style';

import {
  arrowIcon,
} from '../assets/images';

interface IStateProps {
  appState: IAppState;
}

interface IOwnProps extends RouterProps {
  downloadWifi: boolean;
}

type IProps = IStateProps & IOwnProps;

class MyPage extends React.PureComponent<IProps> {
  strings = {
    account_info: I18n.t('account_info'),
    change_email: I18n.t('change_email'),
    change_payment: I18n.t('change_payment'),
    contact_detail: I18n.t('contact_detail'),
    point_setting: I18n.t('point_setting'),
    billing_history: I18n.t('billing_history'),
    stop_payment: I18n.t('stop_payment'),
    various_setting: I18n.t('various_setting'),
    download_wifi_only: I18n.t('download_wifi_only'),
    tap_to_view_explain: I18n.t('tap_to_view_explain'),
    delivery_setting: I18n.t('delivery_setting'),
    confirm_user_terminate: I18n.t('confirm_user_terminate'),
    other_setting: I18n.t('other_setting'),
    contact_us: I18n.t('contact_us'),
    help_faq: I18n.t('help_faq'),
    company_profile: I18n.t('company_profile'),
    term_of_service: I18n.t('term_of_service'),
    personal_info: I18n.t('personal_info'),
    privacy_policy: I18n.t('privacy_policy'),
    logout: I18n.t('logout'),
  };

  menuItems: {
    section: string,
    items: {
      title: string,
      subtitle?: string,
      target?: string,
      renderItem?: () => JSX.Element,
    }[],
   }[] = [{
    section: this.strings.account_info,
    items: [
      {title: this.strings.change_email, target: 'change-email'},
      {title: this.strings.change_payment, target: 'change-payment'},
      {title: this.strings.contact_detail, target: 'contact-detail'},
      {title: this.strings.point_setting, target: 'point-payment'},
      {title: this.strings.billing_history, target: 'billing-history'},
      {title: this.strings.stop_payment, target: 'stop-payment'},
    ]
  }, {
    section: this.strings.various_setting,
    items: [
      {title: this.strings.download_wifi_only, renderItem: () => this.renderDownloadItem()},
      {title: this.strings.delivery_setting, target: 'delivery'},
      {title: this.strings.confirm_user_terminate, target: 'unsubcribe'},
    ],
  }, {
    section: this.strings.other_setting,
    items: [
      {title: this.strings.contact_us, target: 'contact-us'},
      {title: this.strings.help_faq, target: 'help-faq'},
      {title: this.strings.company_profile, target: 'company-profile'},
      {title: this.strings.term_of_service, target: '/modal/menu/term-of-use'},
      {title: this.strings.personal_info, target: 'personal-info'},
      {title: this.strings.privacy_policy, target: 'privacy-policy'},
      {title: this.strings.logout, renderItem: () => this.renderLogoutItem()},
    ],
  }];

  public render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.containerContentStyle} >
        {this.menuItems.map(sectionInfo => (
          <View key={sectionInfo.section}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{sectionInfo.section}</Text>
            </View>
            {sectionInfo.items.map(item => (
              item.renderItem ?
              item.renderItem() :
              <Link component={TouchableOpacity} to={item.target || ''} key={item.title} >
                <View style={styles.rowContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Image source={arrowIcon} />
                </View>
              </Link>
            ))}
          </View>
        ))}
      </ScrollView>
    );
  }

  renderDownloadItem = () => (
    <TouchableOpacity onPress={this.showDownloadHint} key={this.strings.download_wifi_only} >
      <View style={styles.rowContainer}>
        <Text style={styles.title}>{this.strings.download_wifi_only}</Text>
        <Switch value={this.props.downloadWifi} />
        <Text style={styles.subtitle}>{this.strings.tap_to_view_explain}</Text>
      </View>
    </TouchableOpacity>
  )

  renderLogoutItem = () => (
    <TouchableOpacity onPress={this.logout} key={this.strings.logout} >
      <View style={styles.rowContainer}>
        <Text style={styles.title}>{this.strings.logout}</Text>
        <Image source={arrowIcon} />
      </View>
    </TouchableOpacity>
  )

  private logout = () => {
    console.log('Logout');
  }

  private showDownloadHint = () => {
    console.log('Show download hint');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_SMOKE_COLOR,
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

const mapStateToProps: MapStateToPropsParam<IStateProps, IOwnProps, IStore> = ({ appState }, ownProps) => ({
  appState,
  downloadWifi: false,
});

export default connect(mapStateToProps)(MyPage);
