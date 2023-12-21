import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import * as Progress from 'react-native-progress';
import {moderateScale} from '../constants/moderateScale';
import theme from '../constants/theme';

export const Loading = ({visible}) => (
  <View style={visible ? loader.centering : loader.hideIndicator}>
    <Progress.Bar width={200} indeterminate color={theme.colors.red} />
  </View>
);

const loader = StyleSheet.create({
  centering: {
    flex: 1,
    backgroundColor: '#130000',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.99,
  },
  hideIndicator: {
    top: -100,
    opacity: 0,
    position: 'absolute',
  },
});
