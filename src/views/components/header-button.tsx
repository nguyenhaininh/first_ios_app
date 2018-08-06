/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import {
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  StyleSheet,
  ViewStyle,
  View
} from 'react-native';

const Touchable = Platform.select<React.ReactType>({
  ios: TouchableOpacity,
  android: TouchableNativeFeedback,
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 11,
  } as ViewStyle
});

const HeaderButton: React.StatelessComponent<{
  onPress: (...param: any[]) => void;
}> = ({ children, onPress }) => (
  <Touchable onPress={onPress}>
    <View style={styles.container}>
      {children}
    </View>
  </Touchable>
);

export default HeaderButton;
