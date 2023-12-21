import React from 'react';
import {StyleSheet, Dimension} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';

const Styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  header: {
    height: moderateScale(50),
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  close: {
    color: theme.colors.red,
  },
  headerTitle: {
    fontSize: moderateScale(14),
  },
  tab: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    
  },
  lowerTab: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    height: moderateScale(40),
    marginTop: moderateScale(5),
  },
});
export default Styles;
