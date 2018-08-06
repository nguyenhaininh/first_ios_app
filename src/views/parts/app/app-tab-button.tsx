import * as React from 'react';
import {
  StyleSheet, View, ViewStyle, ImageRequireSource,
  Image, Text, TextStyle, Platform,
  TouchableWithoutFeedback, TouchableNativeFeedback
} from 'react-native';
import { DUSK_COLOR, BLUE_COLOR } from '../../styles/app-style';
const Touchable = Platform.select<React.ReactType>({
  ios: TouchableWithoutFeedback,
  android: TouchableNativeFeedback,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: 62,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  icon: {
    marginBottom: 2,
  } as ViewStyle,
  labelFocused: {
    fontSize: 9,
    color: BLUE_COLOR,
  } as TextStyle,
  labelUnfocused: {
    fontSize: 9,
    color: DUSK_COLOR,
  } as TextStyle,
});

const AppTabButton = ({ children, sourceOn, sourceOff, onPress, on }: {
  children: React.ReactNode;
  sourceOn: ImageRequireSource;
  sourceOff: ImageRequireSource;
  on: boolean;
  onPress(): void;
}) => (
    <Touchable onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.icon} source={on ? sourceOn : sourceOff} />
        <Text style={on ? styles.labelFocused : styles.labelUnfocused}>{children}</Text>
      </View>
    </Touchable>
  );

export default AppTabButton;
