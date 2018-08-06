/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { StyleSheet, ViewStyle, FlatList, ListRenderItem, View } from 'react-native';
import BookListCell from './book-list-cell';
import books, { BookData } from '../../assets/books';

interface IProps {
}

const styles = StyleSheet.create({
  container: {
    height: 56,
  } as ViewStyle,
  sideSpace: {
    width: 16,
  } as ViewStyle,
  itemSpace: {
    width: 12,
  }
});

const SideSpace = () => <View style={styles.sideSpace} />;
const ItemSpace = () => <View style={styles.itemSpace} />;

class BookListVertical extends React.PureComponent<IProps> {
  public render() {
    return (
      <FlatList
        horizontal
        style={styles.container}
        data={books.new}
        renderItem={this.renderBookItem}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={ItemSpace}
        ListHeaderComponent={SideSpace}
        ListFooterComponent={SideSpace} />
    );
  }

  private renderBookItem: ListRenderItem<BookData> = ({ item: { title, date, image } }) => (
    <BookListCell
      title={title}
      subTitle={date + ' 配信'}
      new={true}
      image={image}
    />
  )

  private keyExtractor = (item: BookData, index: number) => index.toString();

}

export default BookListVertical;
