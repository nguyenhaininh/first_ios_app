/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Modal, Image } from 'react-native';
import { Router } from 'react-router';
import AppNavContext from '../parts/app/app-nav-context';
import AppStack from '../parts/app/app-stack';
import { Card } from 'react-router-navigation';
import HeaderButton from '../components/header-button';
import I18n from 'react-native-i18n';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { IStore } from '../../stores/configure-store';
import { setShowAppMenu } from '../../actions/app-actions';

import MyPage from '../member-mypage';
import UserAgreement from '../parts/mypage/user-agreement';

import {
  headerCloseIcon,
} from '../../assets/images';

interface IStateProps {
  isShowingMenu: boolean;
}

interface IDispProps {
  dismiss(): void;
}

interface IOwnProps {
}

type IProps = IStateProps & IDispProps & IOwnProps;

class MemberMenuModal extends React.PureComponent<IProps> {
  strings = {
    mypage: I18n.t('mypage'),
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
  };

  render() {
    const { isShowingMenu, dismiss } = this.props;
    return (
      <Modal
        animationType="slide"
        visible={isShowingMenu}
        supportedOrientations={['portrait', 'landscape']}
        onRequestClose={dismiss}>
        <AppNavContext.Consumer>
          {(context) => (
            <Router history={context.histories.member.menu} >
              <AppStack>
                <Card path="/modal/menu" exact
                  renderLeftButton={this.renderHeaderCloseMenuButton}
                  title={this.strings.mypage}
                  component={MyPage as any}
                />
                <Card path="/modal/menu/term-of-use" exact
                  title={this.strings.term_of_service}
                  component={UserAgreement}
                />
              </AppStack>
            </Router>
          )}
        </AppNavContext.Consumer>
      </Modal >);
  }

  renderHeaderCloseMenuButton = () => (
    <HeaderButton onPress={this.props.dismiss}>
      <Image source={headerCloseIcon} />
    </HeaderButton>
  )
}

const mapStateToProps: MapStateToPropsParam<IStateProps, IOwnProps, IStore> = (state, ownProps) => ({
  isShowingMenu: state.appState.isShowingMenu,
});

const mapDispToProps: MapDispatchToPropsParam<IDispProps, IOwnProps> = (dispatch, ownProps) => ({
  dismiss: () => dispatch(setShowAppMenu(false))
});

export default connect<IStateProps, IDispProps, IOwnProps, IStore>(mapStateToProps, mapDispToProps)(MemberMenuModal);
