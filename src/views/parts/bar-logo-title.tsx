import * as React from 'react';
import { StyleSheet, ViewStyle, Text, TextStyle, View } from 'react-native';
import { DARK_GREY_BLUE_COLOR, YELLOW_COLOR } from '../styles/app-style';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  logo: {
    width: 20,
    height: 20,
    backgroundColor: YELLOW_COLOR,
  } as ViewStyle,
  title: {
    color: DARK_GREY_BLUE_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 11,
  } as TextStyle,
});

const BarLogoTitle: React.StatelessComponent<{ children: React.ReactText }> = (props) => (
  <View style={styles.container}>
    <View style={styles.logo} />
    {/* <Image source={0} /> */}
    <Text style={styles.title}>{props.children}</Text>
  </View>
);

export default BarLogoTitle;
