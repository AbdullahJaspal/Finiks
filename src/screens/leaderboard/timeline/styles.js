import React from 'react';
import {StyleSheet, Dimension} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';

const Styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  header: {
    width: '90%',
    height: moderateScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerCancel: {
    color: theme.colors.red,
  },
  headerTitle: {
    fontSize: moderateScale(14),
  },
  midCont: {width: '90%', alignSelf: 'center', marginTop: 30},
  select: {
    fontWeight: '600',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(10),
  },
  tab: {
    width: '100%',
    height: moderateScale(65),
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: theme.colors.border,
    marginTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
  },
  tabTitle: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    color: theme.colors.red,
  },
});

export default Styles;
