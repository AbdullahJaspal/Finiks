import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';

const Styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  header: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: moderateScale(50),
  },
  bottom: {
    flexDirection: 'row',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    left: 1,
    right: 1,
  },
  bottomCont: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Styles;
