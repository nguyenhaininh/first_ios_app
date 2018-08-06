/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import AppSwitch from './parts/app/app-switch';
import AppTabBar, { IAppTabItem } from './parts/app/app-tab-bar';
import MemberFeedStack from './stack/member-feed-stack';
import MemberRankingStack from './stack/member-ranking-stack';
import MemberFavoriteStack from './stack/member-favorite-stack';
import MemberDownloadStack from './stack/member-download-stack';
import MemberSearchStack from './stack/member-search-stack';
import MemberMenuModal from './modal/member-menu-modal';
import I18n from 'react-native-i18n';
import { AppTab } from '../stores/app-state';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { IStore } from '../stores/configure-store';
import { tabBarFeedIcon, tabBarFeedIcoOff, tabBarRankIcon, tabBarRankIcoOff, tabBarFavIcon, tabBarFavIcoOff, tabBarDlIcon, tabBarDlIcoOff, tabBarSearchIcon, tabBarSearchIcoOff } from '../assets/images';
import AppNavContext, { IAppNavContext } from './parts/app/app-nav-context';
import { MemoryHistory } from 'history';
import { setTabAction } from '../actions/app-actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
});

interface IStateProps {
  tab: AppTab;
}

interface IDispProps {
  setTab(tab: AppTab): void;
}

interface IOwnProps {
  navContext: IAppNavContext;
}

type IProps = IStateProps & IDispProps & IOwnProps;

class Member extends React.PureComponent<IProps> {
  strings = {
    favorite: I18n.t('favorites'),
    downloads: I18n.t('downloads'),
    search: I18n.t('search'),
  };

  render() {
    const { tab } = this.props;
    return (
      <View style={styles.container}>
        <AppSwitch index={tab}>
          <MemberFeedStack />
          <MemberRankingStack />
          <MemberFavoriteStack />
          <MemberDownloadStack />
          <MemberSearchStack />
        </AppSwitch>
        <AppTabBar index={tab} items={this.items} />
        <MemberMenuModal />
      </View>
    );
  }
  items: IAppTabItem[] = [
    {
      title: I18n.t('feed'),
      sourceOn: tabBarFeedIcon,
      sourceOff: tabBarFeedIcoOff,
      onPress: () => this.switchTab(AppTab.Feed,
        this.props.navContext.histories.member.feed
      ),
    },
    {
      title: I18n.t('ranking'),
      sourceOn: tabBarRankIcon,
      sourceOff: tabBarRankIcoOff,
      onPress: () => this.switchTab(AppTab.Ranking,
        this.props.navContext.histories.member.ranking
      ),
    },
    {
      title: I18n.t('favorites'),
      sourceOn: tabBarFavIcon,
      sourceOff: tabBarFavIcoOff,
      onPress: () => this.switchTab(AppTab.Favorite,
        this.props.navContext.histories.member.favorite
      ),
    },
    {
      title: I18n.t('downloads'),
      sourceOn: tabBarDlIcon,
      sourceOff: tabBarDlIcoOff,
      onPress: () => this.switchTab(AppTab.Download,
        this.props.navContext.histories.member.download
      ),
    },
    {
      title: I18n.t('search'),
      sourceOn: tabBarSearchIcon,
      sourceOff: tabBarSearchIcoOff,
      onPress: () => this.switchTab(AppTab.Search,
        this.props.navContext.histories.member.search
      ),
    }
  ];
  switchTab = (tab: AppTab, history: MemoryHistory) => {
    if (tab === this.props.tab) {
      history.go(-history.length);
      return;
    }
    this.props.setTab(tab);
  }
}

const mapStateToProps: MapStateToPropsParam<IStateProps, IOwnProps, IStore> = ({
  appState: { tab }
}, ownProps) => ({
  tab
});

const mapDispToProps: MapDispatchToPropsParam<IDispProps, IOwnProps> = (dispatch, ownProps) => ({
  setTab: (tab) => dispatch(setTabAction(tab))
});

const ConnectedMember = connect<IStateProps, IDispProps, IOwnProps, IStore>(mapStateToProps, mapDispToProps)(Member);

export default () => (
  <AppNavContext.Consumer>
    {(navContext) => <ConnectedMember navContext={navContext} />}
  </AppNavContext.Consumer>
);
