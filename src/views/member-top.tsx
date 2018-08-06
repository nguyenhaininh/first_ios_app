/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { StyleSheet, ScrollView, ViewStyle, View } from 'react-native';
import { IStore } from '../stores/configure-store';
import { RouterProps } from 'react-router';
import TopAlertBox from './parts/top/top-alert-box';
import TopCategoryShelf from './parts/top/top-category-shelf';
import { IAppState } from '../stores/app-state';
import { WHITE_COLOR } from './styles/app-style';

interface IStateProps {
  appState: IAppState;
}

interface IOwnProps extends RouterProps {
}

type IProps = IStateProps & IOwnProps;

class MemberTop extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <ScrollView key="top" style={styles.scroll}>
          <TopAlertBox onPress={this.goToInfo}>【注意】T-MAGAZINEを装った不審なメールにご注意ください</TopAlertBox>
          <TopCategoryShelf onPressHeader={this.goToList} onPressItem={this.goToDetail}>新着雑誌</TopCategoryShelf>
          <TopCategoryShelf onPressHeader={this.goToList} onPressItem={this.goToDetail}>おすすめ</TopCategoryShelf>
          <TopCategoryShelf onPressHeader={this.goToList} onPressItem={this.goToDetail}>最近見た雑誌</TopCategoryShelf>
          <TopCategoryShelf onPressHeader={this.goToList} onPressItem={this.goToDetail}>女性ライフスタイル</TopCategoryShelf>
          <TopCategoryShelf onPressHeader={this.goToList} onPressItem={this.goToDetail}>女性ファッション</TopCategoryShelf>
        </ScrollView>
      </View>
    );
  }

  private goToInfo = () => {
    this.props.history.push('/member/info');
  }

  private goToList = () => {

  }

  private goToDetail = () => {
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  } as ViewStyle,
  scroll: {
    flex: 1,
    paddingVertical: 10,
  }
});

const mapStateToProps: MapStateToPropsParam<IStateProps, IOwnProps, IStore> = ({ appState }, ownProps) => ({
  appState
});

export default connect(mapStateToProps)(MemberTop);
