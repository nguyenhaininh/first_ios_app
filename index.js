import React from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import I18n from 'react-native-i18n';
import Main from './build/main'

I18n.fallbacks = true;
I18n.translations = {
  en: require('./build/locales/en.js'),
  ja: require('./build/locales/ja.js')
};

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('tpnativestoreapp', () => Main);
