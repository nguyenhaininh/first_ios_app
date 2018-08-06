import * as React from 'react';
import { StyleSheet, View, ViewStyle, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  } as ViewStyle
});

const TBD = (props: { description?: string }) => (
  <View style={styles.container}>
    <Text>T.B.D</Text>
    <Text>{props.description}</Text>
  </View>
);

export default TBD;
