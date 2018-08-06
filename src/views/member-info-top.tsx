/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { StyleSheet, ViewStyle, View, FlatList, ListRenderItem } from 'react-native';
import { MapStateToPropsParam, connect, MapDispatchToPropsParam } from 'react-redux';
import { IAppInformation } from '../stores/app-state';
import { IStore } from '../stores/configure-store';
import { fetchInfomartionsAction } from '../actions/app-actions';
import { History } from 'history';
import { SOLITUDE_COLOR, WHITE_COLOR } from './styles/app-style';
import InfoRow from './parts/info/info-row';
import { Link } from 'react-router-native';

interface IStateProps {
  infos?: IAppInformation[];
  refreshing: boolean;
}

interface IDispProps {
  onRefresh: () => void;
  onPressItem: (infoId: string) => void;
}

interface IOwnProps {
  history: History;
}

type IProps = IOwnProps & IStateProps & IDispProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  } as ViewStyle,
  separator: {
    backgroundColor: SOLITUDE_COLOR,
    height: 1,
  }
});

const keyExtractor = (item: IAppInformation, index: number) => item.infoId;

const Separator = () => <View style={styles.separator} />;

class MemberInfoTop extends React.PureComponent<IProps> {
  componentWillMount() {
    if (!this.props.refreshing && !this.props.infos) {
      this.props.onRefresh();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.infos || []}
          renderItem={this.renderItem}
          refreshing={this.props.refreshing}
          keyExtractor={keyExtractor}
          onRefresh={this.props.onRefresh}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }

  renderItem: ListRenderItem<IAppInformation> = ({ item: { infoId, subject, important, date }, index }) => (
    <Link
      to={'/member/info/' + infoId}
      component={InfoRow}
      infoId={infoId}
      important={important}
      headerText={date}
      contentText={subject}
    />
  )
}

const mapStateToProps: MapStateToPropsParam<IStateProps, IOwnProps, IStore> = (state, ownProps) => ({
  infos: state.appState.informations,
  refreshing: fetchInfomartionsAction.isPending(state),
});

const mapDispatchToProps: MapDispatchToPropsParam<IDispProps, IOwnProps> = (dispatch, props) => ({
  onRefresh: () => {
    dispatch(fetchInfomartionsAction());
  },
  onPressItem: (itemId) => {
    props.history.push(`/member/info/${itemId}`);
  },
});

export default connect<IStateProps, IDispProps, IOwnProps, IStore>(mapStateToProps, mapDispatchToProps)(MemberInfoTop);
