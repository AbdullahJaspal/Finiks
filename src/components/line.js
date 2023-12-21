import React from 'react';
import {View, StyleSheet} from 'react-native';
import {moderateScale} from '../constants/ScalingUnit';
import theme from '../constants/theme';
const Line = ({elevation = 5}) => {
  return (
    <View
      style={{
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
        elevation: elevation === 5 ? moderateScale(5) : 0,
        backgroundColor: 'white',
      }}></View>
  );
};

export default Line;
