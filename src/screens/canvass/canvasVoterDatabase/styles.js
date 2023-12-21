import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';

const Styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  header: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: moderateScale(50),
  },
  headerText: {
    fontWeight: '700',
    color: theme.colors.red,
  },
  introText: {
    width: '75%',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginVertical: moderateScale(20),
  },
  tab: {
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: moderateScale(5),
    height: moderateScale(60),
  },
  tabTitle: {
    color: theme.colors.red,
    fontWeight: '600',
    fontSize: moderateScale(14),
  },
  desciptionCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  description: {
    fontWeight: '400',
    fontSize: moderateScale(14),
    marginTop: moderateScale(5),
  },
  options: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Styles;
