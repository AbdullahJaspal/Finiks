import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';

const {width, height} = Dimensions.get('screen');

const Styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  headerCont: {
    width: width,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 0.5,
    paddingHorizontal: 20,
    borderBottomColor: theme.colors.authText,
  },
  textCont: {
    width: width / 1.9,
    alignSelf: 'center',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    borderBottomColor: theme.colors.red,
  },
  text: {
    color: theme.colors.red,
    fontWeight: '500',
    fontSize: moderateScale(16),
  },
  tab: {
    width: width,
    borderBottomColor: theme.colors.authText,
    borderBottomWidth: moderateScale(0.5),
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: moderateScale(50),
  },
  iconNameCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'space-between',
  },
  chatImage: {
    height: moderateScale(30),
    width: moderateScale(30),
  },
});
export default Styles;
