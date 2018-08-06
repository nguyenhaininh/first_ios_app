/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Image } from 'react-native';
import { MapDispatchToPropsFactory, connect } from 'react-redux';
import I18n from 'react-native-i18n';
import AppNavContext from '../parts/app/app-nav-context';
import { Router } from 'react-router';
import { Link } from 'react-router-native';
import AppStack from '../parts/app/app-stack';
import { Card } from 'react-router-navigation';
import MemberDownload from '../member-download';
import HeaderButton from '../components/header-button';
import { IStore } from '../../stores/configure-store';
import { setShowAppMenu } from '../../actions/app-actions';

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

class MemberDownloadStack extends React.PureComponent<IProps> {
  render() {
    return (
      <AppNavContext.Consumer>
        {(context) => (
          <Router history={context.histories.member.download}>
            <AppStack>
              <Card exact path="/member/download"
                title={I18n.t('download_title')}
                renderLeftButton={this.renderHeaderMenuButton}
                renderRightButton={this.renderHeaderAlertButton}
                component={MemberDownload as any} />
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

export default connect<IStateProps, IDispProps, IOwnProps, IStore>(undefined, mapDispatchToProps)(MemberDownloadStack);
