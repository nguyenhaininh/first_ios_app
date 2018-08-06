/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { StyleSheet, ViewStyle, View, Text, TouchableOpacity } from 'react-native';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-native';
const util = require('util');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  } as ViewStyle
});

const MemberDetail = (props: RouteComponentProps<{ bookId: string }>) => {
  return (
    <View style={styles.container}>
      <Text>T.B.D</Text>
      <Text>bookId is {props.match.params.bookId}</Text>
      <Text>props {util.inspect(props.match)}</Text>
      <Link component={TouchableOpacity} to={'/member/detail/' + (props.match.params.bookId)}>
        <Text>lets next</Text>
      </Link>
    </View>);
};

export default MemberDetail;
