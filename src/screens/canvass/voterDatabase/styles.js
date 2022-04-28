import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';

const Styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  header: {
    height: moderateScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
    borderBottomWidth: moderateScale(0.5),
    borderColor: theme.colors.border,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontWeight: '700',
    marginLeft: moderateScale(5),
  },
  headerDes: {
    fontWeight: '300',
    fontSize: moderateScale(12),
    marginLeft: moderateScale(5),
  },
  headerRight: {
    flexDirection: 'row',
    width: '23%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterText: {
    color: theme.colors.red,
    fontWeight: '700',
    fontSize: moderateScale(18),
  },
  tabs: {
    borderBottomWidth: 0.5,
    height: moderateScale(90),
    justifyContent: 'center',
    borderRightWidth: moderateScale(10),
    borderRightColor: '#5271FB',
    borderBottomColor: theme.colors.border,
  },
  tabTitle: {
    color: theme.colors.red,
    fontSize: moderateScale(18),
    fontWeight: '600',
    paddingHorizontal: moderateScale(15),
    marginVertical: moderateScale(5),
  },
  tabDescription: {
    fontWeight: '200',
    marginLeft: moderateScale(30),
    fontSize: moderateScale(14),
    marginVertical: moderateScale(2),
  },
});

export default Styles;
