/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Card } from 'react-router-navigation';
import { Router } from 'react-router';
import AppStack from '../parts/app/app-stack';
import AppNavContext from '../parts/app/app-nav-context';
import MemberTop from '../member-top';
import MemberDetail from '../member-detail';
import MemberInfoTop from '../member-info-top';
import MemberInfoDetail from '../member-info-detail';
import HeaderButton from '../components/header-button';
import { Image } from 'react-native';
import { Link } from 'react-router-native';
import { MapDispatchToPropsFactory, connect } from 'react-redux';
import { setShowAppMenu } from '../../actions/app-actions';
import { IStore } from '../../stores/configure-store';
import LogoTitle from '../components/logo-title';

import {
  headerMenuIcon,
  headerAlertIcon,
} from '../../assets/images';

interface IStateProps {
}

interface IDispProps {
  showMenu(): void;
}

interface IOwnProps {
}

type IProps = IStateProps & IDispProps & IOwnProps;

class MemberFeedStack extends React.PureComponent<IProps> {
  render() {
    return (
      <AppNavContext.Consumer>
        {(context) => (
          <Router history={context.histories.member.feed}>
            <AppStack>
              <Card exact path="/member"
                renderTitle={LogoTitle}
                component={MemberTop as any}
                renderLeftButton={this.renderHeaderMenuButton}
                renderRightButton={this.renderHeaderAlertButton} />
              <Card path="/member/detail/:bookId"
                component={MemberDetail as any} title="Next screen" />
              <Card exact path="/member/info" title="Next screen"
                component={MemberInfoTop} />
              <Card path="/member/info/:infoId" title="Next screen"
                component={MemberInfoDetail as any}
              />
            </AppStack>
          </Router>
        )}
      </AppNavContext.Consumer>
    );
  }

  renderHeaderMenuButton = () => (
    <HeaderButton onPress={this.props.showMenu}>
      <Image source={headerMenuIcon} />
    </HeaderButton>
  )
  renderHeaderAlertButton = () => (
    <Link component={HeaderButton} to="/member/info">
      <Image source={headerAlertIcon} />
    </Link>
  )
}

const mapDispatchToProps: MapDispatchToPropsFactory<IDispProps, IOwnProps> = (dispatch, props) => ({
  showMenu: () => dispatch(setShowAppMenu(true))
});

export default connect<IStateProps, IDispProps, IOwnProps, IStore>(undefined, mapDispatchToProps)(MemberFeedStack);
