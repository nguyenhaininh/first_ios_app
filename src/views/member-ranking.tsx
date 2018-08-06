/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { StyleSheet, ScrollView, ViewStyle, View } from 'react-native';
import I18n from 'react-native-i18n';
import { IStore } from '../stores/configure-store';
import { RouterProps } from 'react-router';
import RankingCategoryShelf from './parts/ranking/ranking-category-shelf';
import { IAppState } from '../stores/app-state';
import { WHITE_COLOR } from './styles/app-style';

interface IStateProps {
  appState: IAppState;
}

interface IOwnProps extends RouterProps {
}

type IProps = IStateProps & IOwnProps;

class MemberRanking extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const categories = ['overall', 'fashion', 'lifestyle'];
    return (
      <View style={styles.container}>
        <ScrollView key="top" style={styles.scroll}>
          {categories.map(category => (
            <RankingCategoryShelf key={category} onPressHeader={this.goToList(category)} onPressItem={this.goToDetail}>{I18n.t(`ranking_${category}`)}</RankingCategoryShelf>
          ))}
        </ScrollView>
      </View>
    );
  }

  private goToList = (category: string) => () => {
    this.props.history.push(`/member/ranking/${category}`);
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

export default connect(mapStateToProps)(MemberRanking);
