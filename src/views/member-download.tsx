/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import I18n from 'react-native-i18n';
import { StyleSheet, ViewStyle, FlatList, ListRenderItem, View } from 'react-native';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { RouterProps } from 'react-router';

import { IStore } from '../stores/configure-store';
import { WHITE_COLOR, SOLITUDE_COLOR } from './styles/app-style';

import DownloadCell from './parts/download/download-list-cell';
import DownloadHeader from './parts/download/download-header';

import downloads, { DownloadData } from '../assets/downloads';

interface IStateProps {
}

interface IDispProps {
}

interface IOwnProps extends RouterProps {
  orderType: string;
}

type IProps = IStateProps & IDispProps & IOwnProps;

const Separator = () => <View style={styles.separator} />;
const keyExtractor = (item: DownloadData, index: number) => index.toString();

class DownloadView extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <FlatList
        data={downloads}
        style={styles.container}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }

  private onSelectItem = (item: DownloadData) => () => {
    console.log('Open a book');
  }

  private renderItem: ListRenderItem<DownloadData> = ({ item }) => (
    <DownloadCell data={item} onPress={this.onSelectItem(item)} />
  )

  private renderHeader = () => (
    <DownloadHeader
      used="800MB"
      total="10GB"
      order={I18n.t(this.props.orderType)}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  } as ViewStyle,
  separator: {
    backgroundColor: SOLITUDE_COLOR,
    height: 1,
  },
});

const mapStateToProps: MapStateToPropsParam<IStateProps, IOwnProps, IStore> = (store: IStore, ownProps) => ({
  orderType: 'order_most_recent_reading',
});
const mapDispatchToProps: MapDispatchToPropsParam<IDispProps, IOwnProps> = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DownloadView);
