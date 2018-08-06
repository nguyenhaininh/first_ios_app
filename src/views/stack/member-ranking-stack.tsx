/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Text } from 'react-native';
import { MapDispatchToPropsFactory, connect } from 'react-redux';
import AppNavContext from '../parts/app/app-nav-context';
import { Router } from 'react-router';
import { Link } from 'react-router-native';
import I18n from 'react-native-i18n';
import AppStack from '../parts/app/app-stack';
import { Card, CardSubViewProps } from 'react-router-navigation';
import MemberRanking from '../member-ranking';
import MemberRankingDetail from '../member-ranking-detail';
import MemberDetail from '../member-detail';
import HeaderButton from '../components/header-button';
import { Image } from 'react-native';
import { setShowAppMenu } from '../../actions/app-actions';
import { IStore } from '../../stores/configure-store';

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

class MemberRankingStack extends React.PureComponent<IProps> {
  render() {
    return (
      <AppNavContext.Consumer>
        {(context) => (
          <Router history={context.histories.member.ranking}>
            <AppStack>
              <Card exact path="/member/ranking"
                component={MemberRanking as any}
                title={I18n.t('ranking')}
                renderLeftButton={this.renderHeaderMenuButton}
                renderRightButton={this.renderHeaderAlertButton} />
              <Card path="/member/ranking/:category"
                component={MemberRankingDetail as any} renderTitle={this.renderHeaderTitle} />
              <Card path="/member/detail/:bookId"
                component={MemberDetail as any} title="Next screen" />
            </AppStack>
          </Router>
        )}
      </AppNavContext.Consumer>
    );
  }

  renderHeaderTitle = (props: CardSubViewProps) => {
    const { category } = props.match.params;
    return <Text style={props.titleStyle}>{I18n.t(`ranking_${category}_title`)}</Text>;
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

export default connect<IStateProps, IDispProps, IOwnProps, IStore>(undefined, mapDispatchToProps)(MemberRankingStack);
